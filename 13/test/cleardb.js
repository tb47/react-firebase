import { readFileSync } from 'fs';
import { initializeTestEnvironment } from "@firebase/rules-unit-testing";

const testEnv = await initializeTestEnvironment({
    projectId: "react-firebase-app-18f5a",
    firestore: {
        rules: readFileSync("firestore.rules", "utf8"),
        host: "127.0.0.1",
        port: 8080
    }
});

testEnv.clearFirestore();
testEnv.cleanup();