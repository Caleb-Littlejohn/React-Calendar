import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAlrB7ALovMC3WaHvHTzLmFqtI4akIkw5c",
  authDomain: "react-calendar-81851.firebaseapp.com",
  databaseURL: "https://react-calendar-81851.firebaseio.com",
  projectId: "react-calendar-81851",
  storageBucket: "",
  messagingSenderId: "786485652779",
  appId: "1:786485652779:web:a158d3cec4df0103"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;