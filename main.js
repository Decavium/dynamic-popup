var popupArray = Array.from(document.getElementsByClassName('popup'));
var popupWrapper = document.querySelector(".popup-wrapper");
var _loop_1 = function (i) {
    popupArray[i].querySelectorAll(".popup-button").forEach(function (button) { return button.addEventListener("pointerdown", function () { showNextPopup(popupArray[i], popupArray[i + 1]); }); });
};
// Skeleton if info not found
// Array of input info - generate new cards for each array
// const node = document.getElementById("myList2").lastChild;
// const clone = node.cloneNode(true);
for (var i = 0; i < popupArray.length - 1; i++) {
    _loop_1(i);
}
popupArray[popupArray.length - 1].querySelectorAll(".popup-button").forEach(function (button) { return button.addEventListener("pointerdown", function () { removePopupWrapper(popupWrapper); }); });
function showNextPopup(element, nextElement) {
    element.classList.remove("active");
    nextElement.classList.add("active");
    console.log("Element removed.");
}
function removePopupWrapper(wrapper) {
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
