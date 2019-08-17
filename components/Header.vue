<template>
  <header>
    <app-logo />
    <div class="container">
      <div class="flex center rows full">
        <div>
        <h1>FULL
					<br />STACK
					<br />DEVELOPER</h1>
          <p>
            Petter Ruud is an experienced full-stack developer at Sopra Steria, where he has a primary focus on front-end development.
            </p>
      </div>
    </div>

    </div>
  </header>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue';
  import Button from '~/components/Button.vue';
  export default {
    components: {
      AppLogo,
      Button,
    }
  }
</script>
