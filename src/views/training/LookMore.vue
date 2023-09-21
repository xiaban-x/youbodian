<script setup>
import router from '@/router'
import Comment from '@/components/training/Comment.vue'
import BtnGreen from '@/components/BtnGreen.vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="LMNav"
    title="全部评论"
  ></van-nav-bar>
  <div class="LMContainer">
    <Comment>
      <!-- 头像插槽 -->
      <template v-slot:avatar>
        <img
          src="@/assets/training/Avatar.png"
          style="width: 36px; height: 36px"
          alt="用户头像"
        />
      </template>
      <!-- 名称插槽 -->
      <template v-slot:name> John Doe </template>
      <!-- 评论插槽 -->
      <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
      <!-- 时间插槽 -->
      <template v-slot:time> 2 hours ago </template>
      <!-- 点赞数量插槽 -->
      <template v-slot:likes-icon
        ><img
          src="@/assets/training/NotLike.png"
          style="width: 23px; height: 23px"
          alt="点赞"
        /> </template
      ><!-- 点赞数量插槽 -->
      <template v-slot:likes-count> 42 </template>
    </Comment>
    <Comment>
      <!-- 头像插槽 -->
      <template v-slot:avatar>
        <img
          src="@/assets/training/Avatar.png"
          style="width: 36px; height: 36px"
          alt="用户头像"
        />
      </template>
      <!-- 名称插槽 -->
      <template v-slot:name> John Doe </template>
      <!-- 评论插槽 -->
      <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
      <!-- 时间插槽 -->
      <template v-slot:time> 2 hours ago </template>
      <!-- 点赞数量插槽 -->
      <template v-slot:likes-icon
        ><img
          src="@/assets/training/NotLike.png"
          style="width: 23px; height: 23px"
          alt="点赞"
        /> </template
      ><!-- 点赞数量插槽 -->
      <template v-slot:likes-count> 42 </template>
    </Comment>
    <Comment>
      <!-- 头像插槽 -->
      <template v-slot:avatar>
        <img
          src="@/assets/training/Avatar.png"
          style="width: 36px; height: 36px"
          alt="用户头像"
        />
      </template>
      <!-- 名称插槽 -->
      <template v-slot:name> John Doe </template>
      <!-- 评论插槽 -->
      <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
      <!-- 时间插槽 -->
      <template v-slot:time> 2 hours ago </template>
      <!-- 点赞数量插槽 -->
      <template v-slot:likes-icon
        ><img
          src="@/assets/training/NotLike.png"
          style="width: 23px; height: 23px"
          alt="点赞"
        /> </template
      ><!-- 点赞数量插槽 -->
      <template v-slot:likes-count> 42 </template>
    </Comment>
    <Comment>
      <!-- 头像插槽 -->
      <template v-slot:avatar>
        <img
          src="@/assets/training/Avatar.png"
          style="width: 36px; height: 36px"
          alt="用户头像"
        />
      </template>
      <!-- 名称插槽 -->
      <template v-slot:name> John Doe </template>
      <!-- 评论插槽 -->
      <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
      <!-- 时间插槽 -->
      <template v-slot:time> 2 hours ago </template>
      <!-- 点赞数量插槽 -->
      <template v-slot:likes-icon
        ><img
          src="@/assets/training/NotLike.png"
          style="width: 23px; height: 23px"
          alt="点赞"
        /> </template
      ><!-- 点赞数量插槽 -->
      <template v-slot:likes-count> 42 </template>
    </Comment>
    <Comment>
      <!-- 头像插槽 -->
      <template v-slot:avatar>
        <img
          src="@/assets/training/Avatar.png"
          style="width: 36px; height: 36px"
          alt="用户头像"
        />
      </template>
      <!-- 名称插槽 -->
      <template v-slot:name> John Doe </template>
      <!-- 评论插槽 -->
      <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
      <!-- 时间插槽 -->
      <template v-slot:time> 2 hours ago </template>
      <!-- 点赞数量插槽 -->
      <template v-slot:likes-icon
        ><img
          src="@/assets/training/NotLike.png"
          style="width: 23px; height: 23px"
          alt="点赞"
        /> </template
      ><!-- 点赞数量插槽 -->
      <template v-slot:likes-count> 42 </template>
    </Comment>
    <Comment>
      <!-- 头像插槽 -->
      <template v-slot:avatar>
        <img
          src="@/assets/training/Avatar.png"
          style="width: 36px; height: 36px"
          alt="用户头像"
        />
      </template>
      <!-- 名称插槽 -->
      <template v-slot:name> John Doe </template>
      <!-- 评论插槽 -->
      <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
      <!-- 时间插槽 -->
      <template v-slot:time> 2 hours ago </template>
      <!-- 点赞数量插槽 -->
      <template v-slot:likes-icon
        ><img
          src="@/assets/training/NotLike.png"
          style="width: 23px; height: 23px"
          alt="点赞"
        /> </template
      ><!-- 点赞数量插槽 -->
      <template v-slot:likes-count> 42 </template>
    </Comment>
    <Comment>
      <!-- 头像插槽 -->
      <template v-slot:avatar>
        <img
          src="@/assets/training/Avatar.png"
          style="width: 36px; height: 36px"
          alt="用户头像"
        />
      </template>
      <!-- 名称插槽 -->
      <template v-slot:name> John Doe </template>
      <!-- 评论插槽 -->
      <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
      <!-- 时间插槽 -->
      <template v-slot:time> 2 hours ago </template>
      <!-- 点赞数量插槽 -->
      <template v-slot:likes-icon
        ><img
          src="@/assets/training/NotLike.png"
          style="width: 23px; height: 23px"
          alt="点赞"
        /> </template
      ><!-- 点赞数量插槽 -->
      <template v-slot:likes-count> 42 </template>
    </Comment>
    <Comment>
      <!-- 头像插槽 -->
      <template v-slot:avatar>
        <img
          src="@/assets/training/Avatar.png"
          style="width: 36px; height: 36px"
          alt="用户头像"
        />
      </template>
      <!-- 名称插槽 -->
      <template v-slot:name> John Doe </template>
      <!-- 评论插槽 -->
      <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
      <!-- 时间插槽 -->
      <template v-slot:time> 2 hours ago </template>
      <!-- 点赞数量插槽 -->
      <template v-slot:likes-icon
        ><img
          src="@/assets/training/NotLike.png"
          style="width: 23px; height: 23px"
          alt="点赞"
        /> </template
      ><!-- 点赞数量插槽 -->
      <template v-slot:likes-count> 42 </template>
    </Comment>
    <Comment>
      <!-- 头像插槽 -->
      <template v-slot:avatar>
        <img
          src="@/assets/training/Avatar.png"
          style="width: 36px; height: 36px"
          alt="用户头像"
        />
      </template>
      <!-- 名称插槽 -->
      <template v-slot:name> John Doe </template>
      <!-- 评论插槽 -->
      <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
      <!-- 时间插槽 -->
      <template v-slot:time> 2 hours ago </template>
      <!-- 点赞数量插槽 -->
      <template v-slot:likes-icon
        ><img
          src="@/assets/training/NotLike.png"
          style="width: 23px; height: 23px"
          alt="点赞"
        />
      </template>
      <!-- 点赞数量插槽 -->
      <template v-slot:likes-count> 42 </template>
    </Comment>
    <BtnGreen message="添加" @click="router.push('/addComment')"></BtnGreen>
  </div>
</template>

<style scoped>
.LMContainer {
  padding: 24px 0 60px 14px;
}
</style>
