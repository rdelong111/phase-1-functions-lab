function distanceFromHqInBlocks(x) {
	return Math.abs(42 - x);
}

function distanceFromHqInFeet(x) {
	return distanceFromHqInBlocks(x) * 264;
}

function distanceTravelledInFeet (x, y) {
	return Math.abs(x - y) * 264;
}

function calculatesFarePrice(x, y) {
	const disnft = distanceTravelledInFeet(x, y);

	if (disnft <= 400) {
		return 0;
	}
	else if (disnft > 400 && disnft <= 2000) {
		return (disnft - 400) * 0.02;
	}
	else if (disnft > 2000 && disnft <= 2500) {
		return 25;
	}
	else {
		return 'cannot travel that far';
	}
}