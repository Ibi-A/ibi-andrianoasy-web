<template>
    <b-card
        :title="title"
        class="mb-3"
    >
        <b-list-group>
            <b-list-group-item 
                v-for="tool in tools" 
                :key="tool"
            >
                {{ tool }}
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script lang="ts">

export default {
    props: {
        title: String,
        tools: [],
    }
}
</script>