<template>
  <div>
    <h1>Activités annexes</h1>
    <hr/>
    <b-card-group deck>
      <professional-experience-card
        v-for="e in sideActivities"
        :key="e.id"
        :company="e.company"
        :industry="e.industry"
        :logo-src="e.logoSrc"
        :job-title="e.jobTitle"
        :period="e.period"
        :duration="e.duration"
        :activities="e.activities"
      />
    </b-card-group>
  </div>
</template>

<script>
import SideActivities from '../data/sideActivities.json'
import ProfessionalExperienceCard from '../components/ProfessionalExperienceCard.vue'

export default {
  components: {
    ProfessionalExperienceCard,
  },
  data() {
    return {
      sideActivities: SideActivities.entries
    }
  }
}
</script>
