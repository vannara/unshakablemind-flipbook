(function () {
  const gate = document.getElementById("gate");
  const openBtn = document.getElementById("openBook");
  const flipSound = document.getElementById("flipSound");
  const pageLabel = document.getElementById("pageLabel");
  const muteBtn = document.getElementById("muteBtn");
  let soundOn = true;
  let pageFlip;

  function playFlip() {
    if (!soundOn || !flipSound) return;
    try {
      flipSound.currentTime = 0;
      flipSound.volume = 0.35;
      flipSound.play().catch(function () {});
    } catch (e) {}
  }

  function updateLabel() {
    if (!pageFlip) return;
    const current = pageFlip.getCurrentPageIndex() + 1;
    const total = pageFlip.getPageCount();
    pageLabel.textContent = "Leaf " + current + " / " + total;
  }

  openBtn.addEventListener("click", function () {
    gate.classList.add("hidden");
    flipSound.play().then(function () {
      flipSound.pause();
      flipSound.currentTime = 0;
    }).catch(function () {});

    const narrow = window.innerWidth < 820;
    const pageW = narrow ? Math.min(window.innerWidth - 8, 420) : 480;
    const pageH = narrow
      ? Math.max(520, Math.round(window.innerHeight - 100))
      : 720;

    pageFlip = new St.PageFlip(document.getElementById("book"), {
      width: pageW,
      height: pageH,
      size: "stretch",
      minWidth: 240,
      maxWidth: 700,
      minHeight: 420,
      maxHeight: 1000,
      showCover: true,
      mobileScrollSupport: true,
      maxShadowOpacity: 0.45,
      useMouseEvents: true,
      flippingTime: 900,
      drawShadow: true
    });

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
    pageFlip.on("flip", playFlip);
    pageFlip.on("changeState", updateLabel);
    pageFlip.on("init", updateLabel);
    updateLabel();

    document.getElementById("prevBtn").onclick = function () { pageFlip.flipPrev(); };
    document.getElementById("nextBtn").onclick = function () { pageFlip.flipNext(); };
    window.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") pageFlip.flipNext();
      if (e.key === "ArrowLeft") pageFlip.flipPrev();
    });
  });

  muteBtn.addEventListener("click", function () {
    soundOn = !soundOn;
    muteBtn.textContent = soundOn ? "Sound on" : "Sound off";
  });
})();
