import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { app } from "./init";

export const db = getFirestore(app);

if (window.location.hostname.includes("localhost")) {
    connectFirestoreEmulator(db, "localhost", 8080);
};
