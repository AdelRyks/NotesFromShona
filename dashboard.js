// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDLD8UlqsPurexJy7CnaxJicOAM-mv21qc",
  authDomain: "sohininotes.firebaseapp.com",
  projectId: "sohininotes",
  storageBucket: "sohininotes.firebasestorage.app",
  messagingSenderId: "612999091018",
  appId: "1:612999091018:web:2398ae19c20b904793e7b3"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Reference to the notes container
const notesContainer = document.getElementById("notesContainer");

// Real-time listener for new notes
db.collection("privateNotes")
  .doc("sohini-notes")
  .collection("notes")
  .orderBy("timestamp", "desc")
  .onSnapshot((snapshot) => {
    notesContainer.innerHTML = ""; // Clear current list
    snapshot.forEach((doc) => {
      const note = doc.data();
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";
      noteDiv.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <small>${new Date(note.timestamp).toLocaleString()}</small>
        <hr />
      `;
      notesContainer.appendChild(noteDiv);
    });
  });
