const tip = bill => {
	if (bill > 50 && bill <= 300) {
		return bill + bill * 0.15;
	} else {
		return bill + bill * 0.2;
	}
};

console.log(tip(60));
