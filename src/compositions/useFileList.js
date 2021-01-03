import { ref, watch } from "vue";
import req from '@req'

export default function fetchFilesByDir(dir) {
  const fileList = ref([])
  const fetchFileList = async () => {
    const { value } = dir;
    if (value) {
      fileList.value = await req.get('/files', { params: { dir: value } })
    }
  }
  // onMounted(fetchFileList)
  watch(dir, fetchFileList, { immediate: true })
  return {
    fileList,
    fetchFileList
  }
}