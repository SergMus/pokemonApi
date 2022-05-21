export const colors = [
  "Primary",
  "Secondary",
  "Success",
  "Danger",
  "Warning",
  "Info",
  "Dark",
];

export const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)].toLowerCase();
};

export const randomColorCSS = ()=> Math.floor(Math.random()*16777215).toString(16);
