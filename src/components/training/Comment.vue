<template>
  <div class="comment">
    <div class="avatar">
      <!-- 头像插槽 -->
      <slot name="avatar"></slot>
    </div>
    <div class="content">
      <div class="header">
        <span class="name">
          <!-- 名称插槽 -->
          <slot name="name"></slot>
        </span>
        <span class="time">
          <!-- 时间插槽 -->
          <slot name="time"></slot>
        </span>
      </div>
      <div class="text">
        <!-- 评论插槽 -->
        <slot name="comment"></slot>
      </div>
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
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}

.avatar {
  flex: 1;
  margin-right: 10px;
}

.content {
  flex: 3;
}

.header {
  display: flex;
  justify-content: space-between;
}

.likes {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
