$(function () {
    var taskBox, msgContainer, errorList;

    if (typeof (window.onstorage) == "undefined") {
        $("body").append("<div class='msg'>This demo only works in browser that support Local Storage</div>");
    }
    else if (window.localStorage) {
        taskBox = $("#taskBox");
        msgContainer = $("#msgContainer");
        errorList = $("#errorList");

        if (window.localStorage.taskList != null) {
            var tasks = window.localStorage.taskList;
            var taskList = tasks.split(",").join("\n");
            taskBox.val(taskList);
        }

        $("#saveButton").click(function () {
            Save();
            ShowMsg("saved...");
        });

        $("#deleteButton").click(function () {
            window.localStorage.removeItem("taskList"); //removes just the item
            window.localStorage.clear(); //clears everything for that site
            taskBox.val("");
            ShowMsg("deleted...");
        });

        $("#CheckboxShowEvents").click(function () {
            StorageEventFieldsetHandler();
        });

        $("#buttonStorageLimitStart").click(function () {
            FillTasklistIndefinitely();
        });

        $("#buttonStorageLimitStop").click(function () {
            FillTasklistIndefinitelyStop();
        });

        window.addEventListener("storage", ShowStorageEventArgs, false); //show fieldset is by default checked
        ShowStorageEventFieldset();
    }

    function Save() {
        var tasks = taskBox.val();
        var taskList = tasks.split("\n").join(",");
        window.localStorage.taskList = taskList;
    }

    function ShowMsg(msg) {
        msgContainer.html(msg);
        msgContainer.fadeOut(2000);
    }

    function ShowStorageEventArgs(e) {
        $("#eveKey").html(e.key);
        $("#eveNewVal").html(e.newValue);
        $("#eveOldVal").html(e.oldValue);
        $("#url").html(e.url);
        var test = e.storageArea; //references to session or local storage;
        var test2 = test.taskList;
    }

    function StorageEventFieldsetHandler() {
        if ($("#CheckboxShowEvents").attr('checked')) {
            window.addEventListener("storage", ShowStorageEventArgs, false);
            ShowStorageEventFieldset();
        }
        else {
            window.removeEventListener("storage", ShowStorageEventArgs, false);
            RemoveStorageEventFieldset();
        }
    }

    function ShowStorageEventFieldset() {
        var fieldSetContainer = $("#fsContainer");
        fieldSetContainer.show(0);
    }

    function RemoveStorageEventFieldset() {
        var fieldSetContainer = $("#fsContainer");
        fieldSetContainer.hide(0);
    }

    var interval;
    function FillTasklistIndefinitely() {
        var localKey = 0;
        var storage = window.localStorage;
        var checkbox = $("#CheckboxStorageLimit");

        interval = setInterval(function () {
            try {
                storage.setItem(localKey, " asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd  asödlfkjasöldkasö  sasd ajkasd jölas dkjaöslsöldk sad jöasdkl sölk ölask lösakd ");
                localKey++;
                taskBox.prepend("<div>Remaining space: " + storage.remainingSpace + "</div>");
            }
            catch (e) {
                errorList.append("<div>Error: " + e + "</div>");
                clearInterval(interval);
            }
        }, 10);
    }

    function FillTasklistIndefinitelyStop() {
        clearInterval(interval);
    }
});