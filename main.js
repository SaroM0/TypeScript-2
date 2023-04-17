import { series } from "./data.js";

var seriesTbody = document.getElementById('Series'); 
var avgTbody = document.getElementById('avgSeasons'); 
var card = document.getElementById('serie-card'); 

function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td class=\"serie-name\" data-id=\"").concat(c.id, "\"><a>").concat(c.name, "</a></td>\n                           <td>").concat(c.platform, "</td>\n                           <td>").concat(c.seasonsNumber, "</td>");
        seriesTbody.appendChild(trElement);
    });

    var serieNameCells = document.querySelectorAll('.serie-name');
    serieNameCells.forEach(function (cell) {
        cell.addEventListener('click', function () {
            var serieId = cell.getAttribute('data-id');
            var serie = series.find(function (serie) { return serie.id === parseInt(serieId); });
            showSeriesDetail(serie);
        });
    });
}

function getAvgSeasons(series) {
    var avgSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (serie) {
        totalSeries = totalSeries + 1;
        avgSeasons = avgSeasons + serie.seasonsNumber;
    });
    return avgSeasons / totalSeries;
}

function showSeriesDetail(serie) {
    var seriesCard = document.getElementById('serie-card');
    seriesCard.querySelector('.card-title').textContent = serie.name;
    seriesCard.querySelector('.card-text').textContent = serie.review;
    seriesCard.querySelector('.card-img-top').setAttribute('src', serie.image);
    seriesCard.querySelector('.btn').setAttribute('href', serie.url);
}

window.addEventListener("load", function () {
    renderSeriesInTable(series);
    var avgSeasons = getAvgSeasons(series);
    var pElement = document.createElement('p');
    var description = "El promedio de temporadas es: ";
    pElement.innerHTML = description + avgSeasons;
    avgTbody.appendChild(pElement);
});