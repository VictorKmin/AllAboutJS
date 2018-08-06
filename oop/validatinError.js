module.exports = function ValidationException(message) {
    this.message = message;
    this.name = "Type Error";
};