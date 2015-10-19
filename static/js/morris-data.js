$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015 Q3',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2015 Q4',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2016 Q1',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2016 Q2',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2016 Q3',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2016 Q4',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2017 Q1',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2017 Q2',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2017 Q3',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2017 Q4',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['Nearby', 'Eat In', 'Takeout'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
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
