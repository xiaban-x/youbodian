<script setup>
import { computed } from 'vue'

const props = defineProps({
  message: String,
  bgc: String
})
const style = computed(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: props.bgc || '#F6F6F6',
  color: '#000',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  borderRadius: '5px',
  height: '30px',
  width: '64px',
  marginRight: '11px'
}))
</script>
<template>
  <div :style="style" class="container">
    {{ props.message }}
  </div>
</template>

<style scoped></style>
