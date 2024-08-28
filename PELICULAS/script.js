var listaPeliculas = [
    "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/10/02/15700267201971.jpg",
    "https://www.allcitycanvas.com/wp-content/uploads/2019/06/the-exorcist-poster.jpg",
    "https://i.blogs.es/7ebd88/us_ver3_xlg/450_1000.jpeg",
    "https://www.color3arte.com/color3arte/wp-content/uploads/2021/04/Carteles-de-cine-Color3arte%C2%AE-32-1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/GunsofNavarone.jpg/220px-GunsofNavarone.jpg",
    "https://www.quepelivemoshoy.com/wp-content/uploads/2020/11/poster-pulp-fiction.jpg"
  ];
  
  var nombrePeliculas = [
    "JOKER",
    "THE EXORCIST",
    "US",
    "TIBURON",
    "THE GUNS OF NAVARONE",
    "PULP FICTION"
  ];
  
  document.write('<div class="container_todosFilmes">');
  
  for (var i = 0; i < listaPeliculas.length; i++) {
    document.write("<img src = " + listaPeliculas[i] + ">");
  }
  