$.getJSON ("http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl&units=metric&APPID=6f67c34417d25d8cd14e815e9619e913" ,function(data){
console.log(data);

let icon = "http://openweathermap.org/img/w/" + data.weather["0"].icon + ".png";
let clouds = data.weather["0"].description.toUpperCase() ;
let temper = data.main.temp;

$('.icon').attr('src', icon);
$('.temperature-today').append(temper);
$('.today').append(clouds);

});

// Pirma diena

$.getJSON ("http://api.openweathermap.org/data/2.5/forecast?q=Amsterdam,nl&units=metric&appid=6f67c34417d25d8cd14e815e9619e913" ,function(data) {
console.log(data);

let icons = "http://openweathermap.org/img/w/" + data.list["1"].weather["0"].icon + ".png";
let maxTemp = Math.floor(data.list["1"].main.temp_max);
let minTemp = Math.floor(data.list["3"].main.temp_min);
let day = data.list[1].dt_txt;

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = day;
var days = getDayName(dateStr, "en-GB");



$('.day-icon0').attr('src', icons);
$('.temperature-day0').append(maxTemp);
$('.temperature-night0').append(minTemp);
$('.week-day0').append(days);

});


// Antra diena

$.getJSON ("http://api.openweathermap.org/data/2.5/forecast?q=Amsterdam,nl&units=metric&appid=6f67c34417d25d8cd14e815e9619e913" ,function(data) {
console.log(data);

let icons = "http://openweathermap.org/img/w/" + data.list["9"].weather["0"].icon + ".png";
let maxTemp = Math.floor(data.list["9"].main.temp_max);
let minTemp = Math.floor(data.list["5"].main.temp_min);
let day = data.list[9].dt_txt;

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = day;
var days = getDayName(dateStr, "en-GB");



$('.day-icon1').attr('src', icons);
$('.temperature-day1').append(maxTemp);
$('.temperature-night1').append(minTemp);
$('.week-day1').append(days);
});


// Trecia diena

$.getJSON ("http://api.openweathermap.org/data/2.5/forecast?q=Amsterdam,nl&units=metric&appid=6f67c34417d25d8cd14e815e9619e913" ,function(data) {
console.log(data);

let icons = "http://openweathermap.org/img/w/" + data.list["25"].weather["0"].icon + ".png";
let maxTemp = Math.floor(data.list["25"].main.temp_max);
let minTemp = Math.floor(data.list["21"].main.temp_min);

let day = data.list[21].dt_txt;

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = day;
var days = getDayName(dateStr, "en-GB");




$('.day-icon2').attr('src', icons);
$('.temperature-day2').append(maxTemp);
$('.temperature-night2').append(minTemp);
$('.week-day2').append(days);

});


// Ketvirta diena

$.getJSON ("http://api.openweathermap.org/data/2.5/forecast?q=Amsterdam,nl&units=metric&appid=6f67c34417d25d8cd14e815e9619e913" ,function(data) {
console.log(data);

let icons = "http://openweathermap.org/img/w/" + data.list["33"].weather["0"].icon + ".png";
let maxTemp = Math.floor(data.list["33"].main.temp_max);
let minTemp = Math.floor(data.list["29"].main.temp_min);

let day = data.list[29].dt_txt;

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = day;
var days = getDayName(dateStr, "en-GB");




$('.day-icon3').attr('src', icons);
$('.temperature-day3').append(maxTemp);
$('.temperature-night3').append(minTemp);
$('.week-day3').append(days);
});


// Penkta diena

$.getJSON ("http://api.openweathermap.org/data/2.5/forecast?q=Amsterdam,nl&units=metric&appid=6f67c34417d25d8cd14e815e9619e913" ,function(data) {
console.log(data);

let icons = "http://openweathermap.org/img/w/" + data.list["39"].weather["0"].icon + ".png";
let maxTemp = Math.floor(data.list["39"].main.temp_max);
let minTemp = Math.floor(data.list["37"].main.temp_min);

let day = data.list[37].dt_txt;

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = day;
var days = getDayName(dateStr, "en-GB");




$('.day-icon4').attr('src', icons);
$('.temperature-day4').append(maxTemp);
$('.temperature-night4').append(minTemp);
$('.week-day4').append(days);
});

