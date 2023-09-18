<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const date = ref('')
const show = ref(false)
import { ref } from 'vue'
const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`
const onConfirm = (value) => {
  console.log(show.value)
  console.log(date.value)
  show.value = false
  date.value = formatDate(value)
}
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="LDNav"
    title="学习日历"
  ></van-nav-bar>
  <!--  <van-cell title="选择单个日期" :value="date" @click="show = true" />-->

  <van-calendar
    title=""
    :poppable="false"
    :show-confirm="false"
    :style="{ height: '450px' }"
    @confirm="onConfirm"
  />
</template>

<style scoped></style>
