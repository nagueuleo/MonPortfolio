/* ===== CONTENU À MODIFIER : textes, expériences, projets, certifications, photo ===== */
const DATA = {
  name: "Lionel Nagueu Djambong", first: "Lionel", mid: "Nagueu", last: "Djambong",
  job: "Data Analyst | Analytics Engineer",
  photo: "assets/img/Lionel.png", // votre photo détourée (fond transparent) : assets/img/photo.png
  logo: "assets/img/logo2.png",   // votre logo (header et footer) ; sans fichier, « LD. » s’affiche
  roleLine: "Data Analyst | Analytics Engineer",
  place: "Basée en France",
  email: "lpnagueudjambong@gmail.com",
  location: "Lille, France · Disponible en distanciel",
  social: [["bi-linkedin","https://www.linkedin.com/in/lionel-nagueu-djambong-7a4a1715a","LinkedIn"],["bi-github","https://github.com/nagueuleo/","GitHub"],["bi-envelope","mailto:lpnagueudjambong@gmail.com","E-mail"]],
  stats: [[2,"ans d’expérience","+"],[18,"projets réalisés","+"],[95,"fiabilité données","%"]],
  profile: ["Data Analyst avec 2 ans d’expérience en environnements variés (Energie, agriculture, Banque), Je conçois des pipelines de données fiables  via SQL, Snowflake, dbt, Power BI et Machine Learning.","Chaque pipeline que je construis, chaque modèle que j’entraîne, chaque dashboard que je livre a un seul objectif : créer de la valeur métier mesurable."],
  avail: "Disponible dès maintenant · Mobilité France entière",
  tiles: ["Power BI · DAX","Python · Pandas","SQL · PL/SQL","Snowflake, Databricks","Machine Learning","DBT · ELT","BigQuery · GCP","Airflow · Airbyte","Docker · Git · CI/CD", "JIRA"],
  career: [
    {when:"Décembre 2025 – Juin 2026 · 7 mois · Hybride",role:"Data anlyst | Analytics engineer",org:"Crédit Agricole(Sofinco)",tag:"Banque / Finance",points:[
      "structurer les métadonnées des modèles DBT afin d’automatiser leur documentation technique et de faciliter la compréhension des traitements existants.",
      "Analyser les flux et sources de données en amont des pipelines afin d’identifier les risques liés à la fiabilité et à la fraîcheur des données de production.",
      "Conçu des dashboard Power BI et orchestré avec Apache Airflow un dispositif de monitoring des KPI, permettant de réduire de 70 % le temps d’analyse des équipes marketing.",
      ]},
    {when:"Septembre 2023 – Août 2024 · 12 mois · Yaoundé",role:"Data Analyst",org:"Togettech",tag:"Energie",points:[
      "Conçu un pipeline ELT complet sous Databricks pour structurer les données de consommation énergétique de 586 ménages",
      "Réduire de 35 % le délai de mise à disposition des données aux équipes métier en industrialisant le pipeline de reporting en production",
      "Livrer des modèles de données exploitables et des tableaux de bord Power BI Service pour un suivi fiable des indicateurs de consommation",
    ]},
    {when:"Septembre 2022 – Septembre 2023 · 12 mois · Yaoundé",role:"Data Analyst",org:"Togettech",tag:"Agriculture / climat",points:[
      "Construire un pipeline ETL avec via un api python intégrant plus de 10 000 enregistrements climatiques et agricoles issus de 5 villes de l'Ouest Cameroun (données ONACC)",
      "Modélisé et enrichi des données brutes multi-sources pour permettre une analyse temporelle et régionale fiable",
      "Livrer un rapport Power BI publié sur Power BI Service, connecté à un modèle de données structuré et utilisé par les décideurs agricoles.",
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
    {t:"PL analysis – Première league dashboard",cat:"DBT",tags:["DBT","SQL","PowerBi", "Databricks","Github"],d:"Pipeline d'extraction, de chargement et de traitement du football anglais (1M+ lignes, Kaggle) : ELT, orchestration github action, ccd-ci, dbt, puis déploiement d’un dashboard interactif sur power bi services pour l'anlyse des meilleurs equipes et arbites de la saision.",m:["4 dashboards","MEP"],img:"assets/img/pl.png",video:"https://youtu.be/-IMZpqU2yYE?si=LwTVVx1Vz7-9FvYf"},
    {t:"Health Analysis",cat:"PowerBI",tags:["PowerBI","SQL","Excel","Databricks","DBT"],d:"Pipeline end-to-end sur données des patients : ingestion Python → Snowflake (RAW/STAGING/GOLD) → dashboard Power BI 7 pages. Score des patient, segmentation par âge et cholestérol.",m:["10 entretien","40% taux de satisfaction","7 pages Power BI"],img:"assets/img/hosto.png", live:"https://app.powerbi.com/view?r=eyJrIjoiNTBlYWVlYmYtZmY2Yy00NDljLThjOGUtZmFjYzQyMDJhYjExIiwidCI6IjA1ZjcyOTg3LTczY2YtNGI5Yi1iNTUwLTI2YTk0MTg4NjhmNyIsImMiOjl9"},
    {t:"E-commerce – Sales Performance",cat:"PowerBI",tags:["PowerBI","DAX","Power Query"],d:"Dashboard 3 pages : Acceuil, analyse produit, analyse géographique. KPIs N/N-1, scatter plot remise vs profit.",m:["3 pages","DAX avancé"],img:"assets/img/com.png",live:"https://app.powerbi.com/view?r=eyJrIjoiOGM0YWI4MGUtZjQxZC00ZTgxLTkxMzItYzlkODViNzgzOGI2IiwidCI6IjA1ZjcyOTg3LTczY2YtNGI5Yi1iNTUwLTI2YTk0MTg4NjhmNyIsImMiOjl9"},
    {t:"Market Place – Suivi des ventes",cat:"DBT",tags:["PowerBI","DBT","Postgresql", "SQL","Elementary dbt"],d:"Analyse des ventes de produits de la Market Place : ventes (562k), 118 commandes, suivi des performances sur les ventes.",m:["3 pages","562k ventes"],img:"assets/img/ventes.png",video:"https://youtu.be/DkdCEnLg_PQ?si=ifpLNBdeaovzKAWs"},
    {t:"Weather analysis – Nord de France",cat:"PowerBI",tags:["PowerBI","DAX","Climat"],d:"Identification des changement du climat de la région du Nord de la France.Humidit, précipitation, chance de pluie.",m:["Data visualization","Power Query","DAX"],img:"assets/img/climat.png",live:"https://app.powerbi.com/view?r=eyJrIjoiZTA4ZjkzNDYtYzQyNS00M2RjLWI2MGEtZGVhMjViZWRkNzkwIiwidCI6IjA1ZjcyOTg3LTczY2YtNGI5Yi1iNTUwLTI2YTk0MTg4NjhmNyIsImMiOjl9"},
    {t:"King_IA_apps – Détecion de la pneumonie",cat:"Machine Learning",tags:["Python","ML","Deep Leaning","Mobilenet","Streamlit"],d:"Feature engineering (EDA), Fine-turning(fine-tuning), Modèle VGG et Mobile-net .",m:["F1-Score/Recall/precision/accuracy","ROC curve","VGG","Mobile-net"],img:"assets/img/pn.png",github:"https://github.com/nagueuleo/King_IA_apps"},
    {t:"CAR ANALYSIS – Performances et prix des voitures",cat:"PowerBI",tags:["PowerBI","DAX","Power Query"],d:"Exploration des données des voitures, 2 Pages, Performances et prix des voitures par pays et catégories.",m:["30K lignes","2 pages","Performances"],img:"assets/img/car.png",live:"https://app.powerbi.com/view?r=eyJrIjoiNDQyYjkyMTMtNTMwZi00Yzg4LWE3NzAtZGMyM2VkZDZmMjg5IiwidCI6IjA1ZjcyOTg3LTczY2YtNGI5Yi1iNTUwLTI2YTk0MTg4NjhmNyIsImMiOjl9"},
    {t:"Pulse Marketing – Analyse multi-canal",cat:"PowerBI",tags:["PowerBI","Power Query","DAX"],d:"Suivi des performances commerciales par région et catégorie.",m:["PowerBI","Power Query","Dashboard"],img:"assets/img/pulse.png",live:"https://app.powerbi.com/view?r=eyJrIjoiMDU2M2Y0NTMtM2Q5MC00Mzg4LWFiYjQtNTkzNWJkYjQ5MThjIiwidCI6IjA1ZjcyOTg3LTczY2YtNGI5Yi1iNTUwLTI2YTk0MTg4NjhmNyIsImMiOjl9"}
  ]
};
