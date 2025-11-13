save_verified = document.getElementById("save_verified");

save_verified.addEventListener("click", () => {
  const verifiedicon = document.getElementById("verified");
  console.log("trying to download verified icon");

  htmlToImage
    .toPng(verifiedicon, { backgroundColor: null })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "blurbifyverified.png";
      link.href = dataUrl;
      link.click();
    })
    .catch((error) => {
      console.error("Error saving image:", error);
    });
});
