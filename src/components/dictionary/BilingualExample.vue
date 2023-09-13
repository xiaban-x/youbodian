<script setup></script>

<template>
  <div class="BEContainer">
    <img src="src/assets/dictionary/Trumpet.svg" alt="喇叭" />
    <div class="BEText">
      <Header class="header">
        <slot name="header"></slot>
      </Header>
      <Main class="main">
        <slot name="main"></slot>
      </Main>
      <Footer class="footer">
        <slot name="footer"></slot>
      </Footer>
    </div>
  </div>
</template>

<style scoped>
.BEContainer {
  display: flex;
  align-items: flex-start;
  .BEText {
    display: flex;
    flex-direction: column;
    margin-left: 13px;

    .header {
      color: #292929;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
    }
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
}
</style>
