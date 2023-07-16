import {ref, computed} from 'vue';

export default function useSortedPosts(posts) {
  const selectedSort = ref('')
  const sortedPosts = computed(() => {
    if (selectedSort.value === 'price') {
      return [...posts.value].sort((post1, post2) => post1[selectedSort.value] - post2[selectedSort.value]);
    } else if (selectedSort.value === 'business_lunch') {
      return [...posts.value].sort((post1, post2) => Number(post2[selectedSort.value]) - Number(post1[selectedSort.value]));
    } else {
      return [...posts.value];
    }

  })

  return {
    selectedSort, sortedPosts
  }
}