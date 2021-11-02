<template>
    <b-card
        :title="type"
        :img-src="logoSrc"
        :sub-title="title"
        :img-alt="school"
        img-top
        class="mb-3"
    >
        <template #footer>
            {{ school }} ({{ period }})
        </template>
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
    }
}
</script>