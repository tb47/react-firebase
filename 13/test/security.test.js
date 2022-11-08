import { readFileSync } from 'fs';
import { assertFails, assertSucceeds, initializeTestEnvironment } from "@firebase/rules-unit-testing";
import { doc, setDoc, collection } from "firebase/firestore";








const testEnv = await initializeTestEnvironment({
  projectId: "react-firebase-app-18f5a",
  firestore: {
    rules: readFileSync("firestore.rules", "utf8"),
    host: "127.0.0.1",
    port: 8080
  }
});

const unauthedDb = testEnv.unauthenticatedContext().firestore();
const userX = testEnv.authenticatedContext("userX").firestore();
const userY = testEnv.authenticatedContext("userY").firestore();
const moderator = testEnv.authenticatedContext("moderator", { "moderator": true }).firestore();
const admin = testEnv.authenticatedContext("admin", { "admin": true }).firestore();

describe("user profiles (public and business)", async () => {

  it("should not let users write the predefined parent public/business directory", async () => {
    await assertFails(setDoc(doc(userX, 'users', 'userX'), { something: "something" }))
  });
  it("should not let users write the predefined parent public/business directory of an other user", async () => {
    await assertFails(setDoc(doc(userY, 'users', 'userX'), { something: "something" }))
  });
  it("should let users write their own public profil", async () => {
    await assertSucceeds(setDoc(doc(collection(doc(userX, 'users', 'userX'),('publicProfilData')), "test"), { something: "something" }))
  });
  it("should not let other users write others public profil", async () => {
    await assertFails(setDoc(doc(collection(doc(userY, 'users', 'userX'),('publicProfilData')), "test"), { something: "something" }))
  });
  it("should not let users write their business profil", async () => {
    await assertFails(setDoc(doc(collection(doc(userX, 'users', 'userX'),('businessProfilData')), "test"), { something: "something" }))
  });
  it("should not let other users write others business profil", async () => {
    await assertFails(setDoc(doc(collection(doc(userY, 'users', 'userX'),('businessProfilData')), "test"), { something: "something" }))
  });

});



/*
Index:
1. user profiles (public and business) --> 27 - 48
*/
