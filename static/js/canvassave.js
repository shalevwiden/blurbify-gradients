// this is interesting...

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "../../images/verified.png";
img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;

  // Calculate gradient angle (CSS 290deg → Canvas coords)
  //   so 290 actually ends up being 220 somehow
  const angleDeg = 220;
  const angleRad = (angleDeg * Math.PI) / 180;
  const x0 = img.width / 2 - (Math.cos(angleRad) * img.width) / 2;
  const y0 = img.height / 2 - (Math.sin(angleRad) * img.height) / 2;
  const x1 = img.width / 2 + (Math.cos(angleRad) * img.width) / 2;
  const y1 = img.height / 2 + (Math.sin(angleRad) * img.height) / 2;

  // Now make the gradient along that line
  const grad = ctx.createLinearGradient(x0, y0, x1, y1);
  grad.addColorStop(0, "#425d84");
  grad.addColorStop(0.1, "#605bf7");
  grad.addColorStop(0.49, "#60c4ff");
  grad.addColorStop(0.95, "#529665");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, img.width, img.height);

  // Apply mask (destination-in keeps overlap area)
  ctx.globalCompositeOperation = "destination-in";
  ctx.drawImage(img, 0, 0);
};

// Export
save_verified = document.getElementById("save_verified");

save_verified.addEventListener("click", () => {
  // tells what image format to do for SVG's
  // You can even do "image/svg+xml" for vector drawings.
  const dataUrl = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = "blurbifyverified.png";
  link.click();
});

// dom-to-svg
// html-to-svg
