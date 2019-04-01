import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import 'echarts-gl';
import 'echarts/extension/bmap/bmap';
import 'echarts/map/js/world';

const WorldOverviewMap = ({data}) => {

  let scatterData = [];

  let lineData = [];

  data.slice(0, 5000).forEach(function (item) {
    let scatteritem = [
      {
        'name': item['city'],
        'value': [item['src_lon'], item['src_lat'], 0],
        'symbolSize': 3,
        'itemStyle': {'normal': {'color': '#cece1c'}}
      },
      {
        'name': item['capital'],
        'value': [item['dest_lon'], item['dest_lat'], 0],
        'symbolSize': 3,
        'itemStyle': {'normal': {'color': '#cece1c'}}
      }
    ];

    let lineitem = {
      'fromName': item['city'],
      'toName': item['capital'],
      'coords': [
        [item['src_lon'], item['src_lat']],
        [item['dest_lon'], item['dest_lat']]]
    };

    scatterData.push(...scatteritem);
    lineData.push(lineitem);
  });

  const getOption = () => {
    let canvas = document.createElement('canvas');
    let mapChart = echarts.init(canvas, null, {
      width: 1440,
      height: 960
    });
    mapChart.setOption({
      series: [
        {
          type: 'map',
          map: 'world',
          // 绘制完整尺寸的 echarts 实例
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [
            [-180, 90],
            [180, -90]
          ],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              borderColor: '#385e82',
              borderWidth: 1,
              areaColor: '#004c77'
            },
            emphasis: {
              areaColor: '#acb73e',
              borderWidth: 0,
              label: {
                show: true
              }
            }
          }
        }]
    });
    return {
      title: {
        text: '（海外）节点连接情况总览',
        left: 20,
        top: 30,
        textStyle: {
          color: '#ffffff'
        }
      },
      tooltip: {
        show: true
      },
      globe: {
        baseTexture: mapChart,
        shading: 'color',
        globeRadius: 200,
        light: { // 光照阴影
          main: {
            color: '#ababab', // 光照颜色
            intensity: 0.8, // 光照强度
            shadowQuality: 'high', //阴影亮度
            shadow: false, // 是否显示阴影
            alpha: 40,
            beta: -30
          },
          ambient: {
            intensity: 0.5
          }
        },
        viewControl: {
          alpha: 30,
          beta: 160,
          // targetCoord: [116.46, 39.92],
          autoRotate: true,
          autoRotateAfterStill: 10,
          distance: 240
        },
        environment: '#00416b'
      },
      series: [
        {
          name: '地点',
          type: 'scatter3D',
          coordinateSystem: 'globe',
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
              color: 'rgb(30, 30, 60)'
            }
          },
          data: scatterData
        }, {
          name: '线路',
          type: 'lines3D',
          coordinateSystem: 'globe',
          effect: {
            show: true,
            trailWidth: 2,
            trailLength: 0.15,
            trailOpacity: 1,
            trailColor: 'rgb(30, 30, 60)'
          },
          lineStyle: {
            width: 1,
            color: 'rgb(50, 50, 150)',
            opacity: 0.05
          },
          blendMode: 'lighter',
          data: lineData,
          silent: false
        }]
    };
  };

  return (
    <div>
      <ReactEcharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        style={{
          width: '73%',
          height: 'calc(100vh - 70px)',
          background: '#00314b'
        }}
      />
    </div>
  );
};

WorldOverviewMap.propTypes = {};

export default WorldOverviewMap;
