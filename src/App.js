import React from 'react';
import './App.css';
import Amplify, { Analytics, Storage, API } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);


class App extends React.Component {
  createBooking = async () => {
    console.log('calling api');
    const response = await API.post('bookingApi', '/booking/create', {
      body: {
        id: '1',
        status: 'done',
        from: '1h',
        to: '2h',
        userId: '5'
      }
    });
    alert(JSON.stringify(response, null, 2));
  }
  updateBooking = async () => {
    console.log('calling api');
    const response = await API.put('bookingApi', '/booking/update', {
      body: {
        id: '1',
        status: 'holding',
      }
    });
    alert(JSON.stringify(response, null, 2));
  }
  getBooking = async () => {
    console.log('calling api');
    const response = await API.get('bookingApi', '/booking/get/2');
    alert(JSON.stringify(response, null, 2));
  }
  listBooking = async () => {
    console.log('calling api');
    const response = await API.get('bookingApi', '/booking');
    alert(JSON.stringify(response, null, 2));
  }
  createParkingMap = async () => {
    console.log('calling api');
    const response = await API.post('parkingMapApi', '/parking-map/create', {
      body: {
        id: '1',
        carParkId: '2',
        parkingPlaceId: '12',
        map: 'map url'
      }
    });
    alert(JSON.stringify(response, null, 2));
  }
  updateParkingMap = async () => {
    console.log('calling api');
    const response = await API.put('parkingMapApi', '/parking-map/update', {
      body: {
        id: '1',
        map: 'new map url'
      }
    });
    alert(JSON.stringify(response, null, 2));
  }
  getParkingMap = async () => {
    console.log('calling api');
    const response = await API.get('parkingMapApi', '/parking-map/get/2');
    alert(JSON.stringify(response, null, 2));
  }
  listParkingMap = async () => {
    console.log('calling api');
    const response = await API.get('parkingMapApi', '/parking-map');
    alert(JSON.stringify(response, null, 2));
  }
  createParkingPlace = async () => {
    console.log('calling api');
    const response = await API.post('parkingPlaceApi', '/parking-place/create', {
      body: {
        id: '1',
        deviceId: '123ABCD2',
        carParkId: '12',
        floor: '1', 
        plot: '23E', 
        status: 'Unavailable'
      }
    });
    alert(JSON.stringify(response, null, 2));
  }
  updateParkingPlace = async () => {
    console.log('calling api');
    const response = await API.put('parkingPlaceApi', '/parking-place/update', {
      body: {
        id: '1',
        floor: '2',
        plot: '12D',
        status: 'Available'
      }
    });
    alert(JSON.stringify(response, null, 2));
  }
  getParkingPlace = async () => {
    console.log('calling api');
    const response = await API.get('parkingPlaceApi', '/parking-place/get/1');
    alert(JSON.stringify(response, null, 2));
  }
  listParkingPlace = async () => {
    console.log('calling api');
    const response = await API.get('parkingPlaceApi', '/parking-place');
    alert(JSON.stringify(response, null, 2));
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.createBooking}>Create Booking</button>
        <button onClick={this.updateBooking}>Update booking</button>
        <button onClick={this.getBooking}>Get 1 booking</button>
        <button onClick={this.listBooking}>List booking</button>
        <button onClick={this.createParkingMap}>Create parking map</button>
        <button onClick={this.updateParkingMap}>Update parking map</button>
        <button onClick={this.getParkingMap}>Get 1 parking map</button>
        <button onClick={this.listParkingMap}>List parking map</button>
        <button onClick={this.createParkingPlace}>Create Parking Place</button>
        <button onClick={this.updateParkingPlace}>Update parking place</button>
        <button onClick={this.getParkingPlace}>Get 1 parking place</button>
        <button onClick={this.listParkingPlace}>List parking place</button>
      </div>
    );
  }
}

// export default App;
export default withAuthenticator(App, true);