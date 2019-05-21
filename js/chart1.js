new Chart(document.getElementById("graph1"), {
  type: 'line',
  data: {
    labels: ["March","April","May","June","July","August","September","October","November"],
    datasets: [{ 
        data: [86.5,87.5,85.1,79.9,75,77,83,85.5,86],
        label: "2004",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [85.9,85.3,82,78,74,73,82,85,85],
        label: "2013",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [85,85.3,84,80,77,72,79,80,81],
        label: "2015",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [83,84.3,83,79,75,70,77,79,80],
        label: "Projected 2025",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Greenland Ice Albedo Approximation'
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Percentage (%)'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }]
    },
    elements: {
      point:{
        radius: 0
      }
    }
  }
});