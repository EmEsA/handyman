export const isPositive = (number) => {
  try {
    const casted = Number(number);
    return typeof casted === 'number' && casted > 0;
  } catch (e) {
    console.log(e);
    return false;
  }
};
