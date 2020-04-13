<template>
  <div class="echart_box">
    <div :id="elId" class="myChart"></div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      elId: ''
    };
  },

  watch: {
    item(newValue, oldValue) {
      if (newValue) {
        // this.drawLine(newValue)
        console.log('hello')
      }
    }
  },
  created() {
    this.elId = this.uuidv4() //获取随机id 
  },
  mounted() {
    this.bus.$on('charts', (result) => {
      this.drawLine(result);
    })
  },

  methods: {
    drawLine(result) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.querySelector('#' + this.elId));
      // 绘制图表
      const option = {
        title: {
          text: "堆叠区域图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: result.legend
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: result.xAxis_category
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: result.series
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang="less">
.echart_box {
  float: left;
  width: 50%;
  height: 100%;
}

.myChart {
  width: 100%;
  height: 100%;
  display: inline-block;
}
</style>
