export default function handleReportsData(objs) {
  const sum = {};
  const verySatisfied = [];
  const satisfied = [];
  const dissatisfied = [];
  const veryDissatisfied = [];
  const bad = [];
  const smilesData = [];
  const smilesSum = [];
  for (let i = 0; i < 7; i += 1) {
    sum[i] = {
      very_satisfied: 0,
      satisfied: 0,
      dissatisfied: 0,
      very_dissatisfied: 0,
      bad: 0,
    };
  }
  objs.forEach((obj) => {
    const day = new Date(obj.createdAt).getDay();
    sum[day][obj.name] = sum[day][obj.name] + 1 || 1;
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
