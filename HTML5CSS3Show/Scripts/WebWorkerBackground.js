function messageHandler(e) {
    if (e.data > 0) {
        generateFibonacciSeries(e.data);
    }
}

function generateFibonacciSeries(count) {
    var results = [];
    var result = generateFibonacci(e.data);
    postMessage(result);
}

addEventListener("message", messageHandler, true);