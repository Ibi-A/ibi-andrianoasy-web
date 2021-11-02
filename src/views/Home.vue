<template>
  <div>
    <b-jumbotron :header="aboutMe.name" :lead="aboutMe.title"><p>{{ aboutMe.description }}</p></b-jumbotron>
  </div>
</template>

<script>
import AboutMe from '../data/aboutMe.json'

export default {
  components: {
    
  },
  data() {
    return {
      aboutMe: AboutMe
    }
  }
}
</script>
