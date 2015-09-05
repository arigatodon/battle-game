/*
Al constructor de Heroe, agregar la propiedad de experiencia.
Cada vez que el heroe mate a un monstruo, debe aumentar su experiencia.
si, la experiencia que tiene el Heroe es mayor que un multiplo de 1000
El heroe debe subir de nivel, y multiplicar su ataque y salud por
el nivel que tenga el heroe.

Crear otro método de prototipo que reciba una instancia de constructor
Pocion, y esta aumente la cantidad de salud del heroe.

Crear un constructor Pocion que reciba como parametro la cantidad
de energía que recupera.*/



/*Crear un constructor de Monstruo, que tenga como argumentos
salud, poder de ataque y raza.*/
	function Monstruo(salud,ataque,raza,exp){  /*cuando es con mayuscula es que definimos un constructors*/
	this.salud = salud;
	this.ataque = ataque;             /*bloque*/
	this.raza = raza;
	this.exp = exp;
	/*this.nombre = function(){}*/
}
/*Crear un constructor de Heroe, que tenga como argumentos
salud, poder de ataque y raza.*/
function Heroe(salud,ataque,raza){
	this.salud = salud;
	this.ataque = ataque;
	this.raza = raza;
}
//characters -----------------------------------
var gorath = new Monstruo (900,20,'god');
var golo = new Monstruo (200,60,'necromante');

var satori = new Heroe (70,80,'humano');
var HHH  = new Heroe (90 , 60,'marciano');

/*Crear un metodo de prototipo que reciba una instancia de Heroe
y que este metodo le descuente la energía al heroe.
Si la energía del heroe llega por debajo de 0, debe indicar
que el heroe se murió.*/
Monstruo.prototype.ataque = function(Heroe){

	if (Heroe.salud <= 0){
		alert("El Heroe a muerto ");
	}  
};
/*Crear un metodo de prototipo que reciba una instancia de Monstruo
y que este método le descuente energía al monstruo.
Si la energía del monstruo llega por debajo de 0, debe indicar
que el heroe mató con éxito al monstruo.*/
Heroe.prototype.ataque = function(Monstruo){
	this.heroe.ataque =  this.heroe.ataque - this.Monstruos.salud ;
	if (Monstruo.salud <= 0){
		alert("Mataste a la bestia  ");
	}
};