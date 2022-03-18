<template>
  <span>{{ getTranslation(HomeScreenMessage) }}</span>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getTranslation']),
  },
};
</script>

<style></style>
