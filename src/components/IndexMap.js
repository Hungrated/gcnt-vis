import React from 'react';
import styles from '../styles/IndexMap.less';
import ReactEcharts from 'echarts-for-react';
import 'echarts/extension/bmap/bmap';

const IndexMap = ({data}) => {

  const getOption = () => {
    const getAirportCoord = (idx) => [data.airports[idx][3], data.airports[idx][4]];

    const routes = data.routes.map(function (airline) {
      return [
        getAirportCoord(airline[1]),
        getAirportCoord(airline[2])
      ];
    });

    return {
      bmap: {
        center: [110, 33],
        zoom: 5,
        roam: true,
        mapStyle: {
          'styleJson': [
            {
              'featureType': 'water',
              'elementType': 'all',
              'stylers': {
                'color': '#031628'
              }
            },
            {
              'featureType': 'land',
              'elementType': 'geometry',
              'stylers': {
                'color': '#000102'
              }
            },
            {
              'featureType': 'highway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'arterial',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#000000'
              }
            },
            {
              'featureType': 'arterial',
              'elementType': 'geometry.stroke',
              'stylers': {
                'color': '#0b3d51'
              }
            },
            {
              'featureType': 'local',
              'elementType': 'geometry',
              'stylers': {
                'color': '#000000'
              }
            },
            {
              'featureType': 'railway',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#000000'
              }
            },
            {
              'featureType': 'railway',
              'elementType': 'geometry.stroke',
              'stylers': {
                'color': '#08304b'
              }
            },
            {
              'featureType': 'subway',
              'elementType': 'geometry',
              'stylers': {
                'lightness': -70
              }
            },
            {
              'featureType': 'building',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#000000'
              }
            },
            {
              'featureType': 'all',
              'elementType': 'labels.text.fill',
              'stylers': {
                'color': '#857f7f'
              }
            },
            {
              'featureType': 'all',
              'elementType': 'labels.text.stroke',
              'stylers': {
                'color': '#000000'
              }
            },
            {
              'featureType': 'building',
              'elementType': 'geometry',
              'stylers': {
                'color': '#022338'
              }
            },
            {
              'featureType': 'green',
              'elementType': 'geometry',
              'stylers': {
                'color': '#062032'
              }
            },
            {
              'featureType': 'boundary',
              'elementType': 'all',
              'stylers': {
                'color': '#465b6c'
              }
            },
            {
              'featureType': 'manmade',
              'elementType': 'all',
              'stylers': {
                'color': '#022338'
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
      series: [{
        type: 'lines',

        coordinateSystem: 'bmap',

        // effect: {
        //   show: true,
        //   trailWidth: 0.01,
        //   trailOpacity: 0.1,
        //   trailLength: 0.01,
        //   constantSpeed: 7
        // },

        blendMode: 'lighter',

        lineStyle: {
          width: 1,
          opacity: 0.03
        },

        data: routes
      }]
    };
  };

  return (
    <div className={styles['g-map']}>
      <ReactEcharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        style={{width: '100%', height:'calc(100vh - 70px)'}}
      />
    </div>
  );
};

IndexMap.propTypes = {};

export default IndexMap;
