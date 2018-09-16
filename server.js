const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const selectRecords = require('./selectRecords')
const airtable = require('airtable');


test = 'test';


// API calls
app.get('/api/goodbye', (req, res) => {
  res.send({ Name: test });
});

app.get('/api/test', (req, res) => {
  res.send({ Name: test });
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
