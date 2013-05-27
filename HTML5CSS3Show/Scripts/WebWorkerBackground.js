var result = [];
//very slow recursive function
function calculateNextFibonacciValue(n) {
    var s = 0;
    var returnValue;

    if (n == 0) {
        return s;
    }
    if (n == 1) {
        s += 1;
        return (s);
    }
    else {
        return calculateNextFibonacciValue(n - 1) + calculateNextFibonacciValue(n - 2);
    }
}

function messageHandler(e) {
    if (e.data > 0) {
        generateFibonacciSeries(e.data);
    }
}

function generateFibonacciSeries(count) {
    for (var i = 0; i < count; i++) {
        result.push(calculateNextFibonacciValue(i));
    }

    postMessage(result);
}

addEventListener("message", messageHandler, true);
