import { Serie } from "./Serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('Series')!;
const avgTbody: HTMLElement = document.getElementById('avgSeasons')!;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.platform}</td>
                           <td>${c.seasonsNumber}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAvgSeasons(series: Serie[]): number {
    let avgSeasons: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => {
        totalSeries = totalSeries + 1;
        avgSeasons = avgSeasons + serie.seasonsNumber;
    });
    
    return avgSeasons/totalSeries;
} 

window.addEventListener("load", () => {
    renderSeriesInTable(series);
    let avgSeasons : number = getAvgSeasons(series);
    let pElement = document.createElement('p')
    let description : string = "El promedio de temporadas es: "
    pElement.innerHTML = description +avgSeasons;
    avgTbody.appendChild(pElement);
  });