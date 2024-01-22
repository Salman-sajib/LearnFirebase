import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDDTTrX4x1StMGZhhGxZKgvEx64KXaBQIw',
  authDomain: 'learn-firebase-49efd.firebaseapp.com',
  projectId: 'learn-firebase-49efd',
  storageBucket: 'learn-firebase-49efd.appspot.com',
  messagingSenderId: '55466744579',
  appId: '1:55466744579:web:7d914d1f4cb4938120e736',
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'books');

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((err) => {
    console.log(err.message);
  });
