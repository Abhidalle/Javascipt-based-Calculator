const display  = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{

    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}



// Now moving from the basic calculator to a little better one where you can type numbers from the laptop as well

document.addEventListener("keydown", function(event){
    const key = event.key;

    const allowedKeys = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/", "."];
     
    //Now to see if the user did actually put a allowed number
    if(allowedKeys.includes(key)){
        appendToDisplay(key);
    }

    else if(key === "Enter" || key === "="){
        calculate();
    }
    else if(key === "Escape" || key === "c" || key === "C"){
        clearDisplay();
    }
    else if(key === "Backspace"){
        display.value = display.value.slice(0,-1)
    }
});

//Now after this is done we should be able to use our own keyboard to type the numbers in the screen as well

