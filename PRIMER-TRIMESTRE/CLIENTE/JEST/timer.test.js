const {waitAndSayHello} = require("./timer");

jest.useFakeTimers();

test("returns Hi! after 2 seconds", async () => {
    const promise= waitAndSayHello();
})