const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();

exports.createUserProfil = functions.auth.user().onCreate((user) => {
  admin.firestore().collection('users').doc(user.uid).set({
    email: user.email,
    dateOfRegistration: new Date().toISOString().split('T')[0],
    publicProfilData: {},
    businessProfilData: {
      premium: false
    }
  })
});
