<template>
  <div class="navbar">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand>Ezystore admin</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/products">Products</b-nav-item>
        <b-nav-item href="#">Orders</b-nav-item>
        <b-nav-item href="#">Offers</b-nav-item>
        <b-nav-item-dropdown text="Resources" right>
          <b-dropdown-item href="/resources/brand"
            >Brand and models</b-dropdown-item
          >
          <b-dropdown-item href="#">Catalogues</b-dropdown-item>
          <b-dropdown-item href="#">Coupons</b-dropdown-item>
          <b-dropdown-item href="#">Delivery</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto btn-fixer">
        <b-button variant="danger" @click="logout">Logout</b-button>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.commit("logout");
      router.push({ path: "login" });
    },
  },
};
</script>

<style scoped>
.navbar {
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 20px;
}

.navbar-brand {
  padding-left: 10px;
}

.btn-fixer {
  padding-right: 10px;
}
</style>