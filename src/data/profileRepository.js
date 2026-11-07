import { createProfileModel } from "../domain/models/profileModel.js";

export const profileData = createProfileModel({
  fullName: "Nicolás Alvarino Laguna",
  role: "QA Automation Engineer | SDET | DevTestOps & AI for Software Quality",
  headline:
    "Ingeniero de Sistemas y QA Automation Engineer con más de 6 años de experiencia en aseguramiento de calidad, automatización de pruebas (UI, API, Performance) y CI/CD para sistemas críticos en banca y fintech. Especialista en arquitecturas escalables (Serenity BDD, Screenplay, Karate DSL, Playwright, Robot Framework), validación en sistemas core bancarios (IBM AS400 / iSeries, SQL) e Inteligencia Artificial aplicada a la calidad de software.",
  location: "Medellín, Antioquia, Colombia",
  avatarUrl: "src/assets/nicolas.png",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/nicolasalvarino",
    github: "https://github.com/",
    email: "nicolasalvarino@hotmail.com",
    phone: "+57 320 572 2485",
  },
  metrics: [
    { id: "m1", value: "+6 Años", label: "Experiencia en QA & Banking" },
    { id: "m2", value: "+80%", label: "Cobertura de Automatización UI/API" },
    { id: "m3", value: "-45%", label: "Reducción en Tiempos de Regresión" },
    { id: "m4", value: "-35%", label: "Reducción de Flakiness en Suites CI" },
  ],
  skillCategories: [
    {
      id: "cat-qa",
      title: "QA Automation, BDD & Patrones",
      skills: [
        "Serenity BDD",
        "Screenplay Pattern",
        "Selenium WebDriver",
        "Playwright",
        "Karate DSL",
        "Cypress",
        "Robot Framework",
        "Cucumber / Gherkin",
        "Karate DSL",
      ],
    },
    {
      id: "cat-api-core",
      title: "API, Performance, Core Bancario & Cloud",
      skills: [
        "Postman / Newman",
        "RESTful APIs",
        "Apache JMeter",
        "IBM AS400 (iSeries / RPG)",
        "Access Client Solutions",
        "SQL / MySQL",
        "AWS DynamoDB & Cognito",
      ],
    },
    {
      id: "cat-lang-ai",
      title: "Lenguajes, DevTestOps & IA",
      skills: [
        "Java / Spring",
        "JavaScript / Angular",
        "Python",
        "CI/CD (Azure Pipelines)",
        "DevTestOps / TestOps",
        "Agentes IA para QA",
        "Scrum & Kanban",
      ],
    },
  ],
  experiences: [
    {
      id: "exp-gft",
      company: "GFT Technologies",
      role: "Test Analyst II (QA Automation Engineer)",
      period: "jul. 2025 - Actualidad",
      location: "Medellín, Antioquia, Colombia · Híbrido",
      highlights: [
        "Diseño y ejecución de pruebas automatizadas para aplicaciones Front-End y APIs REST de alto tráfico en el sector financiero (proyectos para Tuya), asegurando calidad consistente en canales físicos y digitales.",
        "Implementación de frameworks escalables basados en Serenity BDD + patrón Screenplay para pruebas UI y API.",
        "Integración de suites de automatización continua en pipelines CI/CD (Azure DevOps) bajo metodologías ágiles (Scrum).",
        "Ejecución de pruebas funcionales para incidentes de producción y estabilización en entornos preproductivos.",
      ],
      achievements: [
        "Reducción del tiempo de regresión en un 45% mediante automatización incremental.",
        "Incremento de la cobertura de pruebas UI/API en un +60%.",
        "Reducción de errores en producción en un 15% mediante estabilización preproductiva.",
      ],
      techStack: [
        "Java",
        "Serenity BDD",
        "Screenplay",
        "API REST",
        "Azure CI/CD",
        "Scrum",
      ],
    },
    {
      id: "exp-imagemaker",
      company: "Imagemaker",
      role: "QA Automation Analyst",
      period: "may. 2022 - may. 2025 (3 años 1 mes)",
      location: "Colombia · En remoto",
      highlights: [
        "Diseño e implementación de frameworks de automatización para UI y API Testing utilizando Robot Framework, Selenium y Postman/Newman.",
        "Ejecución de pruebas de carga y rendimiento con Apache JMeter en entornos preproductivos, validando escalabilidad y estabilidad previas al despliegue a producción.",
        "Validación de integridad de datos mediante consultas SQL (MySQL) en bases de datos relacionales.",
        "Liderazgo en planes de prueba para versiones Beta de aplicaciones móviles y ejecución de pruebas UAT (User Acceptance Testing), validando requisitos funcionales y experiencia de usuario.",
      ],
      achievements: [
        "Incremento de la cobertura de pruebas automatizadas en un 80% y reducción significativa de los tiempos de ejecución.",
      ],
      techStack: [
        "Robot Framework",
        "Selenium",
        "Postman / Newman",
        "JMeter",
        "MySQL",
        "Mobile Beta & UAT",
        "Scrum / Kanban",
      ],
    },
    {
      id: "exp-manpower",
      company: "ManpowerGroup",
      role: "QA Automation Analyst",
      period: "oct. 2021 - jul. 2022 (10 meses)",
      location: "Medellín, Antioquia, Colombia · En remoto",
      highlights: [
        "Automatización de pruebas funcionales para aplicaciones internas y de clientes corporativos mediante scripts en Java y JavaScript con Selenium y Cucumber.",
        "Ejecución de pruebas de integración, validación funcional en ambientes preproductivos según criterios de aceptación y soporte en incidentes de estabilización.",
        "Administración y validación en bases de datos relacionales (MySQL) y NoSQL (AWS DynamoDB), optimizando tiempos de respuesta en consultas críticas.",
        "Aseguramiento en la gestión de identidades y usuarios con AWS Cognito, reforzando la seguridad y el control de acceso.",
      ],
      achievements: [
        "Reducción del tiempo de regresión manual en un 50% (y disminución del 30% en tiempos de ejecución general) con automatización incremental.",
        "Aumento del 25% en la detección temprana de defectos durante los sprints.",
      ],
      techStack: [
        "Java",
        "JavaScript",
        "Selenium",
        "Cucumber",
        "MySQL",
        "AWS DynamoDB",
        "AWS Cognito",
      ],
    },
    {
      id: "exp-sophos",
      company: "Sophos Solutions S.A.S.",
      role: "Test Automation Engineer",
      period: "ene. 2021 - oct. 2021 (10 meses)",
      location: "Medellín, Antioquia, Colombia · En remoto",
      highlights: [
        "Soporte y desarrollo de automatización de pruebas UI y API en proyectos del sector bancario.",
        "Construcción y mantenimiento de suites automatizadas utilizando Java, Selenium, Serenity BDD y Cucumber.",
        "Integración de pruebas automatizadas en pipelines de Integración Continua (CI).",
      ],
      achievements: [
        "Mejora en la estabilidad de las suites de pruebas automatizadas, logrando un 35% menos de flakiness (falsos fallos).",
      ],
      techStack: [
        "Java",
        "Selenium",
        "Serenity BDD",
        "Cucumber",
        "CI Pipelines",
        "Banking QA",
      ],
    },
    {
      id: "exp-tcs",
      company: "Tata Consultancy Services (TCS)",
      role: "Analista de Certificación y QA Automation",
      period: "jul. 2019 - ene. 2021 (1 año 7 meses)",
      location: "Medellín, Antioquia, Colombia · Presencial",
      highlights: [
        "Diseño y ejecución de casos de prueba manuales y automatizados para sistemas bancarios.",
        "Validación de funcionalidades críticas del negocio en el core bancario.",
        "Generación de reportes ejecutivos de certificación, trazabilidad de defectos y documentación de resultados.",
      ],
      achievements: [
        "Aseguramiento de calidad en módulos críticos del core bancario, reduciendo incidentes en producción en un 20%.",
      ],
      techStack: [
        "Core Bancario",
        "QA Automation",
        "Certificación de Software",
        "Pruebas Funcionales",
        "UAT",
      ],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Arquitectura de Automatización E2E & API para Banca y Fintech",
      category: "DevTestOps & QA Architecture",
      description:
        "Framework escalable basado en Serenity BDD, patrón Screenplay, Selenium/Playwright y Karate DSL integrado en pipelines CI/CD de Azure, logrando reducir tiempos de regresión en un 45%.",
      techStack: [
        "Java",
        "Serenity BDD",
        "Screenplay",
        "Karate DSL",
        "Azure CI/CD",
      ],
      repoUrl: "#",
    },
    {
      id: "proj-2",
      title: "Validación Transaccional en Core Bancario IBM AS400 (iSeries)",
      category: "Core Banking & Backend QA",
      description:
        "Estrategia de aseguramiento de calidad para sistemas legacy y core bancarios combinando pruebas de integración con Karate DSL, consultas SQL en Access Client Solutions y validación de lógica en programas RPG.",
      techStack: [
        "IBM AS400 (iSeries)",
        "SQL",
        "RPG",
        "Karate DSL",
        "Access Client Solutions",
      ],
      repoUrl: "#",
    },
    {
      id: "proj-3",
      title: "Suite de Automatización Multi-Capa & Performance Testing",
      category: "Full-Stack Testing & Load",
      description:
        "Implementación de pruebas UI/API con Robot Framework y Postman/Newman (+80% de cobertura) junto con pruebas de carga y estrés en Apache JMeter para garantizar estabilidad preproductiva.",
      techStack: [
        "Robot Framework",
        "Postman / Newman",
        "JMeter",
        "MySQL",
        "Python",
      ],
      repoUrl: "#",
    },
    {
      id: "proj-4",
      title: "Agentes de IA Aplicados a Ingeniería de Calidad (AI for QA)",
      category: "Artificial Intelligence",
      description:
        "Aplicación de modelos y agentes de Inteligencia Artificial para optimizar la generación de casos de prueba, análisis predictivo de defectos y mejora continua en el ciclo de vida de pruebas.",
      techStack: ["Python", "AI Agents", "Prompt Engineering", "TestOps"],
      repoUrl: "#",
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Máster Universitario en Inteligencia Artificial",
      institution: "UNIR - Universidad Internacional de La Rioja",
      status: "2026 - 2027",
      type: "Posgrado / Maestría",
      focus:
        "Aplicación de Inteligencia Artificial, agentes inteligentes y modelos predictivos en ingeniería de software.",
    },
    {
      id: "edu-2",
      degree: "Ingeniero de Sistemas",
      institution: "Politécnico Grancolombiano",
      status: "Graduado (2020 - 2023)",
      type: "Pregrado Profesional",
      focus:
        "Ingeniería de sistemas, arquitectura de software, bases de datos y aseguramiento de calidad.",
    },
    {
      id: "edu-3",
      degree:
        "Tecnólogo en Análisis y Desarrollo de Sistemas de Información (ADSI)",
      institution: "Servicio Nacional de Aprendizaje (SENA)",
      status: "Graduado (2017 - 2019)",
      type: "Tecnología",
      focus:
        "Ingeniería de software, análisis de requerimientos, diseño y pruebas de sistemas de información.",
    },
    {
      id: "edu-4",
      degree: "Tecnología Electrónica",
      institution: "Universidad de Cartagena",
      status: "2005 - 2009",
      type: "Tecnología Universitaria",
      focus: "Ingeniería eléctrica, electrónica y de telecomunicaciones.",
    },
    {
      id: "edu-5",
      degree:
        "Certificaciones Profesionales en Automatización, Cloud y Desarrollo",
      institution: "Formación Continua Especializada & SENA",
      status: "Certificado",
      type: "Certificaciones Técnicas",
      focus:
        "Modelos de Calidad de Software (SENA) · Automatización de Pruebas UI con Cypress · AWS para Profesionales IT · Java-Spring · Fundamentos de Kanban · Angular 2 Avanzado.",
    },
  ],
});
