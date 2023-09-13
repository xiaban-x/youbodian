<script setup></script>
<template>
  <div class="WPContainer">
    <Header class="header">
      <slot name="header"></slot>
    </Header>
    <Main class="main">
      <slot name="main"></slot>
    </Main>
    <img class="WPTru" src="src/assets/dictionary/Trumpet.svg" alt="喇叭" />
  </div>
</template>

<style scoped>
.WPContainer {
  display: flex;
  align-items: center;
  width: 164px;
  height: 39px;
  background: #f6fffb;
  border-radius: 30px;
  .header {
    color: #292929;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
    margin-left: 13px;
  }
  .main {
    color: #999999;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
    margin-right: 17px;
  }
  .WPTru {
    width: 11px;
    height: 14px;
  }
}
</style>
