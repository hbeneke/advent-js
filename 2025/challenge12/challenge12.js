/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  let hp1 = 3;
  let hp2 = 3;

  const getDamage = (attacker, defender) => 
    attacker === 'F' ? 2 : attacker === 'A' && defender !== 'B' ? 1 : 0;

  for (let i = 0; i < Math.max(elf1.length, elf2.length); i++) {
    const m1 = elf1[i] || 'B';
    const m2 = elf2[i] || 'B';

    hp1 -= getDamage(m2, m1);
    hp2 -= getDamage(m1, m2);

    if (hp1 <= 0 || hp2 <= 0) break;
  }

  return hp1 === hp2 ? 0 : hp1 > hp2 ? 1 : 2;
}
