<template>
  <div>
    <view-title title="Compétences"/>
    <b-card-group deck>
      <skill-card
        v-for="skill in skills"
        :key="skill"
        :title="skill.title"
        :skills="skill.skills"
      />
    </b-card-group>
  </div>
</template>

<script>
import Skills from '../data/skills.json'
import SkillCard from '../components/SkillCard.vue'
import ViewTitle from '../components/ViewTitle.vue'

export default {
  components: {
    SkillCard,
    ViewTitle,
  },
  data() {
    return {
      skills: Skills.entries
    }
  }
}
</script>
