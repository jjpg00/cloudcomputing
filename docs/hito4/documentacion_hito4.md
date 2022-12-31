### Integración continua funcionando y correcta justificación de la misma

En primer lugares haremos una comparación de los sistemas de integración continua para saber cual es la más adecuada a nuestro proyecto.
Para esto veremos las características y ventajas que ofrece cada uno de estos.

1. Puede crear, compartir, reutilizar y bifurcar sus prácticas de desarrollo de software.
Está completamente integrado con GitHub, lo que lo hace manejable desde un solo lugar.
Puede realizar pruebas de varios contenedores agregando soporte para Docker.
Puede elegir entre varias plantillas de CI o incluso crear las suyas propias.
Incluye 2000 minutos/mes de compilación gratuitos para todos sus repositorios privados.
Las actualizaciones frecuentes de código también facilitan la combinación de cambios de diferentes miembros de un equipo de desarrollo de software. Esto es excelente para los desarrolladores, que pueden pasar más tiempo escribiendo código y menos tiempo depurando errores o resolviendo conflictos de fusión.
GitHub ejecuta sus pruebas de CI y proporciona los resultados de cada prueba en la solicitud de extracción, para que pueda ver si el cambio en su rama introduce un error.
Cuando configura CI en su repositorio, GitHub analiza el código en su repositorio y recomienda flujos de trabajo de CI basados ​​en el lenguaje y el marco en su repositorio. Por ejemplo, si usa Node.js , GitHub le sugerirá un flujo de trabajo de inicio que instala sus paquetes de Node.js y ejecuta sus pruebas.

2. Cicle CI: Es fácil de configurar y se puede usar con sistemas populares de control de versiones como GitHub, Bitbucket y más.
Ofrece canalizaciones de CI/CD como 'Flujos de trabajo'.
Es compatible con la mayoría de los lenguajes de programación populares listos para usar.
Para reducir el tiempo de compilación, las compilaciones se pueden dividir y equilibrar en varios contenedores.
Las pruebas paralelas en CircleCI ayudan a ejecutar pruebas en paralelo entre diferentes ejecutores.
Las pruebas se pueden separar utilizando datos de tiempo que ayudan a reducir aún más el tiempo involucrado en la ejecución de la prueba.
CircleCI Server, que es la oferta local de CircleCI, se puede integrar con herramientas populares de terceros como GitHub Enterprise, LambdaTest, Coveralls y más.
CircleCI Server admite plataformas en la nube ampliamente utilizadas como AWS, Google Cloud, Azure y más.
CircleCI Orbs, que son fragmentos de código reutilizables, ayudan a automatizar procesos repetitivos y aceleran la integración con herramientas de terceros.

3. Travis CI: Travis CI admite una variedad de lenguajes de programación (es decir, un total de 30), incluidos Java, C #, Julia, Python y más.
Las empresas que buscan más privacidad y soluciones seguras pueden optar por Travis CI Enterprise, una herramienta autohospedada que se integra a la perfección con GitHub y Bitbucket.
Las canalizaciones de CI/CD utilizan una sintaxis YAML patentada, con una integración perfecta con las herramientas de GitHub Enterprise.
Puede usar la variante Cloud (o SaaS) de Travis CI para proyectos de código abierto y empresas con equipos pequeños.
Proporciona tiempos de ejecución en plataformas populares como Linux, macOS y Windows.
La función de matriz de compilación en Travis CI le permite realizar compilaciones paralelas en una variedad de combinaciones que comprenden diferentes entornos, idiomas y tiempos de ejecución.
Travis CI Enterprise admite la integración con plataformas en la nube populares como AWS, Google Cloud, Kubernetes, Azure y más.
La integración con herramientas de prueba de navegador cruzado como LambdaTest ayuda a realizar pruebas en diferentes navegadores, plataformas y dispositivos (emuladores).

4. Drone CI: Las canalizaciones se ejecutan en contenedores Docker aislados, lo que garantiza que las compilaciones no entren en conflicto.
Drone CI (Cloud and Enterprise) puede integrarse perfectamente con herramientas SCM populares como GitHub, Bitbucket y GitLab.
Drone CI puede funcionar con cualquier lenguaje de programación, base de datos o servicio para ejecutarse dentro de un contenedor Docker.
Admite la compilación y las pruebas en paralelo, incluidas las pruebas entre navegadores a través de la integración con LambdaTest.
Drone CI se puede instalar en cuestión de minutos, ya que solo requiere descargar la imagen oficial de Docker e instalarla.
Drone Cloud es completamente gratuito para proyectos de código abierto.
Drone CI (Cloud and Enterprise) tiene un ecosistema de complementos en crecimiento donde puede encontrar complementos para la integración en la nube, informes, pruebas, notificaciones y más.

5. Jenkins: Con esta herramienta los desarrolladores pueden detectar y solucionar problemas de integración, mucho más fácil y de forma constante, evitando estar a ultima hora teniendo problemas sin lograr ver en que parte del código está el error.
Jenkins se puede usar como un simple servidor de CI o se puede convertir en el centro de entrega continua para cualquier proyecto.
Jenkins está basado en Java, listo para ejecutarse, con paquetes para Windows, Mac OS X y otros sistemas operativos tipo Unix.
Se puede configurar fácilmente a través de su interfaz web, que incluye verificaciones de errores
Jenkins se integra con prácticamente todas las herramientas en la integración continua

Justificación: Todos los distintos sistemas de integración continua ofrecen una gran cantidad de ventajas y es muy difícil decantanse por uno. 
Para este proyecto, debido a que es un sistema simple se ha optado por Github actions ya que es el más fácil y rápido de implementar por el entorno en el que se está desarrollando y familiaridad de uso con él.
Si fuera un proyecto más complejo, podríamos escoger un sistema que repartiera la carga de trabajo que supone la integración continua en más de una plataforma, pero en este caso, con Github actions es suficiente.

Con Github actions podremos hacer testing del código fuente que se sube al proyecto de forma simple y automática para avisar si ha pasado todas las condiciones de nuestro archivo de tests.

El segundo sistema elegido por razones de familiaridad, facilidad y rápidez se ha elegido usar Circle CI.

### Github Actions

Para integrarlo con Github Actions ha sido necesario crear en la carpeta .github/workflows dos archivos: uno llamado *integracion.yml* y otro *integracionDocker.yml*
Con el primero lograremos ejecutar las github actions desde el propio código que subimos al repositorio, desde el segundo conseguiremos hacerlo desde nuestro contenedor.

El contenido de estos archivos es muy simple:
integration.yml
```
name: Despliegue aplicación en javascript

on: push

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x,18.x, 19.x]

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      - run: npm ci
      - run: npm test
```
Con name definimos el nombre que va la actions para que sepamos localizarla.

on: push lo usaremos para indicar que se haga siempre que se haga un push a nuestro repositorio, para comprobar que todo está correcto.

Tras eso, lo construiremos e indicaremos que se se ejecuta en la última aplicación de ubuntu, luego elegimos que se ejecute en 4 distintas versiones de node js ya que es una buena práctica que se ejecute en un gran número de versiones distintas para comprobar que funciona correctamente en cada una de ellas.
Por último hacemos un checkout y usamos npm ci que es similar que npm install pero especial para contenedores y entornos de integración continua. Tras eso ejecutamos los tests con npm test.


El archivo para ejecutarlo en el contenedor será muy similar únicamente hay que añadir que son tests de contenedores y ejecutar el comando docker run en nuestro contenedor.
```
  container-tests:

    runs-on: ubuntu-latest

    steps:
       - uses: actions/checkout@v3
       - run:  docker run -t -v `pwd`:/app/test jjpg00/cloudcomputing

```
Para más información consultar el siguiente vídeo: https://www.youtube.com/watch?v=azzRDem_p5k.
### Dockerfile correcto, siguiendo buenas prácticas, y adaptado de forma correcta a las clases o módulos que se están testeando

En primer lugar eligiremos el contenedor a usar y la versión que queremos usar, siendo en este caso la versión 19 alpine de node como se ha comentado en el apartado anterior.
```
FROM node:19-alpine
```

Necesitamos cual será nuestro directorio de trabajo que en este caso diremos que se encontrará en una carpeta /app
```
WORKDIR /app
```

Primero necesitamos copiar los archivos package.json y package-lock.json la razón de porque hay que empezar por estos dos archivos es porque en package json se encuentran unas dependencias a nivel de aplicación que necesita Node para funcionar ya que docker solo nos ofrece unas dependencias a nivel de sistema.
En el primer argumento especificamos que nos copie los dos archivos que empiecen por package y acaben en .json y en el segundo argumento el directorio de trabajo.
```
COPY package*.json ./
```

El siguiente paso es usar el npm install para que nos instale las dependencias. Tras esto conseguiremos la carpeta node-modules dentro del container y ya puede ejecutar el código al existir las dependencias necesarias.
```
npm install
```

Luego tendremos que copiar todo nuestro código javascript dentro del contenedor. 
```
COPY . .
```

Cuidado, como copiaremos todo el contenido de la carpeta dentro y especificaremos en un archivo .dockerignore las carpetas que no queramos copiar ya que estamos copiando todo al usar ".".
Quedando nuestro archivo .dockerignore de la siguiente manera: (ignoraremos el log del debugger y la carpeta de las depedencias)
Nota se hizo la imagen cuando solo había archivos del proyecto y no habia documentación etc..
```
node_modules
npm-debug.log
```

Ahora daremos un puerto por el que poder acceder a la aplicación a través del contenedor.
```
EXPOSE 6000
```

Ahora con el comando CMD pasaremos el comando que queremos ejecutar junto a sus argumentos, en este caso al querer ejecutar los tests sería de la siguiente forma:
```
CMD ["npm" , "test"]
```

Luego para construir el contenedor y ejecutarlo solo tenemos que usar los siguientes comandos.

```
docker build -t jjpg00/cloudcomputing .
docker run -t -v `pwd`:/app/test jjpg00/cloudcomputing
```

![Contenedor creado](../../imagenes/todobien.png)

### Contenedor subido correctamente a Docker Hub y documentación de la actualización automática
https://hub.docker.com/repository/docker/jjpg00/cloudcomputing
Tras el siguiente comando, comprobamos que lo hemos subido correctamente.
```
 docker push jjpg00/cloudcomputing
```
![Comprobacion](../../imagenes/cc.png)

Para conseguirlo se ha hecho uso de la herramienta actions que nos ofrece Github. Para ello tendremos que configurar un archivo .yml dentro de las carpetas .github/workflows.
El nombre del archivo será deploy-image.yml.

En el todos los parámetros los recogerá a través de variables, por ejemplo el nombre de la imagen será el nombre del repositorio de github.

```
IMAGE_NAME: ${{ github.repository }}
```
y para hacer el registro cogeremos nuestro usuario y un token para logearnos.
```
      username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
 ```
 
 Para la automatización haremos unos tags basados en la rama en la que estemos y luego también añadiremos el tipo sha para que se distingan uno de otros inequívocamente.
 Aquí podemos ver el código añadido, podemos ver la de docker y la de github:
 
 ![Dockerhub imagen](../../imagenes/main.png)
 ![Tags](../../imagenes/tags.png)
 
 Y aquí podemos comprobar el resultado:
 ![Cloud computing sha](../../imagenes/cloudcomputingsha.png)
 
 Para la automatización en Github, se ha creado un archivo llamado deploy-imageDocker.yml. Para su funcionamiento se han creado dos variables DOCKER_USERNAME y DOCKER_PASSWORD Para su funcionamiento. Esto se encuentra en Settings del proyecto-> Security -> Secrets y finalmente las añadimos.
### Uso de registros alternativos y públicos de contenedores (como GitHub Container Registry)
 La opción elegida ha sido GitHub Container Registry ya que estamos utilizando Github para el control del proyecto y es muy fácil y rápido de crearlo ya que únicamente hay que configurar el archivo .yml de forma correcta dentor de .github/workflows.
 Github Container Registry puede almacenar y administrar imágenes Docker y OCI en el registro de contenedores, que utiliza el espacio de nombres del paquete https://ghcr.io, especificado en nuestro archivo .yml. El archivo se puede crear manualmente o a través de la sección actions dentro de nuestro repositorio de Github.
 
 Tras ejecutar la action y acabar correctamente, podemos observar que nuestra imagen aparece en el repositorio:
 
 ![Contenedor](../../imagenes/contenedor.png)