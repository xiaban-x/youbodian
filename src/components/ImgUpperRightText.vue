<template>
  <div class="image-container">
    <img :src="imageUrl" alt="Image" />
    <div class="text-overlay">
      <div :style="rightTopBackgroundStyle" class="right-top-text">
        <slot name="right-top-text"></slot>
      </div>
      <div class="center-text">
        <slot name="center-text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    textContent: String // 接受文字内容属性
  },
  computed: {
    rightTopBackgroundStyle() {
      // 根据文字内容设置不同的背景颜色
      if (this.textContent === '付费') {
        return {
          background: 'linear-gradient(to left,#FF7438, #FF9472)'
        }
      } else if (this.textContent === '免费') {
        return {
          background: 'linear-gradient(to left,#11D075, #C0FFE1)'
        }
      } else {
        // 默认背景颜色
        return {
          background: 'transparent'
        }
      }
    }
  }
}
</script>

<style scoped>
.image-container {
  position: relative; /* 添加这一行样式 */
  width: 98px;
}

.right-top-text {
  position: absolute; /* 添加这一行样式 */
  top: 0;
  right: -7px;
  color: white;
  padding: 0 6px;
  border-radius: 5px;
  width: 36px;
  height: 16px;
  font-size: 10px;
  font-weight: 400;
  word-wrap: break-word;
}

.center-text {
  position: absolute; /* 添加这一行样式 */
  top: 30%; /* 垂直居中 */
  left: 43px; /* 向左偏移10px */
  transform: translate(-50%, -50%); /* 使用 transform 属性来实现垂直水平居中 */
  color: white;
  width: 56px;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
}
</style>
