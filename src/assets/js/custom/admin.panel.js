"use strict";var AdminPanel=AdminPanel||{};$((function(){AdminPanel={init:function(){AdminPanel.statisticsChart(),AdminPanel.campaignsChart(),AdminPanel.walletAnalysis()},
/*!
         * Listing statistics chart
         * Basic plugin: Chart js
         *---------------------------------------------------*/
statisticsChart:function(){if($("#statistics").length){var t=document.getElementById("statistics").getContext("2d");new Chart(t,{type:"pie",data:{labels:["Activated","Drafted","Published","Deleted"],datasets:[{backgroundColor:[Utils.colors("success"),Utils.colors("info"),Utils.colors("danger"),Utils.colors("light")],data:[21,10,32,17]}]},options:{responsive:!0,maintainAspectRatio:!1,title:{display:!1},tooltips:{intersect:!1,mode:"nearest"},legend:{position:"left",labels:{boxWidth:16,padding:16}},layout:{padding:{left:0,right:0,top:0,bottom:0}},elements:{arc:{borderWidth:0}}}})}},
/*!
         * Listing ads campaigns chart
         * Basic plugin: Chart js
         *---------------------------------------------------*/
campaignsChart:function(){if($("#campaigns").length){var t=document.getElementById("campaigns").getContext("2d");new Chart(t,{type:"bar",data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul"],datasets:[{label:"Instagram",backgroundColor:Utils.colors("danger"),data:[15,20,25,30,25,20,15]},{label:"Facebook",backgroundColor:"#f6f5f5",data:[15,20,25,30,25,20,15]}]},options:{title:{display:!1},tooltips:{intersect:!1,mode:"nearest"},legend:{position:"bottom",labels:{boxWidth:16,padding:24}},responsive:!0,maintainAspectRatio:!1,barRadius:4,scales:{xAxes:[{barThickness:20,display:!1,gridLines:!1,stacked:!0}],yAxes:[{display:!1,stacked:!0,gridLines:!1}]},layout:{padding:{left:0,right:0,top:0,bottom:0}}}})}},
/*!
         * Wallet analysis chart
         * Basic plugin: Chart js
         *---------------------------------------------------*/
walletAnalysis:function(){var t=$("#walletAnalysis");if(0===t.length)return!1;var a={type:"bar",data:{labels:["J","F","M","A","M","J","J","A","S","O","N","D"],datasets:[{label:"Transaction",data:[2,4,3,1,5,4,3,6,2,4,5,8],backgroundColor:Utils.colors("danger"),borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,barRadius:4,tooltips:{callbacks:{title:function(t,a){return moment.months(t[0].index)}}},legend:{display:!1},scales:{xAxes:[{barThickness:20,gridLines:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,stepSize:2,min:0,max:10}}]}}};new Chart(t,a)}},$(document).ready(AdminPanel.init)}));
//# sourceMappingURL=admin.panel.js.map
