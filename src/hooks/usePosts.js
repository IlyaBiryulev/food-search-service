import axios from "axios";
import {ref, onMounted} from 'vue';

export function usePosts() {
  const posts = ref([]);

  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
    params: {
      locationId: '298507'
    },
    headers: {
      'X-RapidAPI-Key': '0b89d890b8msha8a5624d24defc0p142ac4jsn0aa20a444490',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }
  };

  const fetching = async () => {
    try {
      const response = await axios.request(options);
      posts.value = response.data.data.data;
    } catch (err) {
      alert('Ошибка');
    }
  };

  onMounted(fetching);

  return {
    posts
  };
}