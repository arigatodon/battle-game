var Monstruo =	function(nombre,salud,fuerza,raza){  /*cuando es con mayuscula es que definimos un constructors*/
	this.nombre = nombre;
	this.salud = salud;
	this.fuerza = fuerza;             /*bloque*/
	this.raza = raza;
	/*this.nombre = function(){}*/
};

	Monstruo.prototype.ataca = function(heroe){
		if (heroe.salud <= 0){
			alert("El Heroe a muerto ");
		}  
	};

var Heroe = function (nombre,salud,fuerza,raza){
	this.nombre = nombre;
	this.salud = salud;
	this.fuerza = fuerza;
	this.raza = raza;
};
	Heroe.prototype.ataca = function(monstruo){
		monstruo.salud  -= this.fuerza ;

		if ( monstruo.salud <= 0){
			return "Mataste a la bestia :"+monstruo.nombre;
		}
		else{
			return  "la salud de "+monstruo.nombre+" es "+monstruo.salud ;
		}
};

//characters -----------------------------------

 gorath = new Monstruo ('gorath',900,20,'god');
 golo = new Monstruo ('golo',200,60,'necromante');

 satori = new Heroe ('satori',70,90,'humano');
 HHH  = new Heroe ('HHH',90,60,'marciano');

