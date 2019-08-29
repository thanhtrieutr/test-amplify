import React from 'react';
import './App.css';
import Amplify, { Analytics, Storage, API } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);


class App extends React.Component {
  post = async () => {
    console.log('calling api');
    const response = await API.post('testApi', '/items', {
      body: {
        id: '3',
        name: 'Thanh Trieu Tran hello amplify!',
        helloId: 'alo alo'
      }
    });
    alert(JSON.stringify(response, null, 2));
  }
  get = async () => {
    console.log('calling api');
    const response = await API.get('testApi', '/items/object/3');
    alert(JSON.stringify(response, null, 2));
  }
  list = async () => {
    console.log('calling api');
    const response = await API.get('testApi', '/items');
    alert(JSON.stringify(response, null, 2));
  }
  render() {
    return (
      <div className="App">
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />
        <button onClick={this.post}>POST</button>
        <button onClick={this.get}>GET</button>
        <button onClick={this.list}>LIST</button>
        
      </div>
    );
  }
}

// export default App;
export default withAuthenticator(App, true);