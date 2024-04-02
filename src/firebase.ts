import { initializeApp } from "firebase/app";
import { ref, getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDING_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const getImage = async (location: string) => {
  return await getDownloadURL(ref(storage, location));
};

export const uploadImage = (image: File, location: string) => {
  const imageRef = ref(storage, location);
  uploadBytes(imageRef, image).then(() =>
    toast.success("Изображение добавлено!", {
      position: "top-center",
      autoClose: 2000,
    }),
  );
};
