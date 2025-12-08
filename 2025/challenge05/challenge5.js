/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const parseElfTime = (elfTime) => {
    const cleaned = elfTime.replace(' NP', '');
    const [datePart, timePart] = cleaned.split('@');
    const [year, month, day] = datePart.split('*').map(Number);
    const [hours, minutes, seconds] = timePart.split('|').map(Number);
    return Date.UTC(year, month - 1, day, hours, minutes, seconds);
  };

  const fromMs = parseElfTime(fromTime);
  const takeOffMs = parseElfTime(takeOffTime);

  return Math.floor((takeOffMs - fromMs) / 1000);
}
