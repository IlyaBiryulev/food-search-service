<template>
  <div class="navtab">
    <div class="navtab__btn-wrapper">
      <router-link to="/places" class="navtab__link" v-if="this.$route.path === '/'">
        <button class="navtab__btn">
          Список заведений
        </button>
      </router-link>
      <router-link to="/" class="navtab__link" v-else-if="this.$route.path === '/places'">
        <button class="navtab__btn">
          Главная
        </button>
      </router-link>
      <button class="navtab__btn" @click="showDialog">Случайный выбор</button>
      <my-dialog v-model:show="dialogVisible">
        <cafe-list
          :posts="randomPosts"
        />
      </my-dialog>
    </div>
  </div>
</template>

<script>
import MyDialog from '@/components/UI/MyDialog.vue';
import {useRandomPost} from '@/hooks/useRandomPost';
import CafeList from './CafeList.vue';
export default {
  components: { MyDialog, CafeList },
  data() {
  return {
    dialogVisible: false,
  }
 },
 setup(props) {
    const {randomPosts} = useRandomPost();

    return {
      randomPosts
    }
  },
  methods: {
  showDialog () {
    this.dialogVisible = true;
  }
 },
}
</script>

<style>
  .navtab {
    width: 100%;
    background-color: rgba(360, 360, 360, .9);
    text-align: center;
  }

  .navtab__btn {
    text-decoration: none;
    border: none;
    background: transparent;
    color: #000;
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    padding: 10px 10px;
    cursor: pointer;
  }

  .navtab__btn:hover {
    opacity: .7;
  }
</style>