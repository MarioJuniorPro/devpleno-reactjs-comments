import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfj_1pB_SrvQFzQfIoC6UfnrlDH1HIF2o",
    authDomain: "multitest-api.firebaseapp.com",
    databaseURL: "https://multitest-api.firebaseio.com",
    projectId: "multitest-api",
    storageBucket: "multitest-api.appspot.com",
    messagingSenderId: "616937796039"
  })
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base