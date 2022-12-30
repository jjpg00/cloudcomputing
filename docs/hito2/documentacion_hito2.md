### Elección y configuración del gestor de tareas
---
Como gestor de tareas se ha instalado make gracias a la instalación de MinGW que permite usarlo en Windows debido a su gran variedad de ventajas respecto a otros gestores.

1. Verifica lo que está desactualizado, para construir solo lo que necesita construir.

2. Es un lenguaje para programación declarativa. Se pueden agregar nuevos elementos sin necesidad de fusionarlos en un flujo de control imperativo.

3. Make permite una abreviatura para comandos complicados o una gran secuencia de comandos.

### Elección y uso de la biblioteca de aserciones
---
Para el uso de aserciones, he usado la de JUnit.
JUnit es un paquete Java para automatizar las pruebas de clases Java. Se ha elegido ya que se hace la aserciones de forma intuitiva, rápida y sencilla.

Para el uso de sus bibliotecas, debemos importarla en nuestro código según lo necesitemos, las usadas para este proyecto serán: 
`import org.junit.After;import org.junit.AfterClass; import org.junit.Before; import org.junit.BeforeClass; import org.junit.Test;import static org.junit.Assert.*;`

También se usarán validadores de la librería javax a través de debido a que las ofrece el framework usado y tiene una sintaxis muy sencilla:
`import javax.validation.ConstraintViolation; import javax.validation.Validation; import javax.validation.Validator;`


### Elección y uso del marco de pruebas.
---
El test runner es parte del framework Apache NetBeansIDE 11.2

Se ha elegido el test runner que tiene integrado debido a que te genera los archivos de forma automática, uno por cada clase que se quiera testear. 
Además a través del asistente se te ofrece mucho código generado automáticamente y aparece los problemas y el resultado del test de forma clara y sencilla,dando además
un estadístico de los tests que han fallado y acertado, origen del problema o fallo del test...

###  Correcta relación entre avance de código (incluyendo los tests) e HUs, incluyendo testeo de algunos aspectos de la lógica de negocio.
---
1. En ClubTest.java se ha creado un test llamado crearClubTest para comprobar que los clubes se han creado correctamente.

2. En UsuarioTest.java se ha creado un test llamado crearUsuarioTest para comprobar que los usuarios se han creado correctamente.
2.1. Además se ha creado otro test llamado testComprobacionClave comprobando que la contraseña de ingreso es la correcta para ese usuario.

3. En FutbolistaTest.java se ha creado un test llamado crearClubTest para comprobar que los futbolistas se han creado correctamente.

4. En FootballerStatsTest.java se ha creado un test que amplía gran funcionalidad de lás posibles búsquedas de jugadores. Se ha implementado búsqueda por precio, valoración y posición en el campo.

Se ha completado el primer milestone de creación de clases y se ha hecho gran parte del segundo, que es la implmentación de la lógica de negocio de los futbolistas.