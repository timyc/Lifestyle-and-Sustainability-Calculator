new Chart(document.getElementById("graph2-7"), {
    type: 'horizontalBar',
    data: {
      labels: ["80+", "60-79", "40-59", "20-39", "0-19"],
      datasets: [
        {
          label: "Population (Percentage)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [8.9,25.2,27.3,21.4,17.2]
        }
      ]
    },
    options: {
      legend: { display: false 
      },
      title: {
        display: true,
        text: 'Japan Population Breakdown (Total 125m)'
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