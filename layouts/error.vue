<template>
  <v-app dark>
    <div class="show-error secondary pa-10">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <span>
        Please visit 
        <NuxtLink to="/">Home page</NuxtLink>
      </span>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Error 404 - Page not found',
      otherError: 'An unexpected error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>

.show-error{
  margin: auto;
  text-align:center;
  width:80%;
}
h1{
  font-size: 1.5rem;
  padding-bottom:4px;
}
</style>
