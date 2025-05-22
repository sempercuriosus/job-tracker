function getTheDate() {
  const d = new Date();
  const YEAR = d.getFullYear();
  const MONTH = d.getMonth();
  const MONTHS = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const DAY = d.getDate();

  return `${DAY} ${MONTHS[MONTH]} ${YEAR}`;
}

module.exports = getTheDate;

