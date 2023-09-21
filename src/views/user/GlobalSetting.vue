<script>
import { ref } from 'vue'
import ButtonGroup from '@/components/ButtonGroup.vue'
import BtnGreen from '@/components/BtnGreen.vue'

export default {
  components: { BtnGreen, ButtonGroup },
  data() {
    return {
      buttons1: [
        { text: '5' },
        { text: '10' },
        { text: '15' },
        { text: '20' },
        { text: '30' },
        { text: '50' }
      ],
      buttons2: [
        { text: '5' },
        { text: '10' },
        { text: '15' },
        { text: '20' },
        { text: '30' },
        { text: '50' },
        { text: '100' } // 会自动换行
      ],
      buttons3: [{ text: '自动切换' }, { text: '手动切换' }],
      buttons4: [
        { text: '5' },
        { text: '10' },
        { text: '15' },
        { text: '20' },
        { text: '30' },
        { text: '100' }
      ],
      buttons5: [
        { text: '全部' },
        { text: '近2年' },
        { text: '近3年' },
        { text: '近5年' }
      ]
    }
  },
  setup() {
    const checked1 = ref(['a', 'b', 'c']),
      checked2 = ref(['1', '2', '3'])
    return { checked1, checked2 }
  }
}
</script>

<template>
  <div class="main">
    <Head>全局设置</Head>
    <!--    上部分-->
    <div class="setting">
      <h1>刷词设置</h1>
      <h2>每日学习量</h2>
      <ButtonGroup :buttons-data="buttons1" :max-buttons-per-row="6">
        <template #button-text="{ button }">
          {{ button.text }}
        </template>
      </ButtonGroup>
    </div>
    <!--    下部分-->
    <div class="setting">
      <h1>刷词设置</h1>
      <h2>每日学习量</h2>
      <ButtonGroup :buttons-data="buttons2" :max-buttons-per-row="6">
        <template #button-text="{ button }">
          {{ button.text }}
        </template>
      </ButtonGroup>
      <!--单切选题-->
      <h2>单切选题</h2>
      <ButtonGroup
        width="600px"
        :buttons-data="buttons3"
        :max-buttons-per-row="6"
      >
        <template #button-text="{ button }">
          {{ button.text }}
        </template>
      </ButtonGroup>
      <!--出题数量-->
      <h2>出题数量</h2>
      <ButtonGroup :buttons-data="buttons4" :max-buttons-per-row="6">
        <template #button-text="{ button }">
          {{ button.text }}
        </template>
      </ButtonGroup>
      <!--题目来源-->
      <h2>题目来源</h2>
      <van-checkbox-group
        class="order-tabs"
        v-model="checked1"
        shape="square"
        checked-color="#11D075"
        direction="horizontal"
      >
        <van-checkbox name="a">习题</van-checkbox>
        <van-checkbox name="b">模拟题</van-checkbox>
        <van-checkbox name="c">真题</van-checkbox>
      </van-checkbox-group>
      <!--题目类型-->
      <h2>题目类型</h2>
      <van-checkbox-group
        class="order-tabs"
        v-model="checked2"
        shape="square"
        checked-color="#11D075"
        direction="horizontal"
      >
        <van-checkbox name="1">单选</van-checkbox>
        <van-checkbox name="2">多选</van-checkbox>
        <van-checkbox name="3">判断</van-checkbox>
      </van-checkbox-group>
      <!--出题年份-->
      <h2>出题年份</h2>
      <ButtonGroup
        width="400px"
        class="year"
        :buttons-data="buttons5"
        :max-buttons-per-row="6"
      >
        <template #button-text="{ button }">
          {{ button.text }}
        </template>
      </ButtonGroup>
    </div>
    <div class="change-button">
      <BtnGreen message="确定"></BtnGreen>
    </div>
  </div>
</template>

<style scoped>
.setting {
  overflow: hidden;
  width: 347px;
  background: white;
  border-radius: 5px;
  margin: 8px 0 0 14px;
}

.setting h1 {
  color: #292929;
  font-size: 14px;
  font-weight: 500;
  word-wrap: break-word;
  margin: 11px 0 0 11px;
}

.setting h2 {
  color: #666666;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
  margin: 10px 0 0 11px;
}
van-checkbox-group {
  margin: 6px 11px;
}

.main {
  position: relative;
}
.change-button {
  width: 100%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>

<style lang="less">
.order-tabs .van-checkbox {
  color: #666;
  margin: 6px 11px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.year .template {
  width: 61px;
  height: 22px;
}
</style>
