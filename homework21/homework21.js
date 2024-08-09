function makeToys(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Undefected')
            } else {
                resolve('Defected')
            }
        }, time)
    })
}
function sellToys(status, dro) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (status === 'Undefected') {
                if (Math.random() > 0.1) {
                    resolve('Sold')
                } else {
                    resolve('Failed')
                }
            } else {
                resolve('Cannot sell defected toys')
            }
        }, dro)
    })
}
function deliverToys(delivery, droo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (delivery === 'Sold') {
                if (Math.random() > 0.1) {
                    resolve('Delivered')
                } else {
                    resolve('Not delivered, because it failed')
                }
            } else {
                resolve('Cannot deliver non-sold toys')
            }
        }, droo)
    })
}
async function v2() {
    try {
        const status = await makeToys(3000)
        console.log(`Toy Is: ${status}`)
        const result = await sellToys(status, 1000)
        console.log(`Toy Is: ${result}`)
        const delivery = await deliverToys(result, 2000)
        console.log(`Toy Is: ${delivery}`)
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}
v2()