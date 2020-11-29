var euem08 = 4956.7;
var euem18 = 4208.3;
var afem08 = 1028;
var afem18 = 1235.5;
var saem08 = 1132.6;
var saem18 = 1261.5;
var naem08 = 6600.4;
var naem18 = 6035.6;
var asem08 = 12954.7;
var asem18 = 16274.1;
var auem08 = 1993;
var auem18 = 2100.5;
var gesem = euem18 + afem18 + saem18 + naem18 + asem18;
var eurel = (Math.round(((euem18 / gesem) * 100) * 100) / 100);
var euchange = (Math.round((100 - (euem08 / euem18) * 100) * 100) / 100);
var eugrowth = (Math.round((euem18 - euem08) * 100) / 100);
var afrel = (Math.round(((afem18 / gesem) * 100) * 100) / 100);
var afchange = (Math.round((100 - (afem08 / afem18) * 100) * 100) / 100);
var afgrowth = (Math.round((afem18 - afem08) * 100) / 100);
var sarel = (Math.round(((saem18 / gesem) * 100) * 100) / 100);
var sachange = (Math.round((100 - (saem08 / saem18) * 100) * 100) / 100);
var sagrowth = (Math.round((saem18 - saem08) * 100) / 100);
var narel = (Math.round(((naem18 / gesem) * 100) * 100) / 100);
var nachange = (Math.round((100 - (naem08 / naem18) * 100) * 100) / 100);
var nagrowth = (Math.round((naem18 - naem08) * 100) / 100);
var asrel = (Math.round(((asem18 / gesem) * 100) * 100) / 100);
var aschange = (Math.round((100 - (asem08 / asem18) * 100) * 100) / 100);
var asgrowth = (Math.round((asem18 - asem08) * 100) / 100);
var aurel = (Math.round(((auem18 / gesem) * 100) * 100) / 100);
var auchange = (Math.round((100 - (auem08 / auem18) * 100) * 100) / 100);
var augrowth = (Math.round((auem18 - auem08) * 100) / 100);
function myFunction(name, em18, rel, change, growth) {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in " + name;
    document.querySelector(".h201").innerHTML = em18 + "";
    document.querySelector("p").innerHTML = "Emission absolute of " + name + " in 2018";
    document.querySelector(".h202").innerHTML = rel + "%";
    document.querySelector(".h203").innerHTML = change + "%";
    document.querySelector(".h204").innerHTML = growth + "";
}
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener("click", myFunction.bind(null, "Europe", euem18, eurel, euchange, eugrowth));
});
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener("click", myFunction.bind(null, "North America", naem18, narel, nachange, nagrowth));
});
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener("click", myFunction.bind(null, "South America", saem18, sarel, sachange, sagrowth));
});
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener("click", myFunction.bind(null, "Africa", afem18, afrel, afchange, afgrowth));
});
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener("click", myFunction.bind(null, "Asia", asem18, asrel, aschange, asgrowth));
});
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener("click", myFunction.bind(null, "Australia", auem18, aurel, auchange, augrowth));
});
//# sourceMappingURL=script.js.map