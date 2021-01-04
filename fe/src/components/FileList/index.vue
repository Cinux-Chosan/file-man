<template>
  <div class="fileList">
    <Item v-for="item in list" :key="item.basename" :data="item"></Item>
  </div>
</template>

<script>
import Item from "./Item";
import { defType } from "@util";
export default {
  props: {
    list: defType([]),
  },
  components: { Item },
};
</script>

<style scoped>
.fileList {
  display: flex;
  flex-wrap: wrap;
}
</style>
