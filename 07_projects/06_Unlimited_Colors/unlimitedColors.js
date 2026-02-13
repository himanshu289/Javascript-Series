// generate a random color

const randomColor = function() {
        const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++){
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log (randomColor());

// 

const body = document.querySelector('body')


let settedInterval;

document.querySelector('#start').addEventListener('click',function(){

    clearInterval(settedInterval);
    settedInterval = setInterval(() =>{
        const GeneratedColor = randomColor();
        body.style.backgroundColor = GeneratedColor;
        // document.querySelector('#count').innerHTML = `Count : ${count}`
    },1000)
    
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(settedInterval);
})