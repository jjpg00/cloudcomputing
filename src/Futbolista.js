class Futbolista {

    constructor(ID, Nombre, Nacionalidad, valoracion, fechaNacimiento, club, precio, posicion, piernaBuena, altura, peso, numeroCamiseta, ATTACKING, Crossing, Finishing, Heading_Accuracy, Short_Passing, Volleys, SKILL, Dribbling, Curve, Accuracy, Long_Passing, Ball_Control, MOVEMENT, Acceleration, Sprint_Speed, Agility, Reactions, Balance, POWER, Shot_Power, Jumping, Stamina, Strength, Long_Shots, MENTALITY, Aggression, Interceptions, Positioning, Vision, Penalties, Composure, DEFENDING, Defensive_Awareness, Standing_Tackle, Sliding_Tackle, GOALKEEPING, GK_Diving, GK_Handling, GK_Kicking, GK_Positioning, GK_Reflexes) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Nacionalidad = Nacionalidad;
        this.valoracion = valoracion;
        this.fechaNacimiento = fechaNacimiento;
        this.club = club;
        this.precio = precio;
        this.posicion = posicion;
        this.piernaBuena = piernaBuena;
        this.altura = altura;
        this.peso = peso;
        this.numeroCamiseta = numeroCamiseta;
        this.ATTACKING = ATTACKING;
        this.Crossing = Crossing;
        this.Finishing = Finishing;
        this.Heading_Accuracy = Heading_Accuracy;
        this.Short_Passing = Short_Passing;
        this.Volleys = Volleys;
        this.SKILL = SKILL;
        this.Dribbling = Dribbling;
        this.Curve = Curve;
        this.Accuracy = Accuracy;
        this.Long_Passing = Long_Passing;
        this.Ball_Control = Ball_Control;
        this.MOVEMENT = MOVEMENT;
        this.Acceleration = Acceleration;
        this.Sprint_Speed = Sprint_Speed;
        this.Agility = Agility;
        this.Reactions = Reactions;
        this.Balance = Balance;
        this.POWER = POWER;
        this.Shot_Power = Shot_Power;
        this.Jumping = Jumping;
        this.Stamina = Stamina;
        this.Strength = Strength;
        this.Long_Shots = Long_Shots;
        this.MENTALITY = MENTALITY;
        this.Aggression = Aggression;
        this.Interceptions = Interceptions;
        this.Positioning = Positioning;
        this.Vision = Vision;
        this.Penalties = Penalties;
        this.Composure = Composure;
        this.DEFENDING = DEFENDING;
        this.Defensive_Awareness = Defensive_Awareness;
        this.Standing_Tackle = Standing_Tackle;
        this.Sliding_Tackle = Sliding_Tackle;
        this.GOALKEEPING = GOALKEEPING;
        this.GK_Diving = GK_Diving;
        this.GK_Handling = GK_Handling;
        this.GK_Kicking = GK_Kicking;
        this.GK_Positioning = GK_Positioning;
        this.GK_Reflexes = GK_Reflexes;
    }

    // Getter
    get rating() {
        return this.devolvervaloracion();
    }
    devolvervaloracion() {
        return this.valoracion;
    }
    // Getter
    get ident() {
        return this.ID;
    }


}

module.exports = Futbolista;