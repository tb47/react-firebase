import { readFileSync } from 'fs';
import { assertFails, assertSucceeds, initializeTestEnvironment } from "@firebase/rules-unit-testing";
import { doc, getDoc, setDoc } from "firebase/firestore";

let testEnv;
let unauthedDb;

before(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: "demo-project-1234",
    firestore: {
      rules: readFileSync("firestore.rules", "utf8"),
      host: "127.0.0.1",
      port: "8080"
    },
  });
  unauthedDb = testEnv.unauthenticatedContext().firestore();
});

after(async () => {
  await testEnv.cleanup();
});

beforeEach(async () => {
  testEnv.clearDatabase();
});

describe("general database behaviour", () => {
  it("should let read anyone the database", async () => {
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), 'data/foobar'), { foo: 'bar' });
    }); 
    await assertSucceeds(getDoc(doc(unauthedDb, 'data/foobar')))
  })
  it("should not allow writing the database", async () => {
    await assertFails(setDoc(doc(unauthedDb, '/data/foobar'), { something: "something" }))
  })
})