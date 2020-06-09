const isEmpty = require('lodash.isempty');

// CloudScript (JavaScript)
handlers.helloWorld = function (args, context) {
    log.debug(isEmpty({}));
    var message = "Hello CALEB" + currentPlayerId + "!";
    log.info(message);
    var inputValue = null;
    if (args && args.hasOwnProperty("inputValue"))
        inputValue = args.inputValue;
    log.debug("hello CALEB:", { input: inputValue });
    return { messageValue: message };
}
