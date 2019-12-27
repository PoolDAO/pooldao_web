<template lang='pug'>
  .feature-card
    img(class="icon" :src="feature.icon")
    .title {{feature.title}}
    .desc {{feature.desc}}
</template>

<script>
export default {
  name: 'feature-card',
  props: ['icon', 'feature'],
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  created() {
  }
}
</script>
<style lang='scss' scoped>
.feature-card {
  display: flex;
  flex-direction: column;
  width: 312px;
  .icon {
    width: 60px;
    height: 60px;
  }
  .title {
    margin-top: 24px;
    font-size: 20px;
    color: #FFFFFF;
  }
  .desc {
    margin-top: 20px;
    font-size: 14px;
    color: #A1A5CE;
    letter-spacing: 0.12px;
    line-height: 24px;
  }
}
</style>
