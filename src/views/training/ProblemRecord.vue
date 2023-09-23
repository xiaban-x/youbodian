<script setup>
import router from '@/router'
import { ref } from 'vue'
import ChapterScore from '@/components/training/ChapterScore.vue'
const active = ref(0)
const currentRate = ref(0)
// const text = computed(() => currentRate.value.toFixed(0) + '%')
</script>
<template>
  <van-nav-bar title="笔记本" left-arrow @click-left="router.go(-1)" />
  <div class="TNBContainer">
    <van-tabs v-model:active="active" color="#11D075" line-height="5px">
      <van-tab title="速记刷题">
        <ChapterScore @click="router.push('/answerResult')">
          <template #chapterNum>一</template>
          <template #title>总论</template>
          <template #time>2022.07.10 14:23</template>
          <template #exerciseCount>练习8题</template>
          <template #circle>
            <van-circle
              v-model:current-rate="currentRate"
              :rate="30"
              :speed="100"
              layer-color="#ebedf0"
              size="70px"
              :stroke-width="160"
            />
          </template>
          <template #num>50</template>
          <template #rate>%</template>
          <template #text>得分率</template>
        </ChapterScore>
        <ChapterScore @click="router.push('/answerResult')">
          <template #chapterNum>一</template>
          <template #title>总论</template>
          <template #time>2022.07.10 14:23</template>
          <template #exerciseCount>练习8题</template>
          <template #circle>
            <van-circle
              v-model:current-rate="currentRate"
              :rate="30"
              :speed="100"
              layer-color="#ebedf0"
              size="70px"
              :stroke-width="160"
            />
          </template>
          <template #num>50</template>
          <template #rate>%</template>
          <template #text>得分率</template>
        </ChapterScore>
        <ChapterScore @click="router.push('/answerResult')">
          <template #chapterNum>一</template>
          <template #title>总论</template>
          <template #time>2022.07.10 14:23</template>
          <template #exerciseCount>练习8题</template>
          <template #circle>
            <van-circle
              v-model:current-rate="currentRate"
              :rate="30"
              :speed="100"
              layer-color="#ebedf0"
              size="70px"
              :stroke-width="160"
            />
          </template>
          <template #num>50</template>
          <template #rate>%</template>
          <template #text>得分率</template>
        </ChapterScore>
      </van-tab>
      <van-tab title="章节题库">
        <ChapterScore @click="router.push('/answerResult')">
          <template #chapterNum>一</template>
          <template #title>总论</template>
          <template #time>2022.07.10 14:23</template>
          <template #exerciseCount>练习8题</template>
          <template #circle>
            <van-circle
              v-model:current-rate="currentRate"
              :rate="30"
              :speed="100"
              layer-color="#ebedf0"
              size="70px"
              :stroke-width="160"
            />
          </template>
          <template #num>50</template>
          <template #rate>%</template>
          <template #text>得分率</template>
        </ChapterScore>
        <ChapterScore @click="router.push('/answerResult')">
          <template #chapterNum>一</template>
          <template #title>总论</template>
          <template #time>2022.07.10 14:23</template>
          <template #exerciseCount>练习8题</template>
          <template #circle>
            <van-circle
              v-model:current-rate="currentRate"
              :rate="30"
              :speed="100"
              layer-color="#ebedf0"
              size="70px"
              :stroke-width="160"
            />
          </template>
          <template #num>50</template>
          <template #rate>%</template>
          <template #text>得分率</template>
        </ChapterScore>
      </van-tab>
      <van-tab title="历年真题">
        <ChapterScore @click="router.push('/answerResult')">
          <template #chapterNum>一</template>
          <template #title>总论</template>
          <template #time>2022.07.10 14:23</template>
          <template #exerciseCount>满分100分</template>
          <template #circle>
            <van-circle
              v-model:current-rate="currentRate"
              :rate="30"
              :speed="100"
              layer-color="#ebedf0"
              size="70px"
              :stroke-width="160"
            />
          </template>
          <template #num>03</template>
          <template #rate>分</template>
          <template #text>&nbsp;&nbsp;得分</template>
        </ChapterScore>
        <ChapterScore @click="router.push('/answerResult')">
          <template #chapterNum>一</template>
          <template #title>总论</template>
          <template #time>2022.07.10 14:23</template>
          <template #exerciseCount>满分100分</template>
          <template #circle>
            <van-circle
              v-model:current-rate="currentRate"
              :rate="30"
              :speed="100"
              layer-color="#ebedf0"
              size="70px"
              :stroke-width="160"
            />
          </template>
          <template #num>03</template>
          <template #rate>分</template>
          <template #text>&nbsp;&nbsp;得分</template>
        </ChapterScore>
        <ChapterScore @click="router.push('/answerResult')">
          <template #chapterNum>一</template>
          <template #title>总论</template>
          <template #time>2022.07.10 14:23</template>
          <template #exerciseCount>满分100分</template>
          <template #circle>
            <van-circle
              v-model:current-rate="currentRate"
              :rate="30"
              :speed="100"
              layer-color="#ebedf0"
              size="70px"
              :stroke-width="160"
            />
          </template>
          <template #num>03</template>
          <template #rate>分</template>
          <template #text>&nbsp;&nbsp;得分</template>
        </ChapterScore>
        <ChapterScore @click="router.push('/answerResult')">
          <template #chapterNum>一</template>
          <template #title>总论</template>
          <template #time>2022.07.10 14:23</template>
          <template #exerciseCount>满分100分</template>
          <template #circle>
            <van-circle
              v-model:current-rate="currentRate"
              :rate="30"
              :speed="100"
              layer-color="#ebedf0"
              size="70px"
              :stroke-width="160"
            />
          </template>
          <template #num>03</template>
          <template #rate>分</template>
          <template #text>&nbsp;&nbsp;得分</template>
        </ChapterScore>
      </van-tab>
      <van-tab title="强化练习">
        <div class="forth">
          <ChapterScore @click="router.push('/answerResult')">
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>练习8题</template>
            <template #circle>
              <van-circle
                v-model:current-rate="currentRate"
                :rate="30"
                :speed="100"
                layer-color="#ebedf0"
                size="70px"
                :stroke-width="160"
              />
            </template>
            <template #num>50</template>
            <template #rate>%</template>
            <template #text>得分率</template>
          </ChapterScore>
          <ChapterScore @click="router.push('/answerResult')">
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>练习8题</template>
            <template #circle>
              <van-circle
                v-model:current-rate="currentRate"
                :rate="30"
                :speed="100"
                layer-color="#ebedf0"
                size="70px"
                :stroke-width="160"
              />
            </template>
            <template #num>50</template>
            <template #rate>%</template>
            <template #text>得分率</template>
          </ChapterScore>
          <ChapterScore @click="router.push('/answerResult')">
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>练习8题</template>
            <template #circle>
              <van-circle
                v-model:current-rate="currentRate"
                :rate="30"
                :speed="100"
                layer-color="#ebedf0"
                size="70px"
                :stroke-width="160"
              />
            </template>
            <template #num>50</template>
            <template #rate>%</template>
            <template #text>得分率</template>
          </ChapterScore>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped>
.TNBContainer {
  height: 670px;
  padding-bottom: 60px;
  .longLine {
    border: 1px #c7c7c7 solid;
  }
  .forth {
    background-color: rgb(248, 248, 248);
    width: 375px;
  }
  .con {
    padding-top: 10px;
    background-color: #fff;
  }
}
</style>
