<template>
  <div>
    <div class="youtube-links">
      <img
        src="../../public/assets/mute.svg"
        @click="stopVideo"
        v-if="!audio"
        :class="{ dark: this.themeUser == 'light' }"
      />
      <img
        src="../../public/assets/unmute.svg"
        @click="playVideo"
        v-if="audio"
        :class="{ dark: this.themeUser == 'light' }"
      />
    </div>
    <div class="yt-video">
      <YoutubeVue3
        ref="youtube"
        :videoid="videoID"
        :width="0"
        :height="0"
        :autoplay="0"
        :mute="1"
        :loop="1"
      />
    </div>
  </div>
</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3';

export default {
  components: { YoutubeVue3 },
  data() {
    return {
      audio: false,
      videoID: '',
      themeUser: '',
    };
  },
  methods: {
    playVideo() {
      this.audio = !this.audio;
      this.$refs.youtube.player.setVolume(0);
    },
    stopVideo() {
      this.audio = !this.audio;
      this.$refs.youtube.player.setVolume(100);
    },
  },
  mounted() {
    this.themeUser = localStorage.getItem('themeUser');
    this.videoID = localStorage.getItem('video');
    this.$refs.youtube.player.setVolume(0);
    this.$refs.youtube.player.playVideo();
  },
};
</script>

<style scoped lang="scss">
.youtube-links {
  height: 35px;
  width: 35px;
  margin: 0 0 20px 20px;

  img {
    cursor: pointer;
  }
}
.yt-video {
  display: none;
}
.dark {
  filter: invert(0.8) !important;
}
</style>
