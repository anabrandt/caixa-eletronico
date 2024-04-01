var nome = prompt("Qual é o seu nome");
    alert("Olá "+ nome + ", é um prazer ter você por aqui!")
var elementoNome = document.getElementById("nome");
elementoNome.textContent = "Olá, " + nome;

if (senha == 3589) {
    window.location.href = "inicial.html";
} else if (senha != 3589) {
    alert("Senha incorreta, por favor tente novamente.");
}

function deposito() {
    let saldo = 500;

    let senhauser = parseFloat(prompt("Digite a senha para realizar o depósito"));
    if (senhauser != 3589) {
        alert("Senha incorreta, tente novamente");
    } else if (senhauser == 3589) {
        let deposit = parseFloat(prompt("Digite o valor do depósito"));
            saldo += deposit;
            alert("Depósito realizado com sucesso!");
            document.getElementById("result").innerHTML =
                "Seu saldo atual é: R$" + saldo.toFixed(2);
        }
    
}

function extrato() {
    let senhauser = parseFloat(prompt("Digite a senha para ver seu extrato atual"));
    if (senhauser != 3589) {
        alert("Senha incorreta, tente novamente");
    } else if (senhauser == 3589) {
        document.getElementById("result").innerHTML =
            "Seu extrato: <br> Apple.Com/Bill: R$14,90 <br> Produtos Globo R$27,90 <br> 99app *99app R$13,26";
    }
}

function saque(){
    let saldo = 500;

    let senhauser = parseFloat(prompt("Digite a senha para realizar o saque"));
    if (senhauser !== 3589) {
        alert("Senha incorreta, tente novamente");
    } else {
        let sacar = parseFloat(prompt("Digite o valor do saque"));
        if (sacar > saldo) {
            alert("O valor inserido é superior ao valor disponível em sua conta, tente novamente.");
        } else{
            saldo -= sacar;
            alert("Saque realizado com sucesso!");
            document.getElementById("result").innerHTML =
            "Seu saldo atual é: R$" + saldo.toFixed(2);
        }
    }
}

function transferencia(){
    let saldo = 500;

    let senhauser = parseFloat(prompt("Digite a senha para realizar a tranferência"));
    if (senhauser !== 3589) {
        alert("Senha incorreta, tente novamente");
    } else {
        let account = parseInt(prompt("Digite a chave PIX para realização da transferência"));
        alert("Chave inserida com sucesso!");

        let transfer = parseInt(prompt("Quanto você quer transferir?"));
        if (transfer > saldo) {
            alert("Operação não autorizada");
        } else{
            saldo -= transfer;
            alert("Transferência realizada com sucesso!");
            document.getElementById("result").innerHTML =
            "Seu saldo atual é: R$" + saldo.toFixed(2);
        }
    }
}

