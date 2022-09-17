const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();

exports.createUserProfil = functions.auth.user().onCreate((user) => {
  functions.logger.log(user);
  // problem: what will the "user" object return? 
  // user.email? user.uid?
  // deployment to test it needs 2 min !!!
});
