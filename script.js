const na = [
  { city: "Atlanta", population: "510.823" },
  { city: "Boston", population: "689.326" },
  { city: "Chicago", population: "2.670.400" },
  { city: "Dallas", population: "1.350.000" },
  { city: "Denver", population: "716.577" },
  { city: "El Paso", population: "677.456" },
  { city: "Fort Worth", population: "978.468" },
  { city: "Houston", population: "2.325.500" },
  { city: "Los Angeles", population: "3.898.747" },
  { city: "Miami", population: "449.514" },
  { city: "New York", population: "8.175.133" },
  { city: "Phoenix", population: "1.680.992" },
  { city: "San Antonio", population: "1.469.845" },
  { city: "San Francisco", population: "808.437" },
  { city: "Washington", population: "671.803" },
];
const eu = [
  { city: "Amsterdam", population: "921.402" },
  { city: "Athens (Αθήνα)", population: "3.153.000" },
  { city: "Barcelona", population: "1.636.762" },
  { city: "Belgrade (Београд)", population: "1.204.400" },
  { city: "Berlin", population: "3.669.491" },
  { city: "Bratislava", population: "475.503" },
  { city: "Brussels", population: "1.220.967" },
  { city: "Bucharest (București)", population: "1.795.000" },
  { city: "Budapest", population: "1.728.000" },
  { city: "Copenhagen (København)", population: "655.304" },
  { city: "Dublin (Baile Átha Cliath)", population: "1.173.179" },
  { city: "Helsinki", population: "658.457" },
  { city: "Istanbul (İstanbul)", population: "15.704.156" },
  { city: "Kyiv (Київ)", population: "2.967.000" },
  { city: "Lisbon (Lisboa)", population: "545.923" },
  { city: "Ljubljana", population: "295.504" },
  { city: "London", population: "9.304.016" },
  { city: "Madrid", population: "3.365.630" },
  { city: "Oslo", population: "709.037" },
  { city: "Paris", population: "2.165.423" },
  { city: "Podgorica (Подгорица)", population: "185.937" },
  { city: "Prague (Praha)", population: "1.359.600" },
  { city: "Riga", population: "602.347" },
  { city: "Rome (Roma)", population: "2.781.000" },
  { city: "Sarajevo", population: "343.000" },
  { city: "Skopje (Скопје)", population: "526.502" },
  { city: "Sofia (София)", population: "1.232.500" },
  { city: "Stockholm", population: "978.770" },
  { city: "Tallinn", population: "456.203" },
  { city: "Tirana", population: "557.422" },
  { city: "Vienna (Wien)", population: "1.993.000" },
  { city: "Vilnius", population: "593.436" },
  { city: "Warsaw (Warszawa)", population: "1.790.658" },
  { city: "Zagreb", population: "767.131" },
  { city: "Zürich", population: "443.037" },
];
const all = na.concat(eu);
all.sort();

for (i = 0; i < all.length; i++) {
  var opt = document.createElement("option");
  opt.setAttribute("value", all.at(i).city);
  opt.innerText = all.at(i).city;
  document.getElementById("l-sel").appendChild(opt);
  var opt = document.createElement("option");
  opt.setAttribute("value", all.at(i).city);
  opt.innerText = all.at(i).city;
  document.getElementById("r-sel").appendChild(opt);
}

function randomize(side, num) {
  var city;
  if (num == 1) {
    city = all.at(Math.floor(Math.random() * all.length)).city;
  } else if (num == 2) {
    city = eu.at(Math.floor(Math.random() * eu.length)).city;
  } else {
    city = na.at(Math.floor(Math.random() * na.length)).city;
  }
  document
    .getElementById(side)
    .setAttribute("src", "Images/" + city + ".jpg");
  document.getElementById("city-" + side).innerText = city;
}
function set(sel_opt, side) {
  var city = sel_opt.options[sel_opt.selectedIndex].value;
  console.log(city);
  document
    .getElementById(side)
    .setAttribute("src", "Images/" + city + ".jpg");
  document.getElementById("city-" + side).innerText = city;
  document.getElementById("pop-" + side).innerText = all.find(
    (t) => t.city === city
  ).population;
}