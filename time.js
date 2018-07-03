var objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function() { var a = objToday.getDay(); if (/1/.test(parseInt((a + "").charAt(0)))) return ""; a = parseInt((a + "").charAt(1));
    return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "" }(),
    dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()];

var today =  dayOfWeek + " " + dayOfMonth + " " + curMonth ;

document.getElementsByTagName('time')[0].textContent = today;

var tick = 0;

window.setInterval(function() {

    var d = new Date();

    var min = d.getMinutes();
    var hr = d.getHours() % 12;

    if (hr ==0) { hr = 12;}

    if (hr > 9){
        $('clock').css({ left : '3.3%'});
    }
    if (hr < 9){
        $('clock').css({ left : '4.3%'});
    }

    $('clock').text(hr);

    $('minute').css({ WebkitTransform: 'rotate(' +  6*(min-15) + 'deg)'});
    tick++;
} , 1000);