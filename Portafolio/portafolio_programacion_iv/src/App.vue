<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
<b-navbar type="dark" variant="dark">
      <b-navbar-nav>
      <b-nav-item to="/introduction">Introducción</b-nav-item>
      <b-nav-item to="/descripcion">Descripción</b-nav-item>
      <b-nav-item to="/subjectContent">Contenidos</b-nav-item>
      <b-nav-item to="/workSchedule">Jornalización</b-nav-item>
      <b-nav-item to="/calendarizacion">Calendarizacion</b-nav-item>
      <b-nav-item to="/profile">Perfil de Estudiante</b-nav-item>
      <!--Boton desplegable para opciones-->
         <b-nav-item-dropdown text="Bitácora de aprendizajes" right> 
              <b-dropdown-item to="/practicasDesarrolladas">Practicas desarrolladas </b-dropdown-item>
              <b-dropdown-item to="/laboratorios">Laboratorios </b-dropdown-item>
              <b-dropdown-item to="/proyectosInGrup">Proyectos  grupales </b-dropdown-item>
              <b-dropdown-item to="/materiales">Materiales de apoyo utilizados </b-dropdown-item>
         </b-nav-item-dropdown>

      <b-nav-item to="/conclusions">Conclusiones</b-nav-item>

      
      </b-navbar-nav>
    
  </b-navbar>

    <router-view/>
    <footer class="bg-light text-center text-lg-start">
  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-dark" href="https://www.linkedin.com/in/cristobal-torres-86ab81173/">Cristobal Josue Torres Hernandez SMIS009220</a>
  </div>
  <!-- Copyright -->
</footer>
  </div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
