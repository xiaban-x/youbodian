<script setup></script>
<template>
  <div class="SpanDivOneContainer">
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
.SpanDivOneContainer {
  background: rgb(248, 248, 248);
  margin-top: 0;
  .header {
    background: rgb(248, 248, 248);
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .main {
    background: rgb(248, 248, 248);
  }
  .footer {
    border-radius: 15px;
    border: 1px solid #fff;
    width: 347px;
    background-color: #fff;
  }
}
</style>
