import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";

export const auth = getAuth();

if (window.location.hostname.includes("localhost")) {
    connectAuthEmulator(auth, "http://localhost:9099");
};

export async function login(email, password, mode) {
    if (mode === 0) {
        signInWithEmailAndPassword(auth, email, password).then(()=> console.log('logged in')).catch(e => {
            console.log(e);
        });
    } else {
        createUserWithEmailAndPassword(auth, email, password).then(()=> console.log('registered')).catch(e => {
            console.log(e);
        });
    };
};

export async function logout() {
    auth.signOut().then(() => console.log('logged out')).catch(e => {
        console.log(e);
    });
};