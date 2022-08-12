$('.inputName').keyup(function(){
    var a = $(this).val();
    $('.name-card').text(a);
});  

const input = document.querySelectorAll(".inputNumber")[0];
const inputM = document.querySelectorAll(".mm")[0];
const inputY = document.querySelectorAll(".yy")[0];
const inputC = document.querySelectorAll(".cvc-input")[0];
const inputName = document.querySelectorAll("#nameInput")[0];

input.addEventListener('keypress', () => {
    let inputLength = input.value.length
    if(inputLength === 4 || inputLength === 9 || inputLength === 14 || inputLength === 19){
        input.value += " "
    }
})


function getNumber(){
    document.querySelectorAll(".card-number")[0].innerText = input.value;
}


function getM(){
    document.querySelectorAll(".month-card")[0].innerHTML = inputM.value;
}

function getY(){
    document.querySelectorAll(".year-card")[0].innerHTML = inputY.value;
}

function getCVC(){
    document.querySelectorAll(".cvc-i")[0].innerHTML = inputC.value;
}


const btn = document.querySelectorAll(".confirm")[0];

btn.addEventListener("click", function(e){
    e.preventDefault();
    let um = false;
    let dois = false;
    let tres = false;
    let quatro = false;
    let cinco = false




    const novoInput = input.value.replace(/ /g, "");
    
    if(inputName.value == "" || !isNaN(inputName.value)){
        document.querySelector(".inputName").style.borderColor = "red";
        document.querySelector('#name-input').style.display = "block";
        cinco = false;
    }else{
        document.querySelector(".inputName").style.borderColor = "hsl(278, 68%, 11%)";
        document.querySelector('#name-input').style.display = "none";
        cinco = true;
    }

    if(input.value == ""  ||isNaN(novoInput)) {
        document.querySelector(".inputNumber").style.borderColor = "red";
        document.querySelector('#number-error').style.display = "block";
        um = false;
    }else{
        document.querySelector(".inputNumber").style.borderColor = "hsl(278, 68%, 11%)";
        document.querySelector('#number-error').style.display = "none";
        um = true;
    }
    if(inputM.value == "" || isNaN(inputM.value)){
        document.querySelector(".mm").style.borderColor = "red";
        document.querySelector("#mm").style.display = "block";
        dois = false;
    
    }else{
        document.querySelector(".mm").style.borderColor = "hsl(278, 68%, 11%)";
        document.querySelector('#mm').style.display = "none";
        dois = true;
    }
    if(inputY.value == "" || isNaN(inputY.value)){
        document.querySelector(".yy").style.borderColor = "red";  
        document.querySelector("#mm").style.display = "block";
        tres = false;
    }else{
        document.querySelector(".yy").style.borderColor = "hsl(278, 68%, 11%)";  
        document.querySelector("#mm").style.display = "none";
        tres = true;
    }

    if(inputC.value == "" || isNaN(inputC.value)){
        document.querySelector(".cvc-input").style.borderColor = "red";  
        document.querySelector("#cvcLabel").style.display = "block";
        quatro = false;
      
    }else{
        document.querySelector(".cvc-input").style.borderColor = "hsl(278, 68%, 11%)";  
        document.querySelector("#cvcLabel").style.display = "none";
        quatro = true;
    }

    if(um === true && dois == true && tres == true && quatro == true){
        document.querySelector('form').style.display = "none";
        document.querySelector(".complete-status").style.display = "block";
    }

})