var popupArray = Array.from(document.getElementsByClassName('popup'));
var popupWrapper = document.querySelector(".popup-wrapper");
popupArray[0].classList.add("active");
var _loop_1 = function (i) {
    popupArray[i].querySelectorAll(".popup-button").forEach(function (button) { return button.addEventListener("pointerdown", function () { showNextPopup(popupArray[i], popupArray[i + 1]); }); });
};
for (var i = 0; i < popupArray.length - 1; i++) {
    _loop_1(i);
}
// the last button calls the removePopupWrapper() function
popupArray[popupArray.length - 1].querySelectorAll(".popup-button").forEach(function (button) { return button.addEventListener("pointerdown", function () { removePopupWrapper(popupWrapper); }); });
function showNextPopup(element, nextElement) {
    element.classList.remove("active");
    nextElement.classList.add("active");
}
function removePopupWrapper(wrapper) {
    wrapper.classList.add("hidden");
    // removes the wrapper once the .3s transition finishes
    setTimeout(function () { wrapper.remove(); }, 1000);
}
