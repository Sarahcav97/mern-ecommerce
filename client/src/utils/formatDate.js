function formatDate(isoString, format) {
	const date = new Date(isoString);

	// Format the date parts based on the provided format string
	const formattedDateParts = {
		YYYY: date.getUTCFullYear(),
		MM: String(date.getUTCMonth() + 1).padStart(2, '0'),
		DD: String(date.getUTCDate()).padStart(2, '0'),
		HH: String(date.getUTCHours()).padStart(2, '0'),
		mm: String(date.getUTCMinutes()).padStart(2, '0'),
		ss: String(date.getUTCSeconds()).padStart(2, '0'),
	};

	// Replace the format string with the corresponding date parts
	return format.replace(
		/YYYY|MM|DD|HH|mm|ss/g,
		(match) => formattedDateParts[match]
	);
}

export default formatDate;
