### Lenguaje programación
El lenguaje de programación usado para este proyecto será JavaScript usando nodejs.

### Elección y configuración del gestor de tareas
---
Se ha elegido npm como gestor de tareas por las siguientes razones:

1. Te permite instalar librerías, frameworks y otras herramientas de desarrollo para tu proyecto.
2. Accedes a proyectos Node.js seguros para el desarrollo.
3. Te ayuda a acelerar la fase de desarrollo mediante el uso de dependencias preconstruidas.
4. Npm tiene una gran variedad de herramientas para elegir sin ningún coste.
5. Utilizar los comandos de npm no requiere mucho aprendizaje, ya que son fáciles de entender y de utilizar.

### Elección y uso de la biblioteca de aserciones
---
La elección de la librería en este caso es Jest dentro de la gran variedad de librerías que existen por los siguientes motivos.

1. Es compatible: – El framework es compatible con Angular, React, NodeJS, VueJS y otros proyectos basados en babel.

2. Más rápido que otras herramientas tradicionales: – Es una herramienta de prueba muy rápida. Cuando nuestra prueba está vinculada a la CPU, puede ahorrar un tiempo significativo de nuestras ejecuciones de prueba. La prueba local solía tomar 45 minutos, Jest la redujo a 14 o 15 minutos.

3. Prueba de instantáneas:

4. Simulacros de temporizador: los usuarios pueden manipular el tiempo, lo cual es útil. Por lo tanto, la prueba no será lenta y el tiempo puede ser manipulado por ella.


### Elección y uso del marco de pruebas.
---
Jest nos permite usarlo como marco de pruebas. ¡Esta es una de las razones de su elección!

### Funcionamiento de Jest
Para usarlo en nuestro proyecto basta con escribir el siguiente comando

```
npm install --save-dev jest
```

Luego escribimos el test en el archivo [test.js](./src/test.js) que tienen la siguiente forma:
```
test("Club creado", () => {
    city2 = new Club(1,"city","eng","premier",90,500000);
    expect(city2.rating).toBe(90);
    expect(city2.ident).toBe(1);
  })
  ;
```

```
por último los ejecutamos con npm test
```

![test realizados](../../imagenes/test.png)

###  Correcta relación entre avance de código (incluyendo los tests) e HUs, incluyendo testeo de algunos aspectos de la lógica de negocio.
---
En el archivo test.js se han creado los siguientes archivos para comprobar el correcto funcionamiento de estos

1. Se ha creado un test llamado Club creado para comprobar que los clubes se han creado correctamente.

2. Se ha creado un test llamado Usuario creadot para comprobar que los usuarios se han creado correctamente.
2.1. Dentro de este test se comprueba que la contraseña de ingreso es la correcta para ese usuario.

3. Se ha creado un test llamado Futbolista creado para comprobar que los futbolistas se han creado correctamente.

4. Se ha creado un test llamado Integración en la aplicación que amplía gran funcionalidad de lás posibles búsquedas de jugadores. Se ha implementado búsqueda por precio, valoración, posición en el campo, nombre, id...
Se ha completado todos los test para búsqueda por club, como puede ser búsqueda por nombre, por id, por valoración, por precio, por rango de precio y país.

Se ha completado el primer milestone de creación de clases y se ha hecho gran parte del segundo, que es la implementación de la lógica de negocio de los futbolistas. También se ha compleado practicamente el tercero de la implementación de la lógica de los clubes.