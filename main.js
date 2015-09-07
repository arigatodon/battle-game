

/*
Crear un constructor de Monstruo, que tenga como argumentos
salud, poder de ataque y raza.
Crear un metodo de prototipo que reciba una instancia de Heroe
y que este metodo le descuente la energía al heroe.
Si la energía del heroe llega por debajo de 0, debe indicar
que el heroe se murió.

Crear un constructor de Heroe, que tenga como argumentos
salud, poder de ataque y raza.
Crear un metodo de prototipo que reciba una instancia de Monstruo
y que este método le descuente energía al monstruo.
Si la energía del monstruo llega por debajo de 0, debe indicar
que el heroe mató con éxito al monstruo.
Al constructor de Heroe, agregar la propiedad de experiencia.
Cada vez que el heroe mate a un monstruo, debe aumentar su experiencia.
si, la experiencia que tiene el Heroe es mayor que un multiplo de 1000
El heroe debe subir de nivel, y multiplicar su ataque y salud por
el nivel que tenga el heroe.

Crear otro método de prototipo que reciba una instancia de constructor
Pocion, y esta aumente la cantidad de salud del heroe.

Crear un constructor Pocion que reciba como parametro la cantidad
de energía que recupera.
*/
nivel = 1000;
exp = 1 ;


var Pocion = function(energia){
	this.energia = energia;
};


var Monstruo =	function(nombre,salud,fuerza,raza){  /*cuando es con mayuscula es que definimos un constructors*/
	this.nombre = nombre;
	this.salud = parseInt(salud) ;
	this.fuerza = fuerza;             /*bloque*/
	this.raza = raza;
	/*this.nombre = function(){}*/
};


	Monstruo.prototype.ataca = function(heroe){
		heroe.salud -= this.fuerza;

		if (heroe.salud <= 0){
			alert("El Heroe a muerto ");
		}  
		else{
			return  "la salud del heroe :"+heroe.salud ; 
		}
	};

var Heroe = function (nombre,salud,fuerza,raza){
	this.nombre = nombre;
	this.salud = salud;
	this.fuerza = fuerza;
	this.raza = raza;
	this.exp = exp;
};
	Heroe.prototype.ataca = function(monstruo){
		monstruo.salud  -= this.fuerza ;
				/*matar  a la bestia*/
		if ( monstruo.salud <= 0){
			console.log("Mataste a la bestia = "+monstruo.nombre);
				while (monstruo.salud < 0){
					monstruo.salud = 0;
			}
		}
			else{
				 this.exp = this.exp + (monstruo.salud/2) + (monstruo.fuerza/2);/*experiencia del personaje mientras este vivo
				 el monstruo gana la division de la salud y la fuerza oponente como experiencia*/
					console.log ("la salud de "+monstruo.nombre+" es "+monstruo.salud) ;
				}
		if(this.exp >= nivel){/* aumenta  la fuerza y la salud  * el nivel */
			this.fuerza = this.fuerza * nivel/1000;
			this.salud = this.salud * nivel/1000;
			nivel +=1000;	
			 return ("has subido de nivel = "+ nivel/1000);
			
		}


	};

	if(Heroe(exp) >= nivel){
	  console.log("has subido de nivel ");
	}

	Heroe.prototype.cura = function(pocion){
	this.salud += pocion.energia;
};

//ver nivel 

//characters -----------------------------------
/*monstruos .-*/
 gorath = new Monstruo ('gorath',900,20,'god');
 golo = new Monstruo ('golo',200,60,'necromante');
belsebu = new Monstruo('belsebu',900,100,'criatura')

/*heroes*/
 satori = new Heroe ('satori',70,90,'humano');
 HHH  = new Heroe ('HHH',90,60,'marciano');

/*pociones*/
verde = new Pocion (100);
roja = new Pocion (50);