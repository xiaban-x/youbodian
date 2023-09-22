<script setup>

</script>

<template>
  <div class="feedback">
    <div class="row1">
      <div class="content">
        <div class="wrong">功能异常</div>
      </div>
      <div class="state">
        <div class="time">2023.07.12 14:23</div>
      </div>
    </div>
    <div class="row2">
      <div class="content">修改头像有问题</div>
      <div class="state">处理中</div>
    </div>
  </div>
</template>

<style scoped>
.feedback {
  display: flex;
  flex-direction: column;
  align-items: stretch; /* 默认值，可省略 */
  height: 83px;

  .row1 {
    border-top: 1px #E8E8E8 solid;
    display: flex;
    justify-content: space-between;
    align-items: stretch; /* 默认值，可省略 */
    padding: 10px;
    background-color: white;
    flex: 1; /* 分配剩余空间 */

    .state {
      .time {
        color: #999999;
        font-size: 12px;
        font-family: Roboto;
        font-weight: 400;
        word-wrap: break-word;
      }
    }

    .content {
      .wrong {
        width: 69px;
        height: 22px;
        background: #FF7438;
        border-radius: 3px;
        color: white;
        font-size: 12px;
        font-weight: 400;
        word-wrap: break-word;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
  }

  .row2 {
    display: flex;
    justify-content: space-between;
    align-items: stretch; /* 默认值，可省略 */
    border-bottom: 1px #E8E8E8 solid;
    padding: 10px;
    background-color: white;
    flex: 1; /* 分配剩余空间 */

    .content {
      color: #292929;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      word-wrap: break-word;
    }

    .state {
      color: #FF7E00;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      word-wrap: break-word;
    }
  }
}


</style>