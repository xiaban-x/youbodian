<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
const active = ref(0)
import BtnGreen from '@/components/BtnGreen.vue'
import GoodNotebook from '@/components/dictionary/GoodNotebook.vue'
import NoteEditForm from '@/components/NoteEditForm.vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="ENBNav"
    title="我的笔记"
  ></van-nav-bar>
  <div class="ENContainer">
    <div class="word">dictionary</div>
    <div class="longLine"></div>
    <NoteEditForm rows="7"></NoteEditForm>
    <BtnGreen message="发布" @click="router.go(-1)"></BtnGreen>
    <van-tabs
      v-model:active="active"
      class="order-tabs"
      line-height="4px"
      line-width="42px"
      background="#F8F8F8"
      color="#11D075"
      shrink
    >
      <van-tab title="优质笔记" style="padding-top: 10px">
        <div class="recommended">为你精心挑选了部分优秀笔记</div>
        <GoodNotebook class="goodNotebook">
          <template #header
            >Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Aenean
            euismod bibendum laoreet. Proi n gravida dolor sit amet lacus
            accumsan et viver ra justo commodo. Proin sodales pulvinar tempo r.
            Cum sociis natoque penatibus et magnis dis pa rturient</template
          >
          <template #main>用户DevinTang </template>
        </GoodNotebook>
        <GoodNotebook class="goodNotebook">
          <template #header
            >Starting from 2010, the Chinese hotel industry h as embarked on a
            dual track narrative: on the o ne hand, hotel tycoons continue to
            run errands a nd seize the pricing power by increasing the chai n
            rate; On the other hand, in response to and pro moting consumption
            upgrading, economy hotels are competing to move towards the mid to
            high end. As a result, by 2021, the proportion of chain hotels in
            China with over 500 yuan has reached 29.7%. The reasons for the
            performance growth of various hotel groups will definitely
            mention</template
          >
          <template #main>用户DevinTang </template>
        </GoodNotebook>
      </van-tab>
      <van-tab title="我的笔记">
        <GoodNotebook class="goodNotebook">
          <template #header
            >Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Aenean
            euismod bibendum laoreet. Proi n gravida dolor sit amet lacus
            accumsan et viver ra justo commodo. Proin sodales pulvinar tempo r.
            Cum sociis natoque penatibus et magnis dis pa rturient</template
          >
          <template #main>
            <div class="MyNoteCon">
              <div class="green1">
                <span>公开</span>
                <img
                  src="@/assets/training/ShowNote.png"
                  style="width: 24px; height: 24px"
                  alt="睁开眼睛"
                />
              </div>
              <div class="green2">2023-08-17 11:21</div>
              <div class="green3">...</div>
            </div>
          </template>
        </GoodNotebook>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped>
.ENContainer {
  padding-left: 14px;
  .word {
    color: #292929;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 16px;
  }
  .longLine {
    border: 1px #c3c3c3 dashed;
    width: 347px;
    margin-top: 10px;
    margin-bottom: 16px;
  }
  .recommended {
    color: #999;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .goodNotebook {
    margin-top: 10px;
    .MyNoteCon {
      display: flex;
      .green1 {
        border-radius: 40px;
        width: 73px;
        height: 26px;
        background: #edfff6;
        border: 1px #edfff6 solid;
        margin-right: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .green2 {
        border-radius: 40px;
        width: 118px;
        height: 26px;
        background: #edfff6;
        border: 1px #edfff6 solid;
        margin-right: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .green3 {
        border-radius: 40px;
        width: 49px;
        height: 26px;
        font-size: 18px;
        background: #edfff6;
        border: 1px #edfff6 solid;
        margin-right: 9px;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
