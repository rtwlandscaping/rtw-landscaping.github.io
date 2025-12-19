document.getElementById("year").textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copyBtn");
const template = document.getElementById("template");
const copied = document.getElementById("copied");

copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(template.innerText);
    copied.textContent = "Copied ✅";
    setTimeout(() => (copied.textContent = ""), 1500);
  } catch {
    copied.textContent = "Couldn’t copy — select and copy manually.";
    setTimeout(() => (copied.textContent = ""), 2500);
  }
});
