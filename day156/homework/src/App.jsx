function commandRover(commands) {
    let x = 0, y = 0

    let orders = commands.split(' ')

    orders.map( item => {
        if (item === 'UX') {
            x += 5
        } else if (item === 'DX') {
            x -= 5
        } else if (item === 'UY') {
            y += 5
        } else if (item === 'DY') {
            y -= 5
        } 
    })

    console.log(x, y)
}

commandRover('UX3 DX10 UY DY DY')