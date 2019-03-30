import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/china';

const Chart = ({data}) => {

  const getOption = () => {

    let heatMapData = [];

    if (data) {
      heatMapData = data.map(function (item) {
        return {
          name: item['province'],
          value: item['amount']
        };
      });
    }

    return {
      title: {
        text: '国内各省份信令点密度总览',
        subtext: '悬停以查看详细信息',
        textStyle: {
          color: '#ffffff'
        },
        left: 'center',
        top: 20
      },
      visualMap: {
        min: 0,
        max: 15000,
        calculable: false,
        orient: 'vertical',
        textStyle: {
          color: '#ffffff'
        },
        show: false,
        inRange: {
          color: ['#e8f7ff', '#006edd'],
          symbolSize: [30, 100]
        }
      },
      tooltip: {
        padding: 10,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
          color: '#ffffff',
          decoration: 'none'
        }
      },
      series: [
        {
          name: '信令点数量',
          type: 'map',
          mapType: 'china',
          roam: true,
          zoom: 1.1,
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              borderColor: '#73aadc',
              borderWidth: 1,
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(128, 217, 248, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: '#acb73e',
              borderWidth: 0,
              label: {
                show: true
              }
            }
          },
          data: heatMapData
        }]
    };
  };

  return (
    <div>
      <ReactEcharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        style={{width: '100%', height: 'calc(100vh - 270px)'}}
      />
    </div>
  );
};

Chart.propTypes = {};

export default Chart;
