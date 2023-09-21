<script setup>
import router from '@/router'
import Comment from '@/components/training/Comment.vue'
import { ref } from 'vue'
const active = ref(0)
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="AANav"
    title="答疑列表"
  ></van-nav-bar>

  <div class="AAContainer">
    <van-tabs v-model:active="active" color="#11D075" line-height="5px">
      <van-tab title="所有答疑">
        <div class="allCon">
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
        </div></van-tab
      >
      <van-tab title="我的答疑">
        <div class="myCon">
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
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped>
.AAContainer {
  .allCon {
    margin-left: 14px;
    margin-top: 13px;
  }
  .myCon {
    margin-left: 14px;
    margin-top: 13px;
  }
}
</style>
