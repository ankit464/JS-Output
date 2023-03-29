const logger = (message) => console.log(message);

function loggerDecorator(logger) {
  return function (message) {
    // console.log(message);
    // logger(message);
    logger.call(this, message);
    console.log("message logged at:", cc);
  };
}

const decoratedLogger = loggerDecorator(logger);
decoratedLogger("ankit ji ");

// NOTE:- decorator are used to modify the existing function and modifying the functionlity of the function withour modifying the original function
