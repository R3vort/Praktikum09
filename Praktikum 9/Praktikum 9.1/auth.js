function login() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if (username.value === 'pang21066' && password.value === 'nice') {
        window.location.href = 'login-sukses.html';   
    }
    else {
        document.write('Password atau Username yang anda gunakan salah!')
    }
}