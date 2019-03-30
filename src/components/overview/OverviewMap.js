import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import 'echarts/extension/bmap/bmap';

const OverviewMap = ({data}) => {

  let scatterData = [];

  let lineData = [];

  data.data.slice(0, 420).forEach(function(item) {
    let scatteritem = [
      {
        'name': item['city_src'],
        'value': [item['lon_src'], item['lat_src'], 2],
        'symbolSize': 5,
        'itemStyle': {'normal': {'color': '#F58158'}}
      },
      {
        'name': item['city_dest'],
        'value': [item['lon_dest'], item['lat_dest'], 3],
        'symbolSize': 5,
        'itemStyle': {'normal': {'color': '#F58158'}}
      }
    ];

    let lineitem = {
      'fromName': item['city_src'],
      'toName': item['city_dest'],
      'coords': [
        [item['lon_src'], item['lat_src']],
        [item['lon_dest'], item['lat_dest']]]
    };

    scatterData.push(...scatteritem);
    lineData.push(lineitem);
  });

  const getOption = () => {
    return {
      title: {
        text: '（国内）节点连接情况总览',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ffffff'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: [],
        textStyle: {
          color: '#fff'
        },
        selectedMode: 'single'
      },
      bmap: {
        center: [116, 35],
        zoom: 6,
        roam: true,
        mapStyle: {
          styleJson: [
            {
              'featureType': 'water',
              'elementType': 'all',
              'stylers': {
                'color': '#044161'
              }
            },
            {
              'featureType': 'land',
              'elementType': 'all',
              'stylers': {
                'color': '#004981'
              }
            },
            {
              'featureType': 'boundary',
              'elementType': 'geometry',
              'stylers': {
                'color': '#064f85'
              }
            },
            {
              'featureType': 'railway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'highway',
              'elementType': 'geometry',
              'stylers': {
                'color': '#004981'
              }
            },
            {
              'featureType': 'highway',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#005b96',
                'lightness': 1
              }
            },
            {
              'featureType': 'highway',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'arterial',
              'elementType': 'geometry',
              'stylers': {
                'color': '#004981'
              }
            },
            {
              'featureType': 'arterial',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#00508b'
              }
            },
            {
              'featureType': 'poi',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'green',
              'elementType': 'all',
              'stylers': {
                'color': '#056197',
                'visibility': 'off'
              }
            },
            {
              'featureType': 'subway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'manmade',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'local',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'arterial',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'boundary',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#029fd4'
              }
            },
            {
              'featureType': 'building',
              'elementType': 'all',
              'stylers': {
                'color': '#1a5787'
              }
            },
            {
              'featureType': 'label',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }
          ]
        }
      },
      series: [
        {
          name: '地点',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke'
          },
          label: {
            emphasis: {
              show: true,
              position: 'right',
              formatter: '{b}'
            }
          },
          symbolSize: 2,
          showEffectOn: 'render',
          itemStyle: {
            normal: {
              color: '#46bee9'
            }
          },
          data: scatterData
        },
        {
          name: '线路',
          type: 'lines',
          coordinateSystem: 'bmap',
          zlevel: 2,
          large: true,
          effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'pin',
            symbolSize: 6,
            trailLength: 0
          },
          lineStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0, color: '#58B3CC'
                }, {
                  offset: 1, color: '#F58158'
                }], false),
              width: 1,
              opacity: 0.3,
              curveness: 0.1
            }
          },
          data: lineData
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
        style={{width: '100%', height: 'calc(100vh - 70px)'}}
      />
    </div>
  );
};

OverviewMap.propTypes = {};

export default OverviewMap;
