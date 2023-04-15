// DNS: Domain Name System
// DNS stands for Domain Name System, which is a hierarchical naming system that is used to translate domain names into IP addresses.
// DNS is comprised of a distributed database of domain names and IP addresses, which is maintained by DNS servers around the world.

// When a DNS resolver receives a query for a domain name,
// •	it starts by looking up the domain name in its cache to see if it has the IP address already.
// •	If the cache does not have the IP address, the resolver sends a query to a DNS server to get the IP address.
// •	If that DNS server doesn't have the IP address either, it sends the query to another DNS server, and so on,
// •	until the IP address is found or the search fails.

// Methods in Node for DNS:
// •	dns.lookup(hostname, [options], callback)
// •	dns.resolve(hostname, [rrtype], callback)
// •	dns.reverse(ip, callback)
// •	dns.getServers()
// •	dns.setServers(server)

// Lookup: This method resolves a hostname to an IP address. The callback function is called with two arguments: err and address. If the hostname cannot be resolved, the err argument will contain an error message.

import dns from "dns";

// dns.lookup('www.google.com', (err, address, family) => {
//     if(err) console.log(err)
//     else console.log(address +", "+ family)
// })

// dns.lookup('www.google.com', {all: true},  (err, address, family) => {
//     if(err) console.log(err)
//     else console.log(JSON.stringify(address))
// })

// Resolve: This method resolves a hostname and returns the result as an array of IP addresses or other records.

// rrtype: MX, A, SOA, NS

// dns.resolve('google.com', 'SOA', (err, addresses) => {
//   if (err) throw err;
//   console.log(`Addresses: ${JSON.stringify(addresses)}\n`);
// });


// dns.resolve6('www.google.com', (err, address) => {
//     console.log(address)
// })


// dns.reverse('142.250.182.196', (err, hostnames) => {
//   if (err) throw err;
//   console.log(`Hostnames: ${JSON.stringify(hostnames)}`);
// });

// console.log(dns.getServers())