<template>
  <div class="GNContainer">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <slot name="main"></slot>
    </main>
  </div>
</template>

<style scoped>
.GNContainer {
  width: 347px;
  border-radius: 5px;
  background: #fff;

  .header {
    width: 317px;
    color: #292929;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 15px;
    padding-top: 12px;
  }
  .main {
    color: #11d075;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 15px;
    padding-top: 13px;
    padding-bottom: 13px;
  }
}
</style>
