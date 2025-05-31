const firebaseConfig = {

    apiKey: "AIzaSyDLD8UlqsPurexJy7CnaxJicOAM-mv21qc",

    authDomain: "sohininotes.firebaseapp.com",

    projectId: "sohininotes",

    storageBucket: "sohininotes.firebasestorage.app",

    messagingSenderId: "612999091018",

    appId: "1:612999091018:web:2398ae19c20b904793e7b3"

  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("noteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const noteTitle = document.querySelector("#title").value;
    const noteContent = document.querySelector("#note").value;

    if (noteTitle && noteContent) {
        const note = {
            title: noteTitle,
            content: noteContent,
            timestamp: new Date().toISOString()
        };

        const yourUid = "sohini-notes";

        db.collection("privateNotes")
          .doc(yourUid)
          .collection("notes")
          .add(note)
          .then(() => {
              alert("Note sent to your private notes!");
              document.querySelector("#noteForm").reset();
          })
          .catch((error) => {
              alert("Error saving note: " + error.message);
          });
    } else {
        alert("Please fill in both fields.");
    }
});
