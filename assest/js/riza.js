const musik = document.querySelector('#kotak-musik');
   musik.style.display = 'block';

   const lagu = document.querySelector('#lagu');
   lagu.play();

function putarLagu() {
    const lagu =document.querySelector('#lagu');
    const tombol = document.querySelector('#kontrol');

    if(lagu.paused){
        lagu.play();
        tombol.src='assets/img/play.png';
    }else{
        lagu.pause(); 
        tombol.src='assets/img/mute.png';
    }
}