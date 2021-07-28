const luckyNum = document.querySelector("#lucky-num");
const bday = document.querySelector("#bday");
const form = document.querySelector(".form");
const section = document.querySelector("section");

const result = document.querySelector(".result");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  let dateSum=0;
  const array = bday.value.split("-"); // [dd mm yyyy]
  console.log(array.length);
  for(let i=0;i<array.length;i++)
  { console.log(array[i]);
    dateSum+=parseInt(array[i]);
  }
  console.log(dateSum);
  

  const luckyNumber = Number(luckyNum.value);
  console.log(dateSum/luckyNumber);
  console.log(dateSum % luckyNumber);
  const areYouLucky = dateSum % luckyNumber === 0 ? true : false;


  if (areYouLucky) {
    result.innerText = "Congratulations, You are a lucky person.";
 
  } else {
    result.innerText = `You missed by ${
      dateSum % luckyNumber
    } days from being lucky.`;
  }
});