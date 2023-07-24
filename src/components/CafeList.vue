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
    <div class="cafe-list__info">
      <p class="cafe-list__lunch"
      v-if="post.business_lunch"
    >
      Бизнес ланч: <span class="cafe-list__span">Есть</span>
    </p>
    <p class="cafe-list__lunch"
      v-else
    >
      Бизнес ланч: <span class="cafe-list__span">Нет</span>
    </p>
    <p class="cafe-list__price"
      v-if="post.price === 0"
    >
      Средний чек: <span class="cafe-list__span">-</span>
    </p>
    <p class="cafe-list__price"
      v-else>Средний чек: <span class="cafe-list__span">{{ post.price }}</span>
    </p>
    </div>
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
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 250px 1fr;
  box-sizing: border-box;
  border-radius: 10px 10px;
  background-color: rgba(360, 360, 360, 0.9);
  margin:12px 20px 12px;
}

.cafe-list__img {
  min-width: 300px;
  height: 200px;
  border-radius: 10px 10px ;
}

.cafe-list__cuption {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 16px 0 15px 16px;
}

.cafe-list__item {
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

.cafe-list__info {
  display: flex;
}

.cafe-list__lunch {
  text-align: center;
  margin-right: 10px;
}

.cafe-list__price {
  text-align: center;
  margin-right: 15px;
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

@media screen and (max-width: 781px) {
  .cafe-list__items {
    grid-template-columns: 1fr 150px 1fr;
  }
}

@media screen and (max-width: 681px) {
  .cafe-list__items {
    grid-template-columns: 1fr 1fr;
  }

  .cafe-list__img {
    width: 100%;
    height: 300px;
    grid-column: span 2;
  }
}

@media screen and (max-width: 364px) {
  .cafe-list__items {
    grid-template-columns: 2fr 1fr;
    margin: 7px 10px 7px;
  }

  .cafe-list__item {
    font-size: 10px;
    line-height: 12px;
  }

  .cafe-list__title {
    font-size: 15px;
    line-height: 12px;
  }

  .cafe-list__info {
    flex-direction: column;
    font-size: 10px;
  }

  .cafe-list__span {
    font-size: 14px;
  }

  .cafe-list__address {
    margin: 0;
    padding-top: 20px;
  }
}
</style>