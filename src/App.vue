<template>
    <div class="app__content">
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style>
  .app {
    max-width: 100vw;
    margin: 0;
    background: url(https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80) center no-repeat fixed;
    background-size: cover;
  }

  .app__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
  }
</style>
