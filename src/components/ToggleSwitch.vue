<template>
  <div><input type="checkbox" :checked="checkTheme" /></div>
</template>

<script>
export default {
  props: ['theme'],
  computed: {
    checkTheme() {
      if (this.theme === 'light') {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
input[type='checkbox'] {
  position: relative;
  width: 120px;
  height: 40px;
  -webkit-appearance: none;
  background: linear-gradient(0deg, #2d3038, rgb(26, 26, 26));
  outline: none;
  border-radius: 20px;
  box-shadow: 0 0 0 4px #2d3038, 0 0 0 5px #3e3e3e, inset 0 0 10px rgb(22, 22, 22),
    0 5px 20px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(32, 32, 32, 0.2);
}
input[type='checkbox']::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 40px;
  background: linear-gradient(0deg, rgb(17, 17, 17), #3d4049);
  border-radius: 20px;
  transform: scale(0.98, 0.96);
  transition: 0.5s;
}
input:checked[type='checkbox']::before {
  left: 40px;
  background: linear-gradient(0deg, #9b9489, #dddddd);
}
input[type='checkbox']::after {
  content: '';
  position: absolute;
  top: calc(50% - 2px);
  left: 64px;
  width: 5px;
  height: 5px;
  background: linear-gradient(0deg, #6b6b6b, #000);
  transition: 0.5s;
  border-radius: 50%;
}
input:checked[type='checkbox']::after {
  background: #e4e3d3;
  left: 105px;
  box-shadow: 0 0 5px #ffffff, 0 0 15px #d4d4d4;
}
input:checked[type='checkbox'] {
  background: linear-gradient(0deg, #e9e8e8, #c9c9c9);
  box-shadow: 0 0 2px #cecece, 0 0 0 4px #c4c4c4, 0 0 0 5px #b3b3b3,
    inset 0 0 20px rgb(143, 143, 143), 0 5px 20px rgba(136, 136, 136, 0.5),
    inset 0 0 15px rgba(228, 227, 227, 0.3);
}
</style>
