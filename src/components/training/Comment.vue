<template>
  <div class="comment">
    <div class="avatar">
      <!-- 头像插槽 -->
      <slot name="avatar"></slot>
    </div>
    <div class="content">
      <span class="name">
        <!-- 名称插槽 -->
        <slot name="name"></slot>
      </span>

      <span class="text">
        <!-- 评论插槽 -->
        <slot name="comment"></slot>
      </span>
      <span class="time">
        <!-- 时间插槽 -->
        <slot name="time"></slot>
      </span>
    </div>
    <div class="likes">
      <span class="likes-icon">
        <slot name="likes-icon"></slot>
      </span>
      <span class="likes-count">
        <!-- 点赞数量插槽 -->
        <slot name="likes-count"></slot>
      </span>
    </div>
  </div>
</template>

<style scoped>
.comment {
  width: 347px;
  display: flex;
  padding: 10px;
  margin: 10px;
  align-items: flex-start;
  .avatar {
    width: 36px;
    margin-right: 10px;
  }

  .content {
    width: 265px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .name {
      color: #666;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .comment {
      color: #020202;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .time {
      color: #666;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .likes {
    display: flex;
    flex-direction: row;
  }
}
</style>
<script setup></script>
