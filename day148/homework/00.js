let btn = document.getElementById('btn')
let p = document.getElementById('paragraph')

btn.addEventListener('click', function () {
    let loan = document.getElementById('inp1').value
    let percent = document.getElementById('inp2').value
    let month = document.getElementById('inp3').value

    if (percent > 0) {
        let finalPayment = Number(loan) + ((loan * percent) / 100)

        let monthlyPayment = Math.ceil(finalPayment / Number(month))

        p.textContent = monthlyPayment
    } else {
        alert("percentage can't be negative")
    }
    


})