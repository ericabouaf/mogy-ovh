# mogy-ovh

OVH SOAP API Activity for [mogy](https://github.com/neyric/mogy).

## Installation

In your mogy project, install the dependency using npm :

    $ npm install mogy-ovh --save

To register the `ovh` activity to Amazon Simple Workflow :

    $ mogy register

## Config

In your mogy environment config file, under the `activities` key, add :

````json
"ovh": {
    "nic": "xxxx-ovh",
    "password": "*****",
    "language": "fr"
}
````


## Sample Decider Usage


````javascript
activity({
    name: 'my-task',
    activity: 'ovh',
    input:  {
        method: 'domainInfo',
        args: {
            domain: 'mydomain.com'
        }
    }
})
````

For a full description of all available methods, see <http://www.ovh.com/soapi/en/>
