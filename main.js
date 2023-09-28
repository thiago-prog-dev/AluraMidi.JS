document.querySelector('.tecla_pom').onclick = tocarSomPom();

function tocarSomPom (){
    document.querySelectorAll('#som_tecla_pom').play('');
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

ListaDeTeclas[0].onclick = tocarSomPom;

ListaDeTeclas[1].onclik = tocarSomClap;
ListaDeTeclas[2].onclik = tocarSomTim;
ListaDeTeclas[3].onclik = tocarSomPuff;