<template>
  <div id="app">
    <Navbar v-if="isLogged" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import router from "./router/index";

export default {
  components: {
    Navbar,
  },
  mounted() {
    if (this.$store.state.admin.token === undefined) {
      this.$router.currentRoute.name != "Login"
        ? router.push({ path: "login" })
        : null;
    } else {
      this.logged = true;
    }
  },
  computed: {
    isLogged() {
      return this.$store.state.admin.token === undefined ? false : true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#form {
  font-family: "Open Sans", sans-serif;

  width: 100%;
}
#form label {
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #000000;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 10px;
}
#form input,
#form textarea {
  background: #f4f4f4;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  height: 50px;
  border: none;
  padding: 14px;
}
#form .ti-input {
  border: none;
  opacity: 1;
  /* margin-bottom: 10px; */
  background: #f4f4f4;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  padding: 0px;
}
#form #tag_input {
  background-color: none;
  box-shadow: none;
  /* padding: 0; */
  height: 100%;

  /* padding-bottom: 7px; */
}
#form .vue-tags-input {
  background: #f4f4f4;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
}
#form .ti-tag {
  background: #38485f;
  color: #fff;
  border-radius: 2px;
  display: flex;
  padding: 3px 5px;
  font-size: 14px;
  margin: 2px;
  height: 48px;
}
#form .ti-tags {
  height: 50px;
}
#form textarea {
  height: 100px;
  /* resize: vertical; */
}
#form input::placeholder {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
}
#modal-1 .modal-footer {
  justify-content: center;
}
#modal-1 .modal-header {
  /* justify-content: center; */
  border: none;
}
#modal-1 .modal-footer {
  /* justify-content: center; */
  border: none;
}
#modal-1 p {
  /* justify-content: center; */
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  font-family: "Open Sans", sans-serif;
  /* text-align: center; */
}
#modal-1 .modal-dialog {
  /* transform: none; */
  transform: translateY(75%) !important;

  max-width: 400px;
  margin: 1.75rem auto;
}
#modal-1 .btn-primary,
#modal-1 .btn-secondary {
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;

  color: #000000;
  border: none;
  outline: none;
  font-family: "Open Sans", sans-serif;
}
/* #modal-1  */
</style>
