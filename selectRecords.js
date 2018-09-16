const airtable = require('airtable');
var base = new airtable({apiKey: 'keyShfmLLFP9GB6ck'}).base('appwcbCWvpZ1xES55');
function selectRecords() {
  console.log('adfsadf');
  return new Promise(function(resolve, reject) {
    var test = base('BiographicalInformation').find('recyRNmUV7EqwLsKH',
          function(err, record) {
            if (err) { console.error(err); return; reject(err);}
            (record['fields']['Patient Name']);
          });
  });


  console.log(test);
}

selectRecords();

module.exports = selectRecords;
