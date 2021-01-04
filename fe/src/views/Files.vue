<template>
  <div>this is file page</div>
  <input type="text" v-model="dir" />
  {{ dir }}
  <Button type="primary">123</Button>
  <FileList :list="fileList" />
</template>

<script>
import { useRoute } from "vue-router";
import { Button } from "ant-design-vue";
import { reactive, ref, toRef, toRefs, watch } from "vue";
import useFileList from "@composition/useFileList";

import FileList from "@comp/FileList";
export default {
  name: "files",
  components: {
    FileList,
    Button,
  },
  setup() {
    let tr = toRefs;
    let r = reactive;
    const route = useRoute();
    const { query } = toRefs(route);
    const { dir } = toRefs(reactive(query));
    debugger;
    watch(route.query.dir, () => {
      debugger;
    });
    const { fileList, fetchFileList } = useFileList(dir);
    return {
      dir,
      fileList,
      fetchFileList,
    };
  },
};
</script>
