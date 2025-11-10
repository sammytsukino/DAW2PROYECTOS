function isEmail(text) {
    return text.includes("@") && text.includes(".");
};


function isValidLength(text, min, max) {
    return text.length >= min && text.length <= max;
}

function toUpperCase(text) {
    return text.toUpperCase();
}

module.exports = {isEmail, isValidLength, toUpperCase}