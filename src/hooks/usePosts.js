import axios from "axios";
import {ref, onMounted} from 'vue';

export function usePosts() {
  const posts = ref([])
  const fetching = async () => {
    try {
      const response = await axios.get('https://bandaumnikov.ru/api/test/site/get-index');
      posts.value = response.data.data;
    } catch (err) {
      alert('Ошибка')
    }
  }

  onMounted(fetching)

  return {
    posts
  }
}