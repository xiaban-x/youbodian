<script>
import {ref} from 'vue';

export default {
  setup() {
    const buttons = ref([
      {text: "5"},
      {text: "10"},
      {text: "15"},
      {text: "20"},
      {text: "30"},
      {text: "50"},
    ]);
    const activeButton = ref(null);

    const setActiveButton = (index) => {
      activeButton.value = index;
    };

    return {
      buttons,
      activeButton,
      setActiveButton,
    };
  },
};
</script>

<template>
  <div>
    <Head>全局设置</Head>
    <div class="chose">
      <button
          v-for="(button, index) in buttons"
          :key="index"
          :class="{ active: activeButton === index, default: activeButton !== index }"
          @click="setActiveButton(index)"
      >
        {{ button.text }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.chose{
  display: flex;
}
/* 默认按钮的样式 */
button.default {
  width: calc(25% - 20px);
  margin: 10px;
  height: 22px;
  border-radius: 30px;
  border: 0.50px #EDEDED solid;


}

/* 激活按钮的样式 */
button.active {
  width: calc(25% - 20px);
  margin: 10px;
  height: 22px;
  background: #11D075;
  border-radius: 30px;
  border: none;
  color: white;
}
</style>