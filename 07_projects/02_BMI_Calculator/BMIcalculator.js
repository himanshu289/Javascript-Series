const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('.results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please Give a valid Height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give a valid Weight ${weight}`;
    }else{
        const bmi = ((weight) / ((height*height)/10000)).toFixed(2);
        // Show the Result
        results.innerHTML = `<span>${bmi}</span>`;
        
        const underWeight = document.querySelector('#under');
        const normalWeight = document.querySelector('#normal');
        const overWeight = document.querySelector('#over');

        if(bmi < 18.6){
            underWeight.classList.add('box');
            normalWeight.classList.remove('box');
            overWeight.classList.remove('box');
            
            underWeight.style.color = 'blue';
            normalWeight.style.color = 'black';
            overWeight.style.color = 'black';
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            normalWeight.classList.add('box');
            underWeight.classList.remove('box');
            overWeight.classList.remove('box');
            
            normalWeight.style.color = 'green';
            underWeight.style.color = 'black';
            overWeight.style.color = 'black';
        }
        else if(bmi >= 24.9){
            overWeight.classList.add('box');
            normalWeight.classList.remove('box');
            underWeight.classList.remove('box');

            overWeight.style.color = 'red';
            normalWeight.style.color = 'black';
            underWeight.style.color = 'black';
        }
    }
});