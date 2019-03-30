import React from 'react';
import ReactEcharts from 'echarts-for-react';

import echarts from 'echarts/lib/echarts';

const Chart = ({data}) => {

  let xData = [];
  let yData = [];

  data.forEach(function (item) {
    xData.push(`${item.country}${item.capital}`);
    yData.push(item.amount);
  });

  const getOption = () => {
    return {
      title: {
        text: 'HLR节点连接数排行',
        textStyle: {
          color: '#ffffff'
        },
        left: 'center',
        top: 20
      },
      backgroundColor: '#0f375f',
      grid: {
        top: '20%',
        bottom: '10%',
        left: '25%'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true
          }
        }
      },
      xAxis: {
        data: xData,
        axisLine: {
          show: false //隐藏X轴轴线
        },
        axisTick: {
          show: false //隐藏X轴刻度
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#ebf8ac' //X轴文字颜色
          }
        }
      },
      yAxis: [
        {
          type: 'value',
          nameTextStyle: {
            color: '#ebf8ac'
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ebf8ac'
            }
          }
        },
        {
          type: 'value',
          gridIndex: 0,
          min: 50,
          max: 100,
          splitNumber: 8,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
            }
          }
        }
      ],
      series: [
        {
          name: '连接数',
          type: 'bar',
          barWidth: 15,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#6f3d9e'
                },
                {
                  offset: 1,
                  color: '#3637a3'
                }
              ])
            }
          },
          data: yData
        }
      ]
    };
  };
  return (
    <div>
      <ReactEcharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        style={{width: '100%', height: 'calc(50vh - 35px)'}}
      />
    </div>
  );
};

Chart.propTypes = {};

export default Chart;
