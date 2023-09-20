<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
const checked = ref(true)
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
    <form>
      <textarea
        class="errorInfo"
        id="longText"
        name="longText"
        rows="7"
        cols="44"
        placeholder="在这里写下你的笔记"
      ></textarea>
    </form>
    <div class="selectCon">
      <span>公开</span>
      <van-switch
        v-model="checked"
        active-color="#11D075"
        inactive-color="#dcdee0"
        class="selectPublic"
      />
    </div>
    <BtnGreen message="发布"></BtnGreen>
    <van-tabs
      v-model:active="active"
      class="order-tabs"
      line-height="2px"
      line-width="42px"
      color="#11D075"
      background="transparent"
      shrink
    >
      <van-tab title="优质笔记" class="">
        <div class="Recommended">为你精心挑选了部分优秀笔记</div>
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
              <div class="green1"><span>公开</span></div>
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
  .goodNotebook {
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
