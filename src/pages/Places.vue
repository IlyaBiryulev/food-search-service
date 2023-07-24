<template>
  <div class="places">
    <div class="places__search-sort">
      <my-input
        v-model="searchQuery"
        placeholder="Поиск"
      />
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <cafe-list
      :posts="sortedAndSearchedPosts"
    />
  </div>
</template>

<script>
import CafeList from '../components/CafeList.vue';
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from '@/hooks/useSortedPost';
import useSearchAndSorted from '@/hooks/useSearchAndSorted'
import MyInput from '../components/UI/MyInput.vue';
export default {
 components: {
    CafeList
 },
 data() {
    return {
      sortOptions: [
        {value: 'business_lunch', name: 'Сначала с бизнес ланчем'},
        {value: 'price', name: 'По цене'},
      ]
    }
  },
  setup(props) {
    const {posts} = usePosts();
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSearchAndSorted(sortedPosts)

    return {
      posts,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
}
</script>

<style>
  .places {
    display: flex;
    flex-direction: column;
    margin: 50px auto;
  }

  .places__search-sort {
    min-height: 35px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin: 0 20px 35px;
  }
</style>