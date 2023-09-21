<template>
  <div :style="circleStyle" class="TSContainer">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  backgroundColor: String, // 背景颜色
  fontColor: String, // 字体颜色
  borderStyle: String // 边框样式
})

const circleStyle = computed(() => ({
  borderRadius: '50%',
  width: '26px',
  height: '26px',
  backgroundColor: props.backgroundColor || '#e0e0e0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '6px 10px 6px 10px',
  color: props.fontColor || '#8f8f8f',
  fontSize: '14px',
  fontWeight: 400,
  wordWrap: 'break-word',
  border: props.borderStyle || 'none' // 边框样式
}))
</script>

<style scoped>
.TSContainer {
  /* 移除样式 */
}
</style>
