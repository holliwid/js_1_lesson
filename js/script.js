

function addLi() {
    var stroka = prompt("Enter the string:", "")
    if (stroka){
        var ol = document.getElementById("spisokst")
        var li = document.createElement("LI")
        ol.appendChild(li)
        var text = document.createTextNode(stroka)
        li.appendChild(text)
    }
}

function deleteLi(){
    var ol = document.getElementById("spisokst")
    var lastLi = ol.lastChild

    while (lastLi && lastLi.nodeType != 1){
        lastLi = lastLi.previousSibling
    }

    if (lastLi){
        lastLi.parentNode.removeChild(lastLi)
    }
}

