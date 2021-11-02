<template>
  <div>
    <h1>Formation</h1>
    <hr/>
    <b-card-group deck>
      <diploma-card v-for="diploma in diplomas" :key="diploma.id" :type="diploma.type" :title="diploma.title" :picture-url="diploma.pictureUrl" :school="diploma.school" :year="diploma.year"/>
    </b-card-group>
  </div>
</template>

<script>
import Diplomas from '../data/diplomas.json'
import DiplomaCard from '../components/DiplomaCard.vue'

export default {
  components: {
    DiplomaCard,
  },
  data() {
    return {
      diplomas: Diplomas.entries
    }
  }
}
</script>
