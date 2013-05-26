//WebWorker
$(function () {
    var fibContainer = $("#fibContainerWorker");
    var worker;

    $("#buttonStartWorker").click(function () {
        var fibCount = $("#fibCountWorker");
        var count = fibCount.val();
        fibContainer.html("");

        var worker = new Worker("WebWorkerBackground.js");
        worker.onmessage = messageHandler;
        worker.onerror = errorHandler;
        worker.postMessage(count);
    });

    function messageHandler(e) {
        var results = e.data;
        $.each(results, function () {
            logMessage(fibContainer, this);
        });
    }

    function errorHandler(e) {
        logMessage(fibContainer, e.message)
    }
});

//No WebWorker
$(function () {
    var fibContainer = $("#fibContainer");        

    $("#buttonStart").click(function () {
        var fibCount = $("#fibCount");
        var count = fibCount.val();
        var result = generateFibonacci(count);
        fibContainer.html("");    

        $.each(result, function () {
            logMessage(fibContainer, this);
        });
    });       
});

function logMessage(container, value) {
    container.append("<li>" + value + "</li>");
}

function generateFibonacci(count) {
    var pprev, prev, temp;
    var result = [];

    pprev = 0;
    prev = 1;
    result.push(0);
    result.push(1);

    for (var i = 2; i < count; i++) {
        temp = prev;
        prev = prev + pprev;
        pprev = temp;
        result.push(prev);
    }

    return result;
}

