function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('password').value;

    if (login == "admin123" && senha == "admin123") {
        location.href = "home.html";
    } else {
        alert('Usuario ou Senha incorretos!!!');
    }
}