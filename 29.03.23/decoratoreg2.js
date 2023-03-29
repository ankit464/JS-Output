const logger = (message) => console.log(message);

function loggerDecorator(logger) {
  function fn(message) {
    console.log(message);
    //logger(message);
    logger.call(this, message);
    console.log("message logged at:", new Date().toLocaleString());
  }
  return fn;
}

const decoratedLogger = loggerDecorator(logger);
decoratedLogger("ankit ji ");
