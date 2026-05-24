// ===== COURSES DATA =====
const courses = [
  {
    tabs: ['all', 'guides'],
    headerSup: 'ESSENTIAL', headerName: 'NEW PARENT\nGUIDE',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0.5-5.34"/><path d="M18 7H9"/><path d="M18 11H9"/><path d="M18 15H9"/></svg>`,
    img: 'assets/newborn_care.png',
    badge: 'Best Seller',
    title: 'Newborn Care Basics',
    lang: 'In Hindi & English', students: '25K+ Parents Mentored',
    price: '₹199', ctaColor: '#4F6BFF', ctaTextColor: '#fff'
  },
  {
    tabs: ['all', 'guides'],
    headerSup: 'VITAL', headerName: 'NUTRITION\n& DIET',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 11 6A7 7 0 0 1 11 20Z"/><path d="M11 9A3 3 0 0 1 11 15A3 3 0 0 1 11 9Z"/><path d="M18 12h3"/><path d="M18 9l3-3"/><path d="M18 15l3 3"/></svg>`,
    img: 'assets/review2.png',
    badge: 'New',
    title: 'Toddler Nutrition Guide',
    lang: 'Video Series', students: 'Meal Plans Included',
    price: '₹499', ctaColor: '#4F6BFF', ctaTextColor: '#fff'
  },
  {
    tabs: ['all', 'coaching'],
    headerSup: 'PREMIUM', headerName: 'PERSONALIZED\nCOACHING',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    img: 'assets/Doctor_talking_with_patient.jpeg',
    badge: null,
    title: 'Premium Parenting Pack',
    lang: 'Interactive Sessions', students: 'Face-to-Face',
    price: '₹2599', ctaColor: '#27ae60', ctaTextColor: '#fff'
  },
  {
    tabs: ['all', 'coaching'],
    headerSup: 'VIP', headerName: 'COMPLETE FAMILY\nECOSYSTEM',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    img: 'assets/dr_abhishek_tiwari.png',
    badge: 'Limited Slots',
    title: 'The VIP Experience',
    lang: 'Direct Access', students: '4 Personal Sessions',
    price: '₹12999', ctaColor: '#f39c12', ctaTextColor: '#fff'
  }
];



const whoFor = [
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 5 6.3"/><path d="M12 2.1a9 9 0 0 1 7 4.2"/><path d="M5 6.3a9 9 0 0 1 7-4.2"/></svg>`, title: "New Parents", desc: "First-time parents seeking guidance and confidence." },
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, title: "Growing Families", desc: "Families looking for advanced parenting strategies." },
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`, title: "Emergency Prep", desc: "Learn to handle common baby emergencies effectively." },
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`, title: "Diet Planning", desc: "Expert guidance on nutrition for growing babies." },
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`, title: "Sleep Support", desc: "Solve baby sleep challenges for a restful home." },
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1 2.46-2.94H12"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0-2.46-2.94H12"/></svg>`, title: "Parent Coaches", desc: "Tools to become a better role model for your children." }
];

const bentoSlides = [
  {
    z1_stat: "25K+",
    z1_label: "Families Mentored",
    z1_quote: "Dr. Tiwari's approach to newborn care is a lifesaver. We were so overwhelmed, but his guidance made us feel confident as new parents.",
    z1_name: "Sneha & Rahul",
    z1_course: "Enrolled in Newborn Care Basics",
    z1_img: "assets/review1.png",
    z2_target: 25480,
    z3_quote: "The best advice for modern parents in a digital world.",
    z3_author: "Priyanka S."
  },
  {
    z1_stat: "15+",
    z1_label: "Years of Expertise",
    z1_quote: "His sessions on emotional well-being for parents changed how we look at our role. It's not just about the baby; it's about us too.",
    z1_name: "Amit Mehra",
    z1_course: "Enrolled in Premium Coaching",
    z1_img: "assets/review2.png",
    z2_target: 26120,
    z3_quote: "Practical, medical-backed, and extremely compassionate.",
    z3_author: "Anjali K."
  },
  {
    z1_stat: "10K+",
    z1_label: "Online Learners",
    z1_quote: "The diet planning workshops are so practical. My baby is finally eating well without any fuss.",
    z1_name: "Meera R.",
    z1_course: "Enrolled in VIP Experience",
    z1_img: "assets/review3.png",
    z2_target: 27500,
    z3_quote: "Highly recommended for every new parent.",
    z3_author: "Vikram P."
  },
  {
    z1_stat: "98%",
    z1_label: "Satisfaction Rate",
    z1_quote: "Emergency prep gave me the peace of mind I needed. I know exactly what to do now.",
    z1_name: "Sonia T.",
    z1_course: "Enrolled in Emergency Prep",
    z1_img: "assets/review4.png",
    z2_target: 28200,
    z3_quote: "A must-have for all families.",
    z3_author: "Karan D."
  },
  {
    z1_stat: "500+",
    z1_label: "Live Sessions",
    z1_quote: "The interactive sessions are the best part. No question goes unanswered.",
    z1_name: "Rahul M.",
    z1_course: "Enrolled in Premium Coaching",
    z1_img: "assets/review5.png",
    z2_target: 29100,
    z3_quote: "Clear, concise, and professional.",
    z3_author: "Riya B."
  }
];

const faqs = [
  { q: "Are sessions conducted online or offline?", a: "We offer both! Online sessions are available for global parents, while face-to-face consultations can be booked at our Kolkata clinic.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>` },
  { q: "Do you provide emergency medical support?", a: "For emergencies, please visit the nearest hospital immediately. Our coaching focuses on education, preparation, and preventive care.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` },
  { q: "Is this coaching suitable for parents of teenagers?", a: "Yes, while we specialize in early childhood, our 'Family Ecosystem' package covers strategies for emotional intelligence and communication that are vital for parenting teens.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
  { q: "How long are the personalized coaching sessions?", a: "Each personalized session lasts approximately 60 minutes, ensuring enough time to address your specific concerns in detail.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { q: "Can both parents attend the interactive sessions?", a: "Absolutely! We highly recommend both parents participate to ensure consistency in parenting approaches and shared learning.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
  { q: "Are the digital guides accessible forever?", a: "Yes, once you purchase any of our digital guides or the Newborn Care package, you get lifetime access to all included modules and future updates.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>` },
  { q: "Whom do I contact for support?", a: "You can reach us via WhatsApp at <a href=\"http://wa.me/+916290352731\" target=\"_blank\">+916290352731</a> or email us at <a href=\"mailto:care@doctorabhishektiwari.com\">care@doctorabhishektiwari.com</a>.", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`, hasBtn: true, permanentOpen: true }
];

// ===== TYPING ANIMATION =====
const typedWords = ["Child Care", "Parenting", "Newborns", "Family Growth", "Health", "Confidence"];
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
      { len: straightW, type: 'line', x0: x + cr, y0: y, dx: 1, dy: 0 },
      { len: arcLen, type: 'arc', cx: x + w - cr, cy: y + cr, startA: -Math.PI / 2, dir: 1 },
      { len: straightH, type: 'line', x0: x + w, y0: y + cr, dx: 0, dy: 1 },
      { len: arcLen, type: 'arc', cx: x + w - cr, cy: y + h - cr, startA: 0, dir: 1 },
      { len: straightW, type: 'line', x0: x + w - cr, y0: y + h, dx: -1, dy: 0 },
      { len: arcLen, type: 'arc', cx: x + cr, cy: y + h - cr, startA: Math.PI / 2, dir: 1 },
      { len: straightH, type: 'line', x0: x, y0: y + h - cr, dx: 0, dy: -1 },
      { len: arcLen, type: 'arc', cx: x + cr, cy: y + cr, startA: Math.PI, dir: 1 },
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

    const headDist = progress * P;
    const tailDist = tailLength * P;
    const STEPS = 80; // points along the tail

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
    grd.addColorStop(0, hexToRgba(color, 0.9));
    grd.addColorStop(0.4, hexToRgba(color, 0.35));
    grd.addColorStop(1, hexToRgba(color, 0));
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
    ? `<div class="card-badge"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> ${c.badge}</div>`
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
      </div>
      <div class="card-body">
        <div class="card-title">${c.title}</div>
        <div class="card-meta">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6 6-6"/></svg>
            ${c.lang}
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            ${c.students}
          </span>
        </div>
      </div>
      <div class="card-cta" style="background:${c.ctaColor};color:${c.ctaTextColor}">
        Get Started &bull; ${c.price} &nbsp;→
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
    const step = getVisibleCardWidth();
    const max = getMaxOffset();
    carouselOffset = Math.max(-max, carouselOffset - step);
    carousel.style.transition = 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)';
    carousel.style.transform = `translateX(${carouselOffset}px)`;
    updateArrows();
  });

  prev.addEventListener('click', () => {
    const step = getVisibleCardWidth();
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
          animateCounter(25000);
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
  for (let i = 0; i < numAvatars; i++) {
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

// ===== CREATORS MARQUEE =====
const creatorsData = [
  { text: "Dr. Tiwari's insights on pediatric health are invaluable. His guidance helped us navigate the early months of parenthood with ease and confidence.", name: "Rajesh S.", handle: "@parent_rajesh", img: "assets/review1.png" },
  { text: "A truly passionate coach who understands the nuances of modern parenting. Highly recommended for all new parents!", name: "Nisha K.", handle: "@nisha_parenting", img: "assets/review2.png" },
  { text: "The VIP package is a game-changer. Having direct access to Dr. Tiwari's expertise made a world of difference for our family.", name: "Vikram T.", handle: "@vikram_family", img: "assets/review3.png" },
  { text: "Practical medical advice combined with modern parenting techniques. This is exactly what we needed.", name: "Sunil P.", handle: "@sunil_p", img: "assets/review4.png" },
  { text: "The emergency first aid training is top-notch. Every parent should go through this.", name: "Kavita M.", handle: "@kavita_m", img: "assets/review5.png" },
  { text: "Clear, concise, and professional. Dr. Tiwari is the best in the field.", name: "Arjun L.", handle: "@arjun_l", img: "assets/review1.png" },
  { text: "We feel so much more confident as parents now. Thank you, Dr. Tiwari!", name: "Preeti V.", handle: "@preeti_v", img: "assets/review2.png" },
  { text: "The sleep solutions actually work! Our baby is sleeping through the night.", name: "Manish H.", handle: "@manish_h", img: "assets/review3.png" },
  { text: "A comprehensive ecosystem for family well-being. Worth every penny.", name: "Riya G.", handle: "@riya_g", img: "assets/review4.png" }
];

function initCreatorsMarquee() {
  const container = document.getElementById('marqueeContainer');
  if (!container) return;

  const col1 = [creatorsData[0], creatorsData[3], creatorsData[6]];
  const col2 = [creatorsData[1], creatorsData[4], creatorsData[7]];
  const col3 = [creatorsData[2], creatorsData[5], creatorsData[8]];
  const cols = [col1, col2, col3];

  let html = '';
  cols.forEach((col, index) => {
    let cardsHtml = '';
    col.forEach(c => {
      cardsHtml += `
        <div class="creator-card">
          <p class="creator-text">${c.text}</p>
          <div class="creator-user">
            <img src="${c.img}" alt="${c.name}" class="creator-avatar" />
            <div class="creator-info">
              <div class="creator-name">${c.name}</div>
              <div class="creator-handle">${c.handle}</div>
            </div>
          </div>
        </div>
      `;
    });

    // Duplicate cardsHtml for infinite scroll effect (0 to -50%)
    html += `
      <div class="marquee-track marquee-track-${index + 1}">
        ${cardsHtml}
        ${cardsHtml}
      </div>
    `;
  });

  container.innerHTML = html;
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
          ${f.hasBtn ? `<a href="http://wa.me/+916290352731" target="_blank" class="faq-wa-btn">Need Support? WhatsApp Us</a>` : ''}
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

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

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

// ===== SCROLL REVEAL (Optimized) =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Use a fixed delay or just show immediately to reduce lag
      entry.target.classList.add('visible');
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

  // Comet orbits disabled temporarily to fix scrolling lag reported by user
  // const ctaBtn = document.querySelector('.hero-cta');
  // if (ctaBtn) createCometOrbit(ctaBtn, '#7baeff', 0.28, 0.20, 5);

  // const videoWrap = document.querySelector('.hero-video-wrap');
  // if (videoWrap) createCometOrbit(videoWrap, '#7baeff', 0.18, 0.25, 7);


  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.addEventListener('click', () => {
      heroVideo.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xuP4g7IDgDM?si=WGbeJPdBACSYaFRq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: inherit; position: absolute; top: 0; left: 0;"></iframe>`;
      // remove the orbit effect from wrapper when video starts
      const orbitCanvas = videoWrap.querySelector('canvas');
      if (orbitCanvas) orbitCanvas.remove();
    });
  }

  // Courses — render all cards once, then filter
  renderAllCards();
  applyFilter();   // shows 'all' by default
  initCarousel();
  initTabs();

  initBentoGrid();
  initCreatorsMarquee();
  renderFAQ();
  observeReveal();
});
