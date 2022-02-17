<template>
  <div>
    <nav class="navbar navbar-light fixed-top">
      <div class="container-fluid">
        <div class="navbar-brand" />

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">選單</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">
                  <router-link to="/">首頁</router-link></a
                >
              </li>
              <li class="nav-item" to="/contest">
                <a class="nav-link">
                  <router-link to="/contest">競賽成果</router-link></a
                >
              </li>
              <li class="nav-item" to="/portfolio">
                <a class="nav-link">
                  <router-link to="/portfolio">作品集</router-link></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
@media (max-width: 768px) {
  .offcanvas {
    width: 200px;
  }
}
.navbar {
  background-color: #d3dedc;
}
.nav-item a {
  text-decoration: none;
  color: black;
}
</style>