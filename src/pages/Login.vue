<template>
  <div class="container">
    <div class="login">
      <div>
        <p class="loginTxt">login</p>
        <br />
        <form action="">
          <InputComponent type="text" labelInp="email adress"></InputComponent>
          <br />
          <br />
          <InputComponent type="password" labelInp="password"></InputComponent>
          <div class="formContainer">
            <button class="loginButton">log in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from '../components/InputComponent';

export default {
  components: {
    InputComponent,
  },
};
</script>

<style lang="scss" scoped>
.formContainer {
  margin-top: 40px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.loginTxt {
  margin-top: -28px;
  text-align: center;
  width: 100%;
  font-size: 28px;
  color: var(--settings-text-light);
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background-black);
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: var(--stat-background);
  width: 80vw;
  height: 60vh;
}
.loginButton {
  width: 100px;
  height: 30px;
  border-radius: 6px;
  color: black;
  background-color: var(--smile-blue);
  border: 1px solid var(--smile-blue);
}

@media all and (min-width: 600px) {
  .loginTxt {
    font-size: 38px;
  }
  .login {
    width: 350px;
    height: 70vh;
  }
}
</style>
