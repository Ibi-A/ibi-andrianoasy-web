<template>
    <b-card
        :title="type"
        :img-src="logoSrc"
        :sub-title="title"
        :img-alt="school"
        class="mb-3"
        img-top
    >
        <template #footer>
            {{ school }} ({{ period }})
        </template>
        <b-card-text>
            {{ description }}
        </b-card-text>
    </b-card>
</template>

<script lang="ts">

export default {
    props: {
        type: String,
        title: String,
        logoSrc: String,
        school: String,
        period: String,
        description: String,
    }
}
</script>