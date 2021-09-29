<script>


function somar(){
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x + y
  resposta.innerHTML = `A soma de ${x} + e ${y} é: <h2 id=a2> ${s} </h2>`;
}

function subtrair(){
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x - y
  resposta.innerHTML = `A subtração de ${x} - e ${y} é: <h2> ${s} </h2>`;

}
function multiplicar(){
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x * y
  resposta.innerHTML = `A multiplicacao de ${x} x e ${y} é: <h2> ${s} </h2>`;

}
function dividir(){
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x / y
  resposta.innerHTML = `A dividisao de ${x} / e ${y} é: <h2> ${s} </h2>`;

}
function resto(){
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x % y
  resposta.innerHTML = `A resto de ${x} e ${y} é: <h2> ${s} </h2>`;

}



</script>