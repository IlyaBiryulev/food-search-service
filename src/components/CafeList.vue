<template>
  <div class="cafe-list__items"
    v-for="post in posts"
    :key="post.id"
  >
    <img :src="post.photo" :alt="post.name" class="cafe-list__img">
    <ul class="cafe-list__cuption">
      <li class="cafe-list__item"><h2 class="cafe-list__title">{{ post.name }}</h2></li>
      <li class="cafe-list__item">
        <p class="cafe-list__cuisine"
        v-if="post.cuisine"
        >
          Кухня: {{ post.cuisine }}
        </p>
        <p class="cafe-list__cuisine"
          v-else
        >
          Кухня: Разнообразная
        </p>
      </li>
      <li class="cafe-list__item">
        <p class="cafe-list__address"
        v-if="post.address"
        >
          {{ post.address }}
        </p>
        <p class="cafe-list__address"
          v-else
        >
          Адрес смотрите на картке по названию
        </p>
      </li>
    </ul>
    <p class="cafe-list__lunch"
      v-if="post.business_lunch"
    >
      Бизнес ланч <span class="cafe-list__span">Есть</span>
    </p>
    <p class="cafe-list__lunch"
      v-else
    >
      Бизнес ланч <span class="cafe-list__span">Нет</span>
    </p>
    <p class="cafe-list__price"
      v-if="post.price === 0"
    >
      Средний чек <span class="cafe-list__span">-</span>
    </p>
    <p class="cafe-list__price"
      v-else>Средний чек <span class="cafe-list__span">{{ post.price }}</span>
    </p>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const responce = await axios.get('https://bandaumnikov.ru/api/test/site/get-index');
        this.posts = responce.data.data;
      } catch(err) {
        alert('Ошибка')
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<style>
 .cafe-list__items {
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  border-radius: 10px 10px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.1);
  background-color: rgba(360, 360, 360, 0.3);
  margin-bottom: 25px;
}

.cafe-list__img {
  min-width: 250px;
  height: 170px;
  border-radius: 10px 10px ;
}

.cafe-list__cuption {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin-left: 20px;
}

.cafe-list__item {
  width: 250px;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
}

.cafe-list__cuisine {
  margin: 0;
  padding-top: 15px;
}

.cafe-list__address {
  margin: 0;
  padding-top: 35px;
  color: gray;
}

.cafe-list__lunch {
  width: 115px;
  text-align: center;
}

.cafe-list__price {
  width: 95px;
  text-align: center;
}

.cafe-list__span {
  font-weight: 900;
  font-size: 18px;
}

.cafe-list__title {
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  margin: 0;
}
</style>