<template>
  <div>this is file page</div>
  <input type="text" v-model="dir">
  {{dir}}
  <Button type="primary">123</Button>
</template>

<script>
import { Button } from "ant-design-vue";
import { onActivated, onMounted, ref } from "vue";
import useFileList from "@composition/useFileList";

export default {
  name: "files",
  components: {
    Button,
  },
  setup() {
    onActivated(() => {
      console.log("actived");
    });
    onMounted(() => {
      console.log("mounted");
    });
    const dir = ref("/");
    const { fileList, fetchFileList } = useFileList(dir);
    return {
      dir,
      fileList,
      fetchFileList,
    };
  },
};
</script>