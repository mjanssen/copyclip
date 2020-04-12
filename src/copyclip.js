export default function copyClip(text) {
  if (typeof document === "undefined") return;

  const input = document.createElement("input");
  input.style.cssText = "position: absolute; top: -100px";
  input.value = text;
  input.className = "copy-to-clipboard";
  document.body.appendChild(input);

  input.select();
  document.execCommand("copy");

  document.body.removeChild(input);
}
