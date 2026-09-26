const btn=document.querySelector('.menu-btn');const nav=document.querySelector('.navlinks');btn?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const campaignTrack=document.getElementById('campaignTrack');
document.querySelector('.campaign-arrow.next')?.addEventListener('click',()=>campaignTrack?.scrollBy({left:campaignTrack.clientWidth*.75,behavior:'smooth'}));
document.querySelector('.campaign-arrow.prev')?.addEventListener('click',()=>campaignTrack?.scrollBy({left:-campaignTrack.clientWidth*.75,behavior:'smooth'}));

const campaignModal=document.getElementById('campaignModal');
const campaignModalImage=document.getElementById('campaignModalImage');
document.querySelectorAll('[data-campaign]').forEach(card=>card.addEventListener('click',()=>{
  if(!campaignModal||!campaignModalImage)return;
  campaignModalImage.src=card.dataset.campaign;
  campaignModal.classList.add('open');
  campaignModal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}));
function closeCampaignModal(){
  if(!campaignModal)return;
  campaignModal.classList.remove('open');
  campaignModal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
document.querySelector('.campaign-modal-close')?.addEventListener('click',closeCampaignModal);
campaignModal?.addEventListener('click',e=>{if(e.target===campaignModal)closeCampaignModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCampaignModal()});

// Newsletter temporária: valida e registra o e-mail no navegador.
// Depois este mesmo formulário pode ser ligado a Brevo/Mailchimp/Resend.
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterStatus = document.getElementById('newsletterStatus');

newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = newsletterEmail?.value.trim() || '';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (newsletterStatus) {
      newsletterStatus.textContent = 'Digite um e-mail válido para continuar.';
      newsletterStatus.className = 'newsletter-status error';
    }
    newsletterEmail?.focus();
    return;
  }

  const key = 'torresNewsletterCadastros';
  const current = JSON.parse(localStorage.getItem(key) || '[]');
  if (!current.includes(email)) current.push(email);
  localStorage.setItem(key, JSON.stringify(current));

  if (newsletterStatus) {
    newsletterStatus.textContent = 'Cadastro realizado! Em breve conectaremos este formulário ao envio de novidades.';
    newsletterStatus.className = 'newsletter-status success';
  }
  newsletterForm.reset();
});

// Banner: crossfade entre slides (mobile 2+) e pulse sobre o 1o banner (desktop 1 slide)
document.querySelectorAll('.hero-banner-mobile, .hero-banner-desktop').forEach(track => {
  const slides = track.querySelectorAll('.hero-banner-slide');
  if (slides.length >= 2) {
    let slideIndex = 0;
    setInterval(() => {
      slides[slideIndex].classList.remove('is-active');
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add('is-active');
    }, 5000);
    return;
  }
  if (slides.length === 1) {
    let shown = true;
    setInterval(() => {
      shown = !shown;
      slides[0].classList.toggle('is-active', shown);
    }, 5000);
  }
});

