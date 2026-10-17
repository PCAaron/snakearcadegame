# snakearcadegame.com 上线走查文档（逐字定稿版 · chat 终态）

整理日期：2026-10-17（2026-10-17 按 chat 提问 16～19 终态修订）
口径：所有搜索量/流量均为快照口径（逐月数据），非实时值；文案为逐字定稿，可直接使用。

**站点结构（终态）**：共 **3 个 URL**——首页（承载 `snake arcade game` + classic 族 + play 族）+ `/nokia-snake` + `/snake-unblocked`。  
已并入首页、不再单独做页：`/classic-snake`、`/play-snake`。已砍掉：`/snake-game-browser`。

---

## 阶段 0 前置

- [x] 注册域名 snakearcadegame.com（已完成）

---

## 阶段 1 首页

### 1.1 文件清单

- [ ] index.html
- [ ] snake.js（从首页内联脚本抽出，多页共用）
- [ ] manifest.webmanifest
- [ ] sw.js
- [ ] robots.txt
- [ ] sitemap.xml（仅 3 个 URL，见阶段 2）
- [ ] icon-192.png / icon-512.png / apple-touch-icon.png

配色对齐（默认皮肤）：底色 #0d1117 / 蛇身 #3fb950 / 苹果 #f85149

**执行顺序（代码）**：先抽 `snake.js` 并回归测首页 → 再加 `SKIN` 与 `draw()` 四处替换，确认默认皮肤不变 → 最后做 `/nokia-snake` 机身外壳。不要一次性改完再测。

### 1.2 TDK 逐字定稿

Title（58 字符，SERP 不截断）：
Snake Arcade Game – Play Classic Arcade Snake Online Free

Description（146 字符）：
Play the classic snake arcade game free in your browser — no download, works on mobile. Three speeds, keyboard or swipe controls, high score saved locally.

H1（必须可见、纯文本、正好是目标词）：
Snake Arcade Game

H1 副标题段：
Play the classic arcade snake free in your browser — no download, no signup.

其他 head 项：

- canonical = https://snakearcadegame.com/（**必须自指本页 URL**）
- html lang="en"
- viewport 含 viewport-fit=cover

TDK 三个设计要点（改动前先看这条）：

1. Title 里 "Arcade" 故意出现两次——同组写法 snake arcade game / arcade snake game / snake game arcade 共用一份数据，一次接住三个；
2. Free 放末尾（SERP 相关搜索里 "snake arcade game free"、"online free" 各占一席）；
3. H1 绝不能学 playsnake.org 藏进 display:none——它靠 12.9 年域龄顺路排名，我们没这个资本。

### 1.3 页面区块顺序（从上到下）

| #   | 区块                                               | 首屏 |
| --- | -------------------------------------------------- | ---- |
| 0   | 极简顶栏（站名 + 可选一条内页入口，如 Nokia Snake → `/nokia-snake`） | 是   |
| 1   | H1 + 一句话说明                                    | 是   |
| 2   | 游戏区 canvas（21×15，进入即玩，无"点击开始"挡板） | 是   |
| 3   | 状态条（当前分 / 本地最高分 / 三档速度 / 暂停）    | 是   |
| 4   | 操作提示一行（方向键或 WASD · 手机滑动）           | 是   |
| 5   | H2 How to Play                                     | 否   |
| 6   | H2 Classic Snake Game（承接 classic 词族）         | 否   |
| 7   | H2 Play Snake Online（承接 play / online 词族）    | 否   |
| 8   | H2 Frequently Asked Questions                      | 否   |
| 9   | H2 More Snake Games（**仅 2 条内链**：`/nokia-snake`、`/snake-unblocked`） | 否   |
| 10  | 页脚（隐私 / 联系）                                | 否   |

原则：首屏只做一件事——让人 3 秒内开始玩。  
封版口径：**1 个游戏 + 4 块正文**（How to Play / Classic Snake Game / Play Snake Online / FAQ 四问）。

### 1.4 How to Play 定稿

H2: How to Play the Snake Arcade Game

1. Move — use the arrow keys or W A S D on desktop; swipe on mobile.
2. Eat — every apple makes the snake longer and the score higher.
3. Survive — hitting the wall or your own tail ends the round.
4. Pick your speed — Slug (slow), Worm (normal) or Python (fast).

三档速度（150 / 100 / 50 毫秒）与命名 Slug / Worm / Python 沿用 playsnake.org，属被验证过的 UX。

### 1.5 H2 Classic Snake Game 定稿（插在 How to Play 之后、FAQ 之前）

H2 文本逐字：`Classic Snake Game`

Snake has been rebuilt a thousand times, and most of those rebuilds changed the rules. This version keeps the original ones.

- **Walls end the round.** There is no wrap-around and no exit at the edges. Touch the border and the run is over.
- **The grid stays visible.** One move equals one square, so you can always count your way out of trouble. That is what makes planning possible instead of just reacting.
- **Every apple is worth one point.** No power-ups, no multipliers, no combos. Your score is simply how many apples you ate before you made a mistake.
- **Three speeds, picked before you start.** Slug (150 ms per step), Worm (100 ms) and Python (50 ms). Slower speeds are for learning the board; faster ones are where the game gets interesting.
- **Your best score stays on your device.** It is saved locally in your browser, so it survives a refresh and never leaves your machine.

收尾段：That is the whole game — nothing to unlock, nothing to buy. The only thing that changes from run to run is how long you last.

写作约束：本节讲「经典版和后出版本差在哪」，**不要重复** How to Play 的四步操作说明；本节刻意不写具体机型年份（历史事实放在 FAQ 与 `/nokia-snake`）。

### 1.6 H2 Play Snake Online 定稿

H2 文本逐字：`Play Snake Online`

开篇：No download, no account, no app store. The game runs in the browser tab you already have open, and it starts on your first keypress.

- **Nothing to install.** The page loads, you press an arrow key or swipe once, and the round is running. There is no start screen to click through and no file to download.
- **One address for every device.** The same page works on a desktop, a laptop, a phone and a tablet — the board scales to the screen and the controls adapt to whatever you have.
- **Keyboard or touch.** Arrow keys or W A S D on a computer; swipe in the direction you want to turn on a touchscreen. Space or P pauses.
- **Add it to your home screen.** Use "Add to Home Screen" ("Install app" in Chrome on Android, Share → Add to Home Screen on iPhone) and the game opens full screen like an app — and after the first visit it keeps working with no connection at all.
- **Free, and no sign-up.** No email address, no account, no email confirmation. Nothing to lose by trying.
- **Put it down and pick it up.** Switching tabs pauses the round automatically, so you never come back to a dead snake, and your best score is waiting where you left it.

收尾段：If you only have a minute, play a slow round on Slug first. It is the quickest way to remember how the board behaves.

文案必须与代码对齐：进入即玩、三档速度、滑动、切后台暂停、localStorage 最高分、PWA 离线。**不要写未实现功能**（排行榜、多人等）。

### 1.7 FAQ 四问定稿（问题照抄该词 PAA）

Q1. What is the old snake game called?
A: The game is simply called Snake, and it was also widely known as Nibbles in its MS-DOS era. The genre traces back to the 1976 arcade title Blockade, released by Gremlin Industries, where the goal was to survive longer than the other player.

Q2. Can you still play snake?
A: Yes — and you do not need to install anything. The snake arcade game on this page runs directly in your browser on desktop and mobile. You can also find a version hidden inside Google search.

Q3. What is that snake game called?
A: Depending on where you first played it, you may know it as Snake, Nokia Snake, or Nibbles. They are all the same core idea: steer a growing line, eat the food, and avoid hitting the walls or your own tail.

Q4. Was snake an arcade game?
A: It belongs to the arcade tradition. The block-style snake mechanic began with the 1976 arcade game Blockade, and the format became a staple of arcade cabinets, early home computers and mobile phones before moving to the browser.

### 1.8 结构化数据

- [ ] VideoGame（name=Snake Arcade Game，genre=Arcade，applicationCategory=Game，playMode=SinglePlayer，price=0）
- [ ] FAQPage（mainEntity = 上面 4 条，问题与答案必须与页面可见文本一致）

预期修正（重要）：FAQPage 已拿不到 SERP 展开位——谷歌 2026-05-07 彻底下线 FAQ 富媒体结果（此前 2023-08 起只留给政府/健康类权威站）。代码照留（别的搜索引擎和 AI 爬虫可能还用，无负面），但别按"能抢展开位"期待它。FAQ 模块本身必须保留——它是给用户看的，回答疑问、提高转化。

### 1.9 游戏逻辑两个坑（已在代码里处理）

1. 碰撞检测必须排除蛇尾那一节（本回合尾部会让出）——否则贴尾转向被误判死亡；
2. 方向要入队而非直接改 dir——否则快速连按两下会反向自杀。

其他实现要点：本地最高分存 localStorage；键盘方向键 + WASD + 手机滑动三通道；空格/P 暂停；切后台自动暂停。

### 1.10 共用脚本与 SEO

- 多页引用 `<script src="/snake.js" defer></script>`：**共用 JS 不算页面级重复**；每页正文、TDK、canonical 必须独立。
- 改游戏逻辑只改 `snake.js` 一处。

### 1.11 PWA 验收（本阶段最关键）

- [ ] manifest 含 display=standalone、start_url=/
- [ ] sw.js 注册成功；缓存列表与**真实存在的 3 个 URL**一致（首页 + 两内页上齐后一并纳入）
- [ ] 手机 Chrome 打开 → 弹出"添加到主屏"
- [ ] 加到主屏后独立窗口打开、能离线玩
- [ ] 本地最高分刷新后仍在

---

## 阶段 2 技术基建

- [ ] robots.txt（显式放行 + 声明 sitemap）

```
User-agent: *
Allow: /

Sitemap: https://snakearcadegame.com/sitemap.xml
```

- [ ] sitemap.xml（**仅 3 个 URL**）

  - https://snakearcadegame.com/
  - https://snakearcadegame.com/nokia-snake
  - https://snakearcadegame.com/snake-unblocked

- [ ] GSC 添加资源 → 提交 sitemap → 请求索引
- [ ] 用 site:snakearcadegame.com 验证已被收录
- [ ] 未收录时按状态处理：
  - 「已发现-尚未编入索引」→ 可手动提交救回
  - 「已抓取-尚未编入索引」→ 内容问题，要重写内容（手动提交无效）
- [ ] 上线后每周看一次 GSC 覆盖率与出词

### 三条技术护栏（防重复信号，必做）

1. **canonical 必须自指**——每页指向自己的 URL，绝不能都指向首页；
2. **正文不复制**——首页 How to Play 不能整段出现在内页；内页各写各的；
3. **别再拆同族词**——新页前先问「意图是否与已有页面相同」，相同则并入已有页面。

---

## 阶段 3 内页（2 个保留页）

统一原则：**真差异化**（功能 + 内容），不能只换措辞。  
`/snake-unblocked`：KD 70.2，前十 DR 57~100，**接站内溢出流量，非主攻位**。

### 页 A · `/nokia-snake`

目标词：nokia snake game｜水位约 3,600~6,600/月（较稳）

**canonical**：https://snakearcadegame.com/nokia-snake

Title: Nokia Snake Game – Play the Classic 3310 Snake Online

Description: Play the Nokia snake game in your browser — the monochrome classic, rebuilt in pixel style. No download, works on mobile, high score saved locally.

H1: Nokia Snake Game

VideoGame：`name` = Nokia Snake Game，`url` = canonical，`genre` = Arcade, Classic, Retro；`description` = A monochrome, pixel-style version of the snake game that shipped preinstalled on Nokia phones, playable free in any browser.

**功能差异（必做）**

- `<body class="skin-nokia">`；页面骨架：`<div class="phone"><div class="screen">…canvas…</div></div>`
- `snake.js` 顶部 `SKIN` 对象：诺基亚 3310 LCD 配色（board #c7f0d8 等）、`blocky: true`（方块蛇身与食物，禁止仅用 CSS `filter: grayscale()`）
- `draw()` 四处替换：棋盘底、网格线、苹果（方/圆）、蛇身（满格块 / roundRect）
- 机身 + 点阵扫描线 CSS 仅挂本页（完整代码见 **附录 A**）

**正文 H2（逐字定稿）**

1. **What Was the First Nokia Phone With Snake?**  
   The Nokia 6110, in 1997. The game was designed and programmed by **Taneli Armanto**, a Finnish engineer at Nokia, and it shipped *preinstalled* on the handset — one of three games that came with the phone. It did not arrive as a download or a purchase. It was simply there the first time you turned the phone on.  
   Nokia later shipped follow-up versions on other handsets, which is why the game is remembered as "the Nokia snake" rather than as one phone's feature.

2. **Why the Nokia Version Still Feels Different**

   - **One colour, no shading.** A monochrome LCD had two states per pixel. Everything you saw was drawn out of dark blocks on a green-grey screen, so the game had to be readable with no colour and no contrast tricks.
   - **Square segments.** On the LCD the snake was a run of solid blocks joined into one line. There were no rounded corners and no gradients because the screen could not show them.
   - **The keypad.** You steered with the phone's number keys — no swipe, no analogue stick. That is why the game felt like a series of quick decisions rather than one continuous motion.
   - **Made for queues and bus stops.** The handset version was built to be picked up for thirty seconds and put down again. That is still the best way to play it.

   This page renders the game the way that screen would have: a green-grey board, dark blocky segments, and a square piece of food. Same rules underneath.

3. **Which Nokia Had the Snake Game?**  
   More than one. The 6110 is where it started in 1997, and later handsets — including the 3310 — shipped with their own version. Nokia's Snake was preinstalled across many models over the following years.

4. **How to Play the Nokia Snake Game**

   1. **Start** — press an arrow key, or swipe once on a touchscreen. The snake starts moving immediately, exactly as it did on the handset.
   2. **Turn** — arrow keys or W A S D on a keyboard, swipes on a phone. It is a four-direction game: no diagonals, no reversing into yourself.
   3. **Eat** — each piece of food makes the snake one block longer and adds one point. That is the only way the snake grows.
   4. **Stop before the wall or your own tail** — either one ends the round instantly. The board has no wrap-around.

   Pick the slowest speed for your first round. The handset version was slow by modern standards, and that is what made long runs possible.

写作红线：

| 可以写 | 不可以写 |
| ------ | -------- |
| 1997、Nokia 6110、Taneli Armanto、芬兰工程师、预装、单色 LCD、方块像素 | 具体屏幕像素数 |
| 预装、三款游戏之一、3310 等公开机型 | 「所有诺基亚机型都有」、未核实细节、铃音等杜撰 |

验收：首页与 `/nokia-snake` 正文互换后，用户应立刻发现不对。

### 页 B · `/snake-unblocked`

目标词：snake game unblocked｜约 22,200（KD 70.2 困难）

**canonical**：https://snakearcadegame.com/snake-unblocked

Title: Snake Game Unblocked – Play in Your Browser, No Download

Description: Snake game unblocked and free — no download, no install, no account. Play in any browser, including on school or work networks that block game sites. Works offline once loaded.

H1: Snake Game Unblocked

VideoGame：`name` = Snake Game Unblocked；`description` = An unblocked browser version of the classic snake game. No download, no install, and it keeps working offline after the first load.

**正文体裁**：回答疑问（PAA 式 H2），**不要写**绕过学校过滤器、代理、hack 等规避类内容。

1. **Why Do Schools and Workplaces Block Game Sites?**

   Usually not because of the game itself. Network filters sort the web into categories — gaming, social media, streaming, adult content — and then block whole categories at once. A page gets sorted into "gaming" and is blocked whether it contains one snake game or a thousand.

   Three things push a domain into the gaming category:

   - **Domain reputation.** Filters keep their own lists of known game portals. Being on a list is enough — no one reviews the page by hand.
   - **Category and keyword signals.** "Games", "play", "arcade" in the URL, the title and the page text are strong hints to an automated classifier.
   - **Site history.** A domain that has hosted games before is assumed to host games now. This is also why a brand-new game site sometimes slips through for a while.

   So the block is aimed at the category, not at you. That also means there is nothing to "hack" — and nothing on this page tries to.

2. **How to Play Without Installing Anything**

   This page is a single HTML file with the game built in. Press a key and the round starts; there is no installer, no file to download, and no account to create.

   1. **Press an arrow key, or swipe once.** The round begins immediately — there is no start screen, no loading bar, and no ad before the game.
   2. **Steer with arrow keys or W A S D** on a keyboard, or swipe in the direction you want to turn on a touchscreen. Space or P pauses.
   3. **Eat to grow** — each piece of food adds one segment and one point.
   4. **Add it to your home screen.** Use "Install app" on Android or Share → "Add to Home Screen" on iPhone. After that first visit the game is cached and **keeps working with no connection at all** — which is the part that matters if a network filter decides to block the page later.

   If the page you are reading this on still loads, the game inside it works. There is no separate download step that a filter can interrupt.

3. **Does an Unblocked Version Differ From the Normal One?**

   No. It is the same game, same rules, same three speeds, same local high score — the difference is only in how you got here. "Unblocked" describes the network you are on, not the game. Nothing is modified, and nothing is bypassed to make it load.

游戏区可与首页同逻辑（共用 `snake.js`），默认暗色皮肤即可。

---

## 阶段 4 内链（三页）

方向：**内页 → 首页**为主；内页之间**各 1 条**互链即可，勿做成链接农场。  
「每内页 3 条回首页」仅为社群经验，非硬 KPI（见附录 B 三）。

| 来源页 | 锚文本 → 目标页 |
| ------ | ---------------- |
| 首页 | `nokia snake game` → `/nokia-snake`；`snake game unblocked` → `/snake-unblocked` |
| `/nokia-snake` | `snake arcade game` → 首页；`snake game unblocked` → `/snake-unblocked` |
| `/snake-unblocked` | `classic snake game` → 首页；`nokia snake game` → `/nokia-snake` |

More Snake Games 区块仅保留上述两个内页入口；classic / play 词族由首页 **Classic Snake Game**、**Play Snake Online** 两节承接，不再单独 URL。

---

## 阶段 5 变现

- [ ] AdSense 开户并过审
- [ ] 四个广告位：顶部 728×15 链接单元 / 左右各一个 160×600 竖幅 / 移动端底部固定 50px
- [ ] 首屏广告绝不挤到游戏区上方（对手体验分只有 20/100，我们赢它就在首屏）

### 收入参考口径（用来反推目标）

playsnake.org 估值快照：综合估值 $118.4k，参考区间 $31.7k~$189.1k，月收入估算 $2,642~$5,252。该站 DR 48、月访问 19.7 万、搜索占比 48%、域龄 12.9 年。

按这个反推：千次访问收入约 $13~$27。**要做到约 10 万月访问，广告收入才有实际意义**——而首页主词最新月可能仅约 2,400（脉冲词）。因此靠**体验 + PWA 直访 + 首页多词族正文 + 两差异化内页**兜住波动，而非单靠一个 URL 或一个月峰值。

- [ ] AdSense 之外可同步接一家游戏专门的广告联盟（游戏类 AdSense 单价偏低，多一家做对比）

---

## 阶段 6 外链与上线后

- [ ] 外链起步 30~50 个引用域
- [ ] 上线时机：10 月中上线，赶上 11~12 月的历史高位期前把页面养进索引
- [ ] 上线后每周盯：GSC 覆盖率（收录数）、GSC 出词、首页目标词排名变化
- [ ] 4~6 周后复盘：首页是否进前 50、两内页是否开始出词

### 外链门槛口径

进前十的链接预算约 45~95 个引用域（中值 65），对应 DR 29 量级。起步阶段 30~50 个够用，别过度投入。

### 外链数据这一项不必升级 Ahrefs

免费版只能查自己验证过的域名，读不到 playsnake.org 的外链。但它的流量结构：搜索 48.1% / 直访 49.6% / 引荐 2.4%——**更省钱的打法是先 PWA 和体验，外链不是第一优先级**。

---

## 附录 A · Nokia 皮肤代码（提问 19 全文）

`filter: grayscale()` 不算真像素皮肤——须改 **调色板、方块化渲染、机身扫描线**。首页与 `/nokia-snake` 共用 `/snake.js`；正文、TDK、canonical 各页独立。

### A.1 引用方式

首页：

```html
<body>
  …
  <script src="/snake.js" defer></script>
</body>
```

`/nokia-snake`：

```html
<body class="skin-nokia">
  <div class="phone">
    <div class="screen">
      <!-- canvas + 状态条 + 速度按钮 + overlay，结构与首页游戏区一致 -->
    </div>
  </div>
  <script src="/snake.js" defer></script>
</body>
```

### A.2 `snake.js` 顶部 · SKIN 对象

```js
/* 皮肤：body.skin-nokia = 单色点阵；否则 = 默认暗色 */
var SKIN = document.body.classList.contains("skin-nokia")
  ? {
      board: "#c7f0d8" /* 3310 LCD 底色 */,
      grid: "rgba(67,82,61,.13)",
      head: "#2f3b28" /* 蛇头：更深的墨色 */,
      body: "#43523d",
      apple: "#2f3b28",
      blocky: true /* 方块化：不圆角、不留缝 */,
    }
  : {
      board: "#161b22",
      grid: "rgba(255,255,255,.035)",
      head: "#3fb950",
      body: "#2ea043",
      apple: "#f85149",
      blocky: false,
    };
```

（`defer` 脚本在 `<body>` 解析后执行，`document.body.classList` 已可用。）

### A.3 `draw()` 内四处替换

```js
/* ① 棋盘底 */
ctx.fillStyle = SKIN.board;

/* ② 网格线 */
ctx.strokeStyle = SKIN.grid;

/* ③ 苹果：暗色是圆点，诺基亚是实心方点 */
ctx.fillStyle = SKIN.apple;
if (SKIN.blocky) {
  ctx.fillRect(
    apple.x * CELL + CELL * 0.22,
    apple.y * CELL + CELL * 0.22,
    CELL * 0.56,
    CELL * 0.56
  );
} else {
  ctx.beginPath();
  ctx.arc(
    apple.x * CELL + CELL / 2,
    apple.y * CELL + CELL / 2,
    CELL * 0.32,
    0,
    Math.PI * 2
  );
  ctx.fill();
}

/* ④ 蛇身：暗色圆角块，诺基亚满格实心块 */
ctx.fillStyle = i === 0 ? SKIN.head : SKIN.body;
if (SKIN.blocky) {
  ctx.fillRect(seg.x * CELL, seg.y * CELL, CELL, CELL);
} else {
  roundRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2, 6);
}
```

### A.4 `/nokia-snake` 专用 CSS（可放在页内 `<style>` 或 `nokia-snake.css`）

```css
body.skin-nokia {
  background: #0d1117;
}
body.skin-nokia .phone {
  max-width: 380px;
  margin: 0 auto;
  background: #1b1f1a;
  border-radius: 30px;
  padding: 20px 16px 34px;
  box-shadow:
    0 0 0 3px #2c3128,
    0 18px 44px rgba(0, 0, 0, 0.65);
}
body.skin-nokia .screen {
  position: relative;
  background: #c7f0d8;
  border: 8px solid #0f120e;
  border-radius: 10px;
  padding: 10px 10px 6px;
  overflow: hidden;
}
/* 点阵扫描线，纯视觉层，不挡触摸 */
body.skin-nokia .screen::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(67, 82, 61, 0.1) 0 1px,
    transparent 1px 3px
  );
}
body.skin-nokia .screen .score,
body.skin-nokia .screen .speed,
body.skin-nokia .screen .hint {
  color: #2f3b28;
}
body.skin-nokia .screen .speed {
  background: rgba(67, 82, 61, 0.14);
}
body.skin-nokia .screen .speed[aria-pressed="true"] {
  background: #43523d;
  color: #c7f0d8;
}
body.skin-nokia .screen button.primary {
  background: #43523d;
  color: #c7f0d8;
}
body.skin-nokia h1 {
  font-family: ui-monospace, "Courier New", monospace;
  letter-spacing: 0.06em;
}
```

改完顺序：抽 `snake.js` → 合入 SKIN + `draw()` → 回归首页默认皮肤 → 再做 Nokia 页外壳与 `skin-nokia`。

---

## 附录 B · 口径修正（改动前必读）

**一、FAQPage 没有 SERP 展开位了。**  
谷歌 2026-05-07 彻底下线 FAQ 富媒体结果。代码建议照留；FAQ 模块必须保留给用户看。

**二、多个词的「月均搜索量」是异常值撑起来的。**  
例如 snake game browser 真实约 140~320/月；classic snake game、snake io game 等同理。**不要为脉冲月均单独做页。**  
`play snake` 在快照期相对更稳（约 13.5~20.1 万区间）——其意图已由首页 **Play Snake Online** 承接，不再使用 `/play-snake` URL。

**三、「每个内页 3 条回首页内链」是社群经验，不是哥飞硬标准。**  
方向（内页 → 首页）对即可。

**四、已废弃 URL（勿上线、勿写入 sitemap）**  
`/classic-snake`、`/play-snake`、`/snake-game-browser`、`/how-to-play-snake` 等未在终态 3 页内的路径。

---

## 走查方式建议

阶段 1 的 TDK、How to Play、两个新增 H2、FAQ 四问为**逐字定稿**；阶段 2、5、6 为 `- [ ]` 可勾选项；阶段 3 两内页正文同上。

建议顺序：

1. 出三张图标 → 部署首页（含两 H2）→ 抽 `snake.js` 并回归 → 手机 Chrome 验「添加到主屏」（阶段 1.11）；
2. 阶段 2 基建（robots / sitemap 三 URL / GSC）；
3. `/nokia-snake`（SKIN + 机身 + 正文）→ `/snake-unblocked`；
4. 阶段 5 广告位、阶段 6 外链。

**仍未完成（与 chat 一致）**：icon-192 / icon-512 / apple-touch-icon；`snake.js` 物理抽取与合入附录 A（以仓库实现为准）。

阶段 1 的 PWA 验收是整个项目的分水岭——成了则复制 playsnake.org 高直访路径；不成则易沦为「有排名、低回访」的平庸游戏站。
