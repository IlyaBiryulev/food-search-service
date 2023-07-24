<template>
  <div>
    <div class="main">
      <h1 class="main__title">FoodSearch</h1>
      <div class="main-page">
        <slider
          :sliderData="posts"
          :interval="8000"
        />
        <ul class="main-page__list">
          <li class="main-page__list-item"><h2 class="main-page__list-title">Интерсные статьи о еде в Питере</h2></li>
          <li class="main-page__list-item" v-for="item in items" :key="item.id"><a :href="item.link" class="main-page__link">{{ item.name }}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import {usePosts} from '@/hooks/usePosts';
export default {
  components: { Slider },
 data() {
  return {
    items: [
      {id: 1, link: 'https://www.sobaka.ru/bars/chtogdeest/166947', name: 'О барах'},
      {id: 2, link: 'https://www.sobaka.ru/bars/chtogdeest/166948', name: 'О лучших ресторанах'},
      {id: 3, link: 'https://www.sobaka.ru/bars/chtogdeest/166930', name: 'Главные гастрономические события лета'},
      {id: 4, link: 'https://www.sobaka.ru/bars/chtogdeest/166945', name: 'Лучшие винные бары'},
      {id: 5, link: 'https://www.sobaka.ru/bars/chtogdeest/167375', name: 'Гастрономические рынки'},
    ],
    dialogVisible: false,
  }
 },
 setup(props) {
    const {posts} = usePosts();

    return {
      posts
    }
  },
}
</script>

<style>
  .main {
    max-width: 1150px;
    margin-top: 30px;
  }

  .main__title {
    font-weight: 500;
    font-size: 50px;
    line-height: 40px;
    margin: 0 0 25px;
    text-align: center;
  }

  .main-page {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 10px;
  }

  .main-page__list {
    background-color: rgba(360, 360, 360, .9);
    margin: 0;
    border-radius: 0 10px 10px 0;
    padding: 0;
  }

  .main-page__list-item {
    margin: 0 0 5px 30px;
  }

  .main-page__list-item:first-child {
    list-style: none;
    margin-left: 5px;
  }

  .main-page__list-title {
    margin: 10px 0;
    font-weight: 500;
    font-size: 25px;
    line-height: 23px;
  }

  .main-page__link {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 17px;
    line-height: 16px;
  }

  .main-page__link:hover {
    opacity: .8;
    text-decoration: underline;
  }

  .main-page__btn-wrapper {
    margin-top: 20px;
  }

  .main-page__btn {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: 25px;
    line-height: 16px;
    background-color: rgba(360, 360, 360, .9);
    border: 1px solid #000;
    border-radius: 2px;
    padding: 10px 50px;
    cursor: pointer;
  }

  .main-page__btn:last-child {
    margin-left: 5px;
  }

  .main-page__btn:hover {
    opacity: .8;
  }

  @media screen and (max-width: 1007px) {
    .main-page {
      grid-template-columns: auto;
      grid-template-rows: repeat(2, 1fr);
    }

    .main-page__list {
      border-radius: 0 0 10px 10px;
    }
  }

  @media screen and (max-width: 619px) {
    .main-page {
      grid-template-columns: 300px;
    }

    .slider-item {
      min-width: 300px;
    }
  }
</style>