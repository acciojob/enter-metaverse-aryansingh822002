//your JS code here. If required.
const statusPara = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  statusPara.innerHTML = "<h1 id='status'>Entered Metaverse</h1>";
});