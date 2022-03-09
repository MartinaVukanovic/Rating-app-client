<template>
  <div class="smiley" :style="imageStyles" @click="submit">
    <img class="imgS" :src="imageSrc" />
  </div>
</template>

<script>
import utils from '@/utility';
import { mapActions } from 'vuex';

export default {
  props: {
    title: String,
    type: {
      required: true,
      type: String,
    },
    color: {
      required: true,
      type: String,
    },
  },
  computed: {
    imageType() {
      return this.type;
    },
    imageSrc() {
      return `../../assets/${this.imageType}.svg`;
    },
    imageStyles() {
      return {
        backgroundColor: utils.hexToRGB(this.getCssVariable(this.color), 0.1),
        borderLeft: `3px ${utils.hexToRGB(this.getCssVariable(this.color), 1)} solid`,
      };
    },
  },
  methods: {
    ...mapActions(['submitEmotion', 'toggleWelcomePage', 'toggleSpin']),
    getCssVariable(color) {
      return getComputedStyle(document.documentElement).getPropertyValue(color);
    },
    submit() {
      this.toggleSpin();
      this.submitEmotion(this.type);
      this.toggleSpin();
      this.toggleWelcomePage();
      setTimeout(this.toggleWelcomePage, 5000);
    },
  },
};
</script>

<style lang="scss" scoped>
.imgS {
  height: calc(100% * 0.45);
  width: calc(100% * 0.65);
  display: block;
  margin: auto;
}

.smiley {
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 3px;
  width: 189px;
  height: 141px;
}
</style>
