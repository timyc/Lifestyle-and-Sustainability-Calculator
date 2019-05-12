new Chart(document.getElementById("graph2-2"), {
    type: 'horizontalBar',
    data: {
      labels: ["80+", "60-79", "40-59", "20-39", "0-19"],
      datasets: [
        {
          label: "Population (Percentage)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [1.7,15.1,30.8,29.7,22.7]
        }
      ]
    },
    options: {
      legend: { display: false 
      },
      title: {
        display: true,
        text: 'China Population Breakdown (Total 1.398b)'
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