import { ref, unref, watch } from "vue";
import req from "@req";

export default function fetchFilesByDir(dir) {
  const fileList = ref([]);
  const fetchFileList = async () => {debugger
    const strDir = unref(dir);
    if (strDir) {
      fileList.value = await req.get("/api/files", { params: { dir: strDir } });
    }
  };

  watch(dir, fetchFileList, { immediate: true });
  return {
    fileList,
    fetchFileList,
  };
}
