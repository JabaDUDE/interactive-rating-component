//Create a hidden section that toggles back and forth with the other section when user clicks on Submit.
// document.querySelector("li").addEventListener("click");
const allLi = document.querySelectorAll("li");
const userRating = document.getElementById("userRating");
const submit = document.querySelector("#submit");
const ratingCard = document.getElementById("ratingCard");
const selectionCard = document.getElementById("selectionCard");
//When user clicks one of the rating points, store that value
//Once user hits submit, the hidden class should be applied to the
//RatingCard and toggle off the hidden class from the selectionCard.
//Once it toggles,the STORED VALUE from the rating point should be inputed
//into the userRating span section.

allLi.forEach((item) =>
  item.addEventListener("click", () => {
    const ratingValue = getValue(event);
    clearRatingStyles();
    setActiveRating(event.target);
    displayValue(ratingValue);
  })
);
function getValue(event) {
  const value = event.target.textContent;
  return value;
}
function displayValue(value) {
  userRating.textContent = value;
}

submit.addEventListener("click", () => {
  ratingCard.classList.add("hidden");
  selectionCard.classList.toggle("hidden");
});
function setActiveRating(el) {
  el.style.backgroundColor = "hsl(217, 12%, 63%)";
  el.style.color = "white";
}
function clearRatingStyles() {
  allLi.forEach((el) => {
    el.style.backgroundColor = "";
  });
}
