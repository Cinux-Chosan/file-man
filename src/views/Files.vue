<template>
  <div>this is file page</div>
  <input type="text" v-model="dir" />
  {{ dir }}
  <Button type="primary">123</Button>
</template>

<script>
import { useRoute } from "vue-router";
import { Button } from "ant-design-vue";
import { ref } from "vue";
import useFileList from "@composition/useFileList";

export default {
  name: "files",
  components: {
    Button,
  },
  setup() {
    const router = useRoute();
    console.log(router.query);
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