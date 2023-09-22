<script setup>
// import LoginPage from '@/views/login/LoginPage.vue'
//
// const login = () => {
//   console.log('登录事件')
// }
import { computed } from 'vue'
const props = defineProps({
  message: String,
  backgroundColor: String
})

const style = computed(() => ({
  width: '167px',
  height: '50px',
  background: props.backgroundColor || '#11d075',
  borderRadius: '30px',
  border: '1px solid ' + (props.backgroundColor || '#11D075'),
  backdropFilter: 'blur(4px)',
  color: '#fff',
  fontWeight: 'bold',
  marginTop: '28px'
}))
</script>
<template>
  <button :style="style" class="login-btn">{{ message }}</button>
  <!--  <LoginPage @login="login">{{ message }}</LoginPage>-->
</template>

<style scoped></style>
