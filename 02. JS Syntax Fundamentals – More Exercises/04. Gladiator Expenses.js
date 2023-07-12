function solve(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let countOfTrashedHelmet = 0;
  let countOfTrashedSword = 0;
  let countOfTrashedShield = 0;
  let countOfTrashedArmor = 0;

  for (let index = 1; index <= lostFightsCount; index++) {
    if (index % 2 === 0) {
      countOfTrashedHelmet++;
    }
    if (index % 3 === 0) {
      countOfTrashedSword++;
    }
    if (index % 2 === 0 && index % 3 === 0) {
      countOfTrashedShield++;
    }
    if (countOfTrashedShield % 2 === 0 && index % 2 === 0 && index % 3 === 0) {
      countOfTrashedArmor++;
    }
  }

  let helmetRenovationCost = countOfTrashedHelmet * helmetPrice;
  let swordRenovationCost = countOfTrashedSword * swordPrice;
  let shieldRenovationCost = countOfTrashedShield * shieldPrice;
  let armorRenovationCost = countOfTrashedArmor * armorPrice;

  let total =
    helmetRenovationCost +
    swordRenovationCost +
    shieldRenovationCost +
    armorRenovationCost;
  console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);
solve(23, 12.5, 21.5, 40, 200);
