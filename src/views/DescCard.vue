<template lang='pug'>
  .desc-card
    .desc-area(:id="iconFirst ? 'right-desc' : ''")
      .left-flag
      .desc-detail
        .title {{desc.title}}
        .tag-list
          .tag-item(v-for="(item, i) in desc.tags" :key="i")
            .dot
            .tag-text {{item}}
        .desc-text {{desc.desc}}
    .icon-area(:id="iconFirst ? 'first' : ''")
      img(:src="desc.icon")
</template>

<script>
export default {
  name: 'desc-card',
  props: ['icon', 'desc', 'iconFirst'],
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
.desc-card {
  display: flex;
  justify-content: space-between;
  .desc-area {
    order: 2;
    display: flex;
    .left-flag {
      width: 5px;
      height: 100%;
      background: #0080FF;
    }
    .desc-detail {
      margin-left: 38px;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 24px;
        color: #fff;
      }
      .tag-list {
        margin-top: 20px;
        display: flex;
        .tag-item {
          margin-left: 30px;
          display: flex;
          align-items: center;
          .dot {
            width: 6px;
            height: 6px;
            border-radius: 6px;
            background: #0080FF;
          }
          .tag-text {
            margin-left: 10px;
            font-size: 14px;
            color: #DCDEEF;
          }
        }
        :first-child {
          margin-left: 0;
        }
      }
      .desc-text {
        margin-top: 20px;
        font-size: 14px;
        color: #A1A5CE;
        width: 480px;
        line-height: 24px;
      }
    }
  }
  .icon-area {
    order: 3;
    padding: 0 80px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  #first {
    order: 1;
  }
  #right-desc {
    .title {
      color: #303030;
    }
    .tag-text {
      color: #303030;
    }
    .desc-text {
      color: #6E6E6E;
    }
  }
}
</style>
