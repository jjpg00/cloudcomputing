const {Router} = require('express');
const router=Router();
const morgan = require('morgan')
const Club = require('../Club');
const Futbolista = require('../Futbolista');
const FootballerStats = require('../FootballerStats');
const Usuario = require('../Usuario');


router.get('/', (req,res) => res.json({message:'Hola mundo'}));

module.exports = router;

const express =  require('express');
const app=express();
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
repositorio= new FootballerStats();

city2 = new Club("1","city","eng","premier",90,500000);
city3 = new Club("54","psg","fr","ligue1",91,500000);
usuarioejemplo = new Usuario(1,"Juan José","pass");
usuarioejemplo2 = new Usuario(2,"Felipe","pass2");


neymar=new Futbolista(
    "1",
    "NeymarJr",
    "Brasil",
    88,
    "9/9/20",
    "PSG",
    2000,
    "Delantero", "Derecha", "1.78m", "75kg", 11,
    99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99,
    96, 94, 93, 92, 94, 95, 96, 94, 93, 92, 94,
    12, 12, 13, 10, 11, 12
  );
  
  modric =new Futbolista(
    "2",
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

  messi =new Futbolista(
    "3",
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

repositorio.newClub(city2);
repositorio.newClub(city3);
repositorio.newFutbolista(neymar);
repositorio.newFutbolista(messi);
repositorio.newFutbolista(modric);
repositorio.newUsuario(usuarioejemplo);
repositorio.newUsuario(usuarioejemplo2);

app.get('/',(req,res)=>{
res.send('Node JS api');

});

app.get('/api/futbolistas',(req,res)=>{
    res.status(200);
    res.send(repositorio. findValoracionFutbolista(0));
    
});

app.get('/api/usuarios',(req,res)=>{
    res.status(200);
    res.send(repositorio. allUsuarios2());
    
});

app.get('/api/clubes',(req,res)=>{
    res.status(200);
    res.send(repositorio. findValoracionClub(0));
    
});


app.get('/api/futbolistas/valoracion/:valoracion',(req,res)=>{
    res.status(200);
    value=parseInt(req.params.valoracion);
    res.send(repositorio. findValoracionFutbolista(value));
    
});

app.delete('/api/futbolistas/borrar/:borrar',(req,res)=>{
    res.status(200);
    value=parseInt(req.params.borrar);
    console.log(value);
    res.send(repositorio. deleteFutbolista(value));
    
});

app.put('/api/clubes/actualizar',(req,res)=> {
    res.status(200);
    variable=req.body.id;
    repositorio. deleteClub(variable);
    equipo = new Club(req.body.id,req.body.nombre,req.body.pais,req.body.liga,parseInt(req.body.valoracion),parseInt(req.body.precio));
    repositorio.newClub(equipo);
    res.send(equipo);
});


app.delete('/api/clubes/borrar/:borrar',(req,res)=>{
    res.status(200);
    value=parseInt(req.params.borrar);
    console.log(value);
    res.send(repositorio. deleteClub(value));
    
});

app.get('/api/clubes/valoracion/:valoracion',(req,res)=>{
    res.status(200);
    value=parseInt(req.params.valoracion);
    res.send(repositorio. findValoracionClub(value));
    
});


app.get('/api/futbolistas/atributo/aceleracion/:acceleration',(req,res)=>{
    res.status(200);

    value=parseInt(req.params.acceleration);
    res.send(repositorio. findAceleracionFutbolista(value));
});

app.post('/api/clubes',(req,res)=> {
    res.status(200);
    variable=req.body.id;
    equipo = new Club(req.body.id,req.body.nombre,req.body.pais,req.body.liga,parseInt(req.body.valoracion),parseInt(req.body.precio));
    repositorio.newClub(equipo);
    res.send(variable);

});

app.post('/api/usuarios',(req,res)=> {
    res.status(200);
    variable=req.body.id;
    usuario= new Usuario(req.body.id,req.body.nombre,req.body.contrasena);
    repositorio.newUsuario(usuario);
    res.send(variable);

});


const port = 5000;
app.listen(port, () => console.log('Escuchando en puerto 5000'))