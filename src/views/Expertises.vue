<template>
  <div>
    <h1>Expertise</h1>
    <hr/>
    <b-card-group deck>
      <expertise-card
        v-for="expertise in expertises"
        :key="expertise"
        :title="expertise.title"
        :expertises="expertise.expertises"
        :id="expertise.id"
      />
    </b-card-group>
  </div>
</template>

<script>
import Expertises from '../data/expertises.json'
import ExpertiseCard from '../components/ExpertiseCard.vue'

export default {
  components: {
    ExpertiseCard,
  },
  data() {
    return {
      expertises: Expertises.entries
    }
  }
}
</script>
