let button = document.getElementById("submit");
let year = document.getElementById("yearText");
let month = document.getElementById("monthText");
let day = document.getElementById("dayText");

button.addEventListener("click", () => {
  // Person birth data
  let birthYear = document.getElementById("year").value;
  let birthMonth = document.getElementById("month").value;
  let birthDay = document.getElementById("day").value;

  // Current Date
  let today = new Date();
  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  // Difference
  let ageYear = currentYear - birthYear;
  let ageMonth = currentMonth - birthMonth;
  let ageDay = currentDay - birthDay;

  // Conditions and final execute

  if (ageMonth < 0) {
    ageYear -= 1;
    ageMonth += 12;
  }

  if (ageDay < 0) {
    ageMonth -= 1;
    ageDay += new Date(currentYear, currentMonth - 1, 0).getDate();
  }

  if (
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
      (birthYear % 4 != 0 || (birthYear % 100 == 0 && birthYear % 400 != 0)))
  ) {
    alert("mistake");
  } else {
    year.innerHTML = ageYear;
    month.innerHTML = ageMonth;
    day.innerHTML = ageDay;
  }
});
