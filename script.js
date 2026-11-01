// EDIT PROJECT LINKS HERE: replace github: '' with your real repository URL.
// demo: '' can contain a deployed app or dashboard URL if available.
const projects = [
  {title:'Credit Risk Intelligence',category:'Machine Learning',subtitle:'Credit risk scoring & financial loss estimation',description:'End-to-end XGBoost credit risk prediction on 30,000 credit card records, including calibrated probabilities, risk tiers and expected financial loss in an interactive Streamlit application.',tags:['Python','XGBoost','Scikit-learn','Streamlit'],metric:'30,000 records',github:'https://github.com/chamudi01/Credit-Risk-Scoring-System',demo:'',color:'violet',icon:'◈'},
  {title:'Financial News Sentiment Analysis',category:'NLP',subtitle:'Financial text classification with machine learning',description:'Built a three-class NLP sentiment classifier using 3,447 Financial PhraseBank sentences. Compared algorithms and deployed the best Linear SVM model using Gradio.',tags:['NLP','TF-IDF','Linear SVM','Gradio'],metric:'82.90% accuracy',github:'',demo:'',color:'cyan',icon:'✦'},
  {title:'Bank Customer Churn Prediction',category:'Machine Learning',subtitle:'Predicting customer attrition',description:'Designed a machine learning pipeline using approximately 10,000 bank customer records, with data preprocessing, feature engineering and classification model evaluation.',tags:['Python','Pandas','Scikit-learn','EDA'],metric:'~10K records',github:'',demo:'',color:'pink',icon:'↗'},
  {title:'Sri Lanka Climate Dashboard',category:'Analytics',subtitle:'Climate trends through business intelligence',description:'Built interactive Power BI dashboards analyzing rainfall, temperature, seasonal patterns and regional differences across Sri Lanka from 2010 to 2023.',tags:['Power BI','DAX','Power Query','Data Visualization'],metric:'2010–2023',github:'',demo:'',color:'cyan',icon:'▥'},
  {title:'Apple Stock Price Forecasting',category:'Machine Learning',subtitle:'Time-series forecasting with ARIMA & SARIMA',description:'Explored historical Apple stock prices using stationarity tests, ARIMA and SARIMA models, and evaluated forecasting performance with RMSE.',tags:['Python','Statsmodels','ARIMA','SARIMA'],metric:'Time series',github:'',demo:'',color:'violet',icon:'⌁'},
  {title:'LivManagement',category:'Development',subtitle:'Apartment maintenance management system',description:'Built a role-based Laravel and MySQL application for residents, administrators and repair staff, with service requests, assignments, tracking and feedback.',tags:['Laravel','PHP','MySQL','Blade'],metric:'3 user roles',github:'',demo:'',color:'pink',icon:'⌘'},
  {title:'Bitcoin Transaction Graph Analysis',category:'Research',subtitle:'Graph-theoretical illicit transaction research',description:'Studied the Elliptic Bitcoin network and compared transaction attributes with degree, PageRank and component-based graph features for illicit transaction detection.',tags:['Graph Theory','NetworkX','XGBoost','Research'],metric:'203K+ nodes',github:'',demo:'',color:'violet',icon:'◎'},
  {title:'RetailIQ — E-commerce Analytics',category:'Analytics',subtitle:'Business insights from Brazilian e-commerce',description:'An evolving analytics project using the Olist dataset to study sales, customer behavior, order fulfillment and business performance.',tags:['Python','Pandas','SQL','Analytics'],metric:'In progress',github:'',demo:'',color:'cyan',icon:'▤'}
];
const grid=document.getElementById('project-grid');
function renderProjects(category='All'){
  grid.replaceChildren();
  projects.filter(p=>category==='All'||p.category===category).forEach((p,i)=>{
    const card=document.createElement('article');card.className=`project-card ${p.color}`;
    const top=document.createElement('div');top.className='project-visual';
    const symbol=document.createElement('span');symbol.className='project-symbol';symbol.textContent=p.icon;
    const metric=document.createElement('span');metric.className='project-metric';metric.textContent=p.metric;
    top.append(symbol,metric);
    const body=document.createElement('div');body.className='project-body';
    const eyebrow=document.createElement('div');eyebrow.className='project-category';eyebrow.textContent=`${String(projects.indexOf(p)+1).padStart(2,'0')} / ${p.category}`;
    const title=document.createElement('h3');title.textContent=p.title;
    const subtitle=document.createElement('h4');subtitle.textContent=p.subtitle;
    const desc=document.createElement('p');desc.textContent=p.description;
    const tags=document.createElement('div');tags.className='project-tags';p.tags.forEach(t=>{const s=document.createElement('span');s.textContent=t;tags.append(s)});
    const links=document.createElement('div');links.className='project-links';
    if (p.github) {
      const a = document.createElement('a');
      a.href = p.github;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'github-link';
      a.setAttribute('aria-label', `View ${p.title} on GitHub`);
      a.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.94-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.1c.98 0 1.97.13 2.89.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.68 5.4-5.24 5.69.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg><span>View on GitHub</span><span aria-hidden="true">↗</span>`;
      links.append(a);
    }
    if(p.demo){const a=document.createElement('a');a.href=p.demo;a.target='_blank';a.rel='noopener noreferrer';a.className='demo-link';a.textContent='Live demo ↗';links.append(a)}
    if(!p.github&&!p.demo){const s=document.createElement('span');s.textContent='Project links coming soon';s.className='muted';links.append(s)}
    body.append(eyebrow,title,subtitle,desc,tags,links);card.append(top,body);grid.append(card);
    if (typeof revealObserver !== "undefined" && revealObserver) observeReveal(card);
  });
}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});button.classList.add('active');button.setAttribute('aria-pressed','true');renderProjects(button.dataset.filter)}));
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));
document.getElementById('year').textContent=new Date().getFullYear();
const portrait=document.getElementById('portrait'),fallback=document.getElementById('photo-fallback');
portrait.addEventListener('load',()=>{portrait.style.display='block';fallback.style.display='none'});
portrait.addEventListener('error',()=>{portrait.style.display='none';fallback.style.display='flex'});
if(portrait.complete&&portrait.naturalWidth){portrait.style.display='block';fallback.style.display='none'}


// Scroll reveal, including project cards created by category filters.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealObserver = (!prefersReducedMotion && 'IntersectionObserver' in window)
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08})
  : null;
function observeReveal(element) {
  if (!revealObserver) return;
  element.classList.add('reveal');
  revealObserver.observe(element);
}
document.querySelectorAll('.section-heading,.about-card,.skill-card,.milestone,.timeline article')
  .forEach(observeReveal);
// The first render happens above; observe those cards now.
document.querySelectorAll('.project-card').forEach(observeReveal);

renderProjects();
