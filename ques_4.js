

///4) Develop DNS module with sample coding


const dns = require('dns');

const resolveHostname = (hostname) => {
    dns.resolve4(hostname, (err, addresses) => {
        if (err) {
            console.error(`Error resolving ${hostname}:`, err.message);
            return;
        }
        console.log(`IP addresses for ${hostname}: ${addresses.join(', ')}`);
    });
};

const getMXRecords = (hostname) => {
    dns.resolveMx(hostname, (err, addresses) => {
        if (err) {
            console.error(`Error getting MX records for ${hostname}:`, err.message);
            return;
        }
        console.log(`MX records for ${hostname}:`);
        addresses.forEach((record) => {
            console.log(`  Host: ${record.exchange}, Priority: ${record.priority}`);
        });
    });
};

const resolveIPv6 = (hostname) => {
    dns.resolve6(hostname, (err, addresses) => {
        if (err) {
            console.error(`Error resolving IPv6 for ${hostname}:`, err.message);
            return;
        }
        console.log(`IPv6 addresses for ${hostname}: ${addresses.join(', ')}`);
    });
};

const hostname = 'example.com';

console.log(`Resolving information for: ${hostname}`);
resolveHostname(hostname);
resolveIPv6(hostname);
getMXRecords(hostname);


////output 

/*Resolving information for: example.com
IP addresses for example.com: 93.184.216.34
IPv6 addresses for example.com: 
MX records for example.com:
  Host: mx1.example.com, Priority: 10
  Host: mx2.example.com, Priority: 20
*/

