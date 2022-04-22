<template>
<body style="background-color:#D7CCC8">

    <div class="perfil">
         <p>
            <!--ruta de la imagen de assets-->
            <img src="@/assets/logo-ugb.png" width="600" height="150">
        </p>

        <!--Titulo del componente-->
        <h1>Carta de presentación del estudiante</h1>

        <br>
        <body class="m-0 row justify-content-center background-color:#D7CCC8">
        <div class="card" style="width: 19rem; " >
            <img class="card-img-top" src="@/assets/imagenMia.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Cristobal Josue Torres Hernandez</h5>
            <p class="card-text">Soy estudiante de la carrera "Ingeniería en Sistemas y Redes Informáticas" en la Universidad Gerardo Barrios
             Tengo 19 años y vivo en la ciudad de La Unión, El Salvador.   
            </p>
            
            <a href="https://www.linkedin.com/in/cristobal-torres-86ab81173/" class="btn btn-primary">Más información</a>

            </div>
            
        </div>
        <p>
             <!--Lista de objetivos personales de la carrera-->
            <h5>Mis objetivos academicos para la asignatura los habia declarado antes de entrar y son los siguientes:</h5>
            <br>
            <br>
            <div class="container">
  <div class="row">
    <div class="col-sm">
Poder manejar los distintos frameworks y dominar bootstrap para tener un mejor desenvolvimiento al momento de desarrollar un sitio web o aplicacion web.  </div>
    <div class="col-sm">
Aprender sobre el manejo, conexion de mi aplicacion web mediante la implementación del backend y frontend.    </div>
    <div class="col-sm">
Comprender de mejor manera la implementación de Bootstrap en nuestros proyectos ya que con esa herramienta los sitios web
toman una visualización mas estetica y atractiva para el usuario.    </div>
  </div>
</div>
            </p>
            <br>
            <h1>Las competencias obtenidas son las siguientes:</h1>
            <p>
              <b-list-group-item>-Rapidez al momento de crear APIS en Larabel. </b-list-group-item>
                            <b-list-group-item>-Mejor manejo al integrar funciones de CRUD en Vue.js mediante creacion de API en Larabel. </b-list-group-item>
                                          <b-list-group-item>-Mejor analisis del codigo tanto de Vue.js como en Laravel. </b-list-group-item>


            </p>
            <br>
            <div class="container">
                <p style="text-align:justify">
            <h1>El tema con mas dificultad en el computo fue:</h1>
            <p>
              Semana 8: Conexion de Base de Datos con Laravel.
              Fue bastante dificil ya que se tenia que configurar tanto el nombre de la base de datos,
              como en el archivo .env de nuestro proyecto, tener las credenciales listas y que el 
              motor de nuestro proyecto fuera "InnoDB" para que funcionara correctamente.
              Fue un poco confuso, pero con la practica se fue mejorando y puliendo, hasta llegar a este 
              punto donde pude manejarlo de mejor manera.
            </p>
            <br>
            <h1>La mayor dificultad que tuve:</h1>
            <p>
              La conexion y estabilidad de mi conexion de internet, ya que 
              a veces se caia la conexion, y posiblemente estaba descargando
              una nueva version ya sea de composere como de larabel o php, 
              entonces se dificultaba un poco por la mala conexion a la red.
            </p>
            </div>
            
        </body>
    </div>
</body>
</template>
