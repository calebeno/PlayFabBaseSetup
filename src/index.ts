import { isEmpty } from 'lodash';

// CloudScript (JavaScript)
handlers.helloWorld = function (args, context) {
    log.debug(isEmpty({}).toString());
    const message = "Hello TESTING THAT BUILD YO CALEB OR ARE YOU?????? " + currentPlayerId + "!";
    log.info(message);
    let inputValue = null;
    if (args && args.hasOwnProperty("inputValue"))
        inputValue = args.inputValue;
    log.debug("hello CALEB OR ME???:", { input: inputValue });
    return { messageValue: message };
}
