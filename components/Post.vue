<template>
  <div class="card">
    <div class="card-image">
      <img :src="post.image" alt="Placeholder image" />
    </div>
    <div class="card-content">
      <h4 class="is-size-5 title has-text-left" v-text="post.title"></h4>
      <div class="text">
        {{ post.description }}
        <a class="button btn-tiny is-pulled-right">+ MORE</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true,
      default: () => null
    }
  }
}
</script>
