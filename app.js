const STORAGE_KEY = "deep-thinking-8week-v5";
const LEGACY_STORAGE_KEY = "deep-thinking-8week-v4";
const OLDER_V3_STORAGE_KEY = "deep-thinking-8week-v3";
const OLDER_STORAGE_KEY = "deep-thinking-8week-v2";
const OLDEST_STORAGE_KEY = "deep-thinking-8week-v1";

const plans = [
  {
    week: 1,
    theme: "자극 밀도 낮추기",
    longThought: 20,
    visual: 5,
    reading: 2,
    focus: "아침 무자극 10분, 쇼츠 자동 실행 차단, 종이에 생각 쓰기 시작",
    tasks: ["쇼츠/릴스/틱톡은 0분 또는 예약제", "Long Thought는 한 질문만 20분", "두 자리 덧셈/뺄셈", "물체 관찰 후 눈 감고 복원"]
  },
  {
    week: 2,
    theme: "주의가 튀어도 돌아오기",
    longThought: 25,
    visual: 5,
    reading: 2,
    focus: "실패 기록보다 복귀 횟수 늘리기",
    tasks: ["주의가 튀면 표시하고 다시 질문으로 복귀", "계산 중간값을 머릿속에 유지", "방 구조 떠올리기", "2쪽 독서 후 3문장 요약"]
  },
  {
    week: 3,
    theme: "작업기억 강화",
    longThought: 30,
    visual: 7,
    reading: 5,
    focus: "중간값 유지, 핵심 주장 찾기",
    tasks: ["두 자리 × 한 자리 계산", "읽은 글의 핵심 주장 1개 쓰기", "도형 90도 회전", "막히면 왜/예시/반대 질문 사용"]
  },
  {
    week: 4,
    theme: "긴 글과 긴 사고 연결",
    longThought: 35,
    visual: 7,
    reading: 5,
    focus: "독서 내용으로 20분 이상 생각하기",
    tasks: ["읽은 내용에 대한 반론 1개 쓰기", "두 자리 × 두 자리 계산 시작", "문장을 장면으로 바꾸기", "주간 리뷰에서 실패 항목 하나만 조정"]
  },
  {
    week: 5,
    theme: "깊은 집중 블록 만들기",
    longThought: 40,
    visual: 10,
    reading: 7,
    focus: "45분 집중을 향한 준비",
    tasks: ["휴대폰을 다른 방에 두고 시작", "계산 풀이 과정을 말로 설명", "복잡한 공간 평면도 그리기", "독서 후 근거 2개 쓰기"]
  },
  {
    week: 6,
    theme: "45분 사고 블록 도달",
    longThought: 45,
    visual: 10,
    reading: 7,
    focus: "긴 호흡에 익숙해지기",
    tasks: ["하루 한 번 45분 사고 블록", "계산은 속도보다 정확도", "시각화 후 실제와 비교", "운동 30분을 가능한 한 고정"]
  },
  {
    week: 7,
    theme: "복합 사고 훈련",
    longThought: 45,
    visual: 10,
    reading: 10,
    focus: "읽기, 계산, 시각화를 한 주제 안에서 연결",
    tasks: ["긴 글에서 구조도 만들기", "계산 문제를 머릿속 단계로 유지", "문장 장면화 후 설명하기", "방해요인 상위 1개 제거"]
  },
  {
    week: 8,
    theme: "유지 가능한 루틴으로 전환",
    longThought: 45,
    visual: 10,
    reading: 10,
    focus: "8주 이후에도 유지할 최소 루틴 선택",
    tasks: ["가장 효과가 컸던 항목 3개 고르기", "망한 날 최소 루틴 확정", "쇼츠 규칙 장기 버전 정하기", "8주 회고 작성"]
  }
];

const longThoughtQuestions = [
  "내 집중력을 가장 자주 끊는 상황은 무엇이며, 그 직전에는 어떤 감정이 있었나?",
  "내가 긴 생각을 피하고 싶어지는 순간에는 보통 어떤 불편함이 생기나?",
  "오늘 내가 한 가지 문제를 끝까지 생각한다면 어떤 질문이 가장 가치 있을까?",
  "요즘 내 하루에서 자동으로 흘러가는 시간은 어디에 가장 많이 쓰이나?",
  "내가 다시 회복하고 싶은 사고 능력은 정확히 무엇이며, 왜 그것이 중요한가?",
  "쇼츠를 보고 싶은 충동은 피로, 지루함, 불안, 회피 중 어디에 가까운가?",
  "어릴 때는 잘 되었지만 지금 약해진 사고 습관은 무엇이고, 어떤 환경이 달라졌나?",
  "내가 8주 뒤에도 유지할 수 있는 가장 작은 루틴은 무엇인가?",
  "오늘 읽은 내용 또는 들은 말 중 반박하거나 검증하고 싶은 주장은 무엇인가?",
  "내가 자주 미루는 일은 실제로 어려운가, 아니면 시작 상태가 불편한가?",
  "집중이 잘 된 날과 안 된 날의 차이는 시간, 장소, 수면, 자극 중 무엇이었나?",
  "나에게 깊은 생각이 돌아온다면 일상에서 가장 먼저 달라질 장면은 무엇인가?"
];

const visualizationTasks = [
  "컵 하나를 30초 관찰한 뒤 눈을 감고 손잡이, 그림자, 빛의 방향을 복원하세요.",
  "내 방의 문에서 책상까지 천천히 걸어가는 장면을 머릿속으로 재생하고, 물건 위치 5개를 확인하세요.",
  "알파벳 L을 떠올린 뒤 시계 방향으로 90도, 180도 돌리고 종이에 그려보세요.",
  "비 오는 저녁 가로등 아래의 빨간 우산을 떠올리고, 바닥 반사와 빗방울 방향을 추가하세요.",
  "자주 가는 카페나 강의실을 위에서 내려다보는 평면도로 떠올린 뒤 종이에 그려보세요.",
  "사과 하나를 머릿속에서 천천히 회전시키고, 꼭지·그림자·색의 경계를 유지하세요.",
  "오늘 걸었던 길을 출발점부터 도착점까지 5장면으로 나눠서 재생하세요.",
  "짧은 문장 하나를 읽고, 인물·공간·소리·빛·움직임을 각각 하나씩 추가해 장면화하세요."
];

const readingPrompts = [
  "오늘 읽은 2쪽에서 핵심 주장 1개와 근거 2개를 찾으세요.",
  "한 문단을 읽고, 저자가 말하지 않았지만 전제하고 있는 생각을 적으세요.",
  "읽은 내용에 대해 반론 1개를 만들고, 그 반론이 맞으려면 어떤 증거가 필요한지 쓰세요.",
  "읽은 내용을 세 문장으로 요약한 뒤, 가장 중요한 단어 하나를 고르세요.",
  "읽은 내용을 누군가에게 설명한다고 가정하고, 첫 문장을 만들어보세요."
];

let state = loadState();
let currentDate = toISODate(new Date());
let trainDate = currentDate;
let deferredPrompt = null;
let promptVariant = 0;

let timer = {
  mode: "long",
  durationSeconds: 20 * 60,
  remainingSeconds: 20 * 60,
  intervalId: null,
  running: false
};

let flowTimer = {
  durationSeconds: 20 * 60,
  remainingSeconds: 20 * 60,
  intervalId: null,
  running: false,
  completed: false
};

let flowRatings = {
  clarity: 3,
  focus: 3,
  visualVividness: 3
};

let mathSession = null;
let mathTimerInterval = null;

const routineModeLabels = {
  recovery: "Recovery Mode",
  standard: "Standard Mode",
  growth: "Growth Mode"
};

const routineModeDescriptions = {
  recovery: "컨디션이 낮은 날에는 끊기지 않는 최소 루틴을 우선합니다.",
  standard: "현재 주차의 기본 루틴을 유지합니다.",
  growth: "최근 흐름이 안정적일 때 아주 조금만 난이도를 올립니다."
};

function defaultState() {
  return {
    version: 5,
    startDate: toISODate(new Date()),
    entries: {}
  };
}

function loadState() {
  try {
    const rawV5 = localStorage.getItem(STORAGE_KEY);
    if (rawV5) return normalizeState(JSON.parse(rawV5));
    const rawV4 = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (rawV4) return normalizeState(JSON.parse(rawV4));
    const rawV3 = localStorage.getItem(OLDER_V3_STORAGE_KEY);
    if (rawV3) return normalizeState(JSON.parse(rawV3));
    const rawV2 = localStorage.getItem(OLDER_STORAGE_KEY);
    if (rawV2) return normalizeState(JSON.parse(rawV2));
    const rawV1 = localStorage.getItem(OLDEST_STORAGE_KEY);
    if (rawV1) return normalizeState(JSON.parse(rawV1));
    return defaultState();
  } catch (e) {
    return defaultState();
  }
}

function normalizeState(input) {
  const base = defaultState();
  const next = { ...base, ...(input || {}) };
  next.version = 5;
  next.entries = next.entries || {};
  Object.keys(next.entries).forEach(date => {
    next.entries[date] = { ...emptyEntry(), ...next.entries[date] };
    if (next.entries[date].mathSession && !next.entries[date].mathSessions) next.entries[date].mathSessions = [next.entries[date].mathSession];
    if (!Array.isArray(next.entries[date].mathSessions)) next.entries[date].mathSessions = [];
  });
  return next;
}

function saveState() {
  state = normalizeState(state);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function toISODate(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function addDays(iso, n) {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + n);
  return toISODate(d);
}

function diffDays(a, b) {
  const da = new Date(a + "T00:00:00");
  const db = new Date(b + "T00:00:00");
  return Math.round((db - da) / 86400000);
}

function dayIndex(date = currentDate) {
  return diffDays(state.startDate, date) + 1;
}

function weekIndexFromDay(day) {
  return Math.min(8, Math.max(1, Math.ceil(day / 7)));
}

function getPlanForDate(date = currentDate) {
  return plans[weekIndexFromDay(dayIndex(date)) - 1] || plans[0];
}

function emptyEntry() {
  return {
    shortsOk: false,
    morningQuiet: false,
    shortsMinutes: 0,
    longThoughtMin: 0,
    calcMin: 0,
    visualMin: 0,
    readingPages: 0,
    exerciseMin: 0,
    sleepHours: 0,
    clarity: 3,
    focus: 3,
    visualVividness: 3,
    blocker: "",
    note: "",
    routineMode: "",
    mathSessions: []
  };
}

function getEntry(date) {
  return { ...emptyEntry(), ...(state.entries[date] || {}) };
}

function scoreEntry(entry, plan) {
  const checks = [
    !!entry.shortsOk,
    !!entry.morningQuiet,
    Number(entry.longThoughtMin) >= plan.longThought,
    Number(entry.calcMin) >= 10,
    Number(entry.visualMin) >= plan.visual,
    Number(entry.readingPages) >= plan.reading,
    Number(entry.exerciseMin) >= 30,
    Number(entry.sleepHours) >= 7
  ];
  return checks.filter(Boolean).length;
}

function isTracked(date) {
  return !!state.entries[date];
}

function showToast(text = "저장되었습니다.") {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 1800);
}

function switchView(id) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active-view"));
  document.getElementById(id).classList.add("active-view");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.view === id));
  if (id === "flow") renderFlow();
  if (id === "dashboard") renderDashboard();
  if (id === "train") renderTrain();
  if (id === "daily") renderDaily();
  if (id === "analytics") renderAnalytics();
  if (id === "journal") renderJournal();
  if (id === "weekly") renderWeekly();
}


function weekdayKo(date) {
  return ["일", "월", "화", "수", "목", "금", "토"][new Date(date + "T00:00:00").getDay()];
}

function currentFlowDate() {
  return toISODate(new Date());
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function trackedCount(rows) {
  return rows.filter(r => r.tracked).length;
}

function getRoutinePlanForMode(plan, mode = "standard") {
  const normalized = routineModeLabels[mode] ? mode : "standard";
  if (normalized === "recovery") {
    return {
      mode: "recovery",
      longThought: clampNumber(plan.longThought - 15, 10, plan.longThought),
      calc: "3문제 또는 5분",
      visual: clampNumber(plan.visual - 4, 3, plan.visual),
      reading: 1,
      exercise: 10,
      note: "최소 복귀가 목표입니다. 오늘은 기록이 끊기지 않는 것만 성공으로 봅니다."
    };
  }
  if (normalized === "growth") {
    return {
      mode: "growth",
      longThought: clampNumber(plan.longThought + 5, plan.longThought, 60),
      calc: "10분 + 난이도 1단계 검토",
      visual: clampNumber(plan.visual + 2, plan.visual, 15),
      reading: plan.reading + 1,
      exercise: 30,
      note: "잘 되는 항목만 아주 조금 늘립니다. 수면이 흔들리면 즉시 Standard로 돌아옵니다."
    };
  }
  return {
    mode: "standard",
    longThought: plan.longThought,
    calc: "10분",
    visual: plan.visual,
    reading: plan.reading,
    exercise: 30,
    note: "현재 주차의 기본 루틴입니다. 안정적인 반복을 우선합니다."
  };
}

function getAdaptiveAnalysis(date = currentFlowDate()) {
  const plan = getPlanForDate(date);
  const recent3 = windowSeries(date, 3);
  const recent7 = windowSeries(date, 7);
  const previous7 = windowSeries(addDays(date, -7), 7);
  const tracked3 = trackedCount(recent3);
  const tracked7 = trackedCount(recent7);
  const prevTracked = trackedCount(previous7);
  const avgScore3 = averageMetric(recent3, "score");
  const avgScore7 = averageMetric(recent7, "score");
  const avgLong7 = averageMetric(recent7, "longThoughtMin");
  const avgSleep7 = averageMetric(recent7, "sleep");
  const avgShorts7 = averageMetric(recent7, "shorts");
  const avgVisual7 = averageMetric(recent7, "visualVividness");
  const avgFocus7 = averageMetric(recent7, "focus");
  const prevShorts = averageMetric(previous7, "shorts");
  const prevLong = averageMetric(previous7, "longThoughtMin");
  const prevSleep = averageMetric(previous7, "sleep");
  const prevFocus = averageMetric(previous7, "focus");
  const prevVisual = averageMetric(previous7, "visualVividness");

  let recommendedMode = "standard";
  const reasons = [];
  if (tracked3 < 2 && tracked7 < 3) {
    reasons.push("기록이 아직 적습니다. 우선 Standard로 시작하고 3일 이상 기록을 쌓으세요.");
  } else if ((tracked3 >= 2 && avgScore3 < 4) || (tracked7 >= 4 && avgSleep7 > 0 && avgSleep7 < 6)) {
    recommendedMode = "recovery";
    if (tracked3 >= 2 && avgScore3 < 4) reasons.push("최근 3일 평균 점수가 4점 미만입니다.");
    if (tracked7 >= 4 && avgSleep7 > 0 && avgSleep7 < 6) reasons.push("최근 7일 평균 수면이 6시간 미만입니다.");
  } else if (tracked7 >= 5 && avgScore7 >= 6 && avgLong7 >= plan.longThought * 0.8 && avgSleep7 >= 6.5) {
    recommendedMode = "growth";
    reasons.push("최근 7일 평균 점수와 Long Thought 수행률이 안정적입니다.");
  } else {
    reasons.push("현재는 루틴을 크게 올리기보다 기본 강도를 유지하는 것이 좋습니다.");
  }

  const shortsChange = prevTracked ? pctChange(avgShorts7, prevShorts, true) : null;
  const longDelta = prevTracked ? avgLong7 - prevLong : null;
  const sleepDelta = prevTracked ? avgSleep7 - prevSleep : null;
  const focusDelta = prevTracked ? avgFocus7 - prevFocus : null;
  const visualDelta = prevTracked ? avgVisual7 - prevVisual : null;

  return {
    plan, recommendedMode, reasons, tracked3, tracked7, prevTracked,
    avgScore3, avgScore7, avgLong7, avgSleep7, avgShorts7, avgVisual7, avgFocus7,
    shortsChange, longDelta, sleepDelta, focusDelta, visualDelta
  };
}

function getSelectedRoutineMode(date = currentFlowDate(), analysis = getAdaptiveAnalysis(date)) {
  const entry = getEntry(date);
  return routineModeLabels[entry.routineMode] ? entry.routineMode : analysis.recommendedMode;
}

function recommendationSentence(analysis, mode) {
  if (mode === "recovery") {
    if (analysis.avgSleep7 > 0 && analysis.avgSleep7 < 6) return "수면이 낮아서 훈련 강도를 올리기 어렵습니다. 오늘은 최소 루틴과 수면 안정화를 우선하세요.";
    return "최근 흐름이 낮습니다. 오늘은 실패가 아니라 복귀를 목표로 최소 루틴만 진행하세요.";
  }
  if (mode === "growth") return "최근 기록이 안정적입니다. Long Thought를 5분만 늘리고, 계산은 무리하게 올리지 말고 정확도를 유지하세요.";
  return "현재 강도를 유지하세요. 하나의 항목만 작게 개선하면 충분합니다.";
}

function renderAdaptiveRecommendation(date = currentFlowDate()) {
  const analysis = getAdaptiveAnalysis(date);
  const mode = getSelectedRoutineMode(date, analysis);
  const routine = getRoutinePlanForMode(analysis.plan, mode);
  const pill = document.getElementById("adaptiveModePill");
  const summary = document.getElementById("adaptiveSummary");
  const planEl = document.getElementById("routinePlan");
  if (!pill || !summary || !planEl) return { analysis, mode, routine };
  pill.textContent = routineModeLabels[mode];
  pill.className = `pill mode-pill ${mode}`;
  summary.innerHTML = `
    <p><strong>${routineModeLabels[mode]}</strong> · ${routineModeDescriptions[mode]}</p>
    <p>${recommendationSentence(analysis, mode)}</p>
    <ul>${analysis.reasons.map(r => `<li>${r}</li>`).join("")}</ul>
  `;
  document.querySelectorAll("#routineModeTabs button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.routineMode === mode);
  });
  planEl.innerHTML = `
    <div><span>Long Thought</span><strong>${routine.longThought}분</strong></div>
    <div><span>계산</span><strong>${routine.calc}</strong></div>
    <div><span>시각화</span><strong>${routine.visual}분</strong></div>
    <div><span>독서</span><strong>${routine.reading}쪽</strong></div>
    <div><span>운동/걷기</span><strong>${routine.exercise}분</strong></div>
    <p class="routine-note">${routine.note}</p>
  `;
  return { analysis, mode, routine };
}

function chooseRoutineMode(mode) {
  if (!routineModeLabels[mode]) return;
  const today = currentFlowDate();
  const entry = getEntry(today);
  entry.routineMode = mode;
  state.entries[today] = entry;
  saveState();
  pauseFlowTimer();
  flowTimer.completed = false;
  flowTimer.remainingSeconds = getRoutinePlanForMode(getPlanForDate(today), mode).longThought * 60;
  flowTimer.durationSeconds = flowTimer.remainingSeconds;
  document.getElementById("flowPostSession").classList.add("hidden");
  renderFlow();
  showToast(`${routineModeLabels[mode]}로 설정했습니다.`);
}

function renderWeeklyComparison(date = currentFlowDate()) {
  const analysis = getAdaptiveAnalysis(date);
  const el = document.getElementById("flowWeeklyComparison");
  if (!el) return;
  if (!analysis.prevTracked) {
    el.innerHTML = `<div class="comparison-item"><span>기준 부족</span><strong>이전 7일 기록 없음</strong><p>최근 7일과 이전 7일을 모두 기록하면 변화량이 표시됩니다.</p></div>`;
    return;
  }
  const shorts = analysis.shortsChange === null ? "기준 없음" : `${Math.abs(analysis.shortsChange).toFixed(0)}% ${analysis.shortsChange >= 0 ? "감소" : "증가"}`;
  el.innerHTML = `
    <div class="comparison-item"><span>쇼츠 사용</span><strong>${shorts}</strong><p>줄어들수록 좋은 항목입니다.</p></div>
    <div class="comparison-item"><span>Long Thought</span><strong>${signed(analysis.longDelta, "분")}</strong><p>최근 7일 평균 변화입니다.</p></div>
    <div class="comparison-item"><span>수면</span><strong>${signed(analysis.sleepDelta, "h")}</strong><p>7시간 이상을 우선 기준으로 봅니다.</p></div>
    <div class="comparison-item"><span>집중감</span><strong>${signed(analysis.focusDelta)}</strong><p>1–5점 자기평가 기준입니다.</p></div>
    <div class="comparison-item"><span>시각화</span><strong>${signed(analysis.visualDelta)}</strong><p>1–5점 자기평가 기준입니다.</p></div>
  `;
}

function resetFlowTimerForToday() {
  const today = currentFlowDate();
  const mode = getSelectedRoutineMode(today);
  const routine = getRoutinePlanForMode(getPlanForDate(today), mode);
  flowTimer.durationSeconds = routine.longThought * 60;
  if (!flowTimer.running) flowTimer.remainingSeconds = flowTimer.durationSeconds;
  flowTimer.completed = false;
  updateFlowTimerDisplay();
}

function renderFlow() {
  const today = currentFlowDate();
  const day = Math.min(56, Math.max(1, dayIndex(today)));
  const plan = getPlanForDate(today);
  const entry = getEntry(today);
  const prompts = getPrompts(today);
  const adaptive = renderAdaptiveRecommendation(today);
  const routine = adaptive.routine;
  flowRatings = {
    clarity: Number(entry.clarity || 3),
    focus: Number(entry.focus || 3),
    visualVividness: Number(entry.visualVividness || 3)
  };

  document.getElementById("flowTodayTitle").textContent = `오늘은 ${plan.week}주차 ${weekdayKo(today)}요일입니다.`;
  document.getElementById("flowTodaySub").textContent = `Day ${day} · ${plan.theme} · ${today}`;
  document.getElementById("flowTargetMinutes").textContent = `${routine.longThought}분`;
  document.getElementById("flowTargetLabel").textContent = `${routineModeLabels[adaptive.mode]} · Long Thought`;
  document.getElementById("flowWeekBadge").textContent = `Week ${plan.week}`;
  document.getElementById("flowLongQuestion").textContent = prompts.long;
  document.getElementById("flowEveningNote").value = "";

  if (!flowTimer.running) {
    flowTimer.durationSeconds = routine.longThought * 60;
    if (!flowTimer.completed) flowTimer.remainingSeconds = flowTimer.durationSeconds;
  }
  updateFlowTimerDisplay();
  renderStarRatings();
  renderSevenDayFeedback();
  renderWeeklyComparison(today);
}

function updateFlowTimerDisplay() {
  const display = document.getElementById("flowTimerDisplay");
  if (!display) return;
  const min = Math.floor(flowTimer.remainingSeconds / 60);
  const sec = flowTimer.remainingSeconds % 60;
  display.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function startFlowTimer() {
  if (flowTimer.running) return;
  if (flowTimer.completed || flowTimer.remainingSeconds <= 0) resetFlowTimerForToday();
  flowTimer.running = true;
  flowTimer.intervalId = setInterval(() => {
    flowTimer.remainingSeconds = Math.max(0, flowTimer.remainingSeconds - 1);
    updateFlowTimerDisplay();
    if (flowTimer.remainingSeconds === 0) completeFlowSession(true);
  }, 1000);
}

function pauseFlowTimer() {
  if (flowTimer.intervalId) clearInterval(flowTimer.intervalId);
  flowTimer.intervalId = null;
  flowTimer.running = false;
}

function resetFlowTimer() {
  pauseFlowTimer();
  const today = currentFlowDate();
  const mode = getSelectedRoutineMode(today);
  const routine = getRoutinePlanForMode(getPlanForDate(today), mode);
  flowTimer.durationSeconds = routine.longThought * 60;
  flowTimer.remainingSeconds = flowTimer.durationSeconds;
  flowTimer.completed = false;
  document.getElementById("flowPostSession").classList.add("hidden");
  updateFlowTimerDisplay();
}

function completeFlowSession(fromTimerEnd = false) {
  if (flowTimer.completed) {
    document.getElementById("flowPostSession").classList.remove("hidden");
    return;
  }
  pauseFlowTimer();
  const today = currentFlowDate();
  const mode = getSelectedRoutineMode(today);
  const routine = getRoutinePlanForMode(getPlanForDate(today), mode);
  const elapsed = Math.max(0, flowTimer.durationSeconds - flowTimer.remainingSeconds);
  const minutes = fromTimerEnd ? routine.longThought : Math.max(1, Math.round(elapsed / 60 || routine.longThought));
  const entry = getEntry(today);
  entry.longThoughtMin = Math.max(Number(entry.longThoughtMin || 0), minutes);
  entry.routineMode = mode;
  entry.note = appendNote(entry.note, `[Morning Flow] ${routineModeLabels[mode]} · Long Thought ${minutes}분 완료\n질문: ${getPrompts(today).long}`);
  state.entries[today] = entry;
  saveState();
  flowTimer.remainingSeconds = 0;
  flowTimer.completed = true;
  updateFlowTimerDisplay();
  document.getElementById("flowPostSession").classList.remove("hidden");
  renderSevenDayFeedback();
  renderWeeklyComparison(today);
  showToast("Long Thought 완료 기록을 저장했습니다.");
}

function saveFlowSessionNote() {
  const note = document.getElementById("flowSessionNote").value.trim();
  if (!note) {
    showToast("저장할 저널 내용을 입력하세요.");
    return;
  }
  const today = currentFlowDate();
  const entry = getEntry(today);
  entry.note = appendNote(entry.note, `[훈련 후 저널]\n${note}`);
  state.entries[today] = entry;
  saveState();
  document.getElementById("flowSessionNote").value = "";
  renderSevenDayFeedback();
  renderWeeklyComparison(today);
  showToast("훈련 후 저널을 저장했습니다.");
}

function renderStarRatings() {
  document.querySelectorAll(".star-rating").forEach(group => {
    const key = group.dataset.ratingKey;
    const value = Number(flowRatings[key] || 3);
    group.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "star-btn" + (i <= value ? " active" : "");
      btn.textContent = "★";
      btn.setAttribute("aria-label", `${i}점`);
      btn.dataset.ratingValue = String(i);
      group.appendChild(btn);
    }
  });
}

function saveEveningReflection() {
  const today = currentFlowDate();
  const entry = getEntry(today);
  entry.visualVividness = Number(flowRatings.visualVividness || 3);
  entry.clarity = Number(flowRatings.clarity || 3);
  entry.focus = Number(flowRatings.focus || 3);
  const note = document.getElementById("flowEveningNote").value.trim();
  if (note) entry.note = appendNote(entry.note, `[저녁 회고]\n${note}`);
  state.entries[today] = entry;
  saveState();
  document.getElementById("flowEveningNote").value = "";
  renderSevenDayFeedback();
  renderWeeklyComparison(today);
  showToast("저녁 체크를 저장했습니다.");
}

function averageMetric(rows, key) {
  const valid = rows.filter(r => r.tracked && r[key] !== null && r[key] !== undefined);
  const sum = valid.reduce((acc, r) => acc + Number(r[key] || 0), 0);
  return valid.length ? sum / valid.length : 0;
}

function windowSeries(endDate, days) {
  const rows = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = addDays(endDate, -i);
    const entry = getEntry(date);
    const plan = getPlanForDate(date);
    const tracked = isTracked(date);
    rows.push({
      date,
      tracked,
      score: tracked ? scoreEntry(entry, plan) : null,
      shorts: tracked ? Number(entry.shortsMinutes || 0) : null,
      sleep: tracked ? Number(entry.sleepHours || 0) : null,
      longThoughtMin: tracked ? Number(entry.longThoughtMin || 0) : null,
      visualVividness: tracked ? Number(entry.visualVividness || 0) : null,
      focus: tracked ? Number(entry.focus || 0) : null,
      mathAccuracy: tracked ? latestMathAccuracy(entry) : null
    });
  }
  return rows;
}

function pctChange(current, previous, lowerIsBetter = false) {
  if (!previous) return null;
  const raw = ((current - previous) / previous) * 100;
  return lowerIsBetter ? -raw : raw;
}

function signed(value, suffix = "") {
  if (value === null || Number.isNaN(value)) return "기준 없음";
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${value.toFixed(1)}${suffix}`;
}

function renderSevenDayFeedback() {
  const today = currentFlowDate();
  const recent = windowSeries(today, 7);
  const previous = windowSeries(addDays(today, -7), 7);
  const tracked = recent.filter(r => r.tracked).length;
  const prevTracked = previous.filter(r => r.tracked).length;
  const avgScore = averageMetric(recent, "score");
  const avgLong = averageMetric(recent, "longThoughtMin");
  const avgShorts = averageMetric(recent, "shorts");
  const avgSleep = averageMetric(recent, "sleep");
  const avgVisual = averageMetric(recent, "visualVividness");
  const avgFocus = averageMetric(recent, "focus");
  const avgMath = averageMetric(recent, "mathAccuracy");
  const prevLong = averageMetric(previous, "longThoughtMin");
  const prevShorts = averageMetric(previous, "shorts");
  const prevVisual = averageMetric(previous, "visualVividness");
  const prevFocus = averageMetric(previous, "focus");
  const el = document.getElementById("flowFeedback");
  if (!el) return;
  const adaptive = getAdaptiveAnalysis(today);
  const recommendationText = recommendationSentence(adaptive, getSelectedRoutineMode(today, adaptive));

  const shortsChange = pctChange(avgShorts, prevShorts, true);
  const longDelta = prevTracked ? avgLong - prevLong : null;
  const visualDelta = prevTracked ? avgVisual - prevVisual : null;
  const focusDelta = prevTracked ? avgFocus - prevFocus : null;

  el.innerHTML = `
    <div class="feedback-item"><span>최근 7일 기록</span><strong>${tracked}/7일</strong><p>평균 점수 ${tracked ? avgScore.toFixed(1) : "-"}/8</p></div>
    <div class="feedback-item"><span>쇼츠 사용</span><strong>${tracked ? Math.round(avgShorts) + "분" : "-"}</strong><p>${shortsChange === null ? "지난주 기준이 아직 없습니다." : `지난주보다 ${Math.abs(shortsChange).toFixed(0)}% ${shortsChange >= 0 ? "개선" : "증가"}`}</p></div>
    <div class="feedback-item"><span>Long Thought</span><strong>${tracked ? Math.round(avgLong) + "분" : "-"}</strong><p>${longDelta === null ? "지난주 기준이 아직 없습니다." : `지난주 대비 ${signed(longDelta, "분")}`}</p></div>
    <div class="feedback-item"><span>수면</span><strong>${tracked ? avgSleep.toFixed(1) + "h" : "-"}</strong><p>권장 목표는 7시간 이상입니다.</p></div>
    <div class="feedback-item"><span>시각화 · 집중</span><strong>${tracked ? `${avgVisual.toFixed(1)} / ${avgFocus.toFixed(1)}` : "-"}</strong><p>시각화 ${signed(visualDelta)}, 집중 ${signed(focusDelta)}</p></div>
    <div class="feedback-item"><span>계산 정확도</span><strong>${avgMath ? avgMath.toFixed(0) + "%" : "-"}</strong><p>${mathDifficultySentence()}</p></div>
    <div class="feedback-item"><span>추천</span><strong>다음 조정</strong><p>${recommendationText}</p></div>
  `;
}

function renderDashboard() {
  const summary = collectSummary();
  document.getElementById("progressPct").textContent = summary.progressPct + "%";
  document.getElementById("progressText").textContent = `${summary.tracked} / 56일`;
  document.getElementById("avgScore").textContent = summary.tracked ? summary.avgScore.toFixed(1) : "0.0";
  document.getElementById("successDays").textContent = summary.success + "일";
  document.getElementById("streak").textContent = calcStreak() + "일";
  document.getElementById("avgShorts").textContent = summary.tracked ? Math.round(summary.avgShorts) + "분" : "0분";
  document.getElementById("avgSleep").textContent = summary.tracked ? summary.avgSleep.toFixed(1) + "h" : "0.0h";
  document.getElementById("avgFocus").textContent = summary.journalCount ? summary.avgFocus.toFixed(1) : "-";
  document.getElementById("avgClarity").textContent = summary.journalCount ? summary.avgClarity.toFixed(1) : "-";
  const mathEl = document.getElementById("avgMathAccuracy");
  if (mathEl) mathEl.textContent = summary.mathCount ? summary.avgMathAccuracy.toFixed(0) + "%" : "-";

  const d = Math.min(56, Math.max(1, dayIndex(toISODate(new Date()))));
  const plan = plans[weekIndexFromDay(d) - 1];
  document.getElementById("todayLabel").textContent = `Day ${d} · Week ${plan.week}`;
  renderTargets("todayTargets", plan, true);
  renderPromptCards("dashboardPrompts", toISODate(new Date()), true);
  renderWeekBars();
  renderRecentMiniChart();
}

function collectSummary() {
  const start = state.startDate;
  let tracked = 0;
  let scoreSum = 0;
  let success = 0;
  let shortsSum = 0;
  let sleepSum = 0;
  let focusSum = 0;
  let claritySum = 0;
  let journalCount = 0;
  let mathAccuracySum = 0;
  let mathCount = 0;
  for (let i = 0; i < 56; i++) {
    const date = addDays(start, i);
    if (!isTracked(date)) continue;
    tracked += 1;
    const plan = plans[Math.floor(i / 7)];
    const entry = getEntry(date);
    const score = scoreEntry(entry, plan);
    scoreSum += score;
    shortsSum += Number(entry.shortsMinutes || 0);
    sleepSum += Number(entry.sleepHours || 0);
    if (entry.focus) focusSum += Number(entry.focus);
    if (entry.clarity) claritySum += Number(entry.clarity);
    if (entry.focus || entry.clarity || entry.visualVividness) journalCount += 1;
    const latestAccuracy = latestMathAccuracy(entry);
    if (latestAccuracy !== null) { mathAccuracySum += latestAccuracy; mathCount += 1; }
    if (score >= 6) success += 1;
  }
  return {
    tracked,
    scoreSum,
    success,
    progressPct: Math.round((tracked / 56) * 100),
    avgScore: tracked ? scoreSum / tracked : 0,
    avgShorts: tracked ? shortsSum / tracked : 0,
    avgSleep: tracked ? sleepSum / tracked : 0,
    avgFocus: journalCount ? focusSum / journalCount : 0,
    avgClarity: journalCount ? claritySum / journalCount : 0,
    avgMathAccuracy: mathCount ? mathAccuracySum / mathCount : 0,
    mathCount,
    journalCount
  };
}

function renderWeekBars() {
  const weekBars = document.getElementById("weekBars");
  weekBars.innerHTML = "";
  plans.forEach((p, idx) => {
    let weekTracked = 0;
    let weekScore = 0;
    for (let d = idx * 7; d < idx * 7 + 7; d++) {
      const date = addDays(state.startDate, d);
      if (isTracked(date)) {
        weekTracked += 1;
        weekScore += scoreEntry(getEntry(date), p);
      }
    }
    const weekPct = Math.round((weekScore / 56) * 100);
    const row = document.createElement("div");
    row.className = "week-row";
    row.innerHTML = `<strong>W${p.week}</strong><div class="bar"><span style="width:${weekPct}%"></span></div><span>${weekScore}/56</span>`;
    weekBars.appendChild(row);
  });
}

function calcStreak() {
  let streak = 0;
  const today = toISODate(new Date());
  for (let i = 0; i < 56; i++) {
    const date = addDays(today, -i);
    if (!isTracked(date)) break;
    const plan = getPlanForDate(date);
    if (scoreEntry(getEntry(date), plan) >= 6) streak += 1;
    else break;
  }
  return streak;
}

function renderTargets(containerId, plan, grid = false) {
  const items = [
    ["Long Thought", `${plan.longThought}분`],
    ["계산", "10분"],
    ["시각화", `${plan.visual}분`],
    ["독서", `${plan.reading}쪽`],
    ["운동/걷기", "30분"],
    ["수면", "7시간 이상"],
    ["아침 무자극", "10분"],
    ["쇼츠 제한", "0분 또는 예약제"]
  ];
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  items.forEach(([label, value]) => {
    const div = document.createElement("div");
    div.className = grid ? "target" : "";
    div.innerHTML = `<strong>${label}</strong><span>${value}</span>`;
    el.appendChild(div);
  });
}

function renderTrain() {
  trainDate = trainDate || currentDate;
  document.getElementById("trainDayPicker").value = trainDate;
  renderPromptCards("trainPrompts", trainDate, false);
  renderMathModule();
  setTimerMode(timer.mode, false);
}

function seededNumber(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return Math.abs(hash >>> 0);
}

function pickFrom(arr, date, offset = 0) {
  const idx = (seededNumber(`${date}-${promptVariant}-${offset}`) + offset) % arr.length;
  return arr[idx];
}

function mathLevelForDate(date, mode = getSelectedRoutineMode(date, getAdaptiveAnalysis(date))) {
  const week = weekIndexFromDay(dayIndex(date));
  let level = week <= 2 ? 1 : week <= 3 ? 2 : week <= 4 ? 3 : week <= 6 ? 4 : 5;
  if (mode === "recovery") level = Math.max(1, level - 1);
  if (mode === "growth") level = Math.min(6, level + 1);
  return level;
}

function makeProblem(expression, answer, kind, level) {
  return { expression, answer, kind, level };
}

function generateMathProblems(date, count = 8, mode = getSelectedRoutineMode(date, getAdaptiveAnalysis(date))) {
  const level = mathLevelForDate(date, mode);
  const seed = seededNumber(`${date}-${promptVariant}-math-${count}-${level}-${mode}`);
  const problems = [];
  for (let i = 0; i < count; i++) {
    const a = 12 + ((seed + i * 37) % 88);
    const b = 11 + ((seed + i * 19) % 79);
    const small = 3 + ((seed + i * 11) % 7);
    if (level <= 1) {
      if (i % 2 === 0) problems.push(makeProblem(`${a} + ${b}`, a + b, "addition", level));
      else {
        const hi = a + b;
        problems.push(makeProblem(`${hi} - ${a}`, b, "subtraction", level));
      }
    } else if (level === 2) {
      if (i % 3 === 0) problems.push(makeProblem(`${a} + ${b}`, a + b, "addition", level));
      else problems.push(makeProblem(`${a} × ${small}`, a * small, "multiply_1digit", level));
    } else if (level === 3) {
      const c = 12 + ((seed + i * 13) % 18);
      if (i % 3 === 0) problems.push(makeProblem(`${a} - ${small * 3}`, a - small * 3, "subtraction", level));
      else problems.push(makeProblem(`${a} × ${c}`, a * c, "multiply_2digit", level));
    } else if (level === 4) {
      const divisor = 3 + ((seed + i * 7) % 9);
      const quotient = 14 + ((seed + i * 5) % 36);
      if (i % 3 === 0) problems.push(makeProblem(`${divisor * quotient} ÷ ${divisor}`, quotient, "division", level));
      else problems.push(makeProblem(`${a} × ${small} + ${b}`, a * small + b, "mixed", level));
    } else {
      const c = 12 + ((seed + i * 13) % 28);
      const d = 2 + ((seed + i * 5) % 8);
      if (i % 3 === 0) problems.push(makeProblem(`(${a} + ${b}) ÷ ${d}`, Math.floor((a + b) / d), "mixed_floor", level));
      else if (i % 3 === 1) problems.push(makeProblem(`${a} × ${c} - ${b}`, a * c - b, "mixed", level));
      else problems.push(makeProblem(`${a + b} - ${c} × ${d}`, a + b - c * d, "mixed", level));
    }
  }
  return problems;
}

function createCalcProblems(date) {
  return generateMathProblems(date, 5).map(p => `${p.expression} = ?`);
}

function latestMathSession(entry) {
  const sessions = Array.isArray(entry.mathSessions) ? entry.mathSessions : [];
  return sessions.length ? sessions[sessions.length - 1] : null;
}

function latestMathAccuracy(entry) {
  const session = latestMathSession(entry);
  return session && typeof session.accuracy === "number" ? session.accuracy : null;
}

function recentMathSessions(limit = 5) {
  const sessions = [];
  for (let i = 55; i >= 0; i--) {
    const date = addDays(state.startDate, i);
    const entry = getEntry(date);
    const list = Array.isArray(entry.mathSessions) ? entry.mathSessions : [];
    list.forEach(session => sessions.push({ ...session, date }));
  }
  return sessions.filter(s => s.savedAt || s.date).sort((a, b) => String(b.savedAt || b.date).localeCompare(String(a.savedAt || a.date))).slice(0, limit);
}

function mathDifficultySentence() {
  const recent = recentMathSessions(3);
  if (!recent.length) return "아직 계산 세션 기록이 없습니다. 오늘 첫 세션을 저장해보세요.";
  const avg = recent.reduce((sum, s) => sum + Number(s.accuracy || 0), 0) / recent.length;
  const avgDifficulty = recent.reduce((sum, s) => sum + Number(s.difficulty || 3), 0) / recent.length;
  if (recent.length >= 3 && avg >= 85 && avgDifficulty <= 4) return "최근 정답률이 높습니다. 다음 세션은 난이도를 한 단계 올려도 됩니다.";
  if (avg < 60) return "최근 정답률이 낮습니다. 오늘은 속도보다 중간값 유지와 정확도를 우선하세요.";
  if (avgDifficulty >= 4 && avg < 80) return "체감 난이도가 높습니다. 문제 수를 줄이고 풀이 과정을 천천히 유지하세요.";
  return "현재 난이도를 유지하면서 정답률 80% 이상을 목표로 하세요.";
}

function formatElapsed(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function resetMathTimerDisplay() {
  const el = document.getElementById("mathTimer");
  if (el) el.textContent = "00:00";
}

function startMathTimer() {
  if (!mathSession) createMathSession();
  mathSession.startedAt = Date.now();
  mathSession.endedAt = null;
  if (mathTimerInterval) clearInterval(mathTimerInterval);
  mathTimerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - mathSession.startedAt) / 1000);
    const timerEl = document.getElementById("mathTimer");
    if (timerEl) timerEl.textContent = formatElapsed(elapsed);
  }, 1000);
  document.getElementById("mathSessionMeta").textContent = `${mathSession.problems.length}문제 진행 중`;
  showToast("계산 세션을 시작했습니다.");
}

function stopMathTimer() {
  if (mathTimerInterval) clearInterval(mathTimerInterval);
  mathTimerInterval = null;
}

function createMathSession() {
  const count = Number(document.getElementById("mathCountSelect")?.value || 8);
  const mode = getSelectedRoutineMode(trainDate, getAdaptiveAnalysis(trainDate));
  const problems = generateMathProblems(trainDate, count, mode);
  mathSession = {
    date: trainDate,
    mode,
    level: problems[0]?.level || mathLevelForDate(trainDate, mode),
    problems,
    startedAt: null,
    endedAt: null
  };
  renderMathModule();
}

function renderMathModule() {
  const date = trainDate || currentDate;
  const mode = getSelectedRoutineMode(date, getAdaptiveAnalysis(date));
  const level = mathSession?.date === date ? mathSession.level : mathLevelForDate(date, mode);
  const badge = document.getElementById("mathLevelBadge");
  if (badge) badge.textContent = `Level ${level} · ${routineModeLabels[mode] || "Standard Mode"}`;
  const feedback = document.getElementById("mathFeedback");
  if (feedback) {
    const recent = recentMathSessions(3);
    const recentText = recent.length ? `최근 ${recent.length}회 평균 정확도 ${(recent.reduce((s, x) => s + Number(x.accuracy || 0), 0) / recent.length).toFixed(0)}%` : "최근 계산 기록 없음";
    feedback.innerHTML = `<strong>${recentText}</strong><br>${mathDifficultySentence()}`;
  }
  if (!mathSession || mathSession.date !== date) {
    mathSession = { date, mode, level, problems: generateMathProblems(date, Number(document.getElementById("mathCountSelect")?.value || 8), mode), startedAt: null, endedAt: null };
  }
  const list = document.getElementById("mathProblemList");
  if (!list) return;
  list.innerHTML = mathSession.problems.map((p, idx) => `
    <div class="math-problem-row" data-math-index="${idx}">
      <span class="math-no">${idx + 1}</span>
      <span class="math-expression">${p.expression} =</span>
      <input class="math-answer" inputmode="numeric" autocomplete="off" placeholder="답" data-math-answer="${idx}" aria-label="${idx + 1}번 답">
      <span class="math-check" id="mathCheck${idx}">대기</span>
    </div>
  `).join("");
  const meta = document.getElementById("mathSessionMeta");
  if (meta) meta.textContent = `${mathSession.problems.length}문제 · Level ${mathSession.level}`;
  resetMathTimerDisplay();
  const result = document.getElementById("mathResult");
  if (result) { result.classList.add("hidden"); result.innerHTML = ""; }
}

function gradeAndSaveMathSession() {
  if (!mathSession) createMathSession();
  stopMathTimer();
  const now = Date.now();
  if (!mathSession.startedAt) mathSession.startedAt = now;
  mathSession.endedAt = now;
  const answers = Array.from(document.querySelectorAll(".math-answer"));
  let correct = 0;
  const results = mathSession.problems.map((problem, idx) => {
    const raw = answers[idx]?.value.trim() || "";
    const userAnswer = Number(raw);
    const ok = raw !== "" && userAnswer === Number(problem.answer);
    if (ok) correct += 1;
    const check = document.getElementById(`mathCheck${idx}`);
    if (check) {
      check.textContent = ok ? "정답" : `오답 · 정답 ${problem.answer}`;
      check.className = `math-check ${ok ? "correct" : "wrong"}`;
    }
    return { expression: problem.expression, answer: problem.answer, userAnswer: raw, correct: ok };
  });
  const total = mathSession.problems.length;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;
  const durationSeconds = Math.max(1, Math.round((mathSession.endedAt - mathSession.startedAt) / 1000));
  const difficulty = Number(document.getElementById("mathDifficultySelect")?.value || 3);
  const savedSession = {
    date: trainDate,
    mode: mathSession.mode,
    level: mathSession.level,
    total,
    correct,
    accuracy,
    durationSeconds,
    difficulty,
    results,
    savedAt: new Date().toISOString()
  };
  const entry = getEntry(trainDate);
  const sessions = Array.isArray(entry.mathSessions) ? entry.mathSessions : [];
  sessions.push(savedSession);
  entry.mathSessions = sessions.slice(-10);
  entry.calcMin = Math.max(Number(entry.calcMin || 0), Math.max(1, Math.round(durationSeconds / 60)));
  entry.note = appendNote(entry.note, `[계산 훈련] Level ${savedSession.level} · ${correct}/${total} · 정확도 ${accuracy}% · ${formatElapsed(durationSeconds)} · 체감 난이도 ${difficulty}/5`);
  state.entries[trainDate] = entry;
  saveState();
  const result = document.getElementById("mathResult");
  if (result) {
    result.classList.remove("hidden");
    result.innerHTML = `<strong>${correct}/${total} 정답 · 정확도 ${accuracy}%</strong><br>걸린 시간 ${formatElapsed(durationSeconds)} · 체감 난이도 ${difficulty}/5<br>${mathDifficultySentence()}`;
  }
  document.getElementById("mathSessionMeta").textContent = `저장됨 · ${accuracy}%`;
  renderDashboard();
  renderSevenDayFeedback();
  showToast("계산 세션을 채점하고 저장했습니다.");
}


function getPrompts(date) {
  return {
    long: pickFrom(longThoughtQuestions, date, 1),
    calc: createCalcProblems(date),
    visual: pickFrom(visualizationTasks, date, 2),
    reading: pickFrom(readingPrompts, date, 3)
  };
}

function promptText(date) {
  const p = getPrompts(date);
  return [
    `[${date} 오늘의 훈련 프롬프트]`,
    `Long Thought: ${p.long}`,
    `계산: ${p.calc.join(" / ")}`,
    `시각화: ${p.visual}`,
    `독서: ${p.reading}`
  ].join("\n");
}

function renderPromptCards(containerId, date, compact) {
  const p = getPrompts(date);
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = "";
  const cards = [
    ["Long Thought", p.long],
    ["계산", `<ol>${p.calc.map(item => `<li>${item}</li>`).join("")}</ol>`],
    ["시각화", p.visual]
  ];
  if (!compact) cards.push(["독서", p.reading]);
  cards.forEach(([title, body]) => {
    const card = document.createElement("article");
    card.className = "prompt-card";
    card.innerHTML = `<h4>${title}</h4>${title === "계산" ? body : `<p>${body}</p>`}`;
    el.appendChild(card);
  });
}

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  return Promise.resolve(ok);
}

function setTimerMode(mode, reset = true) {
  timer.mode = mode;
  const plan = getPlanForDate(trainDate);
  const durations = {
    long: plan.longThought * 60,
    calc: 10 * 60,
    visual: plan.visual * 60,
    custom: Math.max(1, Number(document.getElementById("customTimerMin").value || 15)) * 60
  };
  timer.durationSeconds = durations[mode] || durations.long;
  if (reset) {
    pauseTimer();
    timer.remainingSeconds = timer.durationSeconds;
  } else if (!timer.running && timer.remainingSeconds > timer.durationSeconds) {
    timer.remainingSeconds = timer.durationSeconds;
  }
  const labels = { long: "Long Thought", calc: "계산", visual: "시각화", custom: "사용자 지정" };
  document.getElementById("timerModeLabel").textContent = labels[mode] || "Long Thought";
  document.querySelectorAll(".timer-tab").forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  document.querySelector(".timer-custom").classList.toggle("show", mode === "custom");
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const min = Math.floor(timer.remainingSeconds / 60);
  const sec = timer.remainingSeconds % 60;
  document.getElementById("timerDisplay").textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function startTimer() {
  if (timer.running) return;
  timer.running = true;
  timer.intervalId = setInterval(() => {
    timer.remainingSeconds = Math.max(0, timer.remainingSeconds - 1);
    updateTimerDisplay();
    if (timer.remainingSeconds === 0) {
      pauseTimer();
      showToast("타이머가 끝났습니다. 완료 처리를 눌러 기록에 반영하세요.");
    }
  }, 1000);
}

function pauseTimer() {
  if (timer.intervalId) clearInterval(timer.intervalId);
  timer.intervalId = null;
  timer.running = false;
}

function resetTimer() {
  pauseTimer();
  if (timer.mode === "custom") timer.durationSeconds = Math.max(1, Number(document.getElementById("customTimerMin").value || 15)) * 60;
  timer.remainingSeconds = timer.durationSeconds;
  updateTimerDisplay();
}

function completeTimer() {
  const elapsedSeconds = Math.max(0, timer.durationSeconds - timer.remainingSeconds);
  const minutes = Math.max(1, Math.round(elapsedSeconds / 60 || timer.durationSeconds / 60));
  addTrainingMinutes(trainDate, timer.mode, minutes);
  resetTimer();
}

function addTrainingMinutes(date, mode, minutes) {
  const entry = getEntry(date);
  if (mode === "long") entry.longThoughtMin = Number(entry.longThoughtMin || 0) + minutes;
  if (mode === "calc") entry.calcMin = Number(entry.calcMin || 0) + minutes;
  if (mode === "visual") entry.visualMin = Number(entry.visualMin || 0) + minutes;
  if (mode === "custom") entry.note = appendNote(entry.note, `[사용자 지정 타이머] ${minutes}분 완료`);
  state.entries[date] = entry;
  saveState();
  showToast(`${minutes}분을 기록에 반영했습니다.`);
}

function appendNote(existing, addition) {
  const left = existing ? existing.trim() + "\n" : "";
  return left + addition;
}

function renderDaily() {
  const picker = document.getElementById("dayPicker");
  picker.value = currentDate;
  const day = dayIndex(currentDate);
  const plan = getPlanForDate(currentDate);
  const entry = getEntry(currentDate);
  document.getElementById("dailyTitle").textContent = `Day ${day} · Week ${plan.week} · ${currentDate}`;
  const form = document.getElementById("dailyForm");
  Object.keys(emptyEntry()).forEach(key => {
    const field = form.elements[key];
    if (!field) return;
    if (field.type === "checkbox") field.checked = !!entry[key];
    else field.value = entry[key] ?? "";
  });
  updateRangeLabels();
  renderDailyScore();
  renderTargets("dailyTargets", plan, false);
}

function collectForm() {
  const form = document.getElementById("dailyForm");
  return {
    shortsOk: form.elements.shortsOk.checked,
    morningQuiet: form.elements.morningQuiet.checked,
    shortsMinutes: Number(form.elements.shortsMinutes.value || 0),
    longThoughtMin: Number(form.elements.longThoughtMin.value || 0),
    calcMin: Number(form.elements.calcMin.value || 0),
    visualMin: Number(form.elements.visualMin.value || 0),
    readingPages: Number(form.elements.readingPages.value || 0),
    exerciseMin: Number(form.elements.exerciseMin.value || 0),
    sleepHours: Number(form.elements.sleepHours.value || 0),
    clarity: Number(form.elements.clarity.value || 3),
    focus: Number(form.elements.focus.value || 3),
    visualVividness: Number(form.elements.visualVividness.value || 3),
    blocker: form.elements.blocker.value.trim(),
    note: form.elements.note.value.trim()
  };
}

function updateRangeLabels() {
  ["clarity", "focus", "visualVividness"].forEach(key => {
    const field = document.getElementById("dailyForm").elements[key];
    const label = document.getElementById(`${key}Value`);
    if (field && label) label.textContent = `${field.value || 3} / 5`;
  });
}

function renderDailyScore() {
  const entry = collectForm();
  const plan = getPlanForDate(currentDate);
  const score = scoreEntry(entry, plan);
  const badge = document.getElementById("dailyScore");
  badge.textContent = `${score} / 8`;
  badge.style.background = score >= 6 ? "#ecfdf5" : score >= 4 ? "#fffbeb" : "#fef2f2";
  badge.style.color = score >= 6 ? "#0f766e" : score >= 4 ? "#b45309" : "#b91c1c";
}

function renderPlan() {
  const list = document.getElementById("planList");
  list.innerHTML = "";
  plans.forEach(p => {
    const card = document.createElement("article");
    card.className = "plan-card";
    card.innerHTML = `
      <h3>Week ${p.week}. ${p.theme}</h3>
      <p class="muted">${p.focus}</p>
      <div class="plan-meta">
        <span>Long Thought ${p.longThought}분</span>
        <span>시각화 ${p.visual}분</span>
        <span>독서 ${p.reading}쪽</span>
        <span>계산 10분</span>
      </div>
      <ul>${p.tasks.map(t => `<li>${t}</li>`).join("")}</ul>`;
    list.appendChild(card);
  });
}

function renderWeekly() {
  const rows = plans.map((p, idx) => {
    let tracked = 0;
    let scoreSum = 0;
    let success = 0;
    let avgShorts = 0;
    let avgSleep = 0;
    const itemScores = { "쇼츠": 0, "무자극": 0, "Long Thought": 0, "계산": 0, "시각화": 0, "독서": 0, "운동": 0, "수면": 0 };
    for (let offset = idx * 7; offset < idx * 7 + 7; offset++) {
      const date = addDays(state.startDate, offset);
      if (!isTracked(date)) continue;
      tracked += 1;
      const e = getEntry(date);
      avgShorts += Number(e.shortsMinutes || 0);
      avgSleep += Number(e.sleepHours || 0);
      const checks = {
        "쇼츠": !!e.shortsOk,
        "무자극": !!e.morningQuiet,
        "Long Thought": Number(e.longThoughtMin) >= p.longThought,
        "계산": Number(e.calcMin) >= 10,
        "시각화": Number(e.visualMin) >= p.visual,
        "독서": Number(e.readingPages) >= p.reading,
        "운동": Number(e.exerciseMin) >= 30,
        "수면": Number(e.sleepHours) >= 7
      };
      Object.entries(checks).forEach(([k, v]) => { if (v) itemScores[k] += 1; });
      const score = scoreEntry(e, p);
      scoreSum += score;
      const latestAccuracy = latestMathAccuracy(entry);
    if (latestAccuracy !== null) { mathAccuracySum += latestAccuracy; mathCount += 1; }
    if (score >= 6) success += 1;
    }
    const entries = Object.entries(itemScores);
    const sortedBest = [...entries].sort((a,b) => b[1] - a[1]);
    const sortedWorst = [...entries].sort((a,b) => a[1] - b[1]);
    const best = tracked ? sortedBest[0][0] : "-";
    const worst = tracked ? sortedWorst[0][0] : "-";
    return `<tr><td>Week ${p.week}</td><td>${tracked}/7</td><td>${tracked ? (scoreSum / tracked).toFixed(1) : "-"}</td><td>${success}</td><td>${tracked ? (avgShorts / tracked).toFixed(0) + "분" : "-"}</td><td>${tracked ? (avgSleep / tracked).toFixed(1) + "h" : "-"}</td><td>${best}</td><td>${worst}</td><td>${recommendation(tracked, scoreSum)}</td></tr>`;
  }).join("");
  document.getElementById("weeklyTable").innerHTML = `<table><thead><tr><th>주차</th><th>기록일</th><th>평균 점수</th><th>성공일</th><th>평균 쇼츠</th><th>평균 수면</th><th>강점</th><th>취약</th><th>다음 조정</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function recommendation(tracked, scoreSum) {
  if (!tracked) return "기록부터 시작";
  const avg = scoreSum / tracked;
  if (avg >= 6) return "현재 강도 유지";
  if (avg >= 4) return "가장 어려운 항목 1개만 축소";
  return "최소 루틴으로 3일 재시작";
}

function getSeries() {
  const rows = [];
  for (let i = 0; i < 56; i++) {
    const date = addDays(state.startDate, i);
    const plan = plans[Math.floor(i / 7)];
    const entry = getEntry(date);
    rows.push({
      date,
      day: i + 1,
      week: plan.week,
      tracked: isTracked(date),
      score: isTracked(date) ? scoreEntry(entry, plan) : null,
      shorts: isTracked(date) ? Number(entry.shortsMinutes || 0) : null,
      sleep: isTracked(date) ? Number(entry.sleepHours || 0) : null,
      focus: isTracked(date) ? Number(entry.focus || 0) : null,
      clarity: isTracked(date) ? Number(entry.clarity || 0) : null,
      visualVividness: isTracked(date) ? Number(entry.visualVividness || 0) : null
    });
  }
  return rows;
}

function weeklyAverages(metric) {
  return plans.map(p => {
    const rows = getSeries().filter(r => r.week === p.week && r.tracked && r[metric] !== null && r[metric] !== 0);
    const sum = rows.reduce((acc, r) => acc + Number(r[metric] || 0), 0);
    return rows.length ? Number((sum / rows.length).toFixed(2)) : 0;
  });
}

function recentSeries(days = 14) {
  const today = toISODate(new Date());
  const start = addDays(today, -(days - 1));
  const rows = [];
  for (let i = 0; i < days; i++) {
    const date = addDays(start, i);
    const entry = getEntry(date);
    const plan = getPlanForDate(date);
    rows.push({
      label: date.slice(5),
      score: isTracked(date) ? scoreEntry(entry, plan) : 0,
      sleep: isTracked(date) ? Number(entry.sleepHours || 0) : 0,
      shorts: isTracked(date) ? Number(entry.shortsMinutes || 0) : 0,
      focus: isTracked(date) ? Number(entry.focus || 0) : 0
    });
  }
  return rows;
}

function renderRecentMiniChart() {
  const rows = recentSeries(14);
  drawLineChart("dashMiniChart", rows.map(r => r.label), [
    { name: "점수", data: rows.map(r => r.score), max: 8 },
    { name: "수면", data: rows.map(r => r.sleep), max: 10 },
    { name: "쇼츠", data: rows.map(r => r.shorts), max: Math.max(60, ...rows.map(r => r.shorts)) },
    { name: "집중", data: rows.map(r => r.focus), max: 5 }
  ]);
}

function renderAnalytics() {
  drawBarChart("weeklyScoreChart", plans.map(p => `W${p.week}`), weeklyAverages("score"), 8, "점");
  const series = getSeries();
  const labels = series.map(r => String(r.day));
  drawLineChart("shortsChart", labels, [{ name: "쇼츠 분", data: series.map(r => r.shorts || 0), max: Math.max(60, ...series.map(r => r.shorts || 0)) }]);
  drawLineChart("sleepChart", labels, [{ name: "수면 시간", data: series.map(r => r.sleep || 0), max: 10 }]);
  drawLineChart("focusChart", labels, [{ name: "집중감", data: series.map(r => r.focus || 0), max: 5 }]);
  drawLineChart("clarityChart", labels, [{ name: "머리 맑음", data: series.map(r => r.clarity || 0), max: 5 }]);
  drawLineChart("visualChart", labels, [{ name: "시각화 선명도", data: series.map(r => r.visualVividness || 0), max: 5 }]);
}

function prepareCanvas(id) {
  const canvas = document.getElementById(id);
  if (!canvas) return null;
  const parentWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 600;
  const width = Math.max(320, parentWidth - 4);
  const height = Number(canvas.getAttribute("height")) || 260;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);
  return { canvas, ctx, width, height };
}

function drawAxes(ctx, width, height, max) {
  const pad = { left: 42, right: 18, top: 24, bottom: 36 };
  ctx.strokeStyle = "#e5e7eb";
  ctx.lineWidth = 1;
  ctx.font = "12px system-ui";
  ctx.fillStyle = "#6b7280";
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + ((height - pad.top - pad.bottom) * i / 4);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    const value = Math.round(max - max * i / 4);
    ctx.fillText(String(value), 8, y + 4);
  }
  return pad;
}

function drawBarChart(id, labels, data, max, suffix = "") {
  const prepared = prepareCanvas(id);
  if (!prepared) return;
  const { ctx, width, height } = prepared;
  const pad = drawAxes(ctx, width, height, max);
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const barGap = 10;
  const barW = Math.max(16, chartW / data.length - barGap);
  ctx.fillStyle = "#111827";
  data.forEach((v, i) => {
    const x = pad.left + i * (chartW / data.length) + barGap / 2;
    const h = Math.max(0, Math.min(chartH, (v / max) * chartH));
    const y = pad.top + chartH - h;
    roundRect(ctx, x, y, barW, h, 8);
    ctx.fill();
    ctx.fillStyle = "#6b7280";
    ctx.font = "12px system-ui";
    ctx.fillText(labels[i], x + 4, height - 12);
    ctx.fillStyle = "#111827";
    ctx.font = "bold 12px system-ui";
    ctx.fillText(v ? `${v}${suffix}` : "", x + 2, y - 5);
  });
}

function drawLineChart(id, labels, seriesList) {
  const prepared = prepareCanvas(id);
  if (!prepared) return;
  const { ctx, width, height } = prepared;
  const max = Math.max(1, ...seriesList.map(s => s.max || Math.max(...s.data, 1)));
  const pad = drawAxes(ctx, width, height, max);
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const colors = ["#111827", "#0f766e", "#b45309", "#3730a3", "#b91c1c", "#64748b"];
  seriesList.forEach((series, sidx) => {
    const localMax = series.max || max;
    ctx.strokeStyle = colors[sidx % colors.length];
    ctx.fillStyle = colors[sidx % colors.length];
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    series.data.forEach((v, i) => {
      const x = pad.left + (labels.length === 1 ? chartW / 2 : chartW * i / (labels.length - 1));
      const y = pad.top + chartH - Math.min(chartH, (Number(v || 0) / localMax) * chartH);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    series.data.forEach((v, i) => {
      const x = pad.left + (labels.length === 1 ? chartW / 2 : chartW * i / (labels.length - 1));
      const y = pad.top + chartH - Math.min(chartH, (Number(v || 0) / localMax) * chartH);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  });
  ctx.font = "12px system-ui";
  ctx.fillStyle = "#6b7280";
  labels.forEach((label, i) => {
    const skip = labels.length > 20 ? Math.ceil(labels.length / 8) : Math.ceil(labels.length / 7);
    if (i % skip !== 0 && i !== labels.length - 1) return;
    const x = pad.left + (labels.length === 1 ? chartW / 2 : chartW * i / (labels.length - 1));
    ctx.fillText(label, Math.max(pad.left, x - 10), height - 12);
  });
  seriesList.forEach((series, idx) => {
    ctx.fillStyle = colors[idx % colors.length];
    ctx.font = "bold 12px system-ui";
    ctx.fillText(series.name, pad.left + idx * 86, 15);
  });
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function renderJournal() {
  const list = document.getElementById("journalList");
  list.innerHTML = "";
  const items = [];
  for (let i = 55; i >= 0; i--) {
    const date = addDays(state.startDate, i);
    if (!isTracked(date)) continue;
    const entry = getEntry(date);
    if (!entry.note && !entry.blocker && !entry.clarity && !entry.focus && !entry.visualVividness) continue;
    const plan = plans[Math.floor(i / 7)];
    items.push({ date, day: i + 1, week: plan.week, entry, score: scoreEntry(entry, plan) });
  }
  if (!items.length) {
    list.innerHTML = `<p class="muted">아직 저널 기록이 없습니다. 하루 체크에서 메모와 1–5점 회복 지표를 남기면 여기에 쌓입니다.</p>`;
    return;
  }
  items.forEach(item => {
    const div = document.createElement("article");
    div.className = "journal-item";
    div.innerHTML = `
      <header><button data-journal-date="${item.date}">${item.date} · Day ${item.day}</button><span class="score-badge">${item.score}/8</span></header>
      <div class="journal-metrics">
        <span>맑음 ${item.entry.clarity}/5</span>
        <span>집중 ${item.entry.focus}/5</span>
        <span>시각화 ${item.entry.visualVividness}/5</span>
        <span>쇼츠 ${item.entry.shortsMinutes || 0}분</span>
        <span>수면 ${item.entry.sleepHours || 0}h</span>
      </div>
      ${item.entry.blocker ? `<p class="journal-note"><strong>방해요인:</strong> ${escapeHtml(item.entry.blocker)}</p>` : ""}
      ${item.entry.note ? `<p class="journal-note">${escapeHtml(item.entry.note)}</p>` : ""}
    `;
    list.appendChild(div);
  });
}

function escapeHtml(text) {
  return String(text).replace(/[&<>'"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[ch]));
}

function exportJournalMarkdown() {
  const lines = ["# 8주 회복 저널", ""];
  for (let i = 0; i < 56; i++) {
    const date = addDays(state.startDate, i);
    if (!isTracked(date)) continue;
    const entry = getEntry(date);
    const plan = plans[Math.floor(i / 7)];
    const score = scoreEntry(entry, plan);
    if (!entry.note && !entry.blocker) continue;
    lines.push(`## ${date} · Day ${i + 1} · Week ${plan.week}`);
    lines.push(`- 점수: ${score}/8`);
    lines.push(`- 머리 맑음: ${entry.clarity}/5`);
    lines.push(`- 집중감: ${entry.focus}/5`);
    lines.push(`- 시각화 선명도: ${entry.visualVividness}/5`);
    lines.push(`- 쇼츠: ${entry.shortsMinutes || 0}분`);
    lines.push(`- 수면: ${entry.sleepHours || 0}시간`);
    if (entry.blocker) lines.push(`- 방해요인: ${entry.blocker}`);
    if (entry.note) lines.push(`\n${entry.note}`);
    lines.push("");
  }
  exportFile("deep-thinking-recovery-journal.md", lines.join("\n"), "text/markdown;charset=utf-8");
}

function exportFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function toCsv() {
  const header = [
    "date", "day", "week", "score", "shortsOk", "morningQuiet", "shortsMinutes",
    "longThoughtMin", "calcMin", "visualMin", "readingPages", "exerciseMin", "sleepHours",
    "clarity", "focus", "visualVividness", "mathAccuracy", "mathCorrect", "mathTotal", "mathLevel", "mathDurationSeconds", "blocker", "note"
  ];
  const rows = [header.join(",")];
  for (let i = 0; i < 56; i++) {
    const date = addDays(state.startDate, i);
    const e = getEntry(date);
    const plan = plans[Math.floor(i / 7)];
    const score = isTracked(date) ? scoreEntry(e, plan) : "";
    const m = latestMathSession(e) || {};
    const row = [
      date, i + 1, plan.week, score, e.shortsOk, e.morningQuiet, e.shortsMinutes,
      e.longThoughtMin, e.calcMin, e.visualMin, e.readingPages, e.exerciseMin, e.sleepHours,
      e.clarity, e.focus, e.visualVividness, m.accuracy ?? "", m.correct ?? "", m.total ?? "", m.level ?? "", m.durationSeconds ?? "", e.blocker, e.note
    ].map(v => `"${String(v ?? "").replaceAll('"','""')}"`).join(",");
    rows.push(row);
  }
  return rows.join("\n");
}

function saveDailyForm() {
  const previous = getEntry(currentDate);
  state.entries[currentDate] = { ...collectForm(), routineMode: previous.routineMode || "", mathSessions: previous.mathSessions || [] };
  saveState();
  renderDailyScore();
  showToast();
}

function quickSaveFromTrain() {
  const entry = getEntry(trainDate);
  state.entries[trainDate] = entry;
  saveState();
  showToast("오늘 기록을 확인했습니다. 타이머 완료분은 이미 반영됩니다.");
}

function initEvents() {
  document.querySelectorAll(".nav-btn").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));
  document.getElementById("flowTimerStart").addEventListener("click", startFlowTimer);
  document.getElementById("flowTimerPause").addEventListener("click", pauseFlowTimer);
  document.getElementById("flowTimerReset").addEventListener("click", resetFlowTimer);
  document.getElementById("flowTimerComplete").addEventListener("click", () => completeFlowSession(false));
  document.getElementById("flowSaveSessionNote").addEventListener("click", saveFlowSessionNote);
  document.getElementById("flowSaveEvening").addEventListener("click", saveEveningReflection);
  document.getElementById("flowGoDaily").addEventListener("click", () => { currentDate = toISODate(new Date()); switchView("daily"); });
  document.getElementById("routineModeTabs").addEventListener("click", e => {
    const btn = e.target.closest("button[data-routine-mode]");
    if (!btn) return;
    chooseRoutineMode(btn.dataset.routineMode);
  });
  document.querySelectorAll(".star-rating").forEach(group => group.addEventListener("click", e => {
    const btn = e.target.closest(".star-btn");
    if (!btn) return;
    flowRatings[group.dataset.ratingKey] = Number(btn.dataset.ratingValue);
    renderStarRatings();
  }));
  document.getElementById("goToday").addEventListener("click", () => { currentDate = toISODate(new Date()); switchView("daily"); });
  document.getElementById("goTrain").addEventListener("click", () => { trainDate = toISODate(new Date()); switchView("train"); });

  document.getElementById("trainDayPicker").addEventListener("change", e => { trainDate = e.target.value; renderTrain(); });
  document.getElementById("trainSaveQuick").addEventListener("click", quickSaveFromTrain);
  document.querySelectorAll(".timer-tab").forEach(btn => btn.addEventListener("click", () => setTimerMode(btn.dataset.mode)));
  document.getElementById("customTimerMin").addEventListener("input", () => { if (timer.mode === "custom") setTimerMode("custom"); });
  document.getElementById("timerStart").addEventListener("click", startTimer);
  document.getElementById("timerPause").addEventListener("click", pauseTimer);
  document.getElementById("timerReset").addEventListener("click", resetTimer);
  document.getElementById("timerComplete").addEventListener("click", completeTimer);
  document.getElementById("mathGenerate").addEventListener("click", () => { stopMathTimer(); mathSession = null; createMathSession(); showToast("새 계산 문제를 만들었습니다."); });
  document.getElementById("mathStart").addEventListener("click", startMathTimer);
  document.getElementById("mathGrade").addEventListener("click", gradeAndSaveMathSession);
  document.getElementById("mathCountSelect").addEventListener("change", () => { stopMathTimer(); mathSession = null; createMathSession(); });
  document.getElementById("refreshPrompts").addEventListener("click", () => { promptVariant += 1; renderPromptCards("trainPrompts", trainDate, false); showToast("새 프롬프트를 만들었습니다."); });
  document.getElementById("copyPrompts").addEventListener("click", async () => {
    const ok = await copyText(promptText(trainDate));
    showToast(ok ? "프롬프트를 복사했습니다." : "복사에 실패했습니다.");
  });
  document.getElementById("copyPromptsDash").addEventListener("click", async () => {
    const ok = await copyText(promptText(toISODate(new Date())));
    showToast(ok ? "프롬프트를 복사했습니다." : "복사에 실패했습니다.");
  });
  document.getElementById("usePromptAsNote").addEventListener("click", () => {
    const entry = getEntry(trainDate);
    entry.note = appendNote(entry.note, promptText(trainDate));
    state.entries[trainDate] = entry;
    saveState();
    showToast("프롬프트를 오늘 메모에 넣었습니다.");
  });

  document.getElementById("dayPicker").addEventListener("change", e => { currentDate = e.target.value; renderDaily(); });
  document.getElementById("prevDay").addEventListener("click", () => { currentDate = addDays(currentDate, -1); renderDaily(); });
  document.getElementById("nextDay").addEventListener("click", () => { currentDate = addDays(currentDate, 1); renderDaily(); });
  document.getElementById("dailyForm").addEventListener("input", () => { updateRangeLabels(); renderDailyScore(); });
  document.getElementById("dailyForm").addEventListener("submit", e => { e.preventDefault(); saveDailyForm(); });
  document.getElementById("resetDay").addEventListener("click", () => {
    if (confirm("이 날짜의 입력을 지울까요?")) {
      delete state.entries[currentDate];
      saveState();
      renderDaily();
      showToast("입력을 지웠습니다.");
    }
  });

  document.getElementById("journalList").addEventListener("click", e => {
    const btn = e.target.closest("button[data-journal-date]");
    if (!btn) return;
    currentDate = btn.dataset.journalDate;
    switchView("daily");
  });
  document.getElementById("exportJournal").addEventListener("click", exportJournalMarkdown);

  document.getElementById("startDateInput").value = state.startDate;
  document.getElementById("saveStartDate").addEventListener("click", () => {
    const val = document.getElementById("startDateInput").value;
    if (!val) return;
    state.startDate = val;
    saveState();
    renderDashboard();
    showToast("시작일을 저장했습니다.");
  });
  document.getElementById("exportJson").addEventListener("click", () => exportFile("long-thought-recovery-v050-backup.json", JSON.stringify(state, null, 2), "application/json"));
  document.getElementById("exportCsv").addEventListener("click", () => exportFile("long-thought-recovery-v050-tracker.csv", toCsv(), "text/csv;charset=utf-8"));
  document.getElementById("importJson").addEventListener("change", async e => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const imported = JSON.parse(text);
      if (!imported.startDate || !imported.entries) throw new Error("Invalid backup");
      state = normalizeState(imported);
      saveState();
      document.getElementById("startDateInput").value = state.startDate;
      renderDashboard();
      showToast("복원했습니다.");
    } catch (err) {
      alert("복원할 수 없는 파일입니다.");
    }
  });

  window.addEventListener("resize", () => {
    const active = document.querySelector(".active-view");
    if (!active) return;
    if (active.id === "flow") { renderSevenDayFeedback(); renderWeeklyComparison(); }
    if (active.id === "dashboard") renderRecentMiniChart();
    if (active.id === "analytics") renderAnalytics();
  });
}


// Defensive fallback for static hosting/cache edge cases.
// If one direct listener fails during initialization, this delegated listener keeps core navigation and buttons working.
document.addEventListener("click", e => {
  const target = e.target;
  if (!target || !target.closest) return;
  const nav = target.closest(".nav-btn");
  if (nav && nav.dataset && nav.dataset.view) {
    switchView(nav.dataset.view);
    return;
  }
  const button = target.closest("button");
  if (!button || !button.id) return;
  const handlers = {
    goToday: () => { currentDate = toISODate(new Date()); switchView("daily"); },
    goTrain: () => { trainDate = toISODate(new Date()); switchView("train"); },
    flowTimerStart: startFlowTimer,
    flowTimerPause: pauseFlowTimer,
    flowTimerReset: resetFlowTimer,
    flowTimerComplete: () => completeFlowSession(false),
    flowSaveSessionNote: saveFlowSessionNote,
    flowSaveEvening: saveEveningReflection,
    flowGoDaily: () => { currentDate = toISODate(new Date()); switchView("daily"); },
    trainSaveQuick: quickSaveFromTrain,
    timerStart: startTimer,
    timerPause: pauseTimer,
    timerReset: resetTimer,
    timerComplete: completeTimer,
    mathGenerate: () => { stopMathTimer(); mathSession = null; createMathSession(); showToast("새 계산 문제를 만들었습니다."); },
    mathStart: startMathTimer,
    mathGrade: gradeAndSaveMathSession,
    refreshPrompts: () => { promptVariant += 1; renderPromptCards("trainPrompts", trainDate, false); showToast("새 프롬프트를 만들었습니다."); },
    copyPrompts: async () => { const ok = await copyText(promptText(trainDate)); showToast(ok ? "프롬프트를 복사했습니다." : "복사에 실패했습니다."); },
    copyPromptsDash: async () => { const ok = await copyText(promptText(toISODate(new Date()))); showToast(ok ? "프롬프트를 복사했습니다." : "복사에 실패했습니다."); },
    usePromptAsNote: () => { const entry = getEntry(trainDate); entry.note = appendNote(entry.note, promptText(trainDate)); state.entries[trainDate] = entry; saveState(); showToast("프롬프트를 오늘 메모에 넣었습니다."); },
    prevDay: () => { currentDate = addDays(currentDate, -1); renderDaily(); },
    nextDay: () => { currentDate = addDays(currentDate, 1); renderDaily(); },
    resetDay: () => { if (confirm("이 날짜의 입력을 지울까요?")) { delete state.entries[currentDate]; saveState(); renderDaily(); showToast("입력을 지웠습니다."); } },
    exportJournal: exportJournalMarkdown,
    saveStartDate: () => { const val = document.getElementById("startDateInput").value; if (!val) return; state.startDate = val; saveState(); renderDashboard(); renderFlow(); showToast("시작일을 저장했습니다."); },
    exportJson: () => exportFile("long-thought-recovery-v051-backup.json", JSON.stringify(state, null, 2), "application/json"),
    exportCsv: () => exportFile("long-thought-recovery-v051-tracker.csv", toCsv(), "text/csv;charset=utf-8")
  };
  if (handlers[button.id]) handlers[button.id]();
});

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById("installBtn").classList.remove("hidden");
});

document.addEventListener("click", async e => {
  if (e.target && e.target.id === "installBtn" && deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    document.getElementById("installBtn").classList.add("hidden");
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}));
}

function safeRun(label, fn) {
  try {
    fn();
  } catch (err) {
    console.error(`[Long Thought Recovery] ${label} failed`, err);
  }
}

function bootApp() {
  safeRun("renderPlan", renderPlan);
  safeRun("renderFlow", renderFlow);
  safeRun("renderDashboard", renderDashboard);
  safeRun("renderWeekly", renderWeekly);
  safeRun("renderTrain", renderTrain);
  safeRun("renderDaily", renderDaily);
  safeRun("initEvents", initEvents);
  safeRun("saveState", saveState);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootApp);
} else {
  bootApp();
}
