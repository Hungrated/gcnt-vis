import React from 'react';
import ReactEcharts from 'echarts-for-react';

const Chart = ({data}) => {
  const graph = data;

  let categories = [];
  for (let i = 0; i < 19; i++) {
    categories[i] = {
      name: '类目' + (i + 1)
    };
  }

  graph.nodes.forEach(function (node) {
    node.itemStyle = null;
    node.value = node.symbolSize;
    node.symbolSize /= 50000;
    node.value /= 50000;
    node.label = {
      normal: {
        show: node.symbolSize > 30
      }
    };
  });
  const getOption = () => {
    return {
      title: {
        text: '基站之间关系图',
        textStyle: {
          color: '#ffffff'
        },
        left: 'center',
        top: 20
      },
      tooltip: {},
      // legend: [
      //   {
      //     // selectedMode: 'single',
      //     data: categories.map(function (a) {
      //       return a.name;
      //     })
      //   }],
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: '结点',
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          categories: categories,
          roam: true,
          focusNodeAdjacency: true,
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          },
          emphasis: {
            lineStyle: {
              width: 10
            }
          }
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

Chart.propTypes = {};

export default Chart;
