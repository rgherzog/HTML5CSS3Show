<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="journal.aspx.cs" Inherits="HTML5CSS3Show.journal" %>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Offline Application: Journal</title>
        <link rel="stylesheet" href="../Styles/Site.css" media="screen" />
        <link href="../Styles/OfflineApplication.css" rel="stylesheet" />
    </head>
    <body>
        <header>
            <h1>
                Offline Application: Journal
            </h1>
            <div>
                Offline don't need a continous internet connection. Changes are stored in the offline cache and are synced to the online store once the internet connection is available again. Programmatical changes are automatically downloaded to the offline application cache. It is important ot not mix up browser cache and Offline Cache. For that sake the cache information in the http header is set to no. In this example this is done for each page using aspx pages. It would also be possible to configure that in the webserver which makes using aspx pages obsolete.
            </div>
        </header>
        <article>
            <section>
                <h1>Journal</h1>
                <a href="/home">Home</a>

                <div id="online">Online: <span id="onlineStatus"></span></div>

                <div id="controls">
                    <textarea autofocus id="journalText"></textarea>
                    <br />
                    <input type="button" id="sendButtun" value="send" />
                </div>

                <div id="eventLog">
                    <h2>EventLog</h2>
                    <ul id="log">
                    </ul>                    
                </div>
            </section>
        </article>
    </body>
    <script>
        var box;
        var messages = [];

        function isOnline() {
            return navigator.onLine;
        }

        function reportOnlineStatus() {
            $("#onlineStatus").html(isOnline ? "Yes" : "No");
        }

        function storeMessage() {   
            var message = box.val();
            if (!isOnline()) {
                storeMessageLocal(message);
            }
            else {
                storeMessageRemote(message);
            }
        }

        function storeMessagelocal(message) {
            messages.push(message)
            clearUI();
            logEvent("Message saved locally: '" + message + "'")
        }

        function storeMessageRemote(message) {
            messages.push(message);
            sendMessagesToServer();
            clearUI();
        }

        function sendMessagesToServer() {
            messages.reverse();
            while (messages.length > 0) {
                var msg = messages.pop();
                $.post("/message/save", { "Message": msg }, function (e) {
                    logEvent(e.Status)
                }, "json");
            }
        }

        $(function () {
            if (window.applicationCache) {
                box = $("#journalText");

                $("#sendButton").click(function () {
                    storeMessage();
                });

                window.applicationCache.onupdateready = function (e) {
                    logEvent("update ready");
                    logEvent("swapping cache");
                    applicationCache.swapCache();
                }

                window.addEventListener("online", function (e) {
                    reportOnlineStatus();
                    sendMessageToServer();
                }, true);

                window.addEventListener("offline", function (e) {
                    reportOnlineStatus();
                }, true);

                reportOnlineStatus();
            }
        });

        function logEvent(msg) {
            $("#log").append("<li>" + msg + "</li>");
        }
    </script>
</html>
