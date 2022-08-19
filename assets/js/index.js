
const FIBO = document.querySelector('.fibonacci');
const VETOR = document.querySelector('.vetor');
const btnNav = document.querySelectorAll('.btnNav');

btnNav.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        let id = item.getAttribute('id');

        if(id === 'vetor') {
            FIBO.style.display = 'none';
            VETOR.style.display = 'block';
        }else if(id === 'fibonacci') {
            FIBO.style.display = 'block';
            VETOR.style.display = 'none';
        }

    });
});


const obj = {

    'fibonacci': () => {

        const input = document.getElementById('qnt-fibo');
        const list = document.querySelector('.fibonacci--list');

        input.addEventListener('keyup', () => {
           
            let val = input.value;
            val = parseInt(val);
    
            list.innerHTML = "";
    
            if(val > 20){
                input.value = 20;
                val = 20;
                alert('Pera ai pow, só deixo até vinte para não ficar em loop kkkk');
            }
            const fibonacci = [0,1];     
           
            for(let i=0; i <= val; i++) {
                if(i != 0) {
                   let soma = fibonacci[i - 1] + fibonacci[i];
                   fibonacci.push(soma);
                }          
            }
          
            for(let i=0; i < fibonacci.length; i++) {
                list.innerHTML+=`
                    <li>${fibonacci[i]}</li>
                `;
            }
    
        });
    },

    'vetor': () => {
        
        let gerar = document.getElementById('random-gerar');
        let ordenar = document.getElementById('ordenar-num');
        let boxNum = document.querySelector('.numeros');
        var numeros = [];

        gerar.addEventListener('click', (e) => {
            e.preventDefault();
            boxNum.innerHTML="";
            numeros = [];

            gerar.style.display = 'none';
            ordenar.style.display = 'none';

            let tempo = 1;
            let random = 6;
            
            for(let i=0; i < random; i++) {
                let num = Math.floor(Math.random() * 20);              
                numeros.push(num);
            }

            for(let i=0; i < numeros.length; i++) {

                let span = document.createElement("span");
                span.classList.add('ative');

                setTimeout(()=> {
                    span.innerText = numeros[i];
                    boxNum.append(span);

                }, 500 * tempo);
                tempo++;     
               
            }

            setTimeout(()=> {
                gerar.style.display = 'inline';
                ordenar.style.display = 'inline';
            }, 600 * tempo);
            
            console.log(numeros);

        });

        ordenar.addEventListener('click', (e) => {
            e.preventDefault();
            gerar.style.display = 'none';
            ordenar.style.display = 'none';
            
            let tempo = 1;
            // 10 2 3 4
            // 2 3 4 10
            for(let i=0; i < numeros.length;  i++){
                
                for(let a=0; a < numeros.length; a++){
                    
                    if(numeros[a] > numeros[i]) {
                        let numVal = numeros[i];
                        
                        numeros[i] = numeros[a];
                        numeros[a] = numVal;
                       
                    }
                }

            }

            boxNum.innerHTML="";

            for(let i=0; i < numeros.length; i++){
                let span = document.createElement("span");
                span.classList.add('ative');

                setTimeout(()=> {
                    span.innerText = numeros[i];
                    boxNum.append(span);

                }, 500 * tempo);
                tempo++;   
            }

            setTimeout(()=> {
                gerar.style.display = 'inline';
                ordenar.style.display = 'inline';
            }, 600 * tempo);

        });
    }
}

obj.fibonacci();
obj.vetor();
