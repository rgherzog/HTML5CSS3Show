function addElementClass(id, cssClass)
{
    var elem = document.getElementById(id);
    elem.classList.add(cssClass);
}

function removeElementClass(id, cssClass) {
    var elem = document.getElementById(id);
    elem.classList.remove(cssClass);
}