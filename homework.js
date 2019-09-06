1. https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR0n625A3wKgBAjBXaNZ69ldxlfv34jfN852rj6_pviYje3z1Zva0AcHFHU
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

2. https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript?fbclid=IwAR3enxRHAe7mkMArnMv8Q_tTMGPrpmhRmyuPE4ZlEpFtsy3cY_lVxP7ALLo
function whatNumberIsIt(n) {
  if (n === Infinity) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else if (isNaN(n)) {
    return "Input number is Number.NaN";
  } else if (n === Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else if (Number(n)) {
    return `Input number is ${n}`;
  } 
}

3.https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript?fbclid=IwAR0UtFqmQyIR6lBmeO_GH2jfPzVEH71k3B67ZlGAYmzRqgQgsTCBPes6bhc
CLOUSURE
 function buildFun(n){
	let res = [];
	for (let i = 0; i< n; i++){
		res.push(function () {
			return i;
		});
	}
	return res;
}
