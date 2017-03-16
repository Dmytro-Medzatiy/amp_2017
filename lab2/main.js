

submitFunction = () => {
	let a = document.getElementById("field1").value;
	let b = document.getElementById("field2").value;
	let result = parseFloat(a) + parseFloat(b);
	document.getElementById("result").setAttribute("value", result.toString());
};
