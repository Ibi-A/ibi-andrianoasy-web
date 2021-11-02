<template>
  <div>
    <h1>Outils</h1>
    <hr/>
    <b-card-group deck>
      <tool-card v-for="tool in tools" :key="tool" :title="tool.title" :tools="tool.tools"/>
    </b-card-group>
  </div>
</template>

<script>
import Tools from '../data/tools.json'
import ToolCard from '../components/ToolCard.vue'

export default {
  components: {
    ToolCard,
  },
  data() {
    return {
      tools: Tools.entries
    }
  }
}
</script>
