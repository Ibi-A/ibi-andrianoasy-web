<template>
    <b-card
        :title="name"
        align="center"
        class="mb-3"
    >
        <b-card-text v-if="isLink == true">
            <a :href="'http://' + value">{{ value }}</a>
        </b-card-text>
        <b-card-text v-else>{{ value }}</b-card-text>
    </b-card>
</template>

<script lang="ts">

export default {
    props: {
        name: String,
        value: String,
        isLink: Boolean
    }
}
</script>