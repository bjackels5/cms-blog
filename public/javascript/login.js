async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        // check the response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/'); 
        } else {
            alert(response.statusText);
        }
    }
}

async function loginFormHandler(event) {
    console.log('======================================================================================');
    console.log('loginFormHandler');

    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        // check the response status
        if (response.ok) {
            document.location.replace('/'); 
        } else {
            alert(response.statusText);
        }
    }
}

// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

console.log("login.js");
