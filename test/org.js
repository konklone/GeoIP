var geoip = require('../index.js');

var org_data = geoip.open('/tmp/GeoIPOrg.dat');

var Org = geoip.Org;

setTimeout(function() {
  var result = Org.org_by_addr(org_data, '8.8.8.8');
  console.log('The result of synchronous method');
  console.log('Org.org_by_addr(org_data, \'8.8.8.8\')');
  result.forEach(function(str) {
    console.log(str);
  });
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
}, 1000);

setTimeout(function() {
  console.log('The result of asynchronous method');
  console.log('Org.org_by_domain(org_data, \'www.sina.com\', callback())');
  Org.org_by_domain(org_data, 'www.sina.com', function(err, org) {
    if (err) {throw err;}
    console.log(org);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  });
}, 2000);

var asn_data = geoip.open('/tmp/GeoIPASNum.dat');

setTimeout(function() {
  var result = Org.asn_by_addr(asn_data, '8.8.8.8');
  console.log('The result of synchronous method');
  console.log('Org.asn_by_addr(asn_data, \'8.8.8.8\')');
  console.log(result);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
}, 4000);

setTimeout(function() {
  console.log('The result of asynchronous method');
  console.log('Org.asn_by_domain(data, \'www.sina.com\', callback())');
  Org.asn_by_domain(asn_data, 'www.sina.com', function(err, asn) {
    if (err) {throw err;}
    asn.forEach(function(a) {
      var keys = Object.keys(a);
      console.log(a[keys[0]] + ' : ' + a[keys[1]]);
    });
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  });
}, 5000);
