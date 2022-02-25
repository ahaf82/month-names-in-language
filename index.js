const month_name_data = require("./month_names_in_language.json");

const getAllMonthNames = (languageAbbreviation) => {
	let allMonthNames = [];
	for (let i = 1; i < 13; i++) {
		allMonthNames.push(month_name_data[languageAbbreviation.toLowerCase()][i])
	}
	return allMonthNames;
}

const getSingleMonthName = (languageAbbreviation, index) => {
	return month_name_data[languageAbbreviation.toLowerCase()][index];
}

module.exports = { getAllMonthNames, getSingleMonthName };