const input = document.getElementById("input")
const button = document.getElementById("convert")
const p = document.getElementById("farenheit")

function converter(celcius){

    p.textContent= (celcius * 9/5) + 32. 

}

function handleClick(){
    const inputValue = input.value
    converter(inputValue)
}