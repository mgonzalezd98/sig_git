var map = L.map('map').setView([4.622396340756666, -74.11575670768318], 80);
var marker = L.marker([4.623, -74.120]).addTo(map);
var marker = L.marker([4.6245, -74.1185]).addTo(map);
var marker = L.marker([4.625, -74.117]).addTo(map);
var marker = L.marker([4.621, -74.115]).addTo(map);
var marker = L.marker([4.626, -74.1165]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);