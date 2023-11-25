<script setup>
import { useRouter } from 'vue-router'
import BilingualExample from '@/components/dictionary/BilingualExample.vue'
const router = useRouter()
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="BENav"
    title="双语例句"
  >
  </van-nav-bar>
  <div class="RTContainer">
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
      <template #footer> 《牛津词典》</template>
    </BilingualExample>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
      <template #footer> 《牛津词典》</template>
    </BilingualExample>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
      <template #footer> 《牛津词典》</template>
    </BilingualExample>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
      <template #footer> 《牛津词典》</template>
    </BilingualExample>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
      <template #footer> 《牛津词典》</template>
    </BilingualExample>
  </div>
</template>

<style scoped>
.RTContainer {
  margin-left: 14px;
  .BEx {
    margin-top: 13px;
  }
}
</style>
