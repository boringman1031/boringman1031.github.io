// All site copy, keyed by language. Content follows the resume (林益綺).

export const links = {
  github: 'https://github.com/boringman1031',
  facebook: 'https://www.facebook.com/lin.yi.qi.917543?locale=zh_TW',
  instagram: 'https://www.instagram.com/boringman_1031/',
  email: 'mailto:ian.lin1031@gmail.com',
  phone: 'tel:+886919421779',
  oldSite: 'https://boringman-web.vercel.app/',
};

const skills = {
  zh: [
    {
      title: '網頁前端開發與互動體驗',
      items: [
        'React (v19)、Vue.js (v2)、Phaser 3、Vite',
        'RWD 響應式佈局、Virtual Scrolling 效能優化',
        'JavaScript (ES6+ / ES Modules)、Async/Await、Material UI、Bootstrap-Vue',
      ],
      tags: ['JavaScript', 'React'],
    },
    {
      title: '後端與資料庫工程',
      items: [
        'Node.js (v22)、Express 5、RESTful API 設計',
        'WebSocket / SSE 即時通訊、Postman API 驗證',
        'MySQL (Knex.js)、PostgreSQL (Supabase)、Prisma ORM (driver adapter)、PgBouncer 連線池管理',
      ],
      tags: ['Node.js', 'PostgreSQL'],
    },
    {
      title: '雲端實務與開發運維',
      items: [
        'GCP：IAM 權限管理、Project 建立、Cloud Storage、Firewall 規則設定',
        'Docker 容器部署；以 n8n 建置程式碼資安漏洞自動化偵測工作流',
        'Git main / dev / feature 分支策略，降低多人協作合併衝突',
        'Zeabur 管理 12 個服務的環境變數、資料庫連線與自動化部署；K3s 叢集監控與故障排除',
      ],
      tags: ['Google Cloud', 'Docker', 'K3s'],
    },
    {
      title: '人工智慧應用與機器學習',
      items: [
        'Azure OpenAI API 整合、Prompt Engineering（JSON Schema 結構化輸出）',
        'AI 回應容錯與 Guardrail 機制、RAG 系統開發 (LangChain、FAISS)',
        'Open WebUI 部署、模型 Fine-tuning、傳統 NLP (BERT、TF-IDF、BoW、貝式分類器)',
      ],
      tags: ['LLM', 'Prompt', 'RAG'],
    },
    {
      title: '遊戲開發與互動設計',
      items: [
        '遊戲引擎：Unity、Phaser 3（2D 與 3D 遊戲功能開發）',
        '角色控制、動畫狀態機、物理互動、AI 狀態機、Scene 生命週期管理',
        'Unity Addressables 資源管理、存檔與復原機制、事件驅動架構',
      ],
      tags: ['Unity', 'C#', 'Phaser'],
    },
  ],
  en: [
    {
      title: 'Front-end & Interactive Experience',
      items: [
        'React (v19), Vue.js (v2), Phaser 3, Vite',
        'Responsive layouts (RWD), Virtual Scrolling performance tuning',
        'JavaScript (ES6+ / ES Modules), Async/Await, Material UI, Bootstrap-Vue',
      ],
      tags: ['JavaScript', 'React'],
    },
    {
      title: 'Back-end & Databases',
      items: [
        'Node.js (v22), Express 5, RESTful API design',
        'WebSocket / SSE real-time messaging, API testing with Postman',
        'MySQL (Knex.js), PostgreSQL (Supabase), Prisma ORM (driver adapter), PgBouncer pooling',
      ],
      tags: ['Node.js', 'PostgreSQL'],
    },
    {
      title: 'Cloud & DevOps',
      items: [
        'GCP: IAM, project setup, Cloud Storage, firewall rules',
        'Docker deployment; n8n workflow for automated code vulnerability detection',
        'Git main / dev / feature branching strategy to cut merge conflicts',
        'Zeabur: env config, DB connections and auto-deploy for 12 services; K3s cluster monitoring',
      ],
      tags: ['Google Cloud', 'Docker', 'K3s'],
    },
    {
      title: 'AI Applications & Machine Learning',
      items: [
        'Azure OpenAI API integration, prompt engineering with JSON Schema output',
        'AI response fault tolerance & guardrails, RAG systems (LangChain, FAISS)',
        'Open WebUI deployment, fine-tuning, classic NLP (BERT, TF-IDF, BoW, Naive Bayes)',
      ],
      tags: ['LLM', 'Prompt', 'RAG'],
    },
    {
      title: 'Game Development & Interaction',
      items: [
        'Engines: Unity, Phaser 3 (2D and 3D gameplay features)',
        'Character control, animation & AI state machines, physics, scene lifecycle',
        'Unity Addressables, save/restore systems, event-driven architecture',
      ],
      tags: ['Unity', 'C#', 'Phaser'],
    },
  ],
};

const projects = {
  zh: [
    {
      title: '《升級吧!!面試勇者》AI 模擬面試遊戲',
      period: '2025/6 – 進行中',
      image: 'img/interview.png',
      link: 'https://github.com/boringman1031/Level_Up_Interview_frontend',
      stack: ['React 19', 'Phaser 3', 'Vite', 'Node.js 22', 'Express 5', 'Azure OpenAI', 'Supabase', 'Prisma'],
      points: [
        ['全端架構與場景狀態機', '以 Phaser 3 整合 React 19，設計 Resume → Chat → Story → Mentor 四階段場景狀態機，串接履歷分析、AI 面試、結局評分到後設認知教練的完整流程。'],
        ['量化心理學評分引擎', '將暈輪效應、初始效應、行為一致性、訊號理論轉為 config-driven 的 JSON 參數設定，讓非工程師也能調整權重；並打造 STAR 行為題與技術題雙軌評分。'],
        ['AI 回應穩定性設計', 'JSON Schema 結構化輸出、正則擷取＋解析容錯＋fallback，並以 Guardrail 偵測角色破功與重試；以 SSE 串流提升互動體感。'],
        ['可測試性與資料可追溯性', '核心評分邏輯抽為獨立模組，以 Vitest 建立單元測試與 eval 腳本；資料庫採 Event-sourcing 風格設計並以唯一性約束防止重複寫入。'],
      ],
    },
    {
      title: 'MEG AI NPC 互動平台',
      period: '2025/6 – 進行中',
      stack: ['Vue.js', 'WebSocket', 'RESTful API', 'TipTap', 'Yjs', 'Hocuspocus'],
      points: [
        ['線上文件共同編輯', '整合 TipTap + Yjs CRDT + Hocuspocus WebSocket，實作多人即時共編、衝突合併與多游標顯示。'],
        ['即時通訊與多角色管理', '以 Vue.js 與 WebSocket 建置互動平台，實作 TTS 語音動態生成、多 NPC 角色切換與階段性「鷹架」教學廣播。'],
        ['資安防護與權限控管 (RBAC)', '重構多人模式登入流程，導入 Session 狀態管理與動態通行密鑰，修補驗證碼共用漏洞。'],
        ['數據追蹤與系統運維', 'GPT API Token 用量即時換算面板控管成本；對話紀錄分頁查詢、條件篩選並匯出 CSV/Excel。'],
      ],
    },
    {
      title: 'MEGNPC 專案 CI/CD 與雲端部署維運',
      period: '2026/5 – 進行中',
      stack: ['Git', 'Zeabur', 'K3s', 'MySQL', 'AWS Lightsail'],
      points: [
        ['Git 分支策略規劃', '設計 main / dev / feature 分支規則與合併流程，透過 Merge 紀錄追蹤各服務版本演進。'],
        ['Zeabur 專案管理', '管理 12 個服務（前端、後端、資料庫），包含環境變數、MySQL 連線、網域綁定與自動化部署。'],
        ['伺服器運維', '負責 K3s 叢集（AWS Lightsail 東京節點、2 vCPU / 4GB）日常監控、服務狀態確認與故障排除。'],
      ],
    },
    {
      title: 'n8n 資安自動化漏洞偵測工作流',
      period: '2026/4 – 2026/5',
      stack: ['n8n', 'Git / GitHub', '資安掃描 API', '自動化通知'],
      points: [
        ['自動化觸發', '整合版本控制與資安檢測 API，程式碼變更時自動觸發靜態分析，落實 SSDLC。'],
        ['條件分流通知', '偵測到高風險漏洞時，自動推送至 Slack / Discord / Email，提升修復效率。'],
      ],
    },
    {
      title: '完了！！怎麼辦！！青春戀愛攻防戰',
      period: '2024/6 – 2025/3',
      image: 'img/love.png',
      link: 'https://github.com/boringman1031/LoveWarfare_UnityProject',
      stack: ['Unity', 'C#', '2D Roguelite'],
      desc: '融合戀愛與 2D 橫向卷軸動作的 Roguelite 遊戲。玩家化身大學生主角，在愛情與自我成長的冒險中挑戰內心陰影與情敵，完成屬於自己的「最後一舞」。PC 單人，遊玩時長 20–40 分鐘。',
    },
    {
      title: '討厭!!我才不要跟你一起求生!!',
      period: '2022/9 – 2023/1',
      image: 'img/survive.png',
      link: 'https://github.com/boringman1031/Idont-Want-TO-Survive-With-You',
      stack: ['Unity', 'C#', '2D'],
      desc: 'Unity 2D 劇情冒險生存遊戲：被迫與討厭的人（女友、老闆、美式男孩、隔壁老先生）一起在荒島求生，具多階段 Boss 戰、對話事件系統、血量受傷與鏡頭震動效果。',
    },
  ],
  en: [
    {
      title: 'Upgrade!! Interview Warrior — AI Mock Interview Game',
      period: '2025/6 – Present',
      image: 'img/interview.png',
      link: 'https://github.com/boringman1031/Level_Up_Interview_frontend',
      stack: ['React 19', 'Phaser 3', 'Vite', 'Node.js 22', 'Express 5', 'Azure OpenAI', 'Supabase', 'Prisma'],
      points: [
        ['Full-stack & scene state machine', 'Phaser 3 embedded in React 19 with a four-stage Resume → Chat → Story → Mentor state machine covering resume analysis, AI interview, scoring and metacognitive coaching.'],
        ['Psychology-based scoring engine', 'Halo effect, primacy effect, behavioral consistency and signaling theory turned into config-driven JSON so non-engineers can tune weights; dual-track STAR and technical scoring.'],
        ['Reliable AI responses', 'JSON Schema structured output, regex extraction with parse fallbacks, guardrails that detect broken character and retry; SSE streaming for responsiveness.'],
        ['Testability & traceability', 'Scoring logic isolated and covered by Vitest unit tests and eval scripts; event-sourcing style schema with uniqueness constraints against duplicate writes.'],
      ],
    },
    {
      title: 'MEG AI NPC Interactive Platform',
      period: '2025/6 – Present',
      stack: ['Vue.js', 'WebSocket', 'RESTful API', 'TipTap', 'Yjs', 'Hocuspocus'],
      points: [
        ['Collaborative editing', 'TipTap + Yjs CRDT + Hocuspocus WebSocket for real-time multi-user editing with conflict merging and multi-cursor display.'],
        ['Real-time chat & multi-role NPCs', 'Vue.js and WebSocket platform with dynamic TTS, multi-NPC switching and staged scaffolding broadcasts for teaching.'],
        ['Security & RBAC', 'Rebuilt the multiplayer login flow with session state and dynamic passkeys, closing a shared-verification-code hole.'],
        ['Usage tracking & ops', 'Live GPT token cost dashboard; paginated, filterable chat logs exportable to CSV/Excel for research.'],
      ],
    },
    {
      title: 'MEGNPC CI/CD & Cloud Operations',
      period: '2026/5 – Present',
      stack: ['Git', 'Zeabur', 'K3s', 'MySQL', 'AWS Lightsail'],
      points: [
        ['Branching strategy', 'Defined main / dev / feature rules and merge flow; merge history tracks each service’s evolution.'],
        ['Zeabur management', 'Run 12 services (front-end, back-end, databases): env vars, MySQL connections, domains and automated deploys.'],
        ['Server operations', 'Monitor a K3s cluster (AWS Lightsail Tokyo, 2 vCPU / 4GB): resource usage, service health and troubleshooting.'],
      ],
    },
    {
      title: 'n8n Security Vulnerability Detection Workflow',
      period: '2026/4 – 2026/5',
      stack: ['n8n', 'Git / GitHub', 'Security scan API', 'Notifications'],
      points: [
        ['Automated triggers', 'Code changes trigger static analysis via version control and security-scanner APIs, supporting an SSDLC.'],
        ['Conditional alerts', 'High-risk findings are pushed to Slack / Discord / Email for faster remediation.'],
      ],
    },
    {
      title: 'Love Warfare: Campus Romance Roguelite',
      period: '2024/6 – 2025/3',
      image: 'img/love.png',
      link: 'https://github.com/boringman1031/LoveWarfare_UnityProject',
      stack: ['Unity', 'C#', '2D Roguelite'],
      desc: 'A roguelite that blends dating sim with 2D side-scrolling action. Play a college student facing inner shadows and rivals on the way to your own "last dance". Single-player PC, 20–40 minutes.',
    },
    {
      title: 'I Don’t Want to Survive With You!!',
      period: '2022/9 – 2023/1',
      image: 'img/survive.png',
      link: 'https://github.com/boringman1031/Idont-Want-TO-Survive-With-You',
      stack: ['Unity', 'C#', '2D'],
      desc: 'A Unity 2D story-driven survival adventure: stranded on an island with people you can’t stand. Multi-phase boss fights, dialogue-triggered events, health and damage with camera shake.',
    },
  ],
};

const works = {
  zh: [
    { title: 'UI 設計 — MODEL-G', href: 'https://www.figma.com/proto/19Eme9F7JW6yrpi2T8Sedk/MODEL-G?node-id=2-7&starting-point-node-id=2%3A7&mode=design&t=0kRV7xLI9ScnFqB1-1', kind: 'Figma' },
    { title: 'UI 設計 — 呼叫小黃', href: 'https://www.figma.com/proto/gV4BM0kMclU7hkunLKngHE/%E5%91%BC%E5%8F%AB%E5%B0%8F%E9%BB%83?node-id=3-2&starting-point-node-id=3%3A2&mode=design&t=dkW4uLcGnIjtpn7u-1', kind: 'Figma' },
    { title: '線上戀愛模擬遊戲', href: 'https://edu.cospaces.io/ZZX-HXG', kind: 'CoSpaces' },
    { title: '舊版個人網站', href: links.oldSite, kind: 'Web' },
  ],
  en: [
    { title: 'UI Design — MODEL-G', href: 'https://www.figma.com/proto/19Eme9F7JW6yrpi2T8Sedk/MODEL-G?node-id=2-7&starting-point-node-id=2%3A7&mode=design&t=0kRV7xLI9ScnFqB1-1', kind: 'Figma' },
    { title: 'UI Design — Call a Taxi', href: 'https://www.figma.com/proto/gV4BM0kMclU7hkunLKngHE/%E5%91%BC%E5%8F%AB%E5%B0%8F%E9%BB%83?node-id=3-2&starting-point-node-id=3%3A2&mode=design&t=dkW4uLcGnIjtpn7u-1', kind: 'Figma' },
    { title: 'Online Dating Sim', href: 'https://edu.cospaces.io/ZZX-HXG', kind: 'CoSpaces' },
    { title: 'Previous Personal Site', href: links.oldSite, kind: 'Web' },
  ],
};

export const content = {
  zh: {
    nav: { about: '關於', skills: '專長', experience: '經歷', projects: '專案', story: '自傳', contact: '聯絡' },
    hero: {
      hello: '你好，我是',
      name: '林益綺',
      alt: 'Lin Yi-Chi',
      roles: ['軟體工程師', '全端開發者', '遊戲程式設計', 'AI 應用工程'],
      quote: '我相信每一次跨域嘗試，都是邁向未來的跳板。',
      cta: '看看我的專案',
      contact: '聯絡我',
    },
    about: {
      label: '01 / 關於我',
      title: '從介面到雲端的完整開發視角',
      bio: '國立臺灣科技大學應用科技研究所碩士生，具備從前端介面、遊戲引擎、後端架構到雲端 DevOps 部署的完整開發視角。近期專注於生成式 AI 落地應用，具備從 Prompt 設計、結構化輸出到 AI 回應容錯機制的完整工程實作經驗。善於跨領域技術整合，能將抽象需求轉化為具備高互動性、擴展性與安全性的軟體解決方案。',
      traits: ['善於溝通', '跨域整合', '抗壓力強'],
      stats: [
        { n: 12, suffix: '', label: '維運中的雲端服務' },
        { n: 6, suffix: '', label: '代表專案' },
        { n: 4, suffix: '', label: 'IBM / Google 認證' },
        { n: 645, suffix: '', label: 'TOEIC 分數' },
      ],
      facts: [
        ['所在地', '新竹市'],
        ['個人資料', '男・23 歲・未役'],
        ['希望職稱', '軟體工程師'],
        ['工作意願', '尋找研發替代役工作'],
        ['希望職類', '後端・全端・雲端・軟體工程師'],
        ['希望地點', '新竹縣市、台北市、新北市（可遠端）'],
        ['可上班日', '錄取後一週'],
        ['語言', '英文（聽讀精通・說寫中等）、台語（中等）'],
      ],
    },
    skills: { label: '02 / 專長', title: '技術能力', list: skills.zh },
    experience: {
      label: '03 / 經歷',
      title: '學歷與工作經驗',
      timeline: [
        {
          period: '2025/6 – 2027/6',
          title: '國立臺灣科技大學',
          sub: '應用科技研究所・碩士在學',
          kind: 'edu',
        },
        {
          period: '2024/7 – 2024/8',
          title: '前端工程師實習生',
          sub: '無限連結科技股份有限公司・台北市信義區',
          kind: 'work',
          points: [
            '運用 C# 物件導向與 UniRx 響應式框架開發專案核心功能。',
            '實作網路封包傳輸架構，處理與伺服器的資料請求、封包解析與同步。',
            '在團隊環境中獨立解決技術挑戰，確保負責模組順利交付。',
          ],
          tags: ['C#', 'Git', 'Unity'],
        },
        {
          period: '2021/6 – 2025/6',
          title: '元智大學',
          sub: '資訊傳播科技學系・學士',
          kind: 'edu',
        },
      ],
      certsTitle: '資格認證',
      certs: [
        ['Ethical Considerations for Generative AI', 'IBM', '2026/06'],
        ['Introduction to Large Language Models', 'IBM', '2026/04'],
        ['Implement Load Balancing on Compute Engine', 'Google Skill Badge', '2026/06'],
        ['Streaming Analytics into BigQuery', 'Google Skill Badge', '2026/06'],
        ['TOEIC 645', 'ETS', ''],
      ],
    },
    projects: { label: '04 / 專案', title: '專案成就', list: projects.zh, view: '查看原始碼', worksTitle: '其他作品', works: works.zh },
    story: {
      label: '05 / 自傳',
      title: '我是怎麼思考的',
      parts: [
        ['跨領域的系統觀', '大學期間於資訊傳播學系建立了從使用者體驗出發的產品設計思維；進入應用科技研究所後，我進一步拓展了技術邊界。我不僅專注於 React/Vue 前端開發與 Phaser/Unity 遊戲程式設計，更自主投入 GCP 雲端基礎架構、Docker 容器化部署與作業系統底層的實作。這種由底層、後端架構至前端 UI 的完整「全端思維」，使我在面對複雜系統時，能提出兼顧效能、安全性與維護性的解決方案。'],
        ['實踐導向', '我致力於掌握產業標準工具並將其落地於實際專案。在《升級吧!!面試勇者》與 MEG 互動平台專案中，我負責系統架構設計與 AI API 的深度整合。除了處理複雜的前端狀態管理與 Virtual Scrolling 效能優化，我也導入了 Session 資安防護、Token 成本控管機制，並運用 n8n 建立自動化工作流。對我而言，工程師的價值不僅在於撰寫程式碼，更在於確保產品於實際運行中的穩定性與資源運用的最佳化。'],
        ['職涯展望', '目前我已具備扎實的網頁全端開發、遊戲程式設計實力，並熟悉雲端部署與自動化流程。未來，我期望能以軟體工程師、前端/全端工程師或 DevOps 工程師的角色，加入具備挑戰性的開發團隊，在實務專案中持續精進系統架構設計與程式碼品質，與團隊並肩打造高品質且具影響力的軟體產品。'],
      ],
    },
    contact: {
      label: '06 / 聯絡',
      title: '一起做點有趣的東西吧',
      text: '正在尋找研發替代役與軟體工程相關職缺，歡迎來信或來電。',
    },
    footer: '以 React + React Bits 打造，部署於 GitHub Pages',
  },
  en: {
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', story: 'Story', contact: 'Contact' },
    hero: {
      hello: 'Hi, I’m',
      name: 'Lin Yi-Chi',
      alt: '林益綺',
      roles: ['Software Engineer', 'Full-stack Developer', 'Game Programmer', 'AI Application Engineer'],
      quote: 'Every cross-disciplinary attempt is a springboard to the future.',
      cta: 'See my projects',
      contact: 'Get in touch',
    },
    about: {
      label: '01 / About',
      title: 'End-to-end, from interface to cloud',
      bio: 'Master’s student in Applied Technology at National Taiwan University of Science and Technology, with hands-on experience across front-end UI, game engines, back-end architecture and cloud DevOps. Lately focused on shipping generative AI — from prompt design and structured output to fault-tolerant AI responses. I enjoy bridging disciplines and turning fuzzy requirements into interactive, scalable and secure software.',
      traits: ['Communicative', 'Cross-disciplinary', 'Resilient under pressure'],
      stats: [
        { n: 12, suffix: '', label: 'Cloud services operated' },
        { n: 6, suffix: '', label: 'Featured projects' },
        { n: 4, suffix: '', label: 'IBM / Google certificates' },
        { n: 645, suffix: '', label: 'TOEIC score' },
      ],
      facts: [
        ['Based in', 'Hsinchu, Taiwan'],
        ['Profile', 'Male · 23 · Military service pending'],
        ['Target role', 'Software Engineer'],
        ['Seeking', 'R&D substitute service position'],
        ['Fields', 'Back-end · Full-stack · Cloud · Software'],
        ['Locations', 'Hsinchu, Taipei, New Taipei (remote OK)'],
        ['Availability', 'One week after offer'],
        ['Languages', 'English (fluent listening & reading), Taiwanese'],
      ],
    },
    skills: { label: '02 / Skills', title: 'What I work with', list: skills.en },
    experience: {
      label: '03 / Experience',
      title: 'Education & work',
      timeline: [
        {
          period: '2025/6 – 2027/6',
          title: 'National Taiwan University of Science and Technology',
          sub: 'M.S., Graduate Institute of Applied Science and Technology (in progress)',
          kind: 'edu',
        },
        {
          period: '2024/7 – 2024/8',
          title: 'Front-end Engineer Intern',
          sub: 'Infinite Link Technology Co., Ltd. · Taipei',
          kind: 'work',
          points: [
            'Built core features with C# OOP and the UniRx reactive framework.',
            'Implemented the network packet layer: server requests, packet parsing and data sync.',
            'Solved technical blockers independently and delivered owned modules on time.',
          ],
          tags: ['C#', 'Git', 'Unity'],
        },
        {
          period: '2021/6 – 2025/6',
          title: 'Yuan Ze University',
          sub: 'B.A., Information Communication',
          kind: 'edu',
        },
      ],
      certsTitle: 'Certifications',
      certs: [
        ['Ethical Considerations for Generative AI', 'IBM', '2026/06'],
        ['Introduction to Large Language Models', 'IBM', '2026/04'],
        ['Implement Load Balancing on Compute Engine', 'Google Skill Badge', '2026/06'],
        ['Streaming Analytics into BigQuery', 'Google Skill Badge', '2026/06'],
        ['TOEIC 645', 'ETS', ''],
      ],
    },
    projects: { label: '04 / Projects', title: 'Selected work', list: projects.en, view: 'View source', worksTitle: 'More work', works: works.en },
    story: {
      label: '05 / Story',
      title: 'How I think',
      parts: [
        ['Cross-Disciplinary Systems Perspective', 'During my undergraduate studies in Information Communication, I developed a product design mindset grounded in user experience. In graduate school I expanded my technical scope: beyond React/Vue front-end and Phaser/Unity game programming, I took on GCP infrastructure, Docker deployment and low-level OS work. This end-to-end "full-stack mindset" lets me propose solutions that balance performance, security and maintainability.'],
        ['Practice-Oriented Approach', 'I master industry-standard tools by applying them to real projects. In "Upgrade!! Interview Warrior" and the MEG platform I owned system architecture and deep AI API integration. Beyond complex front-end state and Virtual Scrolling optimization, I added session-based security, token cost controls and n8n automation. An engineer’s value lies not only in writing code, but in keeping products stable in production and resources well used.'],
        ['Career Outlook', 'I bring solid full-stack web and game programming skills, plus cloud deployment and automation experience. I hope to join a challenging team as a Software, Front-End/Full-Stack or DevOps Engineer, keep sharpening my architecture and code quality, and build high-quality, impactful products alongside my teammates.'],
      ],
    },
    contact: {
      label: '06 / Contact',
      title: 'Let’s build something interesting',
      text: 'Currently looking for software engineering roles (R&D substitute service). Email or call anytime.',
    },
    footer: 'Built with React + React Bits, hosted on GitHub Pages',
  },
};
