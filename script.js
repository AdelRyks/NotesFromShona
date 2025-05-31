document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isSohiniLogin = false;
    let adelLogin = false;

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (username === "sushini101" || password === "teehee") {
        isSohiniLogin = true;
        alert("Welcome, Sohini!");
    }

    if(username === "adil0ouu" || password === "silly") {
        adelLogin = true;
        alert("Welcome, Adel!");
    }

    console.log("Logging in with:", { username, password });

    if (isSohiniLogin){
        window.location.href= "notes.html";
    }
    if (adelLogin){
        window.location.href= "dashboard.html";
    }
});
