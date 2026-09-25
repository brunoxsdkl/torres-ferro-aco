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
