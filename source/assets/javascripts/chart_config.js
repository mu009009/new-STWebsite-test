export const dataConfig = {
    type: 'bubble',
    data: {
      datasets: [
      {

          label: 'Signals',
          fontSize: 20,
          fontWeight: 'bold',
          data: [
              {
                  x: 1,
                  y: 0,
                  r: 7
              },
              {
                  x: 2,
                  y: 0,
                  r: 7
              },
              {
                  x: 3,
                  y: 0,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'Other Data Aggregators',
          data: [
              {
                  x: 1,
                  y: 1,
                  r: 7
              },
              {
                  x: 2,
                  y: 1,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'Sysomos',
          data: [
              {
                  x: 1,
                  y: 2,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'Radian6',
          data: [
              {
                  x: 1,
                  y: 3,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      }]
    },
    options: {
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
              gridLines: {
                zeroLineWidth: 3,
                zeroLineColor: "#79BC42"
              },
              ticks: {
                max: 4,
                min: -0.5,
                padding: 30,
                stepSize: 1,
                callback: function(value) {
                  if (value == 0) {return "Signals";}
                  if (value == 1) {return ["Other", "Data Aggregators"];}
                  if (value == 2) {return "Sysomos";}
                  if (value == 3) {return "Radian6";}
                }
              }
            }],
            xAxes: [{
              position: "top",
              ticks: {
                max: 3,
                min: 0,
                stepSize: 0.5,
                callback: function(value) {
                  if (value == 1) {return ["3rd Party", "Data", ""];}
                  if (value == 2) {return ["2nd Party", "Data", ""];}
                  if (value == 3) {return ["1st Party", "Data", ""];}
                },
                fontColor: "#00a1ae",
                fontFamily: "'Averia Serif Libre', serif",
                fontSize: 15,
                maxRotation: "0",
              }
            }]
        }
    }
};

export const analyticsConfig = {
    type: 'bubble',
    data: {
      datasets: [
      {

          label: 'Signals',
          data: [
              {
                  x: 1,
                  y: 0,
                  r: 7
              },
              {
                  x: 2,
                  y: 0,
                  r: 7
              },
              {
                  x: 3,
                  y: 0,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'SAS',
          data: [
              {
                  x: 1,
                  y: 1,
                  r: 7
              },
              {
                  x: 2,
                  y: 1,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'Rapidminer',
          data: [
              {
                  x: 1,
                  y: 2,
                  r: 7
              }, {
                  x: 2,
                  y: 2,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'KNIME',
          data: [
              {
                  x: 1,
                  y: 3,
                  r: 7
              }, {
                  x: 2,
                  y: 3,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },{
          label: 'Lexalytics',
          data: [
              {
                  x: 1,
                  y: 4,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },{
          label: 'Alchemy API',
          data: [
              {
                  x: 1,
                  y: 5,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },{
          label: 'Clarabridge',
          data: [
              {
                  x: 1,
                  y: 6,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },]
    },
    options: {
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
              gridLines: {
                zeroLineWidth: 3,
                zeroLineColor: "#79BC42"
              },
              ticks: {
                max: 7,
                min: -0.5,
                padding: 30,
                stepSize: 1,
                callback: function(value) {
                  if (value == 0) {return "Signals";}
                  if (value == 1) {return "SAS";}
                  if (value == 2) {return "Rapidminer";}
                  if (value == 3) {return "KNIME";}
                  if (value == 4) {return "Lexalytics";}
                  if (value == 5) {return "Alchemy API";}
                  if (value == 6) {return "Clarabridge";}
                }
              }
            }],
            xAxes: [{
              position: "top",
              ticks: {
                max: 3,
                min: 0,
                stepSize: 0.5,
                callback: function(value) {
                  if (value == 1) {return ["Sentiment", "", ""];}
                  if (value == 2) {return ["Machine", "Learning", ""];}
                  if (value == 3) {return ["Taxonomical Education", "Not Required", ""];}
                },
                fontColor: "#00a1ae",
                fontFamily: "'Averia Serif Libre', serif",
                fontSize: 15,
                maxRotation: "0",
              }
            }]
        }
    }
};

export const visualizationConfig = {
    type: 'bubble',
    data: {
      datasets: [
      {

          label: 'Signals',
          data: [
              {
                  x: 1,
                  y: 0,
                  r: 7
              },
              {
                  x: 2,
                  y: 0,
                  r: 7
              },
              {
                  x: 3,
                  y: 0,
                  r: 7
              },
              {
                  x: 4,
                  y: 0,
                  r: 7
              },
              {
                  x: 5,
                  y: 0,
                  r: 7
              },
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'DOMO',
          data: [
              {
                  x: 1,
                  y: 1,
                  r: 7
              },
              {
                  x: 2,
                  y: 1,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'Power BI',
          data: [
              {
                  x: 1,
                  y: 2,
                  r: 7
              },
              {
                  x: 2,
                  y: 2,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'BIME',
          data: [
              {
                  x: 1,
                  y: 3,
                  r: 7
              },
              {
                  x: 2,
                  y: 3,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'Tableau',
          data: [
              {
                  x: 1,
                  y: 4,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      },
      {
          label: 'QlikView',
          data: [
              {
                  x: 1,
                  y: 5,
                  r: 7
              }
          ],
          backgroundColor:"#79BC42",
          hoverBackgroundColor: "#79BC42",
      }]
    },
    options: {
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
              gridLines: {
                zeroLineWidth: 3,
                zeroLineColor: "#79BC42"
              },
              ticks: {
                max: 6,
                min: -0.5,
                padding: 30,
                stepSize: 1,
                callback: function(value) {
                  if (value == 0) {
                    return "Signals";
                  }
                  if (value == 1) {return "DOMO";}
                  if (value == 2) {return "Power BI";}
                  if (value == 3) {return "BIME";}
                  if (value == 4) {return "Tableau";}
                  if (value == 5) {return "QlikView";}
                }
              }
            }],
            xAxes: [{
              position: "top",
              ticks: {
                max: 5,
                min: 0,
                stepSize: 1,
                callback: function(value) {
                  if (value == 1) {return ["Flexible", "Visualization", " "];}
                  if (value == 2) {return ["Easy to use", " "];}
                  if (value == 3) {return ["Analytical", "Capabilities", " "];}
                  if (value == 4) {return ["Live-Share", "Collaboration", " "];}
                  if (value == 5) {return ["Record Level", "Navigation", " "];}
                },
                fontColor: "#00a1ae",
                fontFamily: "'Averia Serif Libre', serif",
                fontSize: 15,
                maxRotation: "0",
              }
            }]
        }
    }
};
