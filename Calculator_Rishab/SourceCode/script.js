// Developer's Name : Rishab . H

let docTitle = document.title ;

window.addEventListener("blur", () => {
    document.title = "Thanks For Visiting - Rishab" ;
}) ;

window.addEventListener("focus", () => {
    document.title = docTitle ;
}) ;

let calculate = (entered_value) => {
    document.getElementById("history").value += entered_value ;
}

let result = () => {
    try
    {
        document.getElementById("result").value = eval(document.getElementById("history").value) ;
        document.getElementById("history").value = document.getElementById("result").value ;
    }

    catch(err)
    { 
        /* If the input contains any type of error then catch is used to avoid ubnormal behaviour of the code  */
        alert("Syntax Error : Please Enter a valid input") ;
        location.reload() ;
    }   
}

function insertTwoZeros()
{
    let input = document.getElementById("history").value ;

    input += "00" ;

    document.getElementById("history").value = input ;
}

function oneClear()
{
    document.getElementById("history").value = document.getElementById("history").value.slice(0,-1) ; /* Slices the last element */ 
    document.getElementById("results").value = document.getElementById("history").value ;
}

function allClear()
{
    document.getElementById("history").value = " " ;
    document.getElementById("result").value = " " ;
}