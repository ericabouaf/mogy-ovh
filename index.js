
var soap = require('soap');

exports.ovh = function (input, config, cb) {

    var wsdl_url = "http://www.ovh.com/soapi/soapi-re-1.63.wsdl";

    soap.createClient(wsdl_url, function(err, client) {

        if(err) {
            return cb(err);
        }

        var args = {
            nic: config.nic,
            password: config.password,
            language: config.language,
            multisession: false
        };

        client.login(args, function (err, results) {

            if(err) {
                return cb(err);
            }

            var a = {
                session: results.return.$value
            };
            var inputArgs = input.args || {};
            for(var k in inputArgs) {
                a[k] = inputArgs[k];
            }

            client[input.method].apply(client, [a, cb]);

        });

    });


};
