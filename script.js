const teachings = [
  "집착을 버려라. 근데 배달 최소금액은 채워라.",
  "마음이 흔들릴 때는 장바구니도 함께 흔들린다. 결제는 내일 해라.",
  "늦었다고 생각할 때가 진짜 늦었다. 그러니 간식부터 먹고 시작하라.",
  "말을 아껴라. 단톡방 캡처는 오래 남는다.",
  "분노는 지나가고 캘린더 알림은 다시 온다. 미루되 기록하라.",
  "비교를 멈춰라. 남의 인생도 보정 들어간 썸네일이다.",
  "현타가 왔다면 물을 마셔라. 깨달음도 수분이 있어야 돈다.",
  "돈은 돌고 돈다. 다만 내 계좌만 살짝 비껴간다.",
  "답장은 늦어도 마음은 빠르게 정리하라.",
  "공허함을 채우려 하지 마라. 냉장고부터 확인하라."
];

const worryOpeners = [
  "그 고민은 네가 배고파서 커진 것이다.",
  "번뇌의 모양은 복잡하나 시작 버튼은 하나다.",
  "탁처가 보기에 지금 필요한 것은 결심보다 충전기다.",
  "그 마음은 틀리지 않았다. 다만 잠이 부족하다.",
  "세상은 넓고 해야 할 일은 많지만, 오늘의 너는 한 칸만 가면 된다."
];

const worryClosers = [
  "먼저 먹고, 씻고, 15분만 해라.",
  "답을 찾기 전에 알림부터 꺼라.",
  "큰 결론은 내일의 너에게 맡기고 작은 행동만 남겨라.",
  "도망도 전략이나, 위치 공유는 꺼두지 마라.",
  "마음이 다시 시끄러우면 물 한 컵을 공양하라."
];

const sutras = [
  {
    title: "제1장: 늦잠",
    verses: [
      "알람은 세 번 울리나 몸은 한 번도 듣지 않는다.",
      "이불 밖은 수행처이나, 이불 안도 나름의 사찰이다.",
      "지각을 참회하되 택시비 영수증은 보존하라."
    ]
  },
  {
    title: "제2장: 인간관계",
    verses: [
      "읽씹의 공허를 붙잡지 말라. 모두 각자의 배터리가 있다.",
      "선 넘는 자에게는 미소보다 경계선이 자비롭다.",
      "좋은 인연은 답장을 재촉하지 않고 밥 약속을 잡는다."
    ]
  },
  {
    title: "제3장: 과제와 노동",
    verses: [
      "마감은 먼 곳에서 오지 않는다. 이미 탭 하나 뒤에 있다.",
      "완벽을 기다리다 파일명만 최종최종이 된다.",
      "시작한 자만이 저장 버튼의 가호를 받는다."
    ]
  },
  {
    title: "제4장: 배달음식",
    verses: [
      "리뷰 이벤트를 탐하지 말라. 그러나 참여는 자유다.",
      "국물은 마음을 데우고 배송비는 현실을 깨운다.",
      "나눠 먹는 자는 복을 얻고, 혼자 먹는 자는 leftovers를 얻는다."
    ]
  },
  {
    title: "제5장: 교수",
    verses: [
      "과제를 없애라",
      "시험을 없애라",
      "종강을 해라"
    ]
  }
];

const topics = [
  { label: "잠", text: "잠은 도피가 아니라 시스템 업데이트다. 재부팅 후 다시 번뇌하라." },
  { label: "밥", text: "공복의 판단을 믿지 마라. 먼저 한 숟갈, 그다음 인생." },
  { label: "돈", text: "절약은 수행이나, 무료배송 앞에서는 누구나 흔들린다." },
  { label: "인간관계", text: "모든 알림에 답할 필요는 없다. 마음에도 방해금지 모드가 있다." },
  { label: "현타", text: "현타는 끝이 아니라 중간 저장이다. 창을 닫지 말고 물을 마셔라." },
  { label: "노동", text: "월급날은 보름달처럼 차오르다 카드값 앞에서 기운다." },
  { label: "과제", text: "자료조사는 시작이지만, 탭 37개는 깨달음이 아니다." },
  { label: "연락", text: "답장이 늦은 인연을 붙잡지 말라. 네 와이파이부터 붙잡아라." }
];

const teachingText = document.querySelector("#teachingText");
const newTeachingButton = document.querySelector("#newTeaching");
const copyTeachingButton = document.querySelector("#copyTeaching");
const worryForm = document.querySelector("#worryForm");
const worryInput = document.querySelector("#worryInput");
const answerText = document.querySelector("#answerText");
const sutraList = document.querySelector("#sutraList");
const topicRing = document.querySelector(".topic-ring");
const mandalaText = document.querySelector("#mandalaText");

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function renderTeaching() {
  teachingText.textContent = pick(teachings);
}

function renderSutras() {
  sutraList.innerHTML = sutras
    .map(
      (chapter) => `
        <article class="sutra-item">
          <h3>${chapter.title}</h3>
          <ol>
            ${chapter.verses.map((verse) => `<li>${verse}</li>`).join("")}
          </ol>
        </article>
      `
    )
    .join("");
}

function renderTopics() {
  const radius = 39;
  const center = 50;

  topicRing.innerHTML = topics
    .map((topic, index) => {
      const angle = (index / topics.length) * Math.PI * 2 - Math.PI / 2;
      const x = center + Math.cos(angle) * radius;
      const y = center + Math.sin(angle) * radius;

      return `
        <button
          class="topic-button"
          type="button"
          style="left: ${x}%; top: ${y}%;"
          data-topic="${topic.label}"
        >${topic.label}</button>
      `;
    })
    .join("");
}

newTeachingButton.addEventListener("click", renderTeaching);

copyTeachingButton.addEventListener("click", async () => {
  const text = teachingText.textContent;

  try {
    await navigator.clipboard.writeText(text);
    copyTeachingButton.textContent = "복사됨";
    setTimeout(() => {
      copyTeachingButton.textContent = "복사";
    }, 1100);
  } catch {
    copyTeachingButton.textContent = "실패";
    setTimeout(() => {
      copyTeachingButton.textContent = "복사";
    }, 1100);
  }
});

worryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const worry = worryInput.value.trim();
  const subject = worry ? `“${worry}”라 하였느냐. ` : "";

  answerText.textContent = `${subject}${pick(worryOpeners)} ${pick(worryClosers)}`;
});

topicRing.addEventListener("click", (event) => {
  const button = event.target.closest(".topic-button");
  if (!button) return;

  const topic = topics.find((item) => item.label === button.dataset.topic);
  mandalaText.textContent = topic.text;
});

renderTeaching();
renderSutras();
renderTopics();
