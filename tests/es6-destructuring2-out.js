var $D$0 = [1, 2, 3, 4, 5, 6], a = $D$0[0], b = $D$0[1], c = [].slice.call($D$0, 2)
console.log(a === 1, b === 2, c.join("|") === "3|4|5|6")

{
	var a$0 = ($D$0 = [1, [[[4], 3], 2]])[0], b$0 = $D$0[1], c$0, d, e;
	var $D$1, $D$2;b$0 = ($D$0 = [a$0, b$0])[0], $D$1 = $D$0[1], $D$2 = $D$1[0], a$0 = ($D$2[0])[0], d = $D$2[1], c$0 = $D$1[1];
	console.log(b$0 === 1, c$0 === 2, d === 3, a$0 === 4);
}

{
	var a$1 = ($D$0 = {a: "A", b: "B"}).a, b$1 = $D$0.b;
	b$1 = ($D$0 = {a: b$1, B: a$1}).B, a$1 = $D$0.a;
	console.log(a$1 === "B", b$1 === "A");
}

{
	var a$2 = ($D$0 = [1, 2, 3, 4, 5])[0], b$2 = $D$0[1], c$1 = [].slice.call($D$0, 2)
	console.log(a$2 === 1, b$2 === 2, c$1.join("|") === "3|4|5");
}

{
	var a$3 = ($D$0 = [void 0, 2, 3, 4, 5])[0];if(a$3 === void 0)a$3 = 1;var c$2 = $D$0[2], rest = [].slice.call($D$0, 3)
	console.log(a$3 === 1, c$2 === 3, rest.join("|") === "4|5");
}

{
	var a$4, b$3, c$3, rest$0;
	a$4 = ($D$0 = [1, 2, 3, 4, 5])[0], b$3 = $D$0[1], c$3 = $D$0[2], rest$0 = [].slice.call($D$0, 3);
	console.log(a$4 === 1, c$3 === 3, rest$0.join("|") === "4|5");
}
