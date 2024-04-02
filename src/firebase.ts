import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDq0JYwMZSYl4C-U64IH5R2TXMNE72EAtg",
  authDomain: "botanic-basket.firebaseapp.com",
  projectId: "botanic-basket",
  storageBucket: "botanic-basket.appspot.com",
  messagingSenderId: "695239782056",
  appId: "1:695239782056:web:fbb212dd5027898cfedc9d",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const getImage = async (location: string) => {
  return await getDownloadURL(ref(storage, location));
};
