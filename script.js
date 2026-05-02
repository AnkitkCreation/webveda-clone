// ===== COURSES DATA =====
const courses = [
  {
    tabs: ['all','launchpad'],
    headerSup: 'BUILD YOUR ONLINE', headerName: 'TEACHING\nBUSINESS',
    icon: '🎓',
    img: 'assets/teaching business.jpg',
    badge: null,
    title: 'Take Your Teaching Online',
    lang: 'In English', students: '4.8K+ Students',
    price: '₹1799', ctaColor: '#f5a623', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','launchpad'],
    headerSup: 'HOW TO', headerName: 'YOUTUBE',
    icon: '▶️',
    img: 'assets/youtube.jpg',
    badge: null,
    title: 'Grow & Monetize Your Channel',
    lang: 'In English & Hindi', students: '34K+ Students',
    price: '₹1799', ctaColor: '#cc0000', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','launchpad'],
    headerSup: 'INSTAGRAM MASTERY', headerName: 'FOR CREATORS',
    icon: '📸',
    img: 'assets/instrgram mastry for creators.jpg',
    badge: null,
    title: 'Master Instagram Growth',
    lang: 'In English & Hindi', students: '19K+ Students',
    price: '₹1799', ctaColor: '#e1306c', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','launchpad'],
    headerSup: 'LEARN TO', headerName: 'LINKEDIN',
    icon: '💼',
    img: 'assets/linkdin.jpg',
    badge: null,
    title: 'Grow Professionally Through LinkedIn',
    lang: 'In English', students: '4K+ Students',
    price: '₹1799', ctaColor: '#0077b5', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','productivity'],
    headerSup: 'THE', headerName: 'AI ADVANTAGE\nCOURSE',
    icon: '💡',
    img: 'assets/ai advantage cousre.png',
    badge: 'Newly Launched!',
    title: 'Save Time And Money With AI',
    lang: 'In Hindi', students: 'Newly Launched!',
    price: '₹399', ctaColor: '#f5c518', ctaTextColor: '#111'
  },
  {
    tabs: ['all','productivity'],
    headerSup: 'THE ULTIMATE GUIDE TO', headerName: 'EFFECTIVE\nCOMMUNICATION',
    icon: '💬',
    img: 'assets/effetive communicatin.jpg',
    badge: null,
    title: 'Master Communication Skills',
    lang: 'In English & Hindi', students: '94K+ Students',
    price: '₹849', ctaColor: '#7c5cbf', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','productivity'],
    headerSup: 'TAKE CHARGE OF', headerName: 'YOUR TIME',
    icon: '⏳',
    img: 'assets/take charge of your time.jpg',
    badge: null,
    title: 'Get More Done In Less Time',
    lang: 'In English & Hindi', students: '260K Students',
    price: '₹599', ctaColor: '#f5a623', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','growth'],
    headerSup: 'THE ULTIMATE', headerName: 'FREELANCING\nGUIDE',
    icon: '💰',
    img: 'assets/freelancing guiude.png',
    badge: 'Newly Launched!',
    title: 'Start Your Freelancing Career',
    lang: 'In English', students: 'Newly Launched!',
    price: '₹3499', ctaColor: '#27ae60', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','money'],
    headerSup: 'TAKE CHARGE OF', headerName: 'YOUR MONEY',
    icon: '📊',
    img: 'assets/take charge of yor money.jpg',
    badge: null,
    title: 'Master Your Personal Finance',
    lang: 'In English & Hindi', students: '120K+ Students',
    price: '₹1999', ctaColor: '#2980b9', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','money'],
    headerSup: 'THE COMPLETE GUIDE TO', headerName: 'STARTING UP',
    icon: '🚀',
    img: 'assets/starting up.jpg',
    badge: null,
    title: 'Launch Your Own Business',
    lang: 'In English', students: '55K+ Students',
    price: '₹1999', ctaColor: '#e74c3c', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','growth'],
    headerSup: 'THE ART OF', headerName: 'COLD EMAILING',
    icon: '📧',
    img: 'assets/cold emails.jpg',
    badge: null,
    title: 'Write Emails That Get Replies',
    lang: 'In English', students: '30K+ Students',
    price: '₹999', ctaColor: '#16a085', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','growth'],
    headerSup: 'MAKE WRITING', headerName: 'YOUR CAREER',
    icon: '✍️',
    img: 'assets/make writing your carrer.jpg',
    badge: null,
    title: 'Build a Career in Writing',
    lang: 'In English', students: '22K+ Students',
    price: '₹1499', ctaColor: '#8e44ad', ctaTextColor: '#fff'
  },
  {
    tabs: ['all','growth'],
    headerSup: 'THE COMPLETE', headerName: 'CAREER TOOLKIT',
    icon: '🧰',
    img: 'assets/carrer tool kit.jpg',
    badge: null,
    title: 'Accelerate Your Career Growth',
    lang: 'In English', students: '18K+ Students',
    price: '₹1299', ctaColor: '#2c3e50', ctaTextColor: '#fff'
  }
];

const whoFor = [
  { icon: "🎓", title: "Students", desc: "Build skills before entering the job market." },
  { icon: "💼", title: "Professionals", desc: "Level up your career with practical knowledge." },
  { icon: "🚀", title: "Entrepreneurs", desc: "Turn your ideas into a real business." },
  { icon: "✍️", title: "Creators", desc: "Grow your audience and monetize your content." },
  { icon: "💡", title: "Curious Minds", desc: "Anyone who wants to learn and grow." },
  { icon: "🏠", title: "Homemakers", desc: "Manage finances and build new skills." }
];

const bentoSlides = [
  {
    z1_stat: "957K",
    z1_label: "Accounts Reached",
    z1_quote: "I was most excited about high engagement-driven content and monetisation. They both were covered nicely in the curriculum. So happy!",
    z1_name: "Rashmi Sheoran",
    z1_course: "Enrolled in Instagram Mastery For Creators",
    z1_img: "assets/review1.png",
    z2_target: 493112,
    z3_quote: "Will make you question all that you've been doing till now.",
    z3_author: "Riya Baria"
  },
  {
    z1_stat: "275K",
    z1_label: "Views in 3 months",
    z1_quote: "This course taught me the science of making content. My stats have shown drastic improvement after implementing just half of their learnings.",
    z1_name: "Ansh Mehra",
    z1_course: "Enrolled in How To YouTube",
    z1_img: "assets/review2.png",
    z2_target: 504230,
    z3_quote: "The best investment I've made for my career.",
    z3_author: "Sneha K."
  },
  {
    z1_stat: "4.5X",
    z1_label: "Revenue Growth",
    z1_quote: "The freelancing guide gave me exact templates to pitch clients. I closed 3 international clients within the first month.",
    z1_name: "Arjun T.",
    z1_course: "Enrolled in The Ultimate Freelancing Guide",
    z1_img: "assets/review3.png",
    z2_target: 512900,
    z3_quote: "Practical, no-fluff content. Exactly what I needed.",
    z3_author: "Vikram P."
  },
  {
    z1_stat: "1.2M",
    z1_label: "Impressions",
    z1_quote: "The frameworks provided in this course are gold. I finally understand the LinkedIn algorithm.",
    z1_name: "Priya S.",
    z1_course: "Enrolled in Learn to LinkedIn",
    z1_img: "assets/review4.png",
    z2_target: 518450,
    z3_quote: "Changed my entire perspective on content creation.",
    z3_author: "Meera R."
  },
  {
    z1_stat: "50+",
    z1_label: "High Ticket Clients",
    z1_quote: "I never thought writing could be this lucrative. The templates are literally copy-paste magic.",
    z1_name: "Rahul M.",
    z1_course: "Enrolled in Make Writing Your Career",
    z1_img: "assets/review5.png",
    z2_target: 524000,
    z3_quote: "A must-have resource for anyone starting out.",
    z3_author: "Karan D."
  }
];

const faqs = [
  { q: "What is the refund policy?", a: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>` },
  { q: "Are the courses conducted live?", a: "No, all the courses are self-paced and come with lifetime access. You can go through the course at your own pace.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>` },
  { q: "Do the courses have any live interaction?", a: "The premium plan of all the courses (except 'The Complete Guide To Starting Up' and 'The Art Of Cold Emailing') come with access to live group Q&A sessions with warikoo.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` },
  { q: "Are there any criteria for joining the courses?", a: "Not at all! The courses are designed for anyone and everyone who want to learn.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>` },
  { q: "Can I enroll in multiple courses?", a: "Yes, go for it! There are no limits on the number of courses that you can take up.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>` },
  { q: "Is there a community that I can join?", a: "The premium plan for all courses includes access to a virtual chat-based community space where you can interact with other students, ask questions, and network.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` },
  { q: "Whom do I contact in case of any issues or concerns?", a: "Feel free to reach out to our support team for any queries or technical assistance.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`, hasBtn: true, permanentOpen: true }
];

// ===== TYPING ANIMATION =====
const typedWords = ["Careers", "Skills", "Finances", "Mindset", "Network", "Life"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('heroTyped');

function typeLoop() {
  if (!typedEl) return;
  const currentWord = typedWords[wordIndex];

  if (isDeleting) {
    charIndex--;
    typedEl.textContent = currentWord.slice(0, charIndex);
  } else {
    charIndex++;
    typedEl.textContent = currentWord.slice(0, charIndex);
  }

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    // Pause at full word
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typedWords.length;
    delay = 300;
  }

  setTimeout(typeLoop, delay);
}

// ===== GLOWING COMET LINE ORBIT =====
// Draws a thin bright line (comet head) that traces the border path
// with a fading tail behind it — like a glowing streak orbiting the element.

function buildRoundedRectPath(W, H, r, pad) {
  const x = pad, y = pad;
  const w = W - pad * 2, h = H - pad * 2;
  const cr = Math.max(0, r - pad);
  const straightW = Math.max(0, w - cr * 2);
  const straightH = Math.max(0, h - cr * 2);
  const arcLen = Math.PI * 0.5 * cr; // one corner arc length

  // Segments going clockwise from top-left corner end
  return {
    cr,
    perimeter: 2 * straightW + 2 * straightH + 4 * arcLen,
    segments: [
      { len: straightW,  type: 'line', x0: x + cr,     y0: y,         dx:  1, dy:  0 },
      { len: arcLen,     type: 'arc',  cx: x + w - cr, cy: y + cr,     startA: -Math.PI / 2, dir: 1 },
      { len: straightH,  type: 'line', x0: x + w,      y0: y + cr,     dx:  0, dy:  1 },
      { len: arcLen,     type: 'arc',  cx: x + w - cr, cy: y + h - cr, startA: 0,            dir: 1 },
      { len: straightW,  type: 'line', x0: x + w - cr, y0: y + h,      dx: -1, dy:  0 },
      { len: arcLen,     type: 'arc',  cx: x + cr,     cy: y + h - cr, startA: Math.PI / 2,  dir: 1 },
      { len: straightH,  type: 'line', x0: x,          y0: y + h - cr, dx:  0, dy: -1 },
      { len: arcLen,     type: 'arc',  cx: x + cr,     cy: y + cr,     startA: Math.PI,      dir: 1 },
    ]
  };
}

function getPointOnPath(path, dist) {
  let remaining = ((dist % path.perimeter) + path.perimeter) % path.perimeter;
  for (const seg of path.segments) {
    if (remaining <= seg.len + 0.001) {
      const t = seg.len > 0 ? Math.min(remaining / seg.len, 1) : 0;
      if (seg.type === 'line') {
        return { x: seg.x0 + seg.dx * remaining, y: seg.y0 + seg.dy * remaining };
      } else {
        const a = seg.startA + t * (Math.PI / 2) * seg.dir;
        return { x: seg.cx + Math.cos(a) * path.cr, y: seg.cy + Math.sin(a) * path.cr };
      }
    }
    remaining -= seg.len;
  }
  return { x: 0, y: 0 };
}

function createCometOrbit(el, color = '#7baeff', speed = 0.22, tailLength = 0.18, pad = 6) {
  // speed = fraction of perimeter per second
  // tailLength = fraction of perimeter the tail covers
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position:absolute; inset:-${pad}px;
    width:calc(100% + ${pad * 2}px); height:calc(100% + ${pad * 2}px);
    pointer-events:none; z-index:10; border-radius:inherit;
  `;
  el.style.position = 'relative';
  el.appendChild(canvas);

  let progress = 0; // 0..1 fraction of perimeter
  let last = null;
  let raf;

  function draw(ts) {
    if (last !== null) {
      const dt = Math.min(ts - last, 50); // cap at 50ms
      progress = (progress + speed * dt * 0.001) % 1;
    }
    last = ts;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    if (!W || !H) { raf = requestAnimationFrame(draw); return; }
    if (canvas.width !== W || canvas.height !== H) {
      canvas.width = W; canvas.height = H;
    }

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);

    const style = getComputedStyle(el);
    const rawR = parseFloat(style.borderRadius) || 0;
    const r = Math.min(rawR, el.offsetWidth / 2, el.offsetHeight / 2);
    const path = buildRoundedRectPath(W, H, r, pad);
    const P = path.perimeter;
    if (P <= 0) { raf = requestAnimationFrame(draw); return; }

    const headDist  = progress * P;
    const tailDist  = tailLength * P;
    const STEPS     = 80; // points along the tail

    // Draw tail as a series of line segments with fading opacity
    for (let i = 0; i < STEPS - 1; i++) {
      const t0 = i / STEPS;
      const t1 = (i + 1) / STEPS;
      const d0 = headDist - tailDist * (1 - t0);
      const d1 = headDist - tailDist * (1 - t1);
      const p0 = getPointOnPath(path, d0);
      const p1 = getPointOnPath(path, d1);

      // Opacity: 0 at tail end → 1 near head
      const alpha = Math.pow(t1, 1.8) * 0.85;
      // Line width: 0.5px at tail → 1.5px at head
      const lw = 0.5 + t1 * 1.0;

      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.strokeStyle = hexToRgba(color, alpha);
      ctx.lineWidth = lw;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    // Draw glowing head
    const head = getPointOnPath(path, headDist);

    // Outer glow
    const grd = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 10);
    grd.addColorStop(0,   hexToRgba(color, 0.9));
    grd.addColorStop(0.4, hexToRgba(color, 0.35));
    grd.addColorStop(1,   hexToRgba(color, 0));
    ctx.beginPath();
    ctx.arc(head.x, head.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();

    // Bright core dot
    ctx.beginPath();
    ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;

    raf = requestAnimationFrame(draw);
  }

  raf = requestAnimationFrame(draw);
  return () => cancelAnimationFrame(raf);
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ===== COURSES CAROUSEL =====
let activeTab = 'all';
let carouselOffset = 0;

function buildCourseCard(c) {
  const lines = c.headerName.split('\n');
  const badge = c.badge
    ? `<div class="card-badge">⚡ ${c.badge}</div>`
    : '';
  return `
    <div class="course-card" data-tabs="${c.tabs.join(',')}">
      <div class="card-header">
        <div class="card-header-icon">${c.icon}</div>
        <div class="card-header-text">
          <span class="card-header-sup">${c.headerSup}</span>
          <span class="card-header-name">${lines.join('<br>')}</span>
        </div>
      </div>
      <div class="card-image-wrap">
        <img src="${c.img}" alt="${c.title}" loading="lazy" />
        ${badge}
        <div class="card-hover-overlay">
          <div class="card-overlay-title">${c.title}</div>
          <div class="card-overlay-meta">
            <span>🎤 ${c.lang}</span>
            <span>🎓 ${c.students}</span>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${c.title}</div>
        <div class="card-meta">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
            ${c.lang}
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            ${c.students}
          </span>
        </div>
      </div>
      <div class="card-cta" style="background:${c.ctaColor};color:${c.ctaTextColor}">
        Starts at ${c.price} &nbsp;→
      </div>
    </div>`;
}

function renderAllCards() {
  const carousel = document.getElementById('coursesCarousel');
  if (!carousel) return;
  // Render ALL cards once — filter just shows/hides
  carousel.innerHTML = courses.map(buildCourseCard).join('');
}

function applyFilter() {
  const carousel = document.getElementById('coursesCarousel');
  if (!carousel) return;
  carousel.querySelectorAll('.course-card').forEach(card => {
    const tabs = card.dataset.tabs.split(',');
    card.classList.toggle('hidden', !tabs.includes(activeTab));
  });
  // Reset scroll
  carouselOffset = 0;
  carousel.style.transition = 'none';
  carousel.style.transform = 'translateX(0)';
  updateArrows();
}

function getVisibleCardWidth() {
  const carousel = document.getElementById('coursesCarousel');
  if (!carousel) return 246;
  const card = carousel.querySelector('.course-card:not(.hidden)');
  if (!card) return 246;
  // getBoundingClientRect gives the actual rendered width including vw-based sizes
  return card.getBoundingClientRect().width + 16; // + gap
}

function getMaxOffset() {
  const carousel = document.getElementById('coursesCarousel');
  if (!carousel) return 0;
  const clip = document.querySelector('.courses-clip');
  if (!clip) return 0;
  // Total width of visible cards
  const visibleCards = [...carousel.querySelectorAll('.course-card:not(.hidden)')];
  if (!visibleCards.length) return 0;
  const gap = 16;
  const totalW = visibleCards.reduce((sum, c) => sum + c.offsetWidth + gap, 0) - gap;
  const clipW = clip.offsetWidth;
  return Math.max(0, totalW - clipW);
}

function updateArrows() {
  const next = document.getElementById('carouselNext');
  const prev = document.getElementById('carouselPrev');
  if (!next || !prev) return;
  const max = getMaxOffset();
  prev.disabled = carouselOffset >= 0;
  next.disabled = Math.abs(carouselOffset) >= max - 1;
}

function initCarousel() {
  const next = document.getElementById('carouselNext');
  const prev = document.getElementById('carouselPrev');
  const carousel = document.getElementById('coursesCarousel');
  if (!next || !prev || !carousel) return;

  next.addEventListener('click', () => {
    const step = getVisibleCardWidth() * 2;
    const max = getMaxOffset();
    carouselOffset = Math.max(-max, carouselOffset - step);
    carousel.style.transition = 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)';
    carousel.style.transform = `translateX(${carouselOffset}px)`;
    updateArrows();
  });

  prev.addEventListener('click', () => {
    const step = getVisibleCardWidth() * 2;
    carouselOffset = Math.min(0, carouselOffset + step);
    carousel.style.transition = 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)';
    carousel.style.transform = `translateX(${carouselOffset}px)`;
    updateArrows();
  });

  // Touch swipe
  let tx = 0;
  carousel.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', e => {
    const diff = tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next.click() : prev.click();
  }, { passive: true });
}

function initTabs() {
  const tabs = document.getElementById('coursesTabs');
  if (!tabs) return;
  tabs.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeTab = btn.dataset.tab;
    applyFilter();
  });
}

// ===== RENDER WHO FOR =====
function renderWhoFor() {
  const grid = document.getElementById('whoGrid');
  if (!grid) return;
  grid.innerHTML = whoFor.map(w => `
    <div class="who-card reveal">
      <span class="who-icon">${w.icon}</span>
      <h3 class="who-title">${w.title}</h3>
      <p class="who-desc">${w.desc}</p>
    </div>
  `).join('');
}

// ===== BENTO GRID LOGIC =====
let currentBentoSlide = 0;
let currentThoughtSlide = 0;
let bentoInterval;
let thoughtInterval;

function initBentoGrid() {
  renderAvatars();
  updateBentoSlide(0);
  updateThoughtSlide(0);
  startBentoAutoplay();
  startThoughtAutoplay();

  document.getElementById('bentoPrev')?.addEventListener('click', () => {
    currentBentoSlide = (currentBentoSlide - 1 + bentoSlides.length) % bentoSlides.length;
    updateBentoSlide(currentBentoSlide);
    resetBentoAutoplay();
  });

  document.getElementById('bentoNext')?.addEventListener('click', () => {
    currentBentoSlide = (currentBentoSlide + 1) % bentoSlides.length;
    updateBentoSlide(currentBentoSlide);
    resetBentoAutoplay();
  });

  // Animate counter only once when the section comes into view
  const zone2 = document.querySelector('.bento-zone-2');
  if (zone2) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(493112);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(zone2);
  }

  // Shuffle avatars independently
  setInterval(shuffleAvatars, 3500);
}

function updateBentoSlide(index) {
  const slide = bentoSlides[index];
  
  // Wrap all zones to trigger enter animation
  const fadeEls = document.querySelectorAll('.fade-el-z1');
  fadeEls.forEach(el => {
    el.classList.add('fade-out');
  });

  setTimeout(() => {
    // Zone 1
    document.getElementById('z1-stat-num').textContent = slide.z1_stat;
    document.getElementById('z1-stat-label').textContent = slide.z1_label;
    document.getElementById('z1-quote').textContent = '"' + slide.z1_quote + '"';
    document.getElementById('z1-name').textContent = slide.z1_name;
    document.getElementById('z1-course').textContent = slide.z1_course;
    document.getElementById('z1-image').src = slide.z1_img;

    // Trigger enter active
    fadeEls.forEach(el => {
      // small delay to allow reflow
      void el.offsetWidth;
      el.classList.remove('fade-out');
    });
  }, 300); // Wait for fade out
}

function updateThoughtSlide(index) {
  const slide = bentoSlides[index];
  
  const fadeEls = document.querySelectorAll('.fade-el-z3');
  fadeEls.forEach(el => {
    el.classList.add('fade-out');
  });

  setTimeout(() => {
    // Zone 3
    document.getElementById('z3-quote').textContent = '"' + slide.z3_quote + '"';
    document.getElementById('z3-author').textContent = slide.z3_author;

    // Trigger enter active
    fadeEls.forEach(el => {
      void el.offsetWidth;
      el.classList.remove('fade-out');
    });
  }, 300); // Wait for fade out
}

function animateCounter(target) {
  const el = document.getElementById('z2-counter');
  if (!el) return;
  const start = Math.floor(target * 0.8); // Start at 80% to show animation
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOutCubic);
    el.textContent = current.toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(update);
}

function renderAvatars() {
  const container = document.getElementById('z2-avatars');
  if (!container) return;
  const avatarColors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22', '#1abc9c', '#34495e'];
  const numAvatars = 8;
  let html = '';
  for(let i=0; i<numAvatars; i++) {
    const size = 30 + Math.random() * 20;
    const top = 10 + Math.random() * 80;
    const left = 5 + Math.random() * 90;
    const delay = Math.random() * 4;
    const color = avatarColors[i % avatarColors.length];
    
    // Create an initial style with random positions but keep them away from the center text
    let adjustedLeft = left;
    if (adjustedLeft > 35 && adjustedLeft < 65 && top > 35 && top < 65) {
        adjustedLeft = left < 50 ? left - 30 : left + 30;
    }

    html += `<div class="floating-avatar" style="width:${size}px; height:${size}px; top:${top}%; left:${adjustedLeft}%; background-color:${color}; animation-delay:-${delay}s; opacity: 1;" data-index="${i}"></div>`;
  }
  container.innerHTML = html;
}

function shuffleAvatars() {
  const avatars = document.querySelectorAll('.floating-avatar');
  avatars.forEach(avatar => {
    // Randomly hide some avatars and show new ones
    if (Math.random() > 0.5) {
      avatar.style.opacity = 0;
      setTimeout(() => {
        const top = 10 + Math.random() * 80;
        const left = 5 + Math.random() * 90;
        let adjustedLeft = left;
        if (adjustedLeft > 35 && adjustedLeft < 65 && top > 35 && top < 65) {
            adjustedLeft = left < 50 ? left - 30 : left + 30;
        }
        avatar.style.top = top + '%';
        avatar.style.left = adjustedLeft + '%';
        avatar.style.opacity = 1;
      }, 500);
    }
  });
}

function startBentoAutoplay() {
  bentoInterval = setInterval(() => {
    document.getElementById('bentoNext')?.click();
  }, 6000);
}

function resetBentoAutoplay() {
  clearInterval(bentoInterval);
  startBentoAutoplay();
}

function startThoughtAutoplay() {
  thoughtInterval = setInterval(() => {
    currentThoughtSlide = (currentThoughtSlide + 1) % bentoSlides.length;
    updateThoughtSlide(currentThoughtSlide);
  }, 5000); // slightly faster than review slide
}

// ===== RENDER FAQ =====
function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = faqs.map((f, i) => `
    <div class="faq-item reveal ${f.permanentOpen ? 'open permanent' : ''}" id="faq-${i}">
      <button class="faq-question" ${f.permanentOpen ? '' : `onclick="toggleFAQ(${i})"`} style="${f.permanentOpen ? 'cursor: default;' : ''}">
        <div class="faq-q-left">
          <span class="faq-q-icon">${f.icon}</span>
          <span class="faq-q-text">${f.q}</span>
        </div>
        ${f.permanentOpen ? '' : `
        <span class="faq-icon-toggle">
          <svg class="icon-plus" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <svg class="icon-cross" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </span>
        `}
      </button>
      <div class="faq-answer" id="faq-answer-${i}">
        <div class="faq-answer-inner">
          <p>${f.a}</p>
          ${f.hasBtn ? `<a href="#" class="faq-wa-btn">Need Support? WhatsApp Us</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Set initial height for permanent open items
  faqs.forEach((f, i) => {
    if (f.permanentOpen) {
      const answer = document.getElementById(`faq-answer-${i}`);
      setTimeout(() => {
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }, 0);
    }
  });
}

function toggleFAQ(index) {
  const item = document.getElementById(`faq-${index}`);
  if (item.classList.contains('permanent')) return;

  const answer = document.getElementById(`faq-answer-${index}`);
  const isOpen = item.classList.contains('open');
  
  document.querySelectorAll('.faq-item').forEach(el => {
    if (!el.classList.contains('permanent')) {
      el.classList.remove('open');
      el.querySelector('.faq-answer').style.maxHeight = null;
    }
  });
  
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// ===== HERO VIDEO LOGIC =====
function playHeroVideo() {
  const container = document.getElementById('heroVideo');
  if (!container) return;
  container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/bC21_0l5z8w?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:14px; position:absolute; top:0; left:0;"></iframe>`;
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      let delay = 0;
      siblings.forEach((el, idx) => { if (el === entry.target) delay = idx * 80; });
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeLoop, 400);

  const ctaBtn = document.querySelector('.hero-cta');
  if (ctaBtn) createCometOrbit(ctaBtn, '#7baeff', 0.28, 0.20, 5);

  const videoWrap = document.querySelector('.hero-video-wrap');
  if (videoWrap) createCometOrbit(videoWrap, '#7baeff', 0.18, 0.25, 7);

  // Courses — render all cards once, then filter
  renderAllCards();
  applyFilter();   // shows 'all' by default
  initCarousel();
  initTabs();

  initBentoGrid();
  renderFAQ();
  observeReveal();
});
