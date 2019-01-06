import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/china';

const OverviewMap1 = ({ data }) => {
  let series = [];
  const convertData = (srcData) => {
    const res = [];
    srcData.map(function (item) {
    res.push({
      fromName: item.city_src,
      toName: item.city_dest,
      coords: [[item.lon_src, item.lat_src], [item.lon_dest, item.lat_dest]]
    });
  });
    return res;
}

  series.push({
        name: '节点连接',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: '#a6c84c',
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(data.data)
  }, {
      name: ' 节点连接',
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            //symbol: planePath,
            symbolSize: 5
        },
        lineStyle: {
            normal: {
                color: '#a6c84c',
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: convertData(data.data)
  }, {
       name: ' 节点连接',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: '#a6c84c'
            }
        },
        data: data.data.map(function(dataItem) {
            return {
                name: dataItem.city_dest,
                value: dataItem.city_dest.concat(dataItem.lon_dest)
            };
        })
  });
  console.log('series', series);
  const getOption = () => {
    return {
      backgroundColor: '#404a59',
    title: {
        text: '国内节点连接情况',
        subtext: '',
        left: 'center',
        textStyle: {
            color: '#fff'
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
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series
    }
  }
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
}

OverviewMap1.propTypes = {};

export default OverviewMap1;