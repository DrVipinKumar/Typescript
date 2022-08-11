var days;
(function (days) {
    days[days["sunday"] = 10] = "sunday";
    days[days["monday"] = 20] = "monday";
    days[days["tuesday"] = 30] = "tuesday";
    days[days["wednesday"] = 40] = "wednesday";
    days[days["thursday"] = 50] = "thursday";
    days["friday"] = "hello";
    days["saturday"] = "hai";
})(days || (days = {}));
var weekday = days.sunday;
console.log(weekday);
