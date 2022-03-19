<template>
  <span>{{ getTranslation(text) }}</span>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['text'],
  computed: {
    ...mapGetters(['getTranslation']),
  },
};
</script>

<style></style>
