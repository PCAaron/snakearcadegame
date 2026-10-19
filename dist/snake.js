(function () {
  var canvas = document.getElementById("game");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
  var COLS = 21;
  var ROWS = 15;
  var CELL = canvas.width / COLS;

  var SKIN = document.body.classList.contains("skin-nokia")
    ? {
        board: "#c7f0d8",
        grid: "rgba(67,82,61,.13)",
        head: "#2f3b28",
        body: "#43523d",
        apple: "#2f3b28",
        blocky: true,
      }
    : {
        board: "#161b22",
        grid: "rgba(255,255,255,.035)",
        head: "#3fb950",
        body: "#2ea043",
        apple: "#f85149",
        blocky: false,
      };

  var stepMs = 100;
  var timer = null;
  var running = false;
  var paused = false;
  var snake, dir, queue, food, score, best = 0;

  var elScore = document.getElementById("score");
  var elBest = document.getElementById("best");
  var overlay = document.getElementById("overlay");
  var ovTitle = document.getElementById("ovTitle");
  var ovText = document.getElementById("ovText");
  var ovBtn = document.getElementById("ovBtn");
  var pauseBtn = document.getElementById("pauseBtn");
  var yrEl = document.getElementById("yr");

  if (yrEl) yrEl.textContent = new Date().getFullYear();
  try {
    best = parseInt(localStorage.getItem("snakeBest") || "0", 10) || 0;
  } catch (e) {}
  if (elBest) elBest.textContent = best;

  function reset() {
    snake = [
      { x: 10, y: 7 },
      { x: 9, y: 7 },
      { x: 8, y: 7 },
    ];
    dir = { x: 1, y: 0 };
    queue = [];
    score = 0;
    if (elScore) elScore.textContent = "0";
    placeFood();
  }

  function placeFood() {
    var free = [];
    for (var y = 0; y < ROWS; y++) {
      for (var x = 0; x < COLS; x++) {
        if (
          !snake.some(function (s) {
            return s.x === x && s.y === y;
          })
        ) {
          free.push({ x: x, y: y });
        }
      }
    }
    food = free.length
      ? free[Math.floor(Math.random() * free.length)]
      : { x: 0, y: 0 };
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.fill();
  }

  function draw() {
    ctx.fillStyle = SKIN.board;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = SKIN.grid;
    ctx.lineWidth = 1;
    for (var i = 1; i < COLS; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL, 0);
      ctx.lineTo(i * CELL, canvas.height);
      ctx.stroke();
    }
    for (var j = 1; j < ROWS; j++) {
      ctx.beginPath();
      ctx.moveTo(0, j * CELL);
      ctx.lineTo(canvas.width, j * CELL);
      ctx.stroke();
    }

    if (food) {
      ctx.fillStyle = SKIN.apple;
      if (SKIN.blocky) {
        ctx.fillRect(
          food.x * CELL + CELL * 0.22,
          food.y * CELL + CELL * 0.22,
          CELL * 0.56,
          CELL * 0.56
        );
      } else {
        ctx.beginPath();
        ctx.arc(
          food.x * CELL + CELL / 2,
          food.y * CELL + CELL / 2,
          CELL * 0.32,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    for (var si = 0; si < snake.length; si++) {
      var seg = snake[si];
      ctx.fillStyle = si === 0 ? SKIN.head : SKIN.body;
      if (SKIN.blocky) {
        ctx.fillRect(seg.x * CELL, seg.y * CELL, CELL, CELL);
      } else {
        roundRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2, 6);
      }
    }
  }

  function tick() {
    if (queue.length) {
      var nd = queue.shift();
      if (nd.x !== -dir.x || nd.y !== -dir.y) dir = nd;
    }
    var head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
    var willEat = food && head.x === food.x && head.y === food.y;
    var bodyCheck = willEat ? snake : snake.slice(0, snake.length - 1);

    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= COLS ||
      head.y >= ROWS ||
      bodyCheck.some(function (s) {
        return s.x === head.x && s.y === head.y;
      })
    ) {
      return gameOver();
    }

    snake.unshift(head);
    if (willEat) {
      score++;
      if (elScore) elScore.textContent = score;
      if (score > best) {
        best = score;
        if (elBest) elBest.textContent = best;
        try {
          localStorage.setItem("snakeBest", String(best));
        } catch (e) {}
      }
      placeFood();
    } else {
      snake.pop();
    }
    draw();
  }

  function run() {
    if (!running || paused) return;
    tick();
    if (running && !paused) timer = setTimeout(run, stepMs);
  }

  function start() {
    reset();
    draw();
    overlay.classList.remove("show");
    paused = false;
    running = true;
    if (pauseBtn) pauseBtn.textContent = "Pause";
    clearTimeout(timer);
    timer = setTimeout(run, stepMs);
  }

  function gameOver() {
    running = false;
    clearTimeout(timer);
    if (score > best) {
      best = score;
      if (elBest) elBest.textContent = best;
      try {
        localStorage.setItem("snakeBest", String(best));
      } catch (e) {}
      ovTitle.textContent = "New best: " + best;
    } else {
      ovTitle.textContent = "Game Over";
    }
    ovText.textContent = "Score " + score + " · Best " + best;
    ovBtn.textContent = "Play again";
    overlay.classList.add("show");
  }

  function togglePause(force) {
    if (!running) return;
    paused = typeof force === "boolean" ? force : !paused;
    if (pauseBtn) pauseBtn.textContent = paused ? "Resume" : "Pause";
    if (paused) clearTimeout(timer);
    else timer = setTimeout(run, stepMs);
  }

  function push(x, y) {
    var last = queue.length ? queue[queue.length - 1] : dir;
    if (x === -last.x && y === -last.y) return;
    if (x === last.x && y === last.y) return;
    if (queue.length < 3) queue.push({ x: x, y: y });
  }

  var KEYS = {
    ArrowUp: [0, -1],
    ArrowDown: [0, 1],
    ArrowLeft: [-1, 0],
    ArrowRight: [1, 0],
    w: [0, -1],
    s: [0, 1],
    a: [-1, 0],
    d: [1, 0],
    W: [0, -1],
    S: [0, 1],
    A: [-1, 0],
    D: [1, 0],
  };
  window.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "p" || e.key === "P") {
      e.preventDefault();
      togglePause();
      return;
    }
    var k = KEYS[e.key];
    if (k) {
      e.preventDefault();
      if (!running) start();
      push(k[0], k[1]);
    }
  });

  var tx = 0;
  var ty = 0;
  canvas.addEventListener(
    "touchstart",
    function (e) {
      tx = e.touches[0].clientX;
      ty = e.touches[0].clientY;
    },
    { passive: true }
  );
  canvas.addEventListener(
    "touchend",
    function (e) {
      var dx = e.changedTouches[0].clientX - tx;
      var dy = e.changedTouches[0].clientY - ty;
      if (Math.abs(dx) < 24 && Math.abs(dy) < 24) {
        if (!running) start();
        return;
      }
      if (!running) start();
      if (Math.abs(dx) > Math.abs(dy)) push(dx > 0 ? 1 : -1, 0);
      else push(0, dy > 0 ? 1 : -1);
    },
    { passive: true }
  );

  if (pauseBtn) pauseBtn.addEventListener("click", function () {
    togglePause();
  });
  ovBtn.addEventListener("click", start);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) togglePause(true);
  });

  var btns = document.querySelectorAll(".speed");
  Array.prototype.forEach.call(btns, function (b) {
    b.addEventListener("click", function () {
      stepMs = parseInt(b.dataset.sp, 10);
      Array.prototype.forEach.call(btns, function (o) {
        o.setAttribute("aria-pressed", String(o === b));
      });
      if (running && !paused) {
        clearTimeout(timer);
        timer = setTimeout(run, stepMs);
      }
    });
  });

  reset();
  draw();
  overlay.classList.remove("show");
})();
