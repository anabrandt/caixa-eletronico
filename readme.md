function entrar() {
  let nome = prompt("Digite seu Nome: ");
  let usuario = parseFloat(prompt("Digite seu CPF: "));
  let senha = parseInt(prompt("Digite a sua senha: "));

  if (senha == 3589) {
    window.location.href = "pag_inicial.html";
    alert(
      "Bem vindo ao PANEM BANK: " + nome + " um prazer imenso ter você aqui."
    );
  } else if (senha != 3589) {
    alert("Senha incorreta, por favor tente novamente.");
  }
}

function oper() {
  window.location.href = "operacoes.html";
}

function operacoes() {
  let escolhaop = parseInt(
    prompt(
      "Escolha a operação desejada (1-Saldo/ 2-Extrato/ 3-Saque/ 4-Transferência/ 5-Deposito/ 6-Sair ): "
    )
  );
  let saldo = 859.5;

  switch (escolhaop) {
    case 1:
      let verificsenha = parseInt(
        prompt("Digite sua senha para ver o saldo: ")
      );
      if (verificsenha != 3589) {
        document.getElementById("mostraresut").innerHTML =
          "Senha incorreta, tente novamente";
      } else if (verificsenha == 3589) {
        document.getElementById("mostraresut").innerHTML =
          "O seu Saldo é: R$" + saldo + "0";
      }
      break;
    case 2:

      let verificsenhas = parseInt(
        prompt("Digite sua senha para ver o extrato: ")
      );
      if (verificsenhas != 3589) {
        document.getElementById("mostraresut").innerHTML =
          "Senha incorreta, tente novamente";
      } else if (verificsenhas == 3589) {
        document.getElementById("mostraresut").innerHTML =
          "Seu extrato: <br> Mercado do Seu Zé: R$12,00 <br> Mercado Dona Joana R$115,00 <br> Casa dos Bolos R$59,95";
      }


      break;
    case 3:
      let verificsenhasa = parseInt(
        prompt("Digite sua senha para fazer saque: ")
      );

      if (verificsenhasa != 3589) {
        document.getElementById("mostraresut").innerHTML =
          "Senha incorreta, tente novamente";
      } else if (verificsenhasa == 3589) {
        let valorsaque = parseFloat(prompt("Digite o valor do saque: "));
        let saldoatual = saldo - valorsaque;

        document.getElementById("mostraresut").innerHTML =
          "Saque de: " + valorsaque + " seu saldo atual é: " + saldoatual + "0";
      }
      break;
    case 4:
      let senhatransf = parseInt(
        prompt("Digite sua senha para fazer transferência: ")
      );

      let negativo = -0;

      if (senhatransf != 3589) {
        document.getElementById("mostraresut").innerHTML =
          "Senha incorreta, tente novamente";
      } else if (senhatransf == 3589) {
        let valortrans = parseFloat(
          prompt("Digite o valor da Transferência: ")
        );
        let conta = parseInt(
          prompt("Digite o numero da conta, apenas numeros: ")
        );
        let novosaldo = saldo - valortrans;

        if (valortrans >= saldo) {
          alert("O valor da transferencia não pode ser maior que o saldo");
        } else if (valortrans <= 0) {
          alert("O valor da transferencia não pode ser negativo");
        } else if (valortrans < saldo) {
          document.getElementById("mostraresut").innerHTML =
            "Seu saldo apos a transferência é igual a: " +
            novosaldo +
            "0" +
            " para a conta: " +
            conta;
        }
      }
      break;
      
    case 5:
      let senhadepo = parseInt(
        prompt("Digite a senha para acessar os depositos: ")
      );

      if (senhadepo != 3589) {
        document.getElementById("mostraresut").innerHTML =
          "Senha incorreta, tente novamente";
      } else if (senhadepo == 3589) {
        let valordep = parseFloat(prompt("Digite o valor do Deposito"));
        let saldoapd = valordep + saldo;

        document.getElementById("mostraresut").innerHTML =
          "Seu saldo após o deposito é igual a: " + saldoapd + "0";
      }
      break;
    case 6:
      alert("Voltando ao Menu, obrigado, foi um prazer em tê-lo aqui");
      window.location.href = "pag_inicial.html";
      break;
    default:
      alert("Nenhuma opção valida, voltando para a pagina de operações");
      window.location.href = "operacoes.html";
  }
}