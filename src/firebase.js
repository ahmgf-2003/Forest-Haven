import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    documentId,
} from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDRIGRiBWl9uf1b7uX7UGxVBPjfl3nza2c",
    authDomain: "forset-haven.firebaseapp.com",
    projectId: "forset-haven",
    storageBucket: "forset-haven.firebasestorage.app",
    messagingSenderId: "282626113933",
    appId: "1:282626113933:web:44e1dc6a2fcd4180f53dc4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const lodgesCollectionRef = collection(db, "lodges");
const usersCollectionRef = collection(db, "users");

export async function getUser(user) {
    const q = query(
        usersCollectionRef, 
        where("email", "==", user.email),
        where("password", "==", user.password)
    );

    const snapshot =  await getDocs(q);
    const users = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }))


    return users[0];
}

export async function getLodges() {
    const snapshot = await getDocs(lodgesCollectionRef);
    const lodges = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));

    return lodges;
}

export async function getLodge(id) {
    const lodgeDocRef = doc(db, "lodges", id);
    const snapshot = await getDoc(lodgeDocRef);

    return {
        ...snapshot.data(),
        id: snapshot.id,
    };
}

export async function getHostLodges() {
    const q = query(lodgesCollectionRef, where("hostId", "==", 123));
    const snapshot = await getDocs(q);
    const hostLodges = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));

    return hostLodges;
}

export async function getHostLodge(id) {
    const q = query(
        lodgesCollectionRef,
        where(documentId(), "==", id),
        where("hostId", "==", 123)
    );
    const snapshot = await getDocs(q);

    const lodges = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));

    return lodges[0];
}
