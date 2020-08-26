!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/orcaAL/",n(n.s=4)}([function(e,t){e.exports=ApexCharts},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(2);var a=n(0);window.Apex={chart:{zoom:{enabled:!1},toolbar:{show:!1}},noData:{text:"Loading..."},dataLabels:{enabled:!1},theme:{mode:"dark",palette:"palette10"},yaxis:{decimalsInFloat:2}};const o=new a(document.getElementById("accuracyChart"),{chart:{type:"line"},colors:["#5d99c6","#C3fDFF"],series:[],xaxis:{type:"numeric"},stroke:{width:3}});o.render();const r=new a(document.getElementById("lossChart"),{chart:{type:"line"},colors:["#5d99c6","#C3fDFF"],series:[],xaxis:{type:"numeric"},stroke:{width:3}});r.render();const i={chart:{type:"heatmap",events:{dataPointSelection:function({},{},e){console.log(e.seriesIndex,e.dataPointIndex)}}},colors:["#B704D6"],series:[],xaxis:{position:"top"}},c=new a(document.getElementById("confusionMatrix"),i);c.render();const d=new a(document.getElementById("validationsChart"),{chart:{type:"line"},colors:["#FF6699","#5d99c6"],series:[],xaxis:{type:"datetime"},yaxis:[{title:{text:"Sounds Validated",style:{fontWeight:"normal"}},decimalsInFloat:2},{opposite:!0,title:{text:"ML Model Accuracy",style:{fontWeight:"normal"}},decimalsInFloat:2}]});d.render();var s=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{d(a.next(e))}catch(e){r(e)}}function c(e){try{d(a.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}d((a=a.apply(e,t||[])).next())}))};var l;l=()=>{(function(){return s(this,void 0,void 0,(function*(){const e=yield fetch("https://d14pgy6pzqfa4g.cloudfront.net/statistics"),t=yield e.json();document.getElementById("retrain-progress").textContent=`${t.retrain.progress}/${t.retrain.goal}`,t.training?(document.getElementById("training").style.display="block",document.querySelector("nav").style.height="30rem"):(document.getElementById("training").style.display="none",document.querySelector("nav").style.height="26rem");const[n,a,i,s]=t.confusionMatrix;o.updateSeries([{name:"train",data:t.accuracy.train},{name:"validation",data:t.accuracy.validation}]),r.updateSeries([{name:"train",data:t.loss.train},{name:"validation",data:t.loss.validation}]),c.updateSeries([{name:"Actual Yes",data:[{x:"Predicted No",y:i},{x:"Predicted Yes",y:s}]},{name:"Actual No",data:[{x:"Predicted No",y:n},{x:"Predicted Yes",y:a}]}]),d.updateSeries([{name:"sounds",data:t.accuracyVLabels.labels},{name:"accuracy",data:t.accuracyVLabels.accuracies}]),d.updateOptions({xaxis:{categories:t.accuracyVLabels.dates}})}))})().then(()=>console.log("Successs fetching data!")).catch(e=>console.error("Fetch Error!",e))},"loading"!=document.readyState?l():document.addEventListener("DOMContentLoaded",l)}]);