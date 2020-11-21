var euem08:number = 4956.7;
var euem18:number = 4208.3;

var afem08:number = 1028;
var afem18:number = 1235.5;

var saem08:number = 1132.6;
var saem18:number = 1261.5;

var naem08:number = 6600.4;
var naem18:number = 6035.6;

var asem08:number = 12954.7;
var asem18:number = 16274.1;

var gesem:number = euem18 + afem18 + saem18 + naem18 + asem18;

console.log('Die Emission von Europa war 2018: ' + euem18, 'kg CO2');
console.log('Relativ zur Gesamtemission verursachte Europa damit ' + (Math.round(((euem18/gesem)*100) * 100) / 100).toFixed(2),'%');
console.log('Für Europa hat sich 2018 die Emission um '+ (Math.round((100-(euem08/euem18)*100) * 100) / 100).toFixed(2),'% verändert');
console.log('Das entspricht einer Veränderung von ' + (Math.round((euem18-euem08) * 100) / 100).toFixed(2), 'kg CO2');

console.log('Die Emission von Afrika war 2018: ' + afem18, 'kg CO2');
console.log('Relativ zur Gesamtemission verursachte Afrika damit ' + (Math.round(((afem18/gesem)*100) * 100) / 100).toFixed(2),'%');
console.log('Für Afrika hat sich 2018 die Emission um '+ (Math.round((100-(afem08/afem18)*100) * 100) / 100).toFixed(2),'% verändert');
console.log('Das entspricht einer Veränderung von ' + (Math.round((afem18-afem08) * 100) / 100).toFixed(2), 'kg CO2');

console.log('Die Emission von Südamerika war 2018: ' + saem18, 'kg CO2');
console.log('Relativ zur Gesamtemission verursachte Südamerika damit ' + (Math.round(((saem18/gesem)*100) * 100) / 100).toFixed(2),'%');
console.log('Für Südamerika hat sich 2018 die Emission um '+ (Math.round((100-(saem08/saem18)*100) * 100) / 100).toFixed(2),'% verändert');
console.log('Das entspricht einer Veränderung von ' + (Math.round((saem18-saem08) * 100) / 100).toFixed(2), 'kg CO2');

console.log('Die Emission von Nordamerika war 2018: ' + naem18, 'kg CO2');
console.log('Relativ zur Gesamtemission verursachte Nordamerika damit ' + (Math.round(((naem18/gesem)*100) * 100) / 100).toFixed(2),'%');
console.log('Für Nordamerika hat sich 2018 die Emission um '+ (Math.round((100-(naem08/naem18)*100) * 100) / 100).toFixed(2),'% verändert');
console.log('Das entspricht einer Veränderung von ' + (Math.round((naem18-naem08) * 100) / 100).toFixed(2), 'kg CO2');

console.log('Die Emission von Asien war 2018: ' + asem18, 'kg CO2');
console.log('Relativ zur Gesamtemission verursachte Asien damit ' + (Math.round(((asem18/gesem)*100) * 100) / 100).toFixed(2),'%');
console.log('Für Asien hat sich 2018 die Emission um '+ (Math.round((100-(asem08/asem18)*100) * 100) / 100).toFixed(2),'% verändert');
console.log('Das entspricht einer Veränderung von ' + (Math.round((asem18-asem08) * 100) / 100).toFixed(2), 'kg CO2');