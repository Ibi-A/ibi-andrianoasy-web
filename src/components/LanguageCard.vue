<template>
    <b-card
        :title="name"
        :img-src="imgSrc"
        :sub-title="level"
        :img-alt="name"
        img-top
        class="mb-3"
    >
    </b-card>
</template>

<script lang="ts">

export default {
    props: {
        name: String,
        level: String,
        imgSrc: String,
    }
}
</script>