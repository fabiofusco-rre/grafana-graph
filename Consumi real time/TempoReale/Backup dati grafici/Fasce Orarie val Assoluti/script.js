console.log('DEBUG', data)

function delayedGreeting() {
  console.log("Goodbye!");
  for(i=0;i<10000;i++) {
    console.log('peppe',i)
  }
}



//console.log('DEBUG', variables)
let now = new Date()
let onoff = 1

if (onoff === 0) {
  let el = document.querySelector('[data-panelid="49"]')
  if (el) {
        el.style.display = 'none'
  }
} else {
//delayedGreeting();
console.log('subito dopo')
var xaxisName = "Indice Orario"
if ("xaxisName" in variables) {
  xaxisName = variables.xaxisName
}
 
var yaxisName = "kWh"
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
    buff = s.fields[0].values.buffer
    buff.push(12)
    buff = buff.slice(1)
    if (i > 0) {      
      series.push({x: buff, y: s.fields[i].values.buffer, name: s.fields[i].name, type:"bar"})
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
}
let now2 = new Date() 
console.log(now2 - now)
return {}
