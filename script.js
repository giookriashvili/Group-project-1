let button = document.getElementById("calculateBtn");
let yearText = document.getElementById("yearText");
let monthText = document.getElementById("monthText");
let dayText = document.getElementById("dayText");
let errorText = document.querySelectorAll(".error");
let header = document.querySelectorAll(".header");
let input = document.querySelectorAll("input");

button.addEventListener("click", () => {
  // Person birth data
  let birthYear = parseInt(document.getElementById("year").value);
  let birthMonth = parseInt(document.getElementById("month").value);
  let birthDay = parseInt(document.getElementById("day").value);

  // Current Date
  let today = new Date();
  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1; // getMonth() is zero-indexed
  let currentYear = today.getFullYear();

  // Difference
  let ageYear = currentYear - birthYear;
  let ageMonth = currentMonth - birthMonth;
  let ageDay = currentDay - birthDay;

  // Adjust for negative month
  if (ageMonth < 0) {
    ageYear -= 1;
    ageMonth += 12;
  }

  // Adjust for negative day
  if (ageDay < 0) {
    ageMonth -= 1;
    ageDay += new Date(currentYear, currentMonth - 1, 0).getDate();
  }

  // Validation and final execution
  if (
    isNaN(birthYear) ||
    isNaN(birthMonth) ||
    isNaN(birthDay) ||
    birthYear > currentYear ||
    (birthYear == currentYear && birthMonth > currentMonth) ||
    (birthYear == currentYear &&
      birthMonth == currentMonth &&
      birthDay > currentDay) ||
    birthMonth < 1 ||
    birthMonth > 12 ||
    birthDay < 1 ||
    birthDay > 31 ||
    (birthMonth == 2 && birthDay > 29) ||
    ([4, 6, 9, 11].includes(birthMonth) && birthDay > 30) ||
    (birthMonth == 2 &&
      birthDay == 29 &&
      (birthYear % 4 !== 0 ||
        (birthYear % 100 === 0 && birthYear % 400 !== 0))) ||
    birthYear < 0 ||
    birthMonth < 0 ||
    birthDay < 0
  ) {
    errorText[0].innerHTML = "Must be a valid day";
    errorText[1].innerHTML = "Must be a valid month";
    errorText[2].innerHTML = "Must be a valid year";
    yearText.innerHTML = "--";
    monthText.innerHTML = "--";
    dayText.innerHTML = "--";
    input.forEach((element) => {
      element.style.borderColor = "hsl(0, 100%, 67%)";
    });
    header.forEach((element) => {
      element.style.color = "hsl(0, 100%, 67%)";
    });
  } else {
    yearText.innerHTML = ageYear;
    monthText.innerHTML = ageMonth;
    dayText.innerHTML = ageDay;
    input.forEach((element) => {
      element.style.borderColor = "hsl(0, 1%, 44%)";
    });
    header.forEach((element) => {
      element.style.color = "hsl(0, 1%, 44%)";
    });
    errorText[0].innerHTML = "";
    errorText[1].innerHTML = "";
    errorText[2].innerHTML = "";
  }
});
