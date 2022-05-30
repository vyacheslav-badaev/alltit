<template>
  <div class="columns index is-multiple is-mobile">
    <div
      class="column is-full-tablet is-one-third-desktop has-text-justified intro"
    >
      <h2>post</h2>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
}
</script>
<style lang="scss" scoped>
html {
  background-color: red !important;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
