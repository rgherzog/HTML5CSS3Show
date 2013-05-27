//AjaxWorker (calling the working works identically but the worker itself uses a ajax call)
$(function () {
    var loadImg = $("#loadImgWorkerAjax");
    var fibContainerWorker = $("#ajaxContainerWorker");
    var worker;
    loadImg.hide();

    $("#buttonStartAjax").click(function () {
        fibContainerWorker.html("");
        loadImg.show();

        worker = new Worker("Scripts/WebWorkerBackgroundAjax.js");
        worker.onmessage = messageHandler;
        worker.onerror = errorHandler;
        worker.postMessage("start");
    });

    function messageHandler(e) {
        logMessage(fibContainerWorker, e.data);
        loadImg.hide();
    }

    function errorHandler(e) {
        logMessage(fibContainerWorker, e.message)
    }    
});

//WebWorker
$(function () {
    var fibContainerWorker = $("#fibContainerWorker");
    var worker;
    var args = { Comman: "start", Count: "", Result: "" }; //A JSON object is not necessary. I am just using it in order to demonstrate that using JSON objects is possible as well.
    var loadImg = $("#loadImgWorker");
    loadImg.hide();

    $("#buttonStartWorker").click(function () {
        var fibCount = $("#fibCountWorker");
        var count = fibCount.val();
        fibContainerWorker.html("");
        loadImg.show();

        var worker = getWebWorker();
        args.Count = count;
        worker.postMessage(args);
    });

    $("#buttonStopWorker").click(function () {
        var worker = getWebWorker();
        worker.terminate();
        loadImg.hide();
    });


    function messageHandler(e) {
        var results = e.data.Result;
        $.each(results, function () {
            logMessage(fibContainerWorker, this);
        });
        loadImg.hide();
    }
    
    function errorHandler(e) {
        logMessage(fibContainerWorker, e.message)
    }

    function getWebWorker() {
        if (worker == null) {
            worker = new Worker("Scripts/WebWorkerBackground.js");
            worker.onmessage = messageHandler;
            worker.onerror = errorHandler;
        }
        return worker;
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

    //this function is faster than the recursive version of the background thread
    //infact it takes longer to display the results than to calculate them. So to all appearances the background worker seem not to be working (infact the UI thread blocks because the background thread is so fast).
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
});

function logMessage(container, value) {
    container.append("<li>" + value + "</li>");
}