const {isEmail, isValidLength, toUpperCase} = require ('./string');

describe("String validation", () => {
    test("detects valid email", () => {
        expect(isEmail("user@email.com")).toBe(true)
    });

    test("detects invalidad email",() => {
        expect(isEmail("useremailcom")).toBe(false)
    });

    test("detects valid length", () => {
        expect(isValidLength("hello", 2, 10)).toBe(true)
    });

    test("rejects way too short text", () => {
        expect(isValidLength("a", 3, 10)).toBe(false)
    });

    test("converts to uppercase", () => {
        expect(toUpperCase("hello")).toBe("HELLO")
    });
})