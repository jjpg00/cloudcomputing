const Club = require('./Club');
const Usuario = require('./Usuario');
const Futbolista = require('./Futbolista');

class FootballerStats {
  constructor() {
    this.futbolistas = [];
    this.clubs = [];
    this.usuarios = [];
  }

  /* Apartado para el manejo de futbolistas*/
  // Crear nuevo jugador y añadirlo a la lista
  newFutbolista(p) {
    this.futbolistas.push(p)
    return p
  }
  get allFutbolistas() {
    return this.futbolistas
  }
  // this could include summary stats like average score, etc. For simplicy, just the count for now
  get numberOfFutbolistas() {
    return this.futbolistas.length
  }

 /*Aquí encontraremos las instacias de futbolista por nombre, que superen cierta valoración,  a partir de cierto precio, en una determinada posición etc..*/
 findValoracionFutbolista(parametro) {
  var result = this.futbolistas.filter(item => item.valoracion >= parametro);
  return result;
}

findPrecioFutbolista(parametro) {
  var result = this.futbolistas.filter(item => item.precio >= parametro);
  return result;
}

findPrecioRangoFutbolista(parametro, parametro2) {
  var result = this.futbolistas.filter(item => item.precio >= parametro);
  var result2 = result.filter(item => item.precio < parametro2);

  return result2;
}

findNombreFutbolista(parametro) {
var result = aplicacion.allFutbolistas;
var result2 = result.find(item => item.Nombre === parametro);
return result2;
}

findIdentificadorFutbolista(parametro) {
  var result = aplicacion.allFutbolistas;
  var result2 = result.find(item => item.UD === parametro);
  return result2;
}

findPaisFutbolista(parametro) {
  var result = aplicacion.allFutbolistas;
  var result2 = result.filter(item => item.Nacionalidad === parametro);
  return result2;
}

findClubFutbolista(parametro) {
  var result = aplicacion.allFutbolistas;
  var result2 = result.filter(item => item.club === parametro);
  return result2;
}

findPosicionFutbolista(parametro) {
  var result = aplicacion.allFutbolistas;
  var result2 = result.filter(item => item.posicion === parametro);
  return result2;
}

/*Se hará para todos los atributos del futbolista pero por comodidad, se ha hecho con uno */
findAceleracionFutbolista(parametro) {
  var result = this.futbolistas.filter(item => item.Acceleration >= parametro);
  return result;
}


  /*Metodos necesarios respecto a los clubes*/

  newClub(p) {
    this.clubs.push(p)
    return p
  }
  get allClubs() {
    return this.clubs
  }
 
  get numberOfClubs() {
    return this.clubs.length

  }


  /*Aquí encontraremos las instacias de club por nombre, que superen cierta valoración, clubes a partir de cierto precio etc..*/
  findValoracionClub(parametro) {
    var result = this.clubs.filter(item => item.valoracion >= parametro);
    return result;
  }

  findPrecioClub(parametro) {
    var result = this.clubs.filter(item => item.price >= parametro);
    return result;
  }

  findPrecioRangoClub(parametro, parametro2) {
    var result = this.clubs.filter(item => item.price >= parametro);
    var result2 = result.filter(item => item.price < parametro2);
    return result2;
  }
  
  findNombreClub(parametro) {
  var result = aplicacion.allClubs;
  var result2 = result.find(item => item.name === parametro);
    return result2;
  }

  findIdentificadorClub(parametro) {
    var result = aplicacion.allClubs;
    var result2 = result.find(item => item.identificador === parametro);
    return result2;
  }

  findPaisClub(parametro) {
    var result = aplicacion.allClubs;
    var result2 = result.filter(item => item.pais === parametro);
    return result2;
  }

  findLigaClub(parametro) {
    var result = aplicacion.allClubs;
    var result2 = result.filter(item => item.liga === parametro);
    return result2;
  }

  /*Metodos necesarios respecto a los usuarios*/
  newUsuario(p) {
    this.usuarios.push(p)
    return p
  }

  get allUsuarios() {
    return this.usuarios
  }

  get numberOfUsuarios() {
    return this.usuarios.length
  }

  findNombreUsuario(parametro) {
    var result = aplicacion.allUsuarios;
    var result2 = result.find(item => item.Nombre === parametro);
      return result2;
    }
}
module.exports = FootballerStats;