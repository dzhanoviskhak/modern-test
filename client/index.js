$(document).ready(function () {
  const URL = 'https://api.demoleap.com/exercise';
  const localURL = 'http://localhost:5050/';
  const graphContainer = $('#graph');
  const chartContainer = $('#pieChart');

  const btnServer = $('#btn-server');
  const btnRandom = $('#btn-random');
  const btnLocal = $('#btn-local');

  const switchToChart = $('#chartBtn');
  const switchToGraph = $('#graphBtn');

  let chartTrue = false;

  let data = {
    bars: {
      'Jan.': Math.floor(Math.random() * 50) + 1,
      'Feb.': Math.floor(Math.random() * 50) + 1,
      'Mar.': Math.floor(Math.random() * 50) + 1,
      'Apr.': Math.floor(Math.random() * 50) + 1,
      May: Math.floor(Math.random() * 50) + 1,
      'Jun.': Math.floor(Math.random() * 50) + 1,
      'Jul.': Math.floor(Math.random() * 50) + 1,
      'Aug.': Math.floor(Math.random() * 50) + 1,
      'Sep.': Math.floor(Math.random() * 50) + 1,
      'Oct.': Math.floor(Math.random() * 50) + 1,
      'Nov.': Math.floor(Math.random() * 50) + 1,
      'Dec.': Math.floor(Math.random() * 50) + 1,
    },
    pie: {
      Data1: Math.floor(Math.random() * 100) + 1,
      Data2: Math.floor(Math.random() * 100) + 1,
      Data3: Math.floor(Math.random() * 100) + 1,
    },
  };

  console.log(data.bars.jan);
  drawGraph(data.bars);

  switchToChart.click(function () {
    chartTrue = true;
    switchToGraph.removeClass('selected');
    switchToChart.addClass('selected');
    drawChart(data.pie);
  });

  switchToGraph.click(function () {
    chartTrue = false;
    switchToChart.removeClass('selected');
    switchToGraph.addClass('selected');
    drawGraph(data.bars);
  });

  function drawChart(pie) {
    var options = {
      animationEnabled: true,
      legend: {
        horizontalAlign: 'left',
        verticalAlign: 'center',
      },
      data: [
        {
          type: 'pie',
          startAngle: 90,
          legendText: '{name}',
          dataPoints: [
            { y: pie.Data1, name: 'Data1', color: '#186AA5' },
            { y: pie.Data2, name: 'Data2', color: '#98E3FE' },
            { y: pie.Data3, name: 'Data3', color: '#0FA8E2' },
          ],
        },
      ],
    };

    chartContainer.CanvasJSChart(options);
  }

  function drawGraph(bars) {
    var options = {
      animationEnabled: true,
      axisY: {
        tickThickness: 0,
        lineThickness: 0,
      },
      axisX: {
        tickThickness: 0,
        lineThickness: 0,
      },
      data: [
        {
          type: 'column',
          color: '#186AA5',
          dataPoints: [
            { y: bars['Jan.'], label: 'Jan' },
            { y: bars['Feb.'], label: 'Feb' },
            { y: bars['Mar.'], label: 'Feb' },
            { y: bars['Apr.'], label: 'Feb' },
            { y: bars['May'], label: 'Feb' },
            { y: bars['Jun.'], label: 'Feb' },
            { y: bars['Jul.'], label: 'Feb' },
            { y: bars['Aug.'], label: 'Feb' },
            { y: bars['Sep.'], label: 'Feb' },
            { y: bars['Oct.'], label: 'Feb' },
            { y: bars['Nov.'], label: 'Feb' },
            { y: bars['Dec.'], label: 'Feb' },
          ],
        },
      ],
    };

    chartContainer.CanvasJSChart(options);
  }

  btnServer.click(function () {
    $.ajax({
      url: URL,
      type: 'POST',
      success: function (result) {
        if (chartTrue) {
          drawChart(result.pie);
        } else {
          drawGraph(result.bars);
        }
      },
    });
  });

  btnLocal.click(function () {
    $.ajax({
      url: localURL,
      type: 'POST',
      success: function (result) {
        if (chartTrue) {
          drawChart(result.pie);
        } else {
          drawGraph(result.bars);
        }
      },
    });
  });

  btnRandom.click(function () {
    if (chartTrue) {
      const pie = {
        Data1: Math.floor(Math.random() * 100) + 1,
        Data2: Math.floor(Math.random() * 100) + 1,
        Data3: Math.floor(Math.random() * 100) + 1,
      };
      drawChart(pie);
    } else {
      const bars = {
        'Jan.': Math.floor(Math.random() * 50) + 1,
        'Feb.': Math.floor(Math.random() * 50) + 1,
        'Mar.': Math.floor(Math.random() * 50) + 1,
        'Apr.': Math.floor(Math.random() * 50) + 1,
        May: Math.floor(Math.random() * 50) + 1,
        'Jun.': Math.floor(Math.random() * 50) + 1,
        'Jul.': Math.floor(Math.random() * 50) + 1,
        'Aug.': Math.floor(Math.random() * 50) + 1,
        'Sep.': Math.floor(Math.random() * 50) + 1,
        'Oct.': Math.floor(Math.random() * 50) + 1,
        'Nov.': Math.floor(Math.random() * 50) + 1,
        'Dec.': Math.floor(Math.random() * 50) + 1,
      };
      drawGraph(bars);
    }
  });
});
