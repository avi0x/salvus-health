import React, { Component } from 'react';
import './App.css';

const config = {
  base: "appwcbCWvpZ1xES55",
  table: "BiographicalInformation",
  view: "Main View",
  apiKey: "keyShfmLLFP9GB6ck",
  maxRecords: 2
}

console.log(config);

const request = new Request(`https://api.airtable.com/v0/${config.base}/${config.table}?maxRecords=${config.maxRecords}&view=${config.view}`, {
  method: 'get',
  headers: new Headers({
    'Authorization': `Bearer ${config.apiKey}`
  })
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { records: [] };
    this.fetchAirtable = this.fetchAirtable.bind(this);
  }

  async componentDidMount() {
    document.title = "Take control of your healthcare"
    await this.fetchAirtable()
  }

  async fetchAirtable() {
    var resp = await fetch(request).catch(err => {console.log(err)})
    if(resp.status >= 200 && resp.status < 300) {
      var json = await resp.json()
      const {records} = json;
      this.setState({ records });
    }
  }

  render() {
    var {records} = this.state
    console.log(records);
    return (

      <div className="App">
        <div className="App-header">
          <div className="img-container">
            <img src={ require('./logo.png') } />
        </div>
      </div>

        <div>
        {records && records.length > 0 ? records.map(record =>
          <p>Aristotle vs Plato</p>
          //<p>Hello {JSON.stringify(record['fields']['Patient Name'])}</p>
        ) : <p>Double-check that you have added your API key to .env.</p>}
        </div>
      </div>
    );
  }
}

export default App;
