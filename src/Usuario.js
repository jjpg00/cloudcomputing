class Usuario {
    constructor (ID,Nombre,Contrasena) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Contrasena = Contrasena;
    }

      // Getter
      get ident() {
        return this.ID;
      }
    // Método para comprobar que la contraseña coincide con la del usuario
    passwordValida(password) {
        return this.Contrasena.localeCompare(password);
   }
  }

  module.exports = Usuario;