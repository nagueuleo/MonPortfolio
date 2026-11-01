/* ===== CONTENU À MODIFIER : textes, expériences, projets, certifications, photo ===== */
const DATA = {
  name: "Lionel Nagueu Djambong", first: "Lionel", mid: "Nagueu", last: "Djambong",
  job: "Data Analyst | Analytics Engineer",
  photo: "assets/img/logo2.png", // votre photo détourée (fond transparent) : assets/img/photo.png
  logo: "assets/img/logo2.png",   // votre logo (header et footer) ; sans fichier, « LD. » s’affiche
  roleLine: "Data Analyst | Analytics Engineer",
  place: "Basée en France",
  email: "lpnagueudjambong@gmail.com",
  location: "Lille, France · Disponible en distanciel",
  social: [["bi-linkedin","https://www.linkedin.com/in/lionel-nagueu-djambong-7a4a1715a","LinkedIn"],["bi-github","https://github.com/nagueuleo/","GitHub"],["bi-envelope","mailto:lpnagueudjambong@gmail.com","E-mail"]],
  stats: [[2,"ans d’expérience","+"],[5,"projets réalisés","+"],[95,"fiabilité données","%"]],
  profile: ["Data Analyst avec 2 ans d’expérience en environnements variés (Energie, agriculture, Banque), Je conçois des pipelines de données fiables  via SQL, Snowflake, dbt, Power BI et Machine Learning.","Chaque pipeline que je construis, chaque modèle que j’entraîne, chaque dashboard que je livre a un seul objectif : créer de la valeur métier mesurable."],
  avail: "Disponible dès maintenant · Mobilité France entière",
  tiles: ["Power BI · DAX","Python · Pandas","SQL · PL/SQL","Snowflake, Databricks","Machine Learning","DBT · ELT","BigQuery · GCP","Scikit-learn"],
  career: [
    {when:"Décembre 2025 – Juin 2026 · 7 mois · Hybride",role:"Data anlyst | Analytics engineer",org:"Crédit Agricole(Sofinco)",tag:"Banque / Financier",points:[
      "Fiabilisation de la qualité et de la fraîcheur des données de production par l’orchestration des pipelines dbt avec Airflow.",
      "Tests automatisés dbt (unicité, valeurs nulles, intégrité référentielle) et documentation du lineage via dbt docs",
      "SQL avancé sur Snowflake pour des analyses métier des projets exploitées par les équipes Marketing",
      "Tableaux de bord Power BI connectés à Snowflake (−70 % de temps d’analyse)",
      "Versionné et livré le code via Git / GitLab dans un cadre CI/CD"]},
    {when:"Septembre 2023 – Août 2024 · 12 mois · Yaoundé",role:"Data Analyst",org:"Togettech",tag:"Energie",points:[
      "Conçu un pipeline ELT complet sous Databricks pour structurer les données de consommation énergétique de 586 ménages",
      "Réduit de 35 % le délai de mise à disposition des données aux équipes métier en industrialisant le pipeline de reporting en production",
      "Livré des modèles de données exploitables et des tableaux de bord Power BI Service pour un suivi fiable des indicateurs de consommation",
    ]},
    {when:"Septembre 2022 – Septembre 2023 · 12 mois · Yaoundé",role:"Data Analyst",org:"Togettech",tag:"Agriculture / climat",points:[
      "Construit un pipeline ETL avec via un api python intégrant plus de 10 000 enregistrements climatiques issus de 5 villes de l'Ouest Cameroun (données ONACC)",
      "Modélisé et enrichi des données brutes multi-sources pour permettre une analyse temporelle et régionale fiable",
      "Livraison d’un rapport Power BI publié sur Power BI Service, connecté à un modèle de données structuré et utilisé par les décideurs agricoles.",
      ]}
  ],
  tools: [
    {g:"BI & Reporting",items:["PowerBI","DAX","Power Query","Tableau Software","Excel"]},
    {g:"SQL & Bases de données",items:["SQL","NoSQL","PostgreSQL","Snowflake", "Databricks", "MongoDB","MySQL"]},
    {g:"Python",items:["Pandas","NumPy","Scikit-learn","Matplotlib","Plotly","TensorFlow"]},
    {g:"Data Engineering",items:["Airbyte","Airflow","BigQuery","GCP","dbt","Git","GitHub","CI/CD"]},
    {g:"Outils & methodes",items:["Docker","Jira","Machine Learning","Scrum", "Knime Analytics"]}
  ],
  education: [
    {t:"Master Data & Intelligence Artificielle",org:"ECOLE-IT",y:"2024-2026"},
    {t:"Master 2 Data Science",org:"Université de Yaoundé I",y:"2020-2022"},
  ],
  certs: [
    {t:"Apprendre l'analyse des données",org:"LinkedIn Learning",y:"2026",logo:"linkedin",done:true},
    {t:"Gitlab",org:"linkedIn Learning",y:"2026",logo:"linkedin",done:true},
    {t:"Snowflake",org:"SimpliLearn",y:"2025",logo:"simplilearn",done:true},
    {t:"Power BI beginers",org:"SimpliLearn",y:"2025",logo:"simplilearn",done:true},
    {t:"Databricks",org:"SimpliLearn",y:"2025",logo:"simplilearn",done:true},
    {t:"SQL Associate",org:"SimpliLearn",y:"2025",logo:"simplilearn",done:true},
    {t:"dbt Fundamentals",org:"dbt labs",y:"2026",logo:"dbt",done:true},
  ],
  cv: "assets/CV_Lionel_Nagueu_Data_Analyst.pdf", // remplacez par votre CV
  filters: ["Tous","PowerBI","DBT","Machine Learning"],
  /* img: "assets/img/projets/nom.png" (capture), live / video / github : liens */
  projects: [
    {t:"Rossmann Store Sales – Prévision de la Demande",cat:"Python",tags:["Python","Machine Learning","Streamlit"],d:"Pipeline de prévision des ventes journalières pour 1 115 magasins Rossmann (1M+ lignes, Kaggle) : EDA, feature engineering, comparaison LightGBM / SARIMA / Prophet, puis déploiement d’un dashboard interactif sur Streamlit Cloud pour anticiper la demande à 6 semaines.",m:["1 115 modèles Prophet","RMSPE 9,6 %","Apprentissage"],live:"#",github:"#"},
    {t:"Health Snowflake Pipeline",cat:"PowerBI",tags:["PowerBI","SQL","Snowflake","Python"],d:"Pipeline end-to-end sur données cardiaques : ingestion Python → Snowflake (RAW/STAGING/GOLD) → dashboard Power BI 3 pages. Score de risque patient, segmentation par âge et cholestérol.",m:["1 025 patients","4 tables GOLD","3 pages Power BI"],video:"#",github:"#"},
    {t:"Global Superstore – Sales Performance",cat:"PowerBI",tags:["PowerBI","DAX","Power Query"],d:"Dashboard 3 pages : vue d’ensemble, analyse produit, analyse géographique. KPIs N/N-1, scatter plot remise vs profit.",m:["3 pages","DAX avancé"],video:"#",github:"#"},
    {t:"Atlas Labs – HR Analytics",cat:"PowerBI",tags:["PowerBI","DAX","RH"],d:"Analyse RH : attrition (16,1 %), démographie des effectifs, suivi individuel des performances.",m:["4 pages","1 470 employés","16,1 % attrition"],video:"#",github:"#"},
    {t:"Churn Rate – Databel",cat:"PowerBI",tags:["PowerBI","DAX","CRM"],d:"Identification des facteurs de désabonnement. Segmentation par profil, type de contrat et usage.",m:["Segmentation","Power Query","DAX"],github:"#"},
    {t:"Analyse Financière – Apple AAPL",cat:"Python",tags:["Python","ML","Finance"],d:"Feature engineering (SMA, EMA, RSI, MACD), backtesting de stratégie de trading, Random Forest vs XGBoost.",m:["RMSE/MAE/R²","Backtesting","XGBoost"],github:"#"},
    {t:"HR Analytics – Performances Employés",cat:"Python",tags:["Python","Pandas","Stats"],d:"Exploration des données RH, détection d’outliers, analyse des corrélations.",m:["30K+ lignes","ANOVA","Clustering"],github:"#"},
    {t:"Analyse des Ventes – Excel",cat:"Excel",tags:["Excel","Power Query","TCD"],d:"Suivi des performances commerciales par région et catégorie avec tableaux croisés dynamiques.",m:["TCD","Power Query","Dashboard"],github:"#"}
  ]
};
