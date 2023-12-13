const popupArray: HTMLElement[] = Array.from(document.getElementsByClassName('popup') as HTMLCollectionOf<HTMLElement>);
const popupWrapper: HTMLElement = document.querySelector(".popup-wrapper") as HTMLElement;

for (let i: number = 0; i < popupArray.length - 1; i++) {
    popupArray[i].querySelectorAll(".popup-button").forEach((button) => button.addEventListener("pointerdown", () => { showNextPopup(popupArray[i], popupArray[i + 1]) }))
}
// the last button calls the removePopupWrapper() function
popupArray[popupArray.length - 1].querySelectorAll(".popup-button").forEach((button) => button.addEventListener("pointerdown", () => { removePopupWrapper(popupWrapper) }));

function showNextPopup(element: HTMLElement, nextElement: HTMLElement) {
    element.classList.remove("active");
    nextElement.classList.add("active");
}

function removePopupWrapper(wrapper: HTMLElement) {
    wrapper.classList.add("hidden");
    // removes the wrapper once the .3s transition finishes
    // setTimeout(() => { wrapper.remove() }, 1000);
}

