const popupArray: HTMLElement[] = Array.from(document.getElementsByClassName('popup') as HTMLCollectionOf<HTMLElement>);
const popupWrapper: HTMLElement = document.querySelector(".popup-wrapper") as HTMLElement;

// Skeleton if info not found

// Array of input info - generate new cards for each array
// const node = document.getElementById("myList2").lastChild;
// const clone = node.cloneNode(true);

for (let i: number = 0; i < popupArray.length - 1; i++) {
    popupArray[i].querySelectorAll(".popup-button").forEach((button) => button.addEventListener("pointerdown", () => { showNextPopup(popupArray[i], popupArray[i + 1]) }))
}
popupArray[popupArray.length - 1].querySelectorAll(".popup-button").forEach((button) => button.addEventListener("pointerdown", () => { removePopupWrapper(popupWrapper) }));

function showNextPopup(element: Element, nextElement: Element) {
    element.classList.remove("active");
    nextElement.classList.add("active");

    console.log("Element removed.");
}

function removePopupWrapper(wrapper: HTMLElement) {

    console.log("Wrapper removed.");

    // wrapper.classList.add("hidden");
    // wrapper.style.setProperty('animation', 'fadeOutButton 0.6s');
    // wrapper.addEventListener("animationend",
    //     () => {
    //         // set to 0 as it reverts to its original opactiy before the animation happened
    //         wrapper.style.opacity = '0';
    //     }
    // );
}

