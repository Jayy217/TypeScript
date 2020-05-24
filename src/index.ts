let myList = document.getElementsByTagName("li");

let index = 0;
for (index = 0; index < myList.length; index++) {
    let aSpanTag = document.createElement("SPAN");
    let someTxt = document.createTextNode("\u00D7")
    aSpanTag.className = "close";
    aSpanTag.appendChild(someTxt);
    myList[index].appendChild(aSpanTag);
}

let closeButton = document.getElementsByClassName("close");

let i = 0;
if (closeButton == null) {
    alert("closeButton is null")
} else {
    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function () {
            let theDiv = this.parentElement;
            if (theDiv == null) {
                return;
            } else {
                theDiv.style.display = "none";
            }
        }
    }
}


function createNewElement() {
    let li = document.createElement('li');
    let theInputValue = document.getElementById("theInput").value;
    let textNode = document.createTextNode(theInputValue);
    let theUl = document.getElementById("theUl");
    li.appendChild(textNode);

    if (theInputValue == "") {
        alert("This can't be empty!")
    } else if (theUl == null) {
        return;
    } else {
        theUl.appendChild(li);
    }

    document.getElementById("theInput")?.value = "";

    let spanTag = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7")
    spanTag.className = "close";
    spanTag.appendChild(txt);
    li.appendChild(spanTag);

    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function () {
            let theDiv = this.parentElement;
            if (theDiv == null) {
                return;
            } else {
                theDiv.style.display = "none";
            }
        }
    }

}
let ulList = document.querySelector('ul')
if (ulList == null) {
    alert("ulList is null")
} else {
    ulList.addEventListener('click', function (event) {
        if (event.target.tagName == "LI") {
            event.target.classList.toggle('checked');
        }
    });
}