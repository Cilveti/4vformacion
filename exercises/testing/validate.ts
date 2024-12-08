export const validateNumber = (num: number) => {
  if (num < 0) {
    throw new Error("Number cannot be negative");
  }

  if (num % 1 !== 0) {
    throw new Error("Number cannot be a decimal");
  }

  return num;
};
