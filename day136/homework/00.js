fetch("https://fakestoreapi.com/")
.then(response => response.json())
.then(data => console.log(data.price, data.name))