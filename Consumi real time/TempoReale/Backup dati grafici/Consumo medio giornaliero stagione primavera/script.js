console.log('DEBUG', data)
//console.log('DEBUG', variables)
 
var xaxisName = "Indice Orario"
if ("xaxisName" in variables) {
  xaxisName = variables.xaxisName
}
 
var yaxisName = "Kw/h"
if ("yaxisName" in variables) {
  yaxisName = variables.yaxisName
}
 
var series = []
var obj
// x = data.series.shift()
// series.push({x: x.fields[0].values.buffer, type: 'scatter'})
for (const s of data.series) {
  for (let i=0;i< s.fields.length; i++) {
    console.log(s)
    if (i > 0) {      
      series.push({x: s.fields[0].values.buffer, y: s.fields[i].values.buffer, name: s.fields[i].name})
    } else {
      xaxisName = s.fields[0].name
    }
    
  }
  /*if (s.fields.length == 2) {
    series.push({x: s.fields[0].values.buffer, y: s.fields[1].values.buffer, name: s.fields[1].name, type: 'scatter'})
  } else {
    series.push({y: s.fields[i].values.buffer, name: s.fields[i].name, type: 'scatter'})
  }*/
  
}
 
return {data:series,layout: {xaxis: {title: xaxisName}, yaxis: {title: yaxisName}}};