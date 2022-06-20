var ECGchart = undefined;
var LVPchart = undefined;
var ECGurls = [];
var LVPurls = [];
var ECGs = [];
var LVPs = [];
var ECGTexts = [];
var LVPTexts = [];
var ecgIndicator = undefined;
var lvpIndicator = undefined;
var maxECGTime = 0.0,
  maxLVPTime = 0.0;
var minECGTime = 0.0,
  minLVPTime = 0.0;
var currentECGName = "None";
var currentLVPName = "None";
var timeLineOffset = 0.0;
//  These ecgName and lvpName are global variables used in Traces.vue to reset the value to null
var ecgName = null;
var lvpName = null;

require(["dijit/Dialog"]);

function loadChart(ecg, lvp, category, timeOffset) {
  require(["dojo/ready"], function (ready) {
    ready(function () {
      require([
        "dojo/_base/declare",
        "dojo/dom-construct",
        "dojox/charting/Chart",
        "dojox/charting/plot2d/StackedLines",
        "dojox/charting/plot2d/Grid",
        "dojox/charting/themes/Claro",
        "dojox/charting/axis2d/Default",
        "dojox/charting/plot2d/Indicator",
        "dojox/charting/themes/Tom",
      ], function (declare, domConstruct, Chart, StackedLines, Grid, Claro, axis2dDefault, plot2dIndicator, tomTheme) {
        ready(function () {
          //   var ECGchart;

          tomTheme.chart.fill = "transparent";
          tomTheme.plotarea.fill = "transparent";
          tomTheme.chart.stroke = "transparent";
          var ecgDom = document.getElementById("rightECG");

          ECGchart = new Chart(ecgDom); //html element (dom) the chart will be drawn
          ECGchart.setTheme(tomTheme);
          /* add the x-axis */
          ECGchart.addAxis("x", {
            type: "Invisible",
            majorLabels: false,
            minorTicks: false,
            minorLabels: false,
            microTicks: false,
          });
          /* add the y-axis */
          ECGchart.addAxis("y", {
            // type: "Invisible",
            vertical: true,
            majorLabels: true,
            majorTickStep: 200,
            minorTick: { color: "rgba(0,0,0,0)" },
            majorTick: { color: "rgba(0,0,0,0)" },
            minorLabels: false,
            font: "normal normal normal 10pt Helvetica",
            fontColor: "rgba(0,0,0,0)",
            stroke: [0, 0, 0, 0],
          });
          ECGchart.addPlot("time", {
            type: plot2dIndicator,
            vertical: true,
            lineStroke: { color: "#00ccff" },
            labels: null,
            stroke: null,
            outline: null,
            fill: null,
            offset: { y: -7, x: -10 },
            values: 0.0,
          });
          ecgIndicator = ECGchart.getPlot("time");

          //   var LVPchart;
          var lvpDom = document.getElementById("rightLVP");
          /* create the chart on the dom */
          LVPchart = new Chart(lvpDom);
          LVPchart.setTheme(tomTheme);
          /* add the x-axis */
          LVPchart.addAxis("x", {
            type: "Invisible",
            majorLabels: false,
            minorTicks: false,
            minorLabels: false,
            microTicks: false,
          });
          /* add the y-axis */
          LVPchart.addAxis("y", {
            vertical: true,
            min: -40,
            max: 160,
            minorTicks: false,
            majorTickStep: 120,
            font: "normal normal normal 14pt Helvetica",
            titleFont: "normal normal normal 16pt Helvetica",
            title: "",
            titleFontColor: [120, 120, 120],
          });
          /* optional add the grid */
          LVPchart.addPlot("grid", {
            type: Grid,
            hMajorLines: false,
            hMinorLines: false,
            vMajorLines: false,
            vMinorLines: false,
            majorHLine: { color: "green", width: 0.2 },
            majorVLine: { color: "red", width: 0.2 },
          });
          LVPchart.addPlot("time", {
            type: plot2dIndicator,
            vertical: true,
            lineStroke: { color: "#00ccff" },
            labels: null,
            stroke: null,
            outline: null,
            fill: null,
            offset: { y: -7, x: -10 },
            values: 0.0,
          });
          lvpIndicator = LVPchart.getPlot("time");

          timeLineOffset = timeOffset;

          if (!ECGurls[ecg.name]) {
            ECGurls[ecg.name] = ecg.path;
          }
          if (!LVPurls[lvp.name]) {
            LVPurls[lvp.name] = lvp.path;
          }

          showLVPChart(lvp.name, lvp.path, category);
          showECGChart(ecg.name, ecg.path, category);
        });
      });
    });
  });
}

function showECGChart(axisName, ecgPath, category) {
  ecgName = axisName;
  if (ECGs[axisName]) {
    showECGInternal(category, axisName);
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = onECGLoaded(xmlhttp, category, axisName);
    xmlhttp.open("GET", ecgPath, true);
    xmlhttp.send();
  }
}

function onECGLoaded(xmlhttp, category, axisName) {
  return function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var viewData = JSON.parse(xmlhttp.responseText);
      var newViewData = rescaleXAxis(viewData);
      //   defaultEcgData = rescaleXAxis(defaultEcgData);
      ECGs[axisName] = newViewData;
      if (category) {
        showECGInternal(category, axisName);
      }
    }
  };
}

function loadNormalECGandLVP(isECG) {
  var xmlhttp = new XMLHttpRequest();
  if (isECG === "ecg") {
    xmlhttp.onreadystatechange = onECGLoaded(xmlhttp, null, "Normal");
    xmlhttp.open("GET", "ECG/NormalECG.json", true);
    xmlhttp.send();
  } else {
    xmlhttp.onreadystatechange = onLVPLoaded(xmlhttp, null, "Normal");
    xmlhttp.open("GET", "LVP/NormalLVP.json", true);
    xmlhttp.send();
  }
}

var showECGInternal = function (category, axisName) {
  // if (axisName != currentECGName) {
  var currentECG = ECGs[axisName];
  maxECGTime = currentECG[currentECG.length - 1]["x"];
  minECGTime = currentECG[0]["x"];
  ECGchart.removeSeries(currentECGName);
  ECGchart.removeSeries("Normal");
  currentECGName = axisName;
  var colourName = "rgba(50,205,50,0.6)";
  var widthvar = 2;

  if (category == "warning") {
    colourName = "rgba(255,255,0,1)";
    widthvar = 3;
  } else if (category == "error") {
    colourName = "rgba(255,50,0,1)";
    widthvar = 3;
  }

  if (window.ecgDone != true) {
    ECGchart.addSeries(axisName, currentECG, {
      stroke: { color: colourName, width: widthvar },
    });
    if (
      axisName == "CompensatedFailure" ||
      axisName == "DecompensatedFailure" ||
      axisName == "SmallInfarct" ||
      axisName == "LargeInfarct" ||
      axisName == "Arrhythmia"
    ) {
      if (ECGs["Normal"]) {
        ECGchart.addSeries("Normal", ECGs["Normal"], {
          stroke: { color: "rgba(50,205,50,0.6)", width: 2 },
        });
      } else {
        loadNormalECGandLVP("ecg");
        setTimeout(() => {
          ECGchart.addSeries("Normal", ECGs["Normal"], {
            stroke: { color: "rgba(50,205,50,0.6)", width: 2 },
          });
          ECGchart.render();
          ECGchart.resize("100%", "100%");
        }, 500);
      }
    }

    ECGchart.render();
    ECGchart.resize("100%", "100%");
  }
  ecgDone = true;
  // }
};

function showLVPChart(axisName, lvpPath, category) {
  lvpName = axisName;
  if (LVPs[axisName]) {
    showLVPInternal(category, axisName);
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = onLVPLoaded(xmlhttp, category, axisName);
    xmlhttp.open("GET", lvpPath, true);
    xmlhttp.send();
  }
}

function onLVPLoaded(xmlhttp, category, axisName) {
  return function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var viewData = JSON.parse(xmlhttp.responseText);
      var newViewData = rescaleXAxis(viewData);
      LVPs[axisName] = newViewData;
      if (category) {
        showLVPInternal(category, axisName);
      }
    }
  };
}

var showLVPInternal = function (category, axisName) {
  // if (axisName != currentLVPName) {
  var currentLVP = LVPs[axisName];
  maxLVPTime = currentLVP[currentLVP.length - 1]["x"];
  minLVPTime = currentLVP[0]["x"];
  LVPchart.removeSeries(currentLVPName);
  LVPchart.removeSeries("Normal");
  currentLVPName = axisName;
  var colourName = "rgba(50,205,50,0.6)";
  var widthvar = 2;

  if (category == "warning") {
    colourName = "rgba(255,255,0,1)";
    widthvar = 3;
  } else if (category == "error") {
    colourName = "rgba(255,50,0,1)";
    widthvar = 3;
  }

  if (window.lvpDone != true) {
    LVPchart.addSeries(axisName, currentLVP, {
      stroke: { color: colourName, width: widthvar },
    });
    if (
      axisName == "CompensatedFailure" ||
      axisName == "DecompensatedFailure" ||
      axisName == "SmallInfarct" ||
      axisName == "LargeInfarct" ||
      axisName == "Arrhythmia"
    ) {
      if (LVPs["Normal"]) {
        LVPchart.addSeries("Normal", LVPs["Normal"], {
          stroke: { color: "rgba(50,205,50,0.6)", width: 2 },
        });
      } else {
        loadNormalECGandLVP("lvp");
        setTimeout(() => {
          LVPchart.addSeries("Normal", LVPs["Normal"], {
            stroke: { color: "rgba(50,205,50,0.6)", width: 2 },
          });
          LVPchart.render();
          LVPchart.resize("100%", "100%");
        }, 500);
      }
    }
    LVPchart.render();
    LVPchart.resize("100%", "100%");
  }
  lvpDone = true;
  // }
};

var rescaleXAxis = function (viewData) {
  var len = viewData.length;
  var max_x = viewData[len - 1].x;
  var min_x = viewData[0].x;
  for (var i = 0; i < len; i++) {
    viewData[i].x = ((viewData[i].x - min_x) / (max_x - min_x)) * 100.0;
  }

  return viewData;
};

function updateIndicator(normaliseTime) {
  if (
    lvpIndicator &&
    currentLVPName != " None" &&
    ecgIndicator &&
    currentECGName != " None" &&
    ecgName === currentECGName &&
    lvpName === currentLVPName
  ) {
    var lvpTime = normaliseTime * (maxLVPTime - minLVPTime) + minLVPTime;
    var ecgTime = normaliseTime * (maxECGTime - minECGTime) + minECGTime;
    if (timeLineOffset != 0.0 && timeLineOffset) {
      lvpTime = lvpTime + timeLineOffset;
      ecgTime = ecgTime + timeLineOffset;

      if (lvpTime > maxLVPTime) {
        lvpTime = lvpTime - maxLVPTime + minLVPTime;
      } else if (lvpTime < minLVPTime) {
        lvpTime = maxLVPTime - (minLVPTime - lvpTime);
      }
      if (ecgTime > maxECGTime) {
        ecgTime = ecgTime - maxECGTime + minECGTime;
      } else if (ecgTime < minECGTime) {
        ecgTime = maxECGTime - (minECGTime - ecgTime);
      }
    }

    lvpIndicator.opt.values = [lvpTime];
    ecgIndicator.opt.values = [ecgTime];
    lvpIndicator.dirty = true;
    lvpIndicator.render();
    ecgIndicator.dirty = true;
    ecgIndicator.render();
  }
}
