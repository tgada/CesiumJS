let colorInput = document.querySelector('#Pickcolor');
let hexInput = document.querySelector('#hexInput');

colorInput.addEventListener('input',() =>{
            let color = colorInput.value;
            hexInput.value = color;
            document.getElementById('P1').style.color = color;
        });
