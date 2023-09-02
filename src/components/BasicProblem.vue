<template>
  <div class="gradient-box" :style="gradientStyle">
    <div class="title" :style="{ color: titleColor }">{{ title }}</div>
    <div class="subtitle" :style="{ color: subtitleColor }">{{ subtitle }}</div>
    <div class="custom-content">
      <!-- 这里可以放自定义内容 -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  gradientColor1: String,
  gradientColor2: String,
  titleColor: String,
  subtitleColor: String,
  title: String,
  subtitle: String
})

const gradientStyle = computed(() => ({
  width: '100%',
  height: '100%',
  background: `linear-gradient(212deg, ${props.gradientColor1} 0%, ${props.gradientColor2} 100%)`,
  borderRadius: '10px',
  border: '0.25px rgba(107, 226, 169, 0.35) solid'
}))
</script>

<style scoped lang="scss">
$gradientColor1: #f2fff9;
$gradientColor2: white;

.gradient-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  .title {
    color: #11d075;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }

  .subtitle {
    color: #65e2a6;
    font-size: 12px;
    font-weight: 300;
    word-wrap: break-word;
  }
  .custom-content {
    margin-bottom: 35px;
  }
}
</style>
