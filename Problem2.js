var f = 1;
var s = 2;
var t = 2;
var sum = 0;
while (t <= 4000000) {
	if (t % 2 === 0) 
	 sum += t;
	 t = f + s;
	 f = s;
	 s = t;
	
}
console.log(sum);