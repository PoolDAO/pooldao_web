<template lang='pug'>
  .home
    .header.cont
      .header-container.container
        a.logo-area.no-repeat-contain(:href="indexUrl")
        .nav-area
          div(v-for="(item, i) in navList" :key="i" @click="scrollToElement(item.elem)") {{item.title}}
    .index.cont
      .index-container.container
        .no-repeat-contain
        .title 以太坊2.0的去中心化矿池协议
        .desc 任何⼈随时随地都能参与以太坊 POS 获取中⻓期稳定收益
        a.whitepaper(href="PoolDAO白皮书v0.3.pdf") PoolDAO 协议白皮书
    .page2.cont
      .page2-container.container.padding-80
        .title 服务对象
        .body
          desc-card(:desc="descList[0]" :iconFirst="false")
    .page3.cont
      .page3-container.container.padding-160
        desc-card(:desc="descList[1]" :iconFirst="true")
    .page4.cont
      .page4-container.container.padding-160
        desc-card(:desc="descList[2]" :iconFirst="false")
    .white-padding.cont
    .page5
      .title-area
        span 核心技术
      .page5-container
        .feature-list
          feature-card(v-for="(item, i) in featureList" :feature="item" :key="i")
    .roadmap.cont
      .roadmap-container.container
        .title 路线图
        .phase-area
          .top
            span(v-for="i in 3" :key="i") Phases {{i-1}}
          .middle
            .dot(v-for="i in 3" :key="i")
          .bottom
            .text
              p 
                <span class='highlight'>发布 PoolDAO 和 PoolDapp，</span>团队作为唯一节点运营商，大规模部署运维节点，并开放予用户参与 ETH2.0 Staking 挖矿。
              p
                <span class='highlight'>开放 poolETH/ETH 在 DEX 中的交易兑换，</span>满足用户 Staking 收益的市场变现。
            .text
              p
                <span class='highlight'>接入多家第三方节点运营商，</span>提供更多节点选择。
              p 升级完善 PoolDAO 和 PoolDapp 功能、开放 SDK，及对所有第三方 Dapp 提供接入。
                <span class='highlight'>完成 Oracle 系统的协议接入。</span>
            .text
              p.highlight 实现 BETH 和 ETH 的实时结算和自由兑换。
              p
                <span class='highlight'>完善协议民主治理，</span>开启权利下放，应用 PDAO 完成社区化驱动转变。
    .footer.cont
      .footer-container.container
        p All rights reserved © 2020 PoolDAO
        .contact-area
          .wechat
            img.qrcode(:src="wechat")
          a(href="https://github.com/PoolDAO", target="_blank" title="pooldao") 
        .logo.no-repeat-contain
</template>

<script>
import DescCard from './DescCard'
import FeatureCard from './FeatureCard'
import page2Icon from '../assets/pooldao/普通用户@3x.png'
import page3Icon from '../assets/pooldao/节点运营商@3x.png'
import page4Icon from '../assets/pooldao/生态合作方@3x.png'
import wechatIcon from '../assets/pooldao/wechat@3x.png'
import githubIcon from '../assets/pooldao/github@3x.png'
import feature1 from '../assets/pooldao/contract.png'
import feature2 from '../assets/pooldao/oracle.png'
import feature3 from '../assets/pooldao/cross.png'
import feature4 from '../assets/pooldao/pledge.png'
import feature5 from '../assets/pooldao/fame.png'
import feature6 from '../assets/pooldao/security.png'
import wechat from '../assets/pooldao/wechat.png'

export default {
  name: 'home',
  components: {
    DescCard,
    FeatureCard,
  },
  data() {
    return {
      indexUrl: window.location.href,
      wechat: wechat,
      descList: [
        {
          title: '普通用户',
          tags: [
            '存 ETH ⽣息',
            '一键存入，享受中长期低风险收益',
          ],
          desc: '拥有 ETH，但不具备节点运营所需的计算资源及技术条件，或者所持有的 ETH 数量不足 32ETH 的要求，希望将持有的 ETH 投入以太坊 POS 中获得中⻓期低风险稳定收益。',
          icon: page2Icon
        },
        {
          title: '节点运营商',
          tags: [
            '运行节点获利',
            '扩⼤规模，共享验证⼈收益',
          ],
          desc: '拥有 ETH，也具备节点运营所需的计算资源和技术条件，具备⼤规模部署和运营能力。但所持有 ETH 数量不匹配自身资源条件，希望可以通过开放节点验证人服务资源能力，吸纳普通⽤用户的 ETH，联合参与以太坊 POS，扩大节点规模的同时收取⼀定比例的节点盈利来提高收益水平。',
          icon: page3Icon
        },
        {
          title: '⽣态合作方',
          tags: [
            '连接用户获利',
            '对接协议，流量轻松变现',
          ],
          desc: '以太坊⽣态中的流量渠道方如钱包、交易所、⾃媒体、KOL 等，通过⾃身流量渠道为⽤户集成 PoolDAO 协议，间接参与 PoolDAO 协议运行，获得 PoolDAO 协议利益⾃动化分配。',
          icon: page4Icon
        }
      ],
      featureList: [
        {title: '智能合约', icon: feature1, desc: '所有抵押资产均托管于智能合约，可⾃由取回，⽆第三⽅风险。智能合约自动完成资源组合和节点生命周期的管理，⾃动结算收益分配。'},
        {title: 'Oracle', icon: feature2, desc: '链下监控采集节点的表现行为，结合节点运营商的历史运营数据形成对该节点运营商的声誉评估指数。再通过 Oracle 技术输⼊到链上的 PoolDAO 协议中，供普通⽤户和算法做出最优选择。'},
        {title: '跨链中继', icon: feature3, desc: '通过 ETH 1.0 和 ETH 2.0 之间的去信任化消息传递，及时同步到智能合约中，以便于 PoolDAO 协议的⾃更新⾃维护。'},
        {title: '分片抵押', icon: feature4, desc: '⽤户抵押资产切片为 2 ETH ⾃动分开抵押到不同的节点中，帮助⽤户更好的分散抵押，降低⻛险，可以获得更好的平均收益。'},
        {title: '声誉选择', icon: feature5, desc: '通过声誉 Oracle 中积累的历史数据智能选择最优节点运营商的候选节点进行优先级排序，以获得资源最优化配置。'},
        {title: '安全审计', icon: feature6, desc: '保障协议安全，聘请业内知名第三方机构进⾏全⾯代码审计，确保通过安全审计再部署上线。'}
      ],
      navList: [
        {title: '服务对象', elem: '.page2'},
        {title: '核心技术', elem: '.white-padding'},
        {title: '路线图', elem: '.roadmap'},
        {title: '联系我们', elem: '.footer'},
      ]
    }
  },
  computed: {
  },
  methods: {
    scrollToElement(selector) {
      const elem = document.querySelector(selector)
      const targetTop = elem.offsetTop - 80
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      })
    }
  },
  mounted() {
  },
  created() {
  }
}
</script>
<style lang='scss' scoped>
.home {
  color: $main;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .no-repeat-contain {
    background-size: contain;
    background-repeat: no-repeat;
  }
  .cont {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .container {
    width: 1120px;
  }
  .padding-80 {
    padding: 80px 0;
  }
  .padding-160 {
    padding: 160px 0;
  }
  .header {
    z-index: 2;
    position: fixed;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.12);
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo-area {
        width: 160px;
        height: 40px;
        background-image: url('../assets/pooldao/logo顶@3x.png');
        cursor: pointer;
      }
    }
    .nav-area {
      display: flex;
      justify-content: space-between;
      width: 340px;
      div {
        cursor: pointer;
      }
    }
  }
  .index {
    height: 640px;
    background-image: url('../assets/pooldao/background.png');
    .index-container {
      padding: 136px 0;
      display: flex;
      flex-direction: column;
      :first-child {
        width: 300px;
        height: 50px;
        background-image: url('../assets/pooldao/pooldao.png');
      }
      .title {
        margin-top: 30px;
        font-size: 48px;
        color: #FFFFFF;
        width: 506px;
      }
      .desc {
        margin-top: 30px;
        font-size: 19px;
        color: #A1A5CE;
      }
      .whitepaper:hover {
        color: #333443;
        background-color: #fff;
      }
      .whitepaper {
        margin-top: 30px;
        width: 238px;
        height: 56px;
        border: 2px solid #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: #fff;
      }
    }
  }
  .page2, .page4 {
    background: #1F1E29;
  }
  .page2-container {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 40px;
      color: #fff;
    }
    .body {
      margin-top: 80px;
    }
  }
  .page3 {
    background: #fff;
  }
  .white-padding {
    background-color: #fff;
    width: 100%;
    height: 120px;
  }
  .page5 {
    position: relative;
    background: #262633;
    width: 100%;
    .title-area {
      position: absolute;
      margin-top: -90px;
      margin-left: 50%;
      width: 50%;
      height: 200px;
      background: #0080FF;
      display: flex;
      span {
        margin-top: 90px;
        margin-left: 360px;
        font-family: PingFangSC-Semibold;
        font-size: 48px;
        color: #FFFFFF;
        letter-spacing: 1.8px;
        text-align: right;
        line-height: 56px;
      }
    }
    .page5-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .feature-list {
      width: 1120px;
      padding: 108px 0 160px 0;
      display: flex;
      flex-wrap: wrap;
      .feature-card {
        margin-left: 92px;
        margin-top: 84px;
      }
      :nth-child(3n+1) {
        margin-left: 0;
      }
    }
  }
  .roadmap {
    background: #fff;
    padding: 100px 0;
    .roadmap-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        color: #0080FF;
        font-size: 40px;
      }
      .phase-area {
        margin-top: 60px;

        .top {
          display: flex;
          :first-child {
            margin-left: 0;
          }
          span {
            width: 312px;
            margin-left: 92px;
            font-family: PingFangSC-Semibold;
            font-size: 16px;
            color: #303030;
            letter-spacing: 0.08px;
            line-height: 28px;
          }
        }
        .middle {
          margin-top: 24px;
          height: 4px;
          width: 100%;
          background: #0080FF;
          :nth-child(2) {
            margin-left: 404px;
          }
          :nth-child(3) {
            margin-left: 808px;
          }
          .dot {
            position: absolute;
            margin-top: -4px;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            background-color: #0080ff;
          }
        }
        .bottom {
          margin-top: 16px;
          display: flex;
          .text {
            margin-left: 92px;
            width: 312px;
            font-size: 14px;
            color: #000;
            letter-spacing: 0.07px;
            line-height: 24px;
          }
          p {
            margin-top: 10px;
          }
          :first-child {
            margin-left: 0;
          }
        }
        .highlight {
          color: #0080FF;
        }
      }
    }
  }
  .footer {
    background: #1F1E29;
    height: 100px;
    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .contact-area {
        display: flex;
        margin-left: -72px;
        .wechat {
          cursor: pointer;
          .qrcode {
            visibility: hidden;
            position: absolute;
            width: 132px;
            height: 132px;
            margin-top: -148px;
            margin-left: -50px;
          }
        }
        .wechat, a {
          width: 32px;
          height: 32px;
          background-size: contain;
          background-repeat: no-repeat;
        }
        :first-child {
          background-image: url('../assets/pooldao/wechat@3x.png');
        }
        :last-child {
          margin-left: 24px;
          background-image: url('../assets/pooldao/github@3x.png');
        }
        .wechat:hover {
          .qrcode {
            visibility: visible;
          }
          background-image: url('../assets/pooldao/wechat_hover.png');
        }
        a:hover {
          background-image: url('../assets/pooldao/github_hover.png');
        }
      }
      p {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #5D5F73;
      }
      .logo {
        width: 160px;
        height: 40px;
        background-image: url('../assets/pooldao/logo底@3x.png');
      }
    }
  }
}
</style>
