<template>
  <div class="containerInp">
    <div>
      <input :type="type" class="nameInp" ref="inputtt" required />
      <p class="labelName" @click="fokusiraj">{{ labelInp }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fokusiraj() {
      this.$refs.inputtt.focus();
    },
  },
  props: ['type', 'labelInp'],
};
</script>

<style lang="scss" scoped>
.containerInp {
  position: relative;
}

.nameInp:valid + .labelName {
  top: -24px;
  left: 10px;
  font-size: 12px;
  transition: 0.4s;
}
.nameInp {
  padding: 10px 10px;
  border-radius: 4px;
  background-color: var(--stat-background);
  color: var(--settings-text-light);
  border: 1px solid var(--settings-border);
}
.labelName {
  padding: 0px 10px;
  background-color: var(--stat-background);
  color: var(--settings-text);
  position: absolute;
  top: -5px;
  left: 10px;
  font-size: 16px;
  transition: 0.4s;
}
.nameInp:focus + .labelName {
  color: var(--settings-text);
  position: absolute;
  top: -24px;
  left: 10px;
  font-size: 12px;
  transition: 0.4s;
}
</style>
