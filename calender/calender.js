const currentdate = document.querySelector(".month_year")
const dayTag = document.querySelector(".calender_days")
let prevNextIcon = document.querySelectorAll(".calender_mon_year i");
// Date(); is a builtinfunction in js
let monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let date = new Date();

let month = date.getMonth();
let year = date.getFullYear();

const calender = () => {

    // getting last date of month to display total date of month
    let lastMonthDate = new Date(year, month + 1, 0).getDate();
    // getting last date and day of  last month to display on top and 
    // to correct day of this month
    let firstDayMonth = new Date(year, month, 1).getDay();
    let lastMonthLastDate = new Date(year, month, 0).getDate();
    let lastMonthDay = new Date(year, month, lastMonthDate).getDay();
    let liTag = "";
    //    displaying current month and year
    currentdate.innerText = `${monthName[month]}, ${year}`
    // displaying last month  last dates
    for (let j = firstDayMonth; j > 0; j--) {
        liTag += `<li class="calender_days_inactive"> </li>`;
    }
    // displaying total dates of month
    for (let i = 1; i <= lastMonthDate; i++) {
        let todayDate = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "calender_days_active" : ""
        liTag += `<li class="${todayDate}"> ${i}</li>`;
    }
    // displaying next month dates
    for (let k = lastMonthDay; k < 6; k++) {
        liTag += `<li class="calender_days_inactive"> </li>`;
    }
    // displaying all the dates of li tag
    dayTag.innerHTML = liTag;
}
calender();

prevNextIcon.forEach(icon => { // getting prev and next icons
    // / adding click event on both icons
    icon.addEventListener("click", () => {
        month = icon.id === "prev" ? month - 1 : month + 1;

        if (month < 0 || month > 11) {
            date = new Date(year, month);
            year = date.getFullYear();
            month = date.getMonth();
        } else {
            date = new Date();
        }
        calender();
    });
});
const checkbox=document.getElementById('checkbox');
checkbox.addEventListener('change',()=>{
 document.body.classList.toggle('dark');

});
