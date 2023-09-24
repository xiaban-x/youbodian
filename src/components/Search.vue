<script setup></script>
<template>
  <div class="SearchContainer">
    <div class="search"><slot name="search"></slot></div>
    <div class="inp"><slot name="inp"></slot></div>
    <div class="camera"><slot name="camera"></slot></div>
  </div>
</template>

<style scoped>
.SearchContainer {
  width: 347px;
  height: 50px;
  background: white;
  border-radius: 7px;
  border: 1px #616161 solid;
  display: flex;
  align-items: center;
  .search {
    margin-left: 14px;
  }
  .inp {
    border: none; /* Remove border */
    outline: none; /* Remove outline */
    color: #bebebe;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
    margin-left: 17px;
    margin-right: 60px;
    width: 196px;
  }
}
</style>
