<template>
  <div class="button" :class="[
  size ? 'button--' + size : '',
  type ? 'button--' + type : ''
  ]">
  <slot></slot>
  </div>
</template>

<script>
export default {
  props: [
      'size',
      'type',
  ]
}
</script>

