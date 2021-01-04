<template>
  <div class="fileItem" @dblclick="onDbClick">
    <div class="icon"></div>
    <span> {{ data.basename }}</span>
  </div>
</template>

<script>
import { defType } from "@util";
import { join } from "path";
export default {
  props: {
    data: defType({}),
  },
  methods: {
    onDbClick() {
      const { data, $route, $router } = this;
      const { basename, isDir } = data;
      if (isDir) {
        let { query } = $route;
        const { dir } = query;
        const target = join(dir, basename);
        query = Object.assign({}, query, { dir: target });
        $router.push({ query });
      }
    },
  },
};
</script>

<style scoped>
.fileItem {
  width: 100px;
  height: 100px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}
.icon {
  width: 100%;
  height: 80px;
  background: black;
}
</style>
