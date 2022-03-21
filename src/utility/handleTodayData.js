export default function handleTodayData(objs) {
  const sum = {};
  const verySatisfied = [];
  const satisfied = [];
  const dissatisfied = [];
  const veryDissatisfied = [];
  const bad = [];
  const smilesData = [];
  const smilesSum = [];
  for (let i = 0; i < 24; i += 2) {
    sum[i] = {
      very_satisfied: 0,
      satisfied: 0,
      dissatisfied: 0,
      very_dissatisfied: 0,
      bad: 0,
    };
  }
  objs.forEach((obj) => {
    for (let i = 0; i < 24; i += 2) {
      if (
        // prettier-ignore
        new Date(obj.createdAt).getHours() === i
        || (new Date(obj.createdAt).getHours() > i && new Date(obj.createdAt).getHours() === i + 1)
      ) {
        sum[i][obj.name] += 1;
      }
    }
  });

  Object.values(sum).forEach((value) => {
    verySatisfied.push(value.very_satisfied);
    satisfied.push(value.satisfied);
    dissatisfied.push(value.dissatisfied);
    veryDissatisfied.push(value.very_dissatisfied);
    bad.push(value.bad);
  });
  smilesData.push(verySatisfied, satisfied, dissatisfied, veryDissatisfied, bad);

  smilesData.forEach((smile) => {
    smilesSum.push(smile.reduce((a, b) => a + b));
  });

  return { smilesData, smilesSum };
}
