
handlers.helloWorld = function (args, context) {
	const message = "Hello " + currentPlayerId + "!";
	log.info(message);
	let inputValue = null;
	if (args && args.hasOwnProperty("inputValue")) {
		inputValue = args.inputValue;
	}
	log.debug("hello input value:", {input: inputValue});
	return {messageValue: message};
}
