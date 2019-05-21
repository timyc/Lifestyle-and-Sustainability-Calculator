new Chart(document.getElementById("graph2-3"), {
    type: 'horizontalBar',
    data: {
      labels: ["80+", "60-79", "40-59", "20-39", "0-19"],
      datasets: [
        {
          label: "Population (Percentage)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [6.3,20.2,25.6,23.8,24.1]
        }
      ]
    },
    options: {
      legend: { display: false 
      },
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'France Population Breakdown (Total 65m)'
      },
      scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Age'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Percent (%)'
        }
      }]
    },
    }
});