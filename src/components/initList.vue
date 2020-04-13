<template>
  <div>Hello</div>
</template>
<script>
export default {
  data() {
    return {};
  },

  mounted() {
    this.initList()
  },
  
  methods: {
    initList() {
      let version= 'epidemic';
      let appid = '99246951';
      let appsecret = 'Mxg7DegA';
      let province = ''
      let city = ''
    //   this.axios.get(`https://tianqiapi.com/api?version=${version}&appid=${appid}&appsecret=${appsecret}`)
    //   .then(resp => {
    //     console.log(resp)
    //   })
    }
  },
};
</script>
<style lang="less">
</style>