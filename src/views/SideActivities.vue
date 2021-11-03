<template>
  <div>
    <view-title title="Activités annexes"/>
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
import ViewTitle from '../components/ViewTitle.vue'

export default {
  components: {
    ProfessionalExperienceCard,
    ViewTitle,
  },
  data() {
    return {
      sideActivities: SideActivities.entries
    }
  }
}
</script>
