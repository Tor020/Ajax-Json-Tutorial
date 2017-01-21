var ourRequest = new XMLHttpRequest();
//Two arguements into the .open method. #1 is to send data or receive data.
ourRequest.open(GET, 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
	console.log();
};