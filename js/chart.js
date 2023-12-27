function bindPieChart (chartName) {
  var chartDom = document.getElementById(chartName)
  var myChart = echarts.init(chartDom)
  var option = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: '#464646',
          },
        },
        axisLine: {
          lineStyle: {
            width: 40,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: [{ value: 20 }],
      },
    ],
  }
  option && myChart.setOption(option)
}

function bindBarChart (chartTitle, chartName, dataX, dataY) {
  var chartDom = document.getElementById(chartName)
  var myChart = echarts.init(chartDom)
  var option = {
    // title: {
    //   text: chartTitle,
    //   textStyle: {
    //     color: '#fff',
    //     fontSize: 20,
    //   },
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      //调整图表位置
      show: false, //是否显示直角坐标系网格
      top: '15%', // 一下数值可为百分比也可为具体像素值
      right: '5%',
      bottom: '15%',
      left: '10%',
    },
    legend: {
      data: dataX,
      right: 10,
      top: 12,
      textStyle: {
        color: '#fff',
      },
      itemWidth: 12,
      itemHeight: 10,
      // itemGap: 35
    },
    xAxis: {
      type: 'category',
      data: dataX,

      axisPointer: {
        type: 'shadow',
      },
      axisLine: {
        show: false, //横轴样式
      },
      axisLabel: {
        show: true,
        textStyle: {
          // color: '#85B0C4',
          color: 'white',
        },
      },
      axisTick: {
        show: false, //隐藏刻度线
      },
    },

    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: 'white',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
        },
      },
      axisLabel: {
        // y轴 数据格式和颜色
        show: true,
        formatter: '{value}',
        textStyle: {
          // color: '#85B0C4',
          color: 'white',
        },
      },
    },
    series: {
      name: '1',
      type: 'bar',
      barWidth: '15%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#fccb05',
            },
            {
              offset: 1,
              color: '#f5804d',
            },
          ]),
          barBorderRadius: 12,
        },
      },
      data: dataY,
    },
  }

  option && myChart.setOption(option)
}

function bindLineChart (chartTitle, chartName, dataX, dataY) {
  var chartDom = document.getElementById(chartName)
  var myChart = echarts.init(chartDom)
  var option = {
    // title: {
    //   text: chartTitle,
    //   textStyle: {
    //     color: '#fff',
    //     fontSize: 20,
    //   },
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#fff',
        },
      },
      // 图列提示框，默认不显示
      show: true,
      color: 'red',
    },
    grid: {
      //调整图表位置
      show: false, //是否显示直角坐标系网格
      top: '15%', // 一下数值可为百分比也可为具体像素值
      right: '5%',
      bottom: '15%',
      left: '10%',
    },
    legend: {
      top: '5%',
      data: {
        name: chartTitle,
        textStyle: {
          color: '#A9DDEE', // 单独设置某一个图列的颜色
        },
      },
    },
    xAxis: [
      {
        type: 'category',
        data: dataX,
        axisPointer: {
          type: 'shadow',
        },
        axisLine: {
          show: false, //横轴样式
        },
        axisLabel: {
          show: true,
          textStyle: {
            // color: '#85B0C4',
            color: 'white',
          },
        },
        axisTick: {
          show: false, //隐藏刻度线
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: 'white',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.3)',
          },
        },
        axisLabel: {
          // y轴 数据格式和颜色
          show: true,
          formatter: '{value}',
          textStyle: {
            // color: '#85B0C4',
            color: 'white',
          },
        },
      },
    ],
    series: {
      name: '折线名称',
      type: 'line',
      areaStyle: {},
      // yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value
        },
      },
      data: dataY,
      itemStyle: {
        color: {
          type: 'linear',
          colorStops: [
            {
              offset: 0,
              color: '#05bcda', // 0% 处的颜色
            },
            {
              offset: 0.9,
              color: '#05bcda', // 90% 处的颜色
            },
          ],
        },
      },
      smooth: true,
    },
  }

  option && myChart.setOption(option)
}