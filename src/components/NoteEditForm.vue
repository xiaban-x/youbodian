<script setup>
import { ref, defineProps } from 'vue'
const checked = ref(true)
const props = defineProps({
  rows: Number
})
</script>
<template>
  <div class="NEFContainer">
    <form>
      <div class="editCon">
        <textarea
          class="editInfo"
          id="longText"
          name="longText"
          :rows="props.rows || 7"
          cols="44"
          placeholder="在这里写下你的笔记"
        ></textarea>
        <div class="selectCon">
          <span v-if="checked">公开 &nbsp;</span>
          <span v-else>私密&nbsp;</span>
          <van-switch
            v-model="checked"
            active-color="#11D075"
            inactive-color="#dcdee0"
            class="selectPublic"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.NEFContainer {
  .editInfo {
    background-color: #fff;
    border: none;
    padding: 9px 9px 0 9px;
    font-size: 14px;
    font-weight: 300;
    word-wrap: break-word;
  }
  .selectCon {
    width: 347px;
    background-color: #fff;
    margin-top: -10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 245px;
    padding-bottom: 22px;
    color: #999;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
}
</style>
