import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyADPyRnw8VYo62aWTdQGCttdD90GCWe-XU",
  authDomain: "re-vents.firebaseapp.com",
  databaseURL: "https://re-vents.firebaseio.com",
  projectId: "re-vents",
  storageBucket: "re-vents.appspot.com",
  messagingSenderId: "194296270184"
}

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const settings = {
  timestampsInSnapshots: true
}

firestore.settings(settings)

export default firebase
