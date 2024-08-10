export function add(numbers: string): number {
  if (numbers.trim() === "" || numbers === '""') return 0;

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map((n) => parseInt(n, 10));

  const negatives = numArray.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numArray.reduce((acc, curr) => acc + curr, 0);
}
