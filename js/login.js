function login() {
    let senhauser = document.getElementById("InputPassword").value;
    if (senhauser !== "3589") {
        alert("Senha incorreta, tente novamente");

    } else {
        window.location.href = "/minhaconta.html"; 
    }
}
