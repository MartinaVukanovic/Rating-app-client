<template>
  <div class="smiley" :style="imageStyles"><img class="imgS" :src="imageSrc" /></div>
</template>

<script>
import utils from '@/utility';

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
    getCssVariable(color) {
      return getComputedStyle(document.documentElement).getPropertyValue(color);
    },
  },
  mounted() {
    console.log(this.getCssVariable(this.color));
  },
};
</script>

<style lang="scss" scoped>
.imgS {
  display: block;
  margin: auto;
}

.smiley {
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 3px;
  background-color: rgb(0, 168, 107, 0.1);
  width: 189px;
  height: 141px;
  margin-bottom: 20px;
  margin-right: 1%;
  border-left: 3.5px rgb(0, 168, 107) solid;
}
</style>
