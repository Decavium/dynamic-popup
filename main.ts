const popupArray: NodeListOf<Element> = document.querySelectorAll(".popup"); 

// Skeleton if info not found

// Array of input info - generate new cards for each array
// const node = document.getElementById("myList2").lastChild;
// const clone = node.cloneNode(true);

// Button on click to cycle through windows, last one deletes elements
function onButtonPress(button: Element, lastElement: boolean = false) {
    // remove the popups if the user is at the last element
    lastElement && removePopup();

    removePopup();
}

function removePopup() {

}

function removePopupList() {
    root.classList.add("hidden");
    root.style.setProperty('animation', 'fadeOutButton 0.6s');
    root.addEventListener("animationend",
        () => {
            // set to 0 as it reverts to its original opactiy before the animation happened
            root.style.opacity = 0;
        }
    );
}

export {}