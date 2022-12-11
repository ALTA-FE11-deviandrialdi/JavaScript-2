const cetakTablePerkalian = (number: number) => {
  // your code here

  let output = ``;

  for (let i = 1; i <= number; i++) {
    output += "\n";
    for (let j = 1; j <= number; j++) {
      let kali = (i * j).toString().split("");
      if (kali.length == 2) {
        output += `${kali.join("")} `;
      } else if (kali.length === 1) {
        output += `${kali.join("")}  `;
      }
    }
  }

  return output;
};

export default cetakTablePerkalian;
