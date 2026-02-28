const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", () => {
  const projectUrl = "https://mayamariaruth.github.io/auctionhouse/";
  navigator.clipboard
    .writeText(projectUrl)
    .then(() => alert("Project link copied to clipboard!"))
    .catch((err) => console.error("Failed to copy:", err));
});
