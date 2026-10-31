// EDIT HERE: Replace placeholders with your verified personal details and project links.
export const profile = {
  name: 'Chamudi Bhawanthi',
  initials: 'CB',
  headline: 'Data Science Undergraduate',
  tagline: 'I turn complex data into clear insights and practical solutions.',
  university: 'Sabaragamuwa University of Sri Lanka',
  location: 'Sri Lanka',
  email: '', // e.g. 'hello@example.com' — leave blank to hide email action
  github: 'https://github.com/chamudi01',
  linkedin: 'https://www.linkedin.com/in/chamudi-bhawanthi-04b150316/',
  cvUrl: '', // e.g. '/Chamudi_Bhawanthi_CV.pdf' (put PDF in public/)
  portraitUrl: '', // e.g. '/profile.jpg' (put image in public/)
}

export const projects = [
  { id: 'credit', number: '01', title: 'Credit Risk Intelligence', category: 'Machine Learning', subtitle: 'Explainable credit risk & expected-loss estimation', description: 'An end-to-end credit risk scoring system built with XGBoost, probability calibration, risk tiers, and expected financial loss estimation, presented through a Streamlit interface.', tags: ['Python', 'XGBoost', 'Streamlit', 'Scikit-learn'], github: '', demo: '', highlight: '30K records', accent: 'purple', featured: true },
  { id: 'churn', number: '02', title: 'Customer Churn Prediction', category: 'Machine Learning', subtitle: 'Helping teams understand customer attrition', description: 'A customer churn prediction platform designed to identify at-risk subscribers and support data-driven retention decisions.', tags: ['Python', 'Classification', 'EDA', 'Analytics'], github: '', demo: '', highlight: 'Predictive analytics', accent: 'cyan', featured: true },
  { id: 'retail', number: '03', title: 'RetailIQ — E-commerce Analytics', category: 'Data Analytics', subtitle: 'From transactions to business intelligence', description: 'An analytics portfolio project using the Brazilian Olist e-commerce dataset to explore revenue, customer behavior, fulfillment, and retention.', tags: ['Python', 'Pandas', 'SQL', 'Business Intelligence'], github: '', demo: '', highlight: 'Business insights', accent: 'pink', featured: true },
  { id: 'nlp', number: '04', title: 'Financial News Sentiment', category: 'NLP', subtitle: 'Understanding the tone of financial headlines', description: 'A three-class sentiment classification application trained on Financial PhraseBank using TF-IDF and traditional machine-learning models, deployed with Gradio.', tags: ['NLP', 'TF-IDF', 'Linear SVM', 'Gradio'], github: '', demo: '', highlight: '82.9% accuracy', accent: 'blue', featured: true },
  { id: 'bitcoin', number: '05', title: 'Bitcoin Transaction Graph Analysis', category: 'Research', subtitle: 'Investigating network features in illicit transaction detection', description: 'Research using the real Elliptic Bitcoin dataset to evaluate degree, PageRank and component-based graph features alongside original transaction attributes.', tags: ['Graph Theory', 'NetworkX', 'XGBoost', 'Research'], github: '', demo: '', highlight: '203K+ nodes', accent: 'purple' },
  { id: 'weather', number: '06', title: 'Sri Lanka Weather Dashboard', category: 'Data Analytics', subtitle: 'Exploring long-term weather patterns', description: 'A Power BI analysis of Sri Lankan rainfall, temperature and seasonal patterns using historical weather data from 2010–2023.', tags: ['Power BI', 'DAX', 'Power Query', 'Visualization'], github: '', demo: '', highlight: '2010–2023', accent: 'cyan' },
  { id: 'livmanage', number: '07', title: 'LivManage', category: 'Full Stack', subtitle: 'Apartment maintenance, simplified', description: 'A Laravel and MySQL apartment maintenance platform with resident, administrator and repair staff workflows for requests, assignments, status updates and feedback.', tags: ['Laravel', 'PHP', 'Blade', 'MySQL'], github: '', demo: '', highlight: '3 user roles', accent: 'pink' },
]

export const skills = [
  { title: 'Languages & Data', items: ['Python', 'SQL', 'PHP', 'JavaScript', 'Pandas', 'NumPy'] },
  { title: 'Machine Learning & AI', items: ['Scikit-learn', 'XGBoost', 'Classification', 'NLP', 'Time Series', 'Model Evaluation'] },
  { title: 'Analytics & Visualization', items: ['Power BI', 'DAX', 'Matplotlib', 'Seaborn', 'EDA', 'Business Intelligence'] },
  { title: 'Development & Tools', items: ['Git & GitHub', 'Jupyter', 'Streamlit', 'Gradio', 'Laravel', 'MySQL'] },
]

export const achievements = [
  { type: 'Competition', title: 'DataStorm 7.0', detail: 'Top 30 Finalist', icon: 'trophy' },
  { type: 'Competition', title: 'InspiHER · HackNova V4.0', detail: 'Top 10 Finalist', icon: 'award' },
  { type: 'Community', title: 'IEEE Student Branch', detail: 'Secretary team involvement', icon: 'users' },
  { type: 'Volunteering', title: 'Rotaract Club', detail: 'Volunteer', icon: 'heart' },
]
