<template>
    <b-card
        :title="title"
        class="mb-3"
    >
        <b-list-group class="mt-4">
            <collapsable-list-group-item
                v-for="tool in tools"
                :key="tool"
                :title="tool.title"
                :description="tool.description"
                :parent-id="id"
                :item-id="tool.id"
            />
        </b-list-group>
    </b-card>
</template>

<script lang="ts">
import CollapsableListGroupItem from './CollapsableListGroupItem.vue'

export default {
    components: {
        CollapsableListGroupItem,
    },
    props: {
        id: String,
        title: String,
        tools: [],
    }
}
</script>