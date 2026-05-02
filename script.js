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

const testimonials = [
  { name: "Priya S.", role: "Content Creator", text: "Ankur's course completely changed how I approach content. My channel grew 3x in 6 months.", stars: 5 },
  { name: "Rahul M.", role: "Software Engineer", text: "The personal finance course is a must. I finally understand where my money should go.", stars: 5 },
  { name: "Sneha K.", role: "MBA Student", text: "The startup guide gave me the confidence to actually launch my idea. Highly recommend.", stars: 5 },
  { name: "Arjun T.", role: "Freelancer", text: "Cold emailing course paid for itself in the first week. Got 3 new clients immediately.", stars: 5 },
  { name: "Meera R.", role: "Marketing Manager", text: "The networking course is gold. I've built more meaningful connections in 2 months than in 2 years.", stars: 5 },
  { name: "Vikram P.", role: "Entrepreneur", text: "Practical, no-fluff content. Exactly what I needed to take my business to the next level.", stars: 5 }
];

const faqs = [
  { q: "What is the refund policy?", a: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans." },
  { q: "Are the courses conducted live?", a: "No, all the courses are self-paced and come with lifetime access. You can go through the course at your own pace." },
  { q: "Do the courses have any live interaction?", a: "The premium plan of all the courses (except 'The Complete Guide To Starting Up' and 'The Art Of Cold Emailing') come with access to live group Q&A sessions with warikoo." },
  { q: "Are there any criteria for joining the courses?", a: "Not at all! The courses are designed for anyone and everyone who want to learn." },
  { q: "Can I enroll in multiple courses?", a: "Yes, go for it! There are no limits on the number of courses that you can take up." },
  { q: "Is there a community that I can join?", a: "The premium plan for all courses includes access to a virtual chat-based community space where you can interact with other students, ask questions, and network." }
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

// ===== RENDER TESTIMONIALS =====
function renderTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;
  const cards = [...testimonials, ...testimonials];
  track.innerHTML = cards.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.name[0]}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== RENDER FAQ =====
function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = faqs.map((f, i) => `
    <div class="faq-item reveal" id="faq-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        ${f.q}
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const item = document.getElementById(`faq-${index}`);
  const answer = document.getElementById(`faq-answer-${index}`);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-answer').style.maxHeight = null;
  });
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
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

  renderWhoFor();
  renderTestimonials();
  renderFAQ();
  observeReveal();
});
