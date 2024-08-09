function makeToys(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Undefected')
            } else {
                reject('Defected')
            }
        }, time)
    })
}

function sellToys(status, dro) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if (status === 'Undefected') {
            if (Math.random() > 0.1) {
                resolve('Sold')
            } else {
                reject('Failed')
            }
        } else {
            reject('Cannot sell defected toys')
        }
       }, dro)
    })
}

function deliverToys(delivery, droo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delivery === 'Sold') {
                if (Math.random() > 0.1) {
                    resolve('Delivered')
                } else {
                    reject('Not delivered, because it failed')
                }
            } else {
                reject('Cannot deliver non-sold toys')
            }
        }, droo)
    })
}

makeToys(3000)
    .then(status => {
        console.log(`Toy is: ${status}`)
        return sellToys(status, 1000)
    })
    .then(res => {
        console.log(`Toy is: ${res}`)
        return deliverToys(res, 2000)
    })
    .then(mita => {
        console.log(`Toy is : ${mita}`)
    })
    .catch(err => {
        console.error(`Error: ${err}`)
    })
