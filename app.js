const luckyNum = document.querySelector("#lucky-num");
const bday = document.querySelector("#bday");
const form = document.querySelector(".form");
const section = document.querySelector("section");

const result = document.querySelector(".result");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dateSum = bday.value.split("-").reduce((a, c) => {
    return Number(a) + Number(c);
  }, 0);
  const luckyNumber = Number(luckyNum.value);

  const areYouLucky = dateSum % luckyNumber === 0 ? true : false;

  section.classList.add("lucky-section");

  if (areYouLucky) {
    result.textContent = "Congratulations, You are a lucky person.";
 
  } else {
    result.textContent = `You missed by ${
      dateSum % luckyNumber
    } days from being lucky.`;
  }
});