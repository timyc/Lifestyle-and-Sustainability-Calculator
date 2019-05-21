new Chart(document.getElementById("graph2-8"), {
    type: 'horizontalBar',
    data: {
      labels: ["80+", "60-79", "40-59", "20-39", "0-19"],
      datasets: [
        {
          label: "Population (Percentage)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [3.8,18.3,26.1,25.6,26.2]
        }
      ]
    },
    options: {
      legend: { display: false 
      },
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'New Zealand Population Breakdown (Total 4.688m)'
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