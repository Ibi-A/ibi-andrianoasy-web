<template>
  <div>
    <h1>Compétences</h1>
    <hr/>
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

export default {
  components: {
    SkillCard,
  },
  data() {
    return {
      skills: Skills.entries
    }
  }
}
</script>
