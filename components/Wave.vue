<template>
  <div class="waveWrapper waveAnimation" :class="cssClass">
    <div class="waveWrapperInner bgMiddle">
      <div class="wave waveMiddle"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Wave',
  props: {
    cssClass: {
      type: String,
      default: () => ''
    }
  }
}
</script>
