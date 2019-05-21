new Chart(document.getElementById("graph2-6"), {
    type: 'horizontalBar',
    data: {
      labels: ["80+", "60-79", "40-59", "20-39", "0-19"],
      datasets: [
        {
          label: "Population (Percentage)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [1.8,11.5,25.1,32.2,29.4]
        }
      ]
    },
    options: {
      legend: { display: false 
      },
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Brazil Population Breakdown (Total 214m)'
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