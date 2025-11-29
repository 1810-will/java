document.getElementById("calculate").addEventListener("click", function () {
  let d = parseInt(document.getElementById("day").value);
  let m = parseInt(document.getElementById("month").value);
  let y = parseInt(document.getElementById("year").value);

  let birthDate = new Date(y, m - 1, d);
  let today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    let prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
}

)




;
