import Calendar from "./components/Calendar.js";

const $app = document.querySelector("#app");
$app.innerHTML = '<div id="calendar"></div>';

const $calendar = $app.querySelector("#calendar");
new Calendar($calendar);
