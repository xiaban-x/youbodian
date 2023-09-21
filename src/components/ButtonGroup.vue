<template>
  <div class="button-group">
    <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="{ active: activeButton === index, default: activeButton !== index }"
        @click="setActiveButton(index)"
    >
      <slot name="button-text" :button="button"></slot>
    </button>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';

export default {
  props: {
    buttonsData: Array, // 按钮数据，每个按钮包含 text 字段
    maxButtonsPerRow: {
      type: Number,
      default: 6, // 每行最多按钮数，默认为6
    },
  },
  setup(props) {
    const buttons = ref(props.buttonsData);
    const activeButton = ref(0);

    const setActiveButton = (index) => {
      activeButton.value = index;
    };

    // 监听按钮数据变化，当按钮数量超过一行时自动换行
    watch(
        () => props.buttonsData,
        () => {
          buttons.value = props.buttonsData;
        }
    );

    // 计算样式类，控制每行按钮数量
    const buttonClasses = computed(() => {
      const classes = {};
      const maxButtonsPerRow = props.maxButtonsPerRow;
      buttons.value.forEach((button, index) => {
        const row = Math.floor(index / maxButtonsPerRow);
        classes[`row-${row}`] = true;
      });
      return classes;
    });

    return {
      buttons,
      activeButton,
      setActiveButton,
      buttonClasses,
    };
  },
};
</script>

<style scoped>
/* 默认按钮的样式 */
button.default {
  width: calc(100% / var(--max-buttons-per-row, 6) - 10px);
  margin: 5px;
  height: 22px;
  border-radius: 30px;
  border: 0.50px #EDEDED solid;
  background-color: white;
}

/* 激活按钮的样式 */
button.active {
  width: calc(100% / var(--max-buttons-per-row, 6) - 10px);
  margin: 5px;
  height: 22px;
  background: #11D075;
  border-radius: 30px;
  border: none;
  color: white;
}

/* 按钮分行样式 */
.button-group {
  display: flex;
  flex-wrap: wrap;
  margin: 6px 9px 16px 9px;
}

.button-group > .button.default {
  margin-right: 5px;
}

/* 控制每行按钮数量的样式 */
.row-0 {
  --max-buttons-per-row: 6;
}

.row-1 {
  --max-buttons-per-row: 6;
}

/* 可根据需要添加更多行的样式 */
</style>
