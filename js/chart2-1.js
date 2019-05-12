new Chart(document.getElementById("graph2-1"), {
    type: 'horizontalBar',
    data: {
      labels: ["80+", "60-79", "40-59", "20-39", "0-19"],
      datasets: [
        {
          label: "Population (Percentage)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [3.7,18.9,25.3,27.0,25.1]
        }
      ]
    },
    options: {
      legend: { display: false 
      },
      title: {
        display: true,
        text: 'United States Population Breakdown (Total 331m)'
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