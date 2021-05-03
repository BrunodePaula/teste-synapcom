var valorSaque;
var Nota100Count = 0;
var Nota50Count = 0;
var Nota20Count = 0; 
var Nota10Count = 0; 
var Nota5Count = 0;
var Nota2Count = 0;
var Nota1Count = 0; 

valorSaque = prompt("Digite o valor que deseja sacar: "); 
resto = parseInt(valorSaque); 

if (resto < 1) { 
    alert("Valor inválido"); 
} else { 
    while (resto >= 100) { 
        resto = resto - 100; Nota100Count++; 
    } while (resto >= 50) { 
        resto = resto - 50; Nota50Count++; 
    } while (resto >= 20) { 
        resto = resto - 20; Nota20Count++; 
    } while (resto >= 10) { 
        resto = resto - 10; Nota10Count++; 
    }
    document.write("Valor do saque: " + valorSaque);
    document.write("<br /><br />Notas de R$100 sacadas: " + Nota100Count);
    document.write("<br /><br />Notas de R$50 sacadas: " + Nota50Count); 
    document.write("<br /><br />Notas de R$20 sacadas: " + Nota20Count);
    document.write("<br /><br />Notas de R$10 sacadas: " + Nota10Count); 
    document.write("<br /><br />Total de notas: " + (Nota100Count + Nota50Count + Nota20Count + Nota10Count)) 
}

if(resto > 0) {
    document.write("<br /><br />Sobrou R$ "+ resto.toFixed(2)+", o valor será devolvido para a sua conta")
}