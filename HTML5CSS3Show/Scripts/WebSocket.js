$(function () {
    var log = $("#log");
    var message = $("#message");
    var buttonSend = $("#buttonSend");
    var webSocket;
    var serverOnlineURL = "ws://echo.websocket.org";
    var serverFleckURL = "ws://localhost:8181";

    function logMessage(msg) {
        log.append("<li>" + msg + "</li>");
    }

    buttonSend.click(function () {
        if (message != null && message != "") {
            var clientMessage = "Client says: " + message.val();
            logMessage(clientMessage);
            ws.send(clientMessage);
        }
    });

    webSocket = window.WebSocket || windows.MozWebSocket,
    ws = new webSocket(serverOnlineURL);

    logMessage("connected to server...");

    ws.onopen = function () {
        logMessage("connection opened...")
    };

    ws.onclose = function () {
        logMessage("connection closed...");
    }

    ws.onmessage = function (e) {
        logMessage("Server says: " + e.data);
    }

    ws.onerror = function (e) {
        logMessage("Error: " + e.message);
    }    
});