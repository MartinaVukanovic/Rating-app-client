<template>
  <div>
    <div class="navbar desktop" :class="{ show: show }">
      <div>
        <router-link to="/">
          <img src="../../public/assets/logo.png" class="logo" />
        </router-link>
        <router-link to="/today" class="navigation">
          <img src="../../public/assets/todayreport.svg" class="icon" />
          <p class="txt">Today</p>
        </router-link>
        <router-link to="/reports" class="navigation">
          <img src="../../public/assets/allreports.svg" class="icon icon-note" />
          <p class="txt">Reports</p>
        </router-link>
      </div>
      <div class="down">
        <router-link to="/settings" class="navigation">
          <img src="../../public/assets/settings.svg" class="icon icon-note" />
          <p class="txt">Settings</p>
        </router-link>
      </div>
    </div>
    <div class="mobile" v-if="mobile">
      <div class="navbar-mobile">
        <img src="../../public/assets/logo.png" class="logo" />
        <div class="hamburger" :class="{ active: active }" @click="toggleHamburger">
          <span class="bar"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: true,
      active: false,
      show: false,
    };
  },
  methods: {
    toggleHamburger() {
      this.active = !this.active;
      this.show = !this.show;
    },
    handleResize() {
      if (window.innerWidth <= 768) {
        this.mobile = true;
        this.show = false;
      } else {
        this.mobile = false;
        this.show = true;
      }
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
};
</script>

<style scoped lang="scss">
.txt {
  margin-top: 4px !important;
}
.down {
  margin-bottom: 20px;
  width: 65%;
}
.navbar {
  z-index: 1 !important;
  width: 100px;
  height: 100%;
  position: fixed;
  left: -100px;
  background-color: var(--stat-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease;
}

.navigation {
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.navigation:focus {
  background-color: rgba(255, 255, 255, 0.08);
}
.navigation p {
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgba(255, 255, 255, 0.85);
}

.logo {
  padding: 15px 0;
}

.icon {
  color: white;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
}
.icon-note {
  padding-bottom: 2px;
}
.show {
  left: 0;
  transition: 0.3s ease;
}
/*mobile navigation*/

.navbar-mobile {
  z-index: 1 !important;
  width: 100%;
  position: fixed;
  height: 80px;
  background-color: var(--stat-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}
.hamburger {
  height: 3rem;
  width: 2.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
}
.bar {
  height: 3px;
  width: 80%;
  background-color: white;
  margin: 0 auto;
  position: relative;
  border-radius: 5px;
}
.bar::before,
.bar::after {
  position: absolute;
  content: '';
  height: 3px;
  width: 100%;
  background-color: white;
  display: flex;
  border-radius: 5px;
  transition: 0.3s ease;
}
.bar::before {
  top: 0.75rem;
}
.bar::after {
  top: -0.75rem;
}
.hamburger.active .bar {
  background-color: var(--stat-background);
}
.hamburger.active .bar::before {
  transition: 0.3s ease;
  top: 0;
  transform: rotate(45deg);
}
.hamburger.active .bar::after {
  transition: 0.3s ease;
  top: 0;
  transform: rotate(-45deg);
}
</style>
