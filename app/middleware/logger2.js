module.exports = (req, res, next) => {
    console.log("Logger 2 Invoked");
    next();
}