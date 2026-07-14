const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Please fill all fields!");
        return;
    }

    alert(`Welcome ${username}! Login Successful`);

    loginForm.reset();
});
