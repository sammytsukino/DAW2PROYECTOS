function waitAndSayHello(callback) {
    setTimeout(() => {
        callback("Hi!")
    }, 2000);
}

module.exports = {waitAndSayHello}