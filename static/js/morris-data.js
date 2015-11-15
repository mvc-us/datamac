function getDayOfWeek(day) {
    var d = new Date();
    var other = new Date(d.getFullYear(), d.getMonth(), d.getDate() + day, 18, 0, 0, 0);
    return other.getTime();
}

function dayOfWeekAsString(dayIndex) {
    return ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"][dayIndex];
}

function getDayLabel(d) {
    var temp = new Date(d);
    return dayOfWeekAsString(temp.getDay()) + "-" + temp.getDate();
}

function getRandomInt(min, max) {
    return Math.floor(Math.floor(Math.random() * (max - min + 1)) + min);
}

function fillDataArray() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        var item = {};
        item.period = getDayOfWeek(i);
        item.nearby = getRandomInt(500, 1000);
        // item.dishes = getRandomInt(300, 400);
        item.eatIn = getRandomInt(100, 300);
        arr.push(item);
    }
    return arr;
}

function empForecast(hour) {
    var dinnerDist = 1+Math.abs(hour - 19);
    var highest = getRandomInt(8/dinnerDist, 15/dinnerDist);
    var lunchDist = 1+Math.abs(hour - 12);
    highest = max(highest, getRandomInt(5/lunchDist, 8/lunchDist));
    return highest;
}

function fillEmpArray() {
    var d = new Date();
    var arr = [];
    for (var i = 1; i < 7; i++) {
        var item = {};
        var hours = d.getHours() + i;
        var t = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours, 0, 0, 0);
        item.period = t.getTime();
        hours %= 24;
        var forecast = empForecast(hours);
        item.forecast = forecast;
        arr.push(item);
    }
    return arr;
}

$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: fillDataArray(),
        xkey: 'period',
        xLabels: "day",
        behaveLikeLine: true,
        ykeys: ['nearby','eatIn'],
        labels: ['Nearby', 'Eat In'],
        // ykeys: ['nearby', 'dishes', 'eatIn'],
        // labels: ['Nearby', 'Dishes', 'Eat In'],
        pointSize: 2,
        hideHover: 'false',
        resize: true,
        xLabelFormat: getDayLabel,
    });

    Morris.Area({
        element: 'emp-scheduling',
        data: fillEmpArray(),
        xkey: 'period',
        behaveLikeLine: true,
        ykeys: ['forecast'],
        labels: ['Employee Forecast'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        // xLabelFormat: getDayLabel,
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "In-Store Sales",
            value: 35
        },{
            label: "Takeout Orders",
            value: 73
        },{
            label: "Catering Orders",
            value: 5
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Sunday',
            a: 100,
            b: 90
        }, {
            y: 'Monday',
            a: 75,
            b: 65
        }, {
            y: 'Tuesday',
            a: 50,
            b: 40
        }, {
            y: 'Wednesday',
            a: 75,
            b: 65
        }, {
            y: 'Thursday',
            a: 50,
            b: 40
        }, {
            y: 'Friday',
            a: 75,
            b: 65
        }, {
            y: 'Saturday',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Eat In', 'Takeout'],
        hideHover: 'auto',
        resize: true
    });

});
