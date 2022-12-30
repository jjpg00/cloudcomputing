const Club = require('./Club');
const Usuario = require('./Usuario');
const Futbolista = require('./Futbolista');
const FootballerStats = require('./FootballerStats');

/*Creamos un club y comprobamos que se ha creado correctamente viendo que su id es el correcto y que sus atributos están bien inicializados, como por ejemplo el rating*/
test("Club creado", () => {
    city2 = new Club(1,"city","eng","premier",90,500000);
    expect(city2.rating).toBe(90);
    expect(city2.ident).toBe(1);
  })
  ;


  /*Creamos un usuario y comprobamos que tanto el id se ha creado y que la contraseña es correcta, el expect se encargará de devolver 0 si a la contraseña pasada por parámetro en el método passwordValida coincide con la del usuario, es decir, esta es true*/
  test("Usuario creado", () => {
    usuarioejemplo = new Usuario(1,"Juan José","pass");
    expect(usuarioejemplo.ident).toBe(1);
    expect(usuarioejemplo.passwordValida("pass")).toBe(0);
  })
  ;

  /*Creamos un futbolista y comprobamos que se ha creado correctamente viendo que su id es el correcto y que sus atributos están bien inicializados, como por ejemplo el rating*/
test("Futbolista creado", () => {
  messi =new Futbolista(
    "A00001",
    "Lionel Andres Messi",
    "Argentina",
    91,
    "9/9/20",
    "PSG",
    3000,
    "Delantero", "Izquierda", "1.71m", "68kg", 10,
    90, 95, 96, 97, 98, 90,
    96, 94, 93, 92, 94, 95,
    96, 94, 93, 92, 94, 95,
    96, 94, 93, 92, 94, 95,
    96, 94, 93, 92, 94, 95, 96, 94, 93, 92, 94,
    12, 12, 13, 10, 11, 12
);
  expect(messi.ident).toBe("A00001");
  expect(messi.rating).toBe(91);
})
;

test("Integración en la aplicación", () => {
  aplicacion= new FootballerStats();
  madrid = new Club(2,"Madrid","Spa","Santander",91,606020);
  barcelona = new Club(2,"Barcelona","Spa","Santander",89,435340);
  aplicacion.newFutbolista(messi);
  aplicacion.newClub(city2);
  aplicacion.newClub(madrid);
  aplicacion.newClub(barcelona);
  aplicacion.newUsuario(usuarioejemplo);

  expect(aplicacion.numberOfFutbolistas).toBe(2);
  expect(aplicacion.numberOfClubs).toBe(3);
  expect(aplicacion.numberOfUsuarios).toBe(1);


// Get the Array item which matchs the id "2"
var testPrecioClub = aplicacion.findValoracionClub(90);
var testNameClub = aplicacion.findNombreClub("Madrid");
var testNameClub2 = aplicacion.findNombreClub("No existo");
var testPaisClub = aplicacion.findPaisClub("Spa");
expect(testPrecioClub.length).toBe(2);
expect(testNameClub.name).toBe("Madrid");
expect(testNameClub2).toBe(undefined);
expect(testPaisClub.length).toBe(2);
  //var result = aplicacion.allClubs;
  //var result2 = result.find(item => item.name === "Madrid");
 // console.log(result2); 
 // Prints: Peter

  neymar=new Futbolista(
  "A00002",
  "NeymarJr",
  "Brasil",
  88,
  "9/9/20",
  "PSG",
  2000,
  "Delantero", "Derecha", "1.78m", "75kg", 11,
  90, 95, 96, 97, 98, 90,
  96, 94, 93, 92, 94, 95,
  96, 94, 93, 92, 94, 95,
  96, 94, 93, 92, 94, 95,
  96, 94, 93, 92, 94, 95, 96, 94, 93, 92, 94,
  12, 12, 13, 10, 11, 12
);

modric =new Futbolista(
  "A00002",
  "Luka Modric",
  "Croacia",
  88,
  "9/9/20",
  "Real Madrid",
  1000,
  "Mediocentro", "Derecha", "1.75m", "71kg", 8,
  90, 95, 96, 97, 98, 90,
  96, 94, 93, 92, 94, 95,
  96, 94, 93, 92, 94, 95,
  96, 94, 93, 92, 94, 95,
  96, 94, 93, 92, 94, 95, 96, 94, 93, 92, 94,
  12, 12, 13, 10, 11, 12
);

aplicacion.newFutbolista(neymar);
aplicacion.newFutbolista(modric);

expect(aplicacion.numberOfFutbolistas).toBe(3);

var testPrecioFutbolista = aplicacion.findPrecioFutbolista(2400);
var testNameFutbolista = aplicacion.findNombreFutbolista("NeymarJr");
var testNameFutbolista2 = aplicacion.findNombreFutbolista("No existo");
var testClubFutbolista = aplicacion.findClubFutbolista("PSG");
var testPosicionFutbolista = aplicacion.findPosicionFutbolista("Delantero");
var testAceleracionFutbolista = aplicacion.findAceleracionFutbolista(20);
var testRangoPrecioFutbolista = aplicacion.findPrecioRangoFutbolista(1400,2100);
expect(testPrecioFutbolista.length).toBe(1);
expect(testNameFutbolista.Nombre).toBe("NeymarJr");
expect(testNameFutbolista2).toBe(undefined);
expect(testClubFutbolista.length).toBe(2);
expect(testPosicionFutbolista.length).toBe(2);
expect(testAceleracionFutbolista.length).toBe(3);
expect(testRangoPrecioFutbolista.length).toBe(1);
})
;

