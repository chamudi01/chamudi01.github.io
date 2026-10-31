// EDIT PROJECT LINKS HERE: replace github: '' with your real repository URL.
// demo: '' can contain a deployed app or dashboard URL if available.
const projects = [
  {title:'Credit Risk Intelligence',category:'Machine Learning',subtitle:'Credit risk scoring & financial loss estimation',description:'End-to-end XGBoost credit risk prediction on 30,000 credit card records, including calibrated probabilities, risk tiers and expected financial loss in an interactive Streamlit application.',tags:['Python','XGBoost','Scikit-learn','Streamlit'],metric:'30,000 records',github:'',demo:'',color:'violet',icon:'◈'},
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
    if(p.github){const a=document.createElement('a');a.href=p.github;a.target='_blank';a.rel='noopener noreferrer';a.textContent='GitHub ↗';links.append(a)}
    if(p.demo){const a=document.createElement('a');a.href=p.demo;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Live demo ↗';links.append(a)}
    if(!p.github&&!p.demo){const s=document.createElement('span');s.textContent='Project links coming soon';s.className='muted';links.append(s)}
    body.append(eyebrow,title,subtitle,desc,tags,links);card.append(top,body);grid.append(card);
  });
}
renderProjects();
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});button.classList.add('active');button.setAttribute('aria-pressed','true');renderProjects(button.dataset.filter)}));
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));
document.getElementById('year').textContent=new Date().getFullYear();
const portrait=document.getElementById('portrait'),fallback=document.getElementById('photo-fallback');
portrait.addEventListener('load',()=>{portrait.style.display='block';fallback.style.display='none'});
portrait.addEventListener('error',()=>{portrait.style.display='none';fallback.style.display='flex'});
if(portrait.complete&&portrait.naturalWidth){portrait.style.display='block';fallback.style.display='none'}
