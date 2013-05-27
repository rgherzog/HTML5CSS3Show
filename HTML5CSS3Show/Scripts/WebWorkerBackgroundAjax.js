function messageHandler(e) {
    if (e.data === "start") {
        fetchContent();
    }
}

function fetchContent() {
    var xmlhttp;

    if (XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            postMessage(xmlhttp.responseText);
        }
        else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
            postMessage(xmlhttp.status + " " + xmlhttp.statusText);
        }
    }

    xmlhttp.open("GET", "/test.htm", true);
    xmlhttp.send();
}

addEventListener("message", messageHandler, true);