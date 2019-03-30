import React from 'react';
import styles from '../../styles/OverviewMap.less';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import 'echarts/extension/bmap/bmap';

const OverviewMap = ({data}) => {

  const getOption = () => {

    const scatterData = [
      {
        'name': data['city'],
        'value': [data['src_lon'], data['src_lat'], 3],
        'symbolSize': 5,
        'itemStyle': {'normal': {'color': '#F58158'}}
      },
      {
        'name': data['capital'],
        'value': [data['dest_lon'], data['dest_lat'], 3],
        'symbolSize': 5,
        'itemStyle': {'normal': {'color': '#F58158'}}
      }
    ];

    const lineData = [
      {
        'fromName': data['city'],
        'toName': data['capital'],
        'coords': [
          [data['src_lon'], data['src_lat']],
          [data['dest_lon'], data['dest_lat']]]
      }
    ];

    return {
      bmap: {
        center: [
          (Number(data['src_lon']) +
            Number(data['dest_lon'])) / 2 || 105,
          (Number(data['src_lat']) +
            Number(data['dest_lat'])) / 2 || 32
        ],
        zoom: 4,
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
            constantSpeed: 70,
            symbol: 'pin',
            symbolSize: 8,
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
              width: 3,
              opacity: 0.5,
              curveness: 0.1
            }
          },
          data: lineData
        }
      ]
    };
  };

  return (
    <div className={styles['g-map']}>
      <ReactEcharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        style={{width: '100%', height: '300px'}}
      />
    </div>
  );
};

OverviewMap.propTypes = {};

export default OverviewMap;
