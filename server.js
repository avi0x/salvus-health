const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const airtable = require('airtable');
var base = new airtable({apiKey: 'keyShfmLLFP9GB6ck'}).base('appwcbCWvpZ1xES55');

var test = '';

base('BiographicalInformation').find('recyRNmUV7EqwLsKH', function(err, record) {
    if (err) { console.error(err); return; }
    test = record['fields']['Patient Name'];
});

// API calls
app.get('/api/goodbye', (req, res) => {
  res.send({ express: test });
});
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
