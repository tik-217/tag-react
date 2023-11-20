export default function getRandom(initialLayout: number[]) {
  while (initialLayout.length < 15) {
    let randomNum = Math.floor(Math.random() * 15) + 1;

    if (initialLayout.indexOf(randomNum) === -1) {
      initialLayout = [...initialLayout, randomNum];
    }

    if (initialLayout.length === 15) {
      initialLayout = [...initialLayout, 0];
    }
  }

  return initialLayout;
}
