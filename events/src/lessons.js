document.documentElement.addEventListener('keypress', triggerBall);

function triggerBall(e){
    let key = e.key;

    console.log(key);

    //orange
    if(key == 'O' || key == 'o'){
        document.querySelector('.orange').classList.add('active');
    }else if(key == 'Y' || key == 'y'){
        document.querySelector('.yellow').classList.add('active');
    }else if(key == 'G' || key == 'g'){
        document.querySelector('.green').classList.add('active');
    }else{
        document.querySelector('.msg').innerHTML = 'Press key that matches with the first alphabet of the color of the circles';
    }
}