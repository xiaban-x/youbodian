<template>
  <div class="BEContainer">
    <Main class="main">
      <slot name="main"></slot>
    </Main>
    <Footer class="footer">
      <slot name="footer"></slot>
    </Footer>
  </div>
</template>

<style scoped>
.BEContainer {
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  .main {
    color: #333333;
    font-size: 14px;
    font-weight: 300;
    word-wrap: break-word;
  }
  .footer {
    color: #999999;
    font-size: 14px;
    font-weight: 300;
    word-wrap: break-word;
  }
}
</style>
