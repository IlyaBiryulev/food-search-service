<template>
  <div class="cafe-list__items"
    v-for="post in posts"
    :key="post.id"
  >
    <img :src="post.squareImgUrl" :alt="post.name" class="cafe-list__img">
    <ul class="cafe-list__cuption">
      <li class="cafe-list__item"><h2 class="cafe-list__title">{{ post.name }}</h2></li>
      <li class="cafe-list__item">
        <p class="cafe-list__cuisine"
        v-if="post.establishmentTypeAndCuisineTags"
        >
          Кухня: {{ post.establishmentTypeAndCuisineTags.join(', ') }}
        </p>
        <p class="cafe-list__cuisine"
          v-else
        >
          Кухня: Разнообразная
        </p>
      </li>
      <li class="cafe-list__item">
        <button class="cafe-list__btn">Подробнее</button>
      </li>
    </ul>
    <a
      class="cafe-list__menu"
      :href="post.menuUrl"
      v-if="post.hasMenu === false"
    >
      <span class="cafe-list__no-menu">Меню</span>
    </a>
    <a
      class="cafe-list__menu"
      :href="post.menuUrl"
      v-else
    >
      Меню
    </a>
    <p class="cafe-list__price"
      v-if="post.averageRating === null"
    >
      Средний чек: <span class="cafe-list__span">-</span>
    </p>
    <p class="cafe-list__price"
      v-else
    >Средний рейтинг: <span class="cafe-list__span">{{ post.averageRating }}</span>
    </p>
  </div>
</template>


<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
 .cafe-list__items {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  background-color: rgba(360, 360, 360, 0.9);
  margin-bottom: 25px;
  padding: 10px 0;
}

.cafe-list__img {
  min-width: 250px;
  height: 170px;
}

.cafe-list__cuption {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
}

.cafe-list__btn {
  padding: 5px;
  margin-top: 35px;
  color: #000;
  background: transparent;
  border: 1px solid #000;
  cursor: pointer;
}

.cafe-list__menu {
  width: 115px;
  text-align: center;
  text-decoration: none;
  color: #000;
  margin: 16px 0;
  font-weight: 500;
}

.cafe-list__no-menu {
  color: #808080;
}

.cafe-list__price {
  width: 80px;
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