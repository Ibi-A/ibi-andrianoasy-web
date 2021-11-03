<template>
    <b-card
        :title="title"
        class="mb-3"
    >
        <b-list-group>
            <collapsable-list-group-item v-for="expertise in expertises" :key="expertise.id"
                :title="expertise.title"
                :description="expertise.description"
                :parent-id="id"
                :item-id="expertise.id"
            />
        </b-list-group>
    </b-card>
</template>

<script lang="ts">
import CollapsableListGroupItem from './CollapsableListGroupItem.vue'

export default {
    components: {
        CollapsableListGroupItem
    },
    props: {
        id: String,
        title: String,
        expertises: [],
    }
}
</script>