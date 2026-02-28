const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      shareBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => {
        shareBtn.innerHTML =
          '<i class="fa-solid fa-share-from-square"></i> Copy Link';
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  });
}
