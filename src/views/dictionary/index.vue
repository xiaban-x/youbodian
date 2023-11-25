<script setup>
import { ref } from 'vue'
import dictionaryActive from '@/assets/smallIcon/dictionarySelect.svg'
import dictionaryInactive from '@/assets/smallIcon/dictionaryDefault.svg'
import courseDefault from '@/assets/smallIcon/courseDefault.svg'
import courseSelect from '@/assets/smallIcon/courseSelect.svg'
import userDefault from '@/assets/smallIcon/userDefault.svg'
import userSelect from '@/assets/smallIcon/userSelect.svg'
import questionDefault from '@/assets/smallIcon/questionBankDefault.svg'
import questionSelect from '@/assets/smallIcon/questionBankSelect.svg'

const active = ref(0)
const icon = {
  dictionaryActive: dictionaryActive,
  dictionaryInactive: dictionaryInactive,
  courseDefault: courseDefault,
  courseSelect,
  userDefault,
  userSelect,
  questionDefault,
  questionSelect
}
</script>
<template>
  <router-view></router-view>
  <div class="tabBarContainer">
    <van-tabbar v-model="active" route class="test">
      <van-tabbar-item to="/dictionary" class="index1">
        <span>字典</span>
        <template #icon="props">
          <img
            :src="
              props.active ? icon.dictionaryActive : icon.dictionaryInactive
            "
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/training" class="index2">
        <span>题库</span>
        <template #icon="props">
          <img
            :src="props.active ? icon.questionSelect : icon.questionDefault"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/course" class="index3">
        <span>课程</span>
        <template #icon="props">
          <img :src="props.active ? icon.courseSelect : icon.courseDefault" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/user" class="index4">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.userSelect : icon.userDefault" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>
.tabBarContainer {
  /*display: block;*/
  /*position: fixed;*/
  /*bottom: 0;*/

  padding-bottom: 100px;
}
/*.test {*/
/*  position: fixed;*/
/*  bottom: 0;*/
/*  padding-bottom: 10px;*/
/*}*/
</style>
