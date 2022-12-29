class Club {
    constructor (id,name,country,league,rating,price) {
      this.identificador = id;
      this.name=name;
      this.pais = country;
      this.liga = league;
      this.valoracion = rating;
      this.precio = price;
    }
    // Getter
    get rating() {
       return this.devolvervaloracion();
     }
     devolvervaloracion () {
        return this.valoracion;
      }
    // Getter
    get ident() {
        return this.identificador;
      }
  }

  module.exports = Club;