<script setup></script>
<template>
  <div class="dicTranContainer">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <slot name="main"></slot>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.dicTranContainer {
  display: flex;
  margin-left: 14px;
  margin-bottom: 10px;
  .header {
    color: #292929;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }
  .main {
    margin-left: 24px;
    color: #999999;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }
  .footer {
    color: #999999;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }
}
</style>
