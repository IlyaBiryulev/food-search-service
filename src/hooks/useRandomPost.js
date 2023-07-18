import axios from "axios";
import {ref, onUpdated} from 'vue';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function useRandomPost() {
  const randomPosts = ref([])
  const fetching = async () => {
    try {
      const response = await axios.get(`https://bandaumnikov.ru/api/test/site/get-view?id=${randomNumber(1, 23)}`);
      randomPosts.value = response.data;
    } catch (err) {
      alert('Ошибка')
    }
  }

  onUpdated(fetching)

  return {
    randomPosts
  }
}