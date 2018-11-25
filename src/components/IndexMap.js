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
          styleJson: [{
            'featureType': 'water',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'land',
            'elementType': 'all',
            'stylers': {
              'color': '#f3f3f3'
            }
          }, {
            'featureType': 'railway',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'highway',
            'elementType': 'all',
            'stylers': {
              'color': '#fdfdfd'
            }
          }, {
            'featureType': 'highway',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'arterial',
            'elementType': 'geometry',
            'stylers': {
              'color': '#fefefe'
            }
          }, {
            'featureType': 'arterial',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#fefefe'
            }
          }, {
            'featureType': 'poi',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'green',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'subway',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'manmade',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'local',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'arterial',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'boundary',
            'elementType': 'all',
            'stylers': {
              'color': '#fefefe'
            }
          }, {
            'featureType': 'building',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'label',
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#999999'
            }
          }]
        }
      },
      series: [{
        type: 'lines',

        coordinateSystem: 'bmap',

        // effect: {
        //   show: true,
        //   trailWidth: 2,
        //   trailLength: 0.15,
        //   trailOpacity: 1,
        //   trailColor: 'rgb(30, 30, 60)'
        // },

        lineStyle: {
          width: 0.8,
          color: 'rgb(50, 50, 150)',
          // color: 'rgb(118, 233, 241)',
          opacity: 0.1
        },
        blendMode: 'lighter',

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
