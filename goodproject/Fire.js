import firebase from 'firebase'
import "@firebase/firestore"

const firebaseConfig ={
  apiKey: "AIzaSyDhRLQ7ot09RFlf4DpnH5AG6cadFQ3eLWY",
  authDomain: "todoapp-cc.firebaseapp.com",
  projectId: "todoapp-cc",
  storageBucket: "todoapp-cc.appspot.com",
  messagingSenderId: "904405868571",
  appId: "1:904405868571:web:d5ec01e3b1b8d160e118be",
  measurementId: "G-CPRSRH727V"
}


class Fire{
    constructor(callback){
        this.init(callback)
    }

  init(callback) {
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
    }

    firebase.auth().onAuthStateChanged(user=> {
      if (user){
        callback(null, user)
      }
      else{
        firebase.auth().signInAnonymously().catch(error=>{callback(error);
        });
      }
    })
  }
  getLists(callback){
    let ref = firebase.firestore().collection("users").doc(this.userId).collection("lists");

    this.unsubscribe = ref.onSnapshot(snapshot =>{
        lists = []

        snapshot.forEach(doc =>{
            lists.push({id:doc.id, ...doc.data()})
        })
        callback(lists)
    })
  }
  get userId(){
    return firebase.auth().currentUser.uid
  }     

  detach(){
    this.unsubscribe();

  }

}


export default Fire;