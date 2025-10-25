fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        const product = products[0]; 
        productBox.innerHTML = 
          <div id="productBox">
            <h1>${product.title}</h1>
            <img src="${product.image}" width="200"></img> 
            <p>price: ${product.price}$</p>
            <p>${product.description}</p>
          </div>
        })