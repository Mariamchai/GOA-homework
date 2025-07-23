function changeButtonStyle() {
    const button = document.getElementById('myButton');
    button.style.color = 'white';          
    button.style.backgroundColor = 'green'; 
    button.style.borderRadius = '12px';     
    button.style.width = '200px';}


window.onload = function() {
    const a = 7;
    const b = 5;
    console.log("ჯამი:", a + b);
    console.log("სხვაობა:", a - b);
    console.log("გამრავლება:", a * b);
    console.log("გაყოფა:", a / b);
}