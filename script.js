// Data extracted from subject.ttl
const achievementData = {
    pe: [
        { code: "[4체01-01]", title: "운동과 체력의 의미", content: "운동과 체력의 의미를 이해하고 관계를 파악한다.", url: "https://www.edunet.net/nedu/ncsearch/listItemList.do?menu_id=616" },
        { code: "[4체01-02]", title: "기본 체력운동 시도", content: "기본 체력운동의 방법과 절차를 익히며 자신의 수준에 맞는 운동을 시도한다.", url: "https://www.sportal.or.kr/health/healthList.do" },
        { code: "[4체01-03]", title: "운동과 건강의 관계", content: "운동과 건강의 의미를 이해하고 관계를 파악한다.", url: "https://www.khidi.or.kr/knhanes" },
        { code: "[4체02-01]", title: "스포츠의 의미와 유형", content: "스포츠의 의미와 유형을 파악한다.", url: "https://www.sports.re.kr/" },
        { code: "[4체02-02]", title: "기본 움직임 기술과 스포츠", content: "기본 움직임 기술의 의미와 종류를 이해하고 스포츠와의 관계를 파악한다.", url: "https://www.safetyline.or.kr/" },
        { code: "[4체02-03]", title: "움직임 요소별 수행", content: "움직임 요소에 따른 기본 움직임 기술의 수행 방법을 파악하고 시도한다.", url: "https://www.youtube.com/user/kspo_official" },
        { code: "[4체02-04]", title: "복합적인 움직임 기술", content: "기본 움직임 기술을 연결한 복합적인 움직임 기술을 파악하고 시도한다.", url: "https://www.schoolphysicals.com/" },
        { code: "[4체03-01]", title: "표현 활동의 의미", content: "표현 활동의 의미와 기본 움직임 기술과의 관계를 파악한다.", url: "https://www.kodat.or.kr/" },
        { code: "[4체03-02]", title: "움직임 요소별 표현", content: "움직임 요소에 따른 기본 움직임 기술의 표현 방법을 파악하고 시도한다.", url: "https://www.artshub.or.kr/" },
        { code: "[4체03-03]", title: "사물/자연 모방 표현", content: "기본 움직임 기술을 활용하여 사물이나 자연을 모방하여 표현한다.", url: "https://www.kacef.or.kr/" }
    ],
    music: [
        { code: "[4음01-01]", title: "바른 자세와 주법", content: "바른 자세와 주법을 익혀 노래 부르거나 악기로 연주한다.", url: "https://www.gugak.go.kr/site/main/index/index002" },
        { code: "[4음01-02]", title: "음악 요소 살려 연주", content: "기초적인 음악 요소를 살려 노래 부르거나 악기로 연주하고 느낌을 이야기한다.", url: "https://primary.ebs.co.kr/main/primary" },
        { code: "[4음01-03]", title: "신체표현 및 놀이", content: "노래와 악기 연주에 어울리는 신체표현이나 놀이를 하며 음악을 즐긴다.", url: "https://www.sac.or.kr/" },
        { code: "[4음02-01]", title: "음악 요소 탐색/반응", content: "음악을 듣고 기초적인 음악 요소를 탐색하며 반응한다.", url: "https://musiclab.chromeexperiments.com/" },
        { code: "[4음02-02]", title: "음악적 특징 발견", content: "다양한 음악을 듣고 음악적 특징을 발견한다.", url: "https://www.classicfm.com/" },
        { code: "[4음02-03]", title: "음악의 분위기와 쓰임", content: "다양한 종류의 음악을 듣고 음악의 분위기를 묘사하거나 쓰임을 이야기한다.", url: "https://www.iscm.org/" },
        { code: "[4음02-04]", title: "생활 속 음악 즐기기", content: "생활 속에서 음악을 들으며 느낌과 호기심을 갖고 즐긴다.", url: "https://www.spotify.com/kids/" },
        { code: "[4음03-01]", title: "즉흥적 표현", content: "느낌과 상상을 즉흥적으로 표현하며 음악에 대한 흥미를 갖는다.", url: "https://www.incredibox.com/" },
        { code: "[4음03-02]", title: "악곡 개작 및 기보", content: "악곡의 일부를 바꾸어 표현하고 간단한 악보로 나타낸다.", url: "https://www.noteflight.com/" },
        { code: "[4음03-03]", title: "음악 요소 활용 표현", content: "기초적인 음악 요소를 활용하여 소리나 음악으로 표현한다.", url: "https://www.soundtrap.com/edu/" }
    ],
    art: [
        { code: "[4미01-01]", title: "다양한 감각 활용 탐색", content: "자연물과 인공물을 탐색하는 데 다양한 감각을 활용할 수 있다.", url: "https://artsandculture.google.com/" },
        { code: "[4미01-02]", title: "주변 대상 체험/표현", content: "주변 대상을 체험하며 떠오른 느낌과 생각을 다양한 방법으로 나타낼 수 있다.", url: "https://www.mmca.go.kr/child/" },
        { code: "[4미01-03]", title: "미적 탐색과 특징 이해", content: "미적 탐색에 호기심을 갖고 참여하며 자신의 감각으로 대상의 특징을 이해할 수 있다.", url: "https://www.museum.go.kr/site/child/home" },
        { code: "[4미02-01]", title: "아이디어 구체화", content: "관찰과 상상으로 아이디어를 떠올려 표현 주제를 구체화할 수 있다.", url: "https://www.behance.net/" },
        { code: "[4미02-02]", title: "재료와 용구의 특성", content: "기본적인 표현 재료와 용구의 특성을 이해하고 사용 방법을 익힐 수 있다.", url: "https://www.dickblick.com/learning-center/" },
        { code: "[4미02-03]", title: "조형 요소 활용", content: "조형 요소의 특징을 자유롭게 탐색하며 주제 표현에 알맞게 활용할 수 있다.", url: "https://www.tate.org.uk/kids" },
        { code: "[4미02-04]", title: "작품 제작 및 태도", content: "표현 의도를 가지고 작품을 제작하며 자기 작품을 소중히 여길 수 있다.", url: "https://www.artsonia.com/" },
        { code: "[4미03-01]", title: "작품 질문 및 탐구", content: "미술 작품을 자세히 보고 작품과 미술가에 관해 질문할 수 있다.", url: "https://www.moma.org/learn/kids_families/index" },
        { code: "[4미03-02]", title: "작품 특징 설명", content: "미술 작품의 특징과 작품에 관한 자신의 느낌과 생각을 설명할 수 있다.", url: "https://www.metmuseum.org/art/online-features/metkids" },
        { code: "[4미03-03]", title: "미술 문화 참여", content: "미술 문화에 관심을 가지고 전시 및 행사에 참여할 수 있다.", url: "https://korean-culture.org/" }
    ]
};

const grid = document.getElementById('standards-grid');
const buttons = document.querySelectorAll('.subject-btn');

function renderStandards(type) {
    // Clear grid
    grid.innerHTML = '';

    // Get data
    const list = achievementData[type];

    // Create elements
    list.forEach((item, index) => {
        // Create the main button-like card
        const card = document.createElement('a'); // Use anchor tag for link behavior
        card.className = `std-card-btn ${type}`;
        card.href = item.url;
        card.target = "_blank"; // Open in new tab

        // Staggered animation
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <span class="std-code">${item.code}</span>
            <h3 class="std-title">${item.title}</h3>
            <p class="std-content">${item.content}</p>
            <div class="link-indicator">👉 보물 찾으러 가기</div>
        `;

        grid.appendChild(card);
    });
}

// Event Listeners
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toggle Active Class
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Render
        const type = btn.getAttribute('data-type');
        renderStandards(type);
    });
});

// Initial Load: Show PE by default
document.querySelector('.subject-btn[data-type="pe"]').click();
