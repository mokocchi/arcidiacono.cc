const translations = {
  en: {
    'nav.services': 'Services',
    'nav.enterprise': 'Enterprise',
    'nav.builders': 'Vibecoders & Startups',
    'nav.engineers': 'Engineers',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    'hero.badge': '100% Remote <span class="mx-2 text-paper/30">&bull;</span> Independent Architecture & Cloud Advisory',
    'hero.title': 'Research-Grade <em>AWS</em> Architecture, Security & Cloud Advisory',
    'hero.description': 'I help enterprise teams, growing startups, and AI-native builders audit, secure, and scale their infrastructure without slowing down engineering velocity.',
    'hero.primaryCta': 'Book Architecture Assessment',
    'hero.secondaryCta': 'Explore Services',
    'problems.eyebrow': 'The inflection point',
    'problems.title': 'When off-the-shelf AWS setup reaches its limits.',
    'problems.card1.title': 'Runaway cloud bills',
    'problems.card1.text': 'Uncontrolled autoscaling, oversized instances, and idle resources quietly eroding margins.',
    'problems.card2.title': 'Security blindspots',
    'problems.card2.text': 'Over-privileged IAM, complex trust relationships, and unverified escalation paths.',
    'problems.card3.title': 'Legacy drift',
    'problems.card3.text': 'Manual console changes leaving infrastructure unreproducible and hard to reason about.',
    'services.eyebrow': 'Fixed-price engagements',
    'services.title': 'Clarity before complexity.',
    'services.description': 'Focused engagements for teams that need senior judgment, useful artifacts, and forward motion.',
    'enterprise.eyebrow': 'Enterprise & High-Scale Systems',
    'enterprise.focus': 'Deep diagnostics, focused audits, useful ADRs, and infrastructure optimization at scale.',
    'builders.eyebrow': 'Startups, Small Businesses & AI-Native Builders',
    'builders.focus': 'For solo developers, AI-assisted product teams, and startups moving from localhost to production.',
    'cards.enterprise.security.badge': '1–2 Weeks <span>&bull;</span> Fixed Scope',
    'cards.enterprise.security.title': 'AWS Security & IAM Audit',
    'cards.enterprise.security.description': 'In-depth evaluation of IAM policies, privilege escalation paths, KMS keys, and container network boundaries.',
    'cards.enterprise.security.deliverable1': 'Security Risk Matrix',
    'cards.enterprise.security.deliverable2': 'Executive Assessment Report',
    'cards.enterprise.security.deliverable3': 'Remediation Plan',
    'cards.enterprise.finops.badge': '2 Weeks <span>&bull;</span> Fixed Scope',
    'cards.enterprise.finops.title': 'FinOps & AWS Cost Optimization',
    'cards.enterprise.finops.description': 'Comprehensive spending analysis, idle resource elimination, right-sizing, and autoscaling diagnostics.',
    'cards.enterprise.finops.deliverable1': 'FinOps Savings Report',
    'cards.enterprise.finops.deliverable2': 'Cost Anomaly Guardrails',
    'cards.enterprise.finops.deliverable3': 'Actionable Roadmap',
    'cards.enterprise.iac.badge': '3–4 Weeks <span>&bull;</span> PoC / Migration',
    'cards.enterprise.iac.title': 'Legacy to IaC (Terraform) Refactoring',
    'cards.enterprise.iac.description': 'Reengineering manual AWS Console setups into modular, production-ready, reproducible Terraform code.',
    'cards.enterprise.iac.deliverable1': 'Tested Terraform Modules',
    'cards.enterprise.iac.deliverable2': 'State Management Setup',
    'cards.enterprise.iac.deliverable3': 'Architecture Decision Records',
    'cards.enterprise.advisory.badge': 'Monthly Retainer <span>&bull;</span> 5–10 hrs / month',
    'cards.enterprise.advisory.title': 'Architecture Advisory & Mentoring',
    'cards.enterprise.advisory.description': 'Ongoing architecture guidance for technical teams making high-impact infrastructure decisions.',
    'cards.enterprise.advisory.deliverable1': 'Architecture Reviews',
    'cards.enterprise.advisory.deliverable2': 'Async Technical Guidance',
    'cards.enterprise.advisory.deliverable3': 'Focused Mentoring Sessions',
    'cards.builders.deploy.badge': '1 Week Engagement',
    'cards.builders.deploy.title': 'Production-Ready Landing',
    'cards.builders.deploy.description': 'I set up your AWS foundation with ECS/Docker, SSL, a custom domain, and secure environment variables.',
    'cards.builders.deploy.deliverable1': 'Live Production Setup',
    'cards.builders.deploy.deliverable2': 'CI/CD Pipeline',
    'cards.builders.deploy.deliverable3': 'Environment Secrets Isolation',
    'cards.builders.guardrails.badge': 'Fast Audit (3–5 Days)',
    'cards.builders.guardrails.title': 'AI Cost Guardrails & Security Check',
    'cards.builders.guardrails.description': 'Prevent AWS or LLM bill spikes and catch exposed API keys or critical IAM issues in AI-generated code.',
    'cards.builders.guardrails.deliverable1': 'Hardened IAM Policies',
    'cards.builders.guardrails.deliverable2': 'API Spending Limits',
    'cards.builders.guardrails.deliverable3': 'Code Security Review',
    'cards.builders.session.badge': '60-Min Live Session',
    'cards.builders.session.title': '1-on-1 Architecture & Advisory Session',
    'cards.builders.session.description': 'A video call to unblock deployment issues, review your architecture, or choose a practical tech stack.',
    'cards.builders.session.deliverable1': '60-min Recorded Call',
    'cards.builders.session.deliverable2': 'Written Summary Notes',
    'cards.builders.session.deliverable3': 'Clear Next Steps',
    'about.eyebrow': 'The human behind the work',
    'about.title': 'Academic rigor meets industry infrastructure engineering.',
    'about.bio': 'I am <strong>Jose Felipe Arcidiacono</strong>, a Senior Cloud Architect, Computer Science Researcher, and University Lecturer at UNLP.',
    'about.description': 'With 8+ years of experience across AWS infrastructure, FinOps, and enterprise security, I approach cloud engineering with analytical depth rather than trial-and-error.',
    'about.highlight1.title': 'Academic researcher',
    'about.highlight1.text': 'Distributed Systems, Algorithms & Computing Theory at UNLP.',
    'about.highlight2.title': 'Enterprise security',
    'about.highlight2.text': 'Ex-Deloitte Cyber Security Consultant focused on controls and audits.',
    'about.highlight3.title': '8+ years in AWS',
    'about.highlight3.text': 'Cloud Architecture, SRE, FinOps and Terraform expertise.',
    'about.highlight4.title': '100% independent',
    'about.highlight4.text': 'Milestone-based focus with zero agency overhead.',
    'approach.eyebrow': 'How I work',
    'approach.title': 'Structured, non-disruptive engagement.',
    'approach.step1.title': 'Discovery & read-only access',
    'approach.step1.text': 'I define the scope and set up secure, read-only IAM access without interrupting your engineering team.',
    'approach.step2.title': 'Independent audit & prototyping',
    'approach.step2.text': 'Deep-dive analysis, security evaluations, or Terraform prototyping happens independently.',
    'approach.step3.title': 'Delivery & walkthrough',
    'approach.step3.text': 'Clear ADRs, reports, or production-ready code, followed by an executive walkthrough.',
    'faq.eyebrow': 'Frequently asked questions',
    'faq.title': 'Clear answers before you start.',
    'cta.eyebrow': 'Make the next infrastructure decision easier',
    'cta.title': 'Ready to audit or refactor your AWS infrastructure?',
    'cta.button': 'Schedule assessment call',
    'engineers.eyebrow': 'For Engineers & Tech Leads',
    'engineers.title': 'For Engineers & Tech Leads',
    'engineers.subtitle': '1-on-1 Advisory, System Design Mock Interviews & Technical Mentorship',
    'engineers.description': 'Direct, unfiltered guidance to level up your engineering career, master distributed systems, or validate architecture decisions with an active CS researcher and Senior Cloud Architect.',
    'engineers.tab1.label': 'Career Mentorship',
    'engineers.tab1.badge': '60-Min Session • 1-on-1 Live',
    'engineers.tab1.title': 'Technical Career & Seniority Mentorship',
    'engineers.tab1.description': 'Personalized career coaching for Mid to Senior engineers or aspiring Tech Leads. We will identify your skill gaps, refine your technical roadmap, and optimize your approach to senior-level decision making.',
    'engineers.tab1.deliverable1': '60-minute interactive live call',
    'engineers.tab1.deliverable2': 'Personalized career roadmap & actionable recommendations',
    'engineers.tab1.deliverable3': 'Session recording & written summary notes',
    'engineers.tab1.price': '$80 USD / Session',
    'engineers.tab2.label': 'System Design',
    'engineers.tab2.badge': '60-Min Session • Live Practice',
    'engineers.tab2.title': 'System Design & Mock Interviews',
    'engineers.tab2.description': 'Realistic technical mock interview focusing on System Design, Concurrency, and AWS Distributed Architectures. Learn how to evaluate trade-offs and communicate architectural choices clearly.',
    'engineers.tab2.deliverable1': '45-min System Design challenge + 15-min live feedback',
    'engineers.tab2.deliverable2': 'Written evaluation covering architecture, communication, and trade-offs',
    'engineers.tab2.deliverable3': 'Recommended resources & study materials',
    'engineers.tab2.price': '$90 USD / Session',
    'engineers.tab3.label': 'Technical Advisory',
    'engineers.tab3.badge': '60-Min Session • Technical Deep-Dive',
    'engineers.tab3.title': 'Advanced CS & Distributed Systems Advisory',
    'engineers.tab3.description': 'Targeted 1-on-1 tutoring to unblock complex engineering problems. Ideal for deep-diving into distributed systems concurrency, algorithm design, or academic research concepts.',
    'engineers.tab3.deliverable1': 'Pre-call topic review (send your notes/code ahead of time)',
    'engineers.tab3.deliverable2': '60-minute technical problem-solving session',
    'engineers.tab3.deliverable3': 'Code snippet / Architecture Diagram notes',
    'engineers.tab3.price': '$75 USD / Session'
  },
  es: {
    'nav.services': 'Servicios',
    'nav.enterprise': 'Enterprise',
    'nav.builders': 'Vibecoders y Startups',
    'nav.engineers': 'Engineers',
    'nav.about': 'Sobre mí',
    'nav.faq': 'FAQ',
    'hero.badge': '100% Remoto <span class="mx-2 text-paper/30">&bull;</span> Consultoría Independiente de Cloud y Arquitectura',
    'hero.title': 'Consultoría en Arquitectura <em>AWS</em>, Seguridad y FinOps con Rigor Académico',
    'hero.description': 'Ayudo a equipos enterprise, startups en crecimiento y desarrolladores AI-native a auditar, asegurar y escalar su infraestructura sin frenar la velocidad de desarrollo.',
    'hero.primaryCta': 'Reservar Evaluación Técnica',
    'hero.secondaryCta': 'Ver Servicios',
    'problems.eyebrow': 'El punto de inflexión',
    'problems.title': 'Cuando una configuración estándar de AWS alcanza sus límites.',
    'problems.card1.title': 'Costos cloud descontrolados',
    'problems.card1.text': 'Autoscaling sin control, instancias sobredimensionadas y recursos ociosos que reducen tus márgenes.',
    'problems.card2.title': 'Puntos ciegos de seguridad',
    'problems.card2.text': 'Permisos IAM excesivos, relaciones de confianza complejas y rutas de escalación sin verificar.',
    'problems.card3.title': 'Deriva de infraestructura',
    'problems.card3.text': 'Cambios manuales en consola que vuelven la infraestructura difícil de reproducir y mantener.',
    'services.eyebrow': 'Servicios con alcance y precio definidos',
    'services.title': 'Claridad antes que complejidad.',
    'services.description': 'Trabajos enfocados para equipos que necesitan criterio senior, entregables útiles y avance concreto.',
    'enterprise.eyebrow': 'Enterprise y sistemas de alta escala',
    'enterprise.focus': 'Diagnósticos profundos, auditorías acotadas, ADRs útiles y optimización de infraestructura a gran escala.',
    'builders.eyebrow': 'Startups, PyMEs y desarrolladores AI-native',
    'builders.focus': 'Para desarrolladores independientes, equipos que usan herramientas de IA y startups que pasan de localhost a producción.',
    'cards.enterprise.security.badge': '1–2 semanas <span>&bull;</span> Alcance fijo',
    'cards.enterprise.security.title': 'Auditoría de Seguridad AWS e IAM',
    'cards.enterprise.security.description': 'Evaluación profunda de políticas IAM, vectores de escalación de privilegios, claves KMS y límites de red en contenedores.',
    'cards.enterprise.security.deliverable1': 'Matriz de Riesgo de Seguridad',
    'cards.enterprise.security.deliverable2': 'Reporte Ejecutivo',
    'cards.enterprise.security.deliverable3': 'Plan de Mitigación',
    'cards.enterprise.finops.badge': '2 semanas <span>&bull;</span> Alcance fijo',
    'cards.enterprise.finops.title': 'FinOps y Optimización de Costos AWS',
    'cards.enterprise.finops.description': 'Análisis profundo del gasto en AWS, eliminación de recursos ociosos, right-sizing y diagnóstico de autoscaling.',
    'cards.enterprise.finops.deliverable1': 'Reporte de Ahorro FinOps',
    'cards.enterprise.finops.deliverable2': 'Guardrails para anomalías de gasto',
    'cards.enterprise.finops.deliverable3': 'Roadmap ejecutable',
    'cards.enterprise.iac.badge': '3–4 semanas <span>&bull;</span> PoC / Migración',
    'cards.enterprise.iac.title': 'Refactorización Legacy a IaC (Terraform)',
    'cards.enterprise.iac.description': 'Reingeniería de configuraciones manuales de AWS Console a código Terraform modular, reproducible y listo para producción.',
    'cards.enterprise.iac.deliverable1': 'Módulos Terraform testeados',
    'cards.enterprise.iac.deliverable2': 'Configuración de State Management',
    'cards.enterprise.iac.deliverable3': 'Architecture Decision Records',
    'cards.enterprise.advisory.badge': 'Retainer mensual <span>&bull;</span> 5–10 hs / mes',
    'cards.enterprise.advisory.title': 'Asesoría y Mentoría de Arquitectura',
    'cards.enterprise.advisory.description': 'Acompañamiento continuo para equipos técnicos que toman decisiones críticas de infraestructura.',
    'cards.enterprise.advisory.deliverable1': 'Reviews de Arquitectura',
    'cards.enterprise.advisory.deliverable2': 'Guía técnica async',
    'cards.enterprise.advisory.deliverable3': 'Sesiones de mentoría focalizadas',
    'cards.builders.deploy.badge': 'Trabajo de 1 semana',
    'cards.builders.deploy.title': 'Landing listo para producción',
    'cards.builders.deploy.description': 'Configuración de AWS mínima, ECS/Docker, SSL, dominio propio y variables seguras.',
    'cards.builders.deploy.deliverable1': 'Setup de producción en vivo',
    'cards.builders.deploy.deliverable2': 'Pipeline CI/CD',
    'cards.builders.deploy.deliverable3': 'Aislamiento de secretos del entorno',
    'cards.builders.guardrails.badge': 'Auditoría rápida (3–5 días)',
    'cards.builders.guardrails.title': 'Guardrails de costos de IA y revisión de seguridad',
    'cards.builders.guardrails.description': 'Prevención de gastos inesperados en AWS o LLM y detección de APIs expuestas o IAM crítico en código generado.',
    'cards.builders.guardrails.deliverable1': 'Políticas IAM endurecidas',
    'cards.builders.guardrails.deliverable2': 'Límites de gasto por API',
    'cards.builders.guardrails.deliverable3': 'Revisión de seguridad de código',
    'cards.builders.session.badge': 'Sesión de 60 min',
    'cards.builders.session.title': 'Sesión 1-a-1 de arquitectura y asesoría',
    'cards.builders.session.description': 'Videollamada para destrabar deploys, revisar tu arquitectura o elegir una stack técnica práctica.',
    'cards.builders.session.deliverable1': 'Llamada grabada de 60 min',
    'cards.builders.session.deliverable2': 'Notas de resumen por escrito',
    'cards.builders.session.deliverable3': 'Siguientes pasos claros',
    'about.eyebrow': 'La persona detrás del trabajo',
    'about.title': 'Rigor académico aplicado a la ingeniería de infraestructura',
    'about.bio': 'Soy <strong>Jose Felipe Arcidiacono</strong>, Senior Cloud Architect, Investigador en Ciencias de la Computación y docente universitario en UNLP.',
    'about.description': 'Con 8+ años de experiencia en infraestructura AWS, FinOps y seguridad enterprise, abordo la ingeniería cloud con profundidad analítica y no a prueba y error.',
    'about.highlight1.title': 'Investigador académico',
    'about.highlight1.text': 'Sistemas Distribuidos, Algoritmos y Teoría de la Computación en UNLP.',
    'about.highlight2.title': 'Seguridad enterprise',
    'about.highlight2.text': 'Ex-Consultor de Deloitte en Cyber Security enfocado en controles y auditorías.',
    'about.highlight3.title': '8+ años en AWS',
    'about.highlight3.text': 'Arquitectura Cloud, SRE, FinOps y Terraform.',
    'about.highlight4.title': '100% independiente',
    'about.highlight4.text': 'Enfoque por hitos sin overhead de agencia.',
    'approach.eyebrow': 'Cómo trabajo',
    'approach.title': 'Un proceso estructurado y sin interrupciones.',
    'approach.step1.title': 'Descubrimiento y acceso de solo lectura',
    'approach.step1.text': 'Defino el alcance y configuro acceso IAM de solo lectura sin interrumpir a tu equipo de ingeniería.',
    'approach.step2.title': 'Auditoría e investigación independiente',
    'approach.step2.text': 'Análisis profundo, evaluaciones de seguridad o prototipado en Terraform se hace de forma independiente.',
    'approach.step3.title': 'Entrega y walkthrough',
    'approach.step3.text': 'ADRs, reportes o código listo para producción, seguidos por una walkthrough ejecutiva.',
    'faq.eyebrow': 'Preguntas frecuentes',
    'faq.title': 'Respuestas claras antes de empezar.',
    'cta.eyebrow': 'Hacé más fácil tu próxima decisión de infraestructura',
    'cta.title': '¿Listo para auditar o refactorizar tu infraestructura AWS?',
    'cta.button': 'Reservar llamada de diagnóstico',
    'engineers.eyebrow': 'Solo Devs & Carrera Técnica',
    'engineers.title': 'Solo Devs & Carrera Técnica',
    'engineers.subtitle': 'Mentoría 1-a-1, Simulacros de Entrevistas & Asesoría Técnica Avanzada',
    'engineers.description': 'Orientación directa y personalizada para acelerar tu carrera, dominar diseño de sistemas distribuidos y destrabar desafíos técnicos junto a un docente e investigador universitario en computación.',
    'engineers.tab1.label': 'Mentoría',
    'engineers.tab1.badge': 'Sesión de 60 min • En vivo 1-a-1',
    'engineers.tab1.title': 'Mentoría de carrera y salto a seniority',
    'engineers.tab1.description': 'Mentoring individual para desarrolladores mid/senior que buscan dar el salto a roles lead o arquitecto. Definimos tu mapa de carrera, reforzamos tu criterio técnico y pulimos tu toma de decisiones.',
    'engineers.tab1.deliverable1': 'Videollamada interactiva de 60 minutos',
    'engineers.tab1.deliverable2': 'Hoja de ruta personalizada y plan de acción inmediato',
    'engineers.tab1.deliverable3': 'Grabación de la llamada + resumen escrito de recomendaciones',
    'engineers.tab1.price': '$80 USD / Sesión',
    'engineers.tab2.label': 'System design',
    'engineers.tab2.badge': 'Sesión de 60 min • práctica en vivo',
    'engineers.tab2.title': 'System design y simulacro de entrevista',
    'engineers.tab2.description': 'Simulacro realista de entrevista técnica enfocado en diseño de sistemas, concurrencia y arquitectura cloud en AWS. Aprendé a evaluar compromisos (trade-offs) y justificar tus decisiones de diseño.',
    'engineers.tab2.deliverable1': '45 min de ejercicio práctico de system design + 15 min de feedback directo',
    'engineers.tab2.deliverable2': 'Reporte de evaluación escrito (arquitectura, comunicación y criterio)',
    'engineers.tab2.deliverable3': 'Material y recursos de estudio recomendados',
    'engineers.tab2.price': '$90 USD / Sesión',
    'engineers.tab3.label': 'Asesoría técnica',
    'engineers.tab3.badge': 'Sesión de 60 min • resolución técnica',
    'engineers.tab3.title': 'Asesoría en sistemas distribuidos y CS avanzado',
    'engineers.tab3.description': 'Sesión individual puntual para destrabar problemas técnicos complejos. Ideal para profundizar en modelos de concurrencia, algoritmos distribuidos o temas de investigación universitaria.',
    'engineers.tab3.deliverable1': 'Revisión previa de material/código antes de la videollamada',
    'engineers.tab3.deliverable2': '60 minutos dedicados a resolver el problema técnico',
    'engineers.tab3.deliverable3': 'Diagramas de arquitectura o notas técnicas post-sesión',
    'engineers.tab3.price': '$75 USD / Sesión'
  },
  jp: {
    'nav.services': 'サービス',
    'nav.enterprise': '企業向け',
    'nav.builders': 'スタートアップ向け',
    'nav.engineers': 'エンジニア向け',
    'nav.about': 'プロフィール',
    'nav.faq': 'FAQ',
    'hero.badge': 'リモート対応 <span class="mx-2 text-paper/30">&bull;</span> クラウドと設計の相談',
    'hero.title': 'AWS <em>クラウド</em>設計とセキュリティの相談',
    'hero.description': 'システム設計、AWSのコスト削減、セキュリティ監査を手伝います。個人開発者から企業まで対応します。',
    'hero.primaryCta': '相談を予約する',
    'hero.secondaryCta': 'サービスを見る',
    'problems.eyebrow': '転換点',
    'problems.title': 'AWSの普通の設定では、足りなくなるとき。',
    'problems.card1.title': 'クラウド料金が高くなる',
    'problems.card1.text': '自動スケール、サーバーのサイズ、使っていないリソースを確認します。',
    'problems.card2.title': 'セキュリティの問題',
    'problems.card2.text': 'IAM権限、信頼関係、権限の広がり方を確認します。',
    'problems.card3.title': '古い設定が残る',
    'problems.card3.text': '手作業の変更で、同じインフラを作れなくなる問題です。',
    'services.eyebrow': '内容と料金が明確なサービス',
    'services.title': '複雑になる前に、明確に。',
    'services.description': '経験にもとづく判断と、役に立つ資料を提供します。',
    'enterprise.eyebrow': '会社・大規模システム向け',
    'enterprise.focus': 'AWSの監査、コスト削減、設計資料、インフラ改善を行います。',
    'builders.eyebrow': 'スタートアップ・小さな会社・AI開発者向け',
    'builders.focus': '個人開発者やAIツールを使うチームが、安全に本番環境へ進めるようにします。',
    'cards.enterprise.security.badge': '1〜2週間 <span>&bull;</span> 固定範囲',
    'cards.enterprise.security.title': 'AWSセキュリティとIAM監査',
    'cards.enterprise.security.description': 'IAM権限、KMSキー、コンテナのネットワークを確認します。',
    'cards.enterprise.security.deliverable1': 'リスク一覧',
    'cards.enterprise.security.deliverable2': '監査レポート',
    'cards.enterprise.security.deliverable3': '改善計画',
    'cards.enterprise.finops.badge': '2週間 <span>&bull;</span> 固定範囲',
    'cards.enterprise.finops.title': 'FinOpsとAWSコスト削減',
    'cards.enterprise.finops.description': 'AWSの費用、使っていないリソース、サイズ、オートスケールを確認します。',
    'cards.enterprise.finops.deliverable1': 'コスト削減レポート',
    'cards.enterprise.finops.deliverable2': '異常コストのアラート',
    'cards.enterprise.finops.deliverable3': '実行ロードマップ',
    'cards.enterprise.iac.badge': '3〜4週間 <span>&bull;</span> PoC / 移行',
    'cards.enterprise.iac.title': 'レガシー環境をTerraformへ移行',
    'cards.enterprise.iac.description': 'AWSコンソールの手作業を、再利用できるTerraformコードにします。',
    'cards.enterprise.iac.deliverable1': 'テスト済みTerraformモジュール',
    'cards.enterprise.iac.deliverable2': '状態管理の設定',
    'cards.enterprise.iac.deliverable3': '設計判断の記録',
    'cards.enterprise.advisory.badge': '月額リテイナー <span>&bull;</span> 月5〜10時間',
    'cards.enterprise.advisory.title': 'アーキテクチャ相談とメンタリング',
    'cards.enterprise.advisory.description': '重要なインフラ判断をするチームに、継続的な設計支援を行います。',
    'cards.enterprise.advisory.deliverable1': 'アーキテクチャレビュー',
    'cards.enterprise.advisory.deliverable2': '非同期の技術相談',
    'cards.enterprise.advisory.deliverable3': '集中メンタリングセッション',
    'cards.builders.deploy.badge': '1週間',
    'cards.builders.deploy.title': '本番環境へのデプロイ',
    'cards.builders.deploy.description': 'ECS/Docker、SSL、独自ドメイン、安全な環境変数をAWSに設定します。',
    'cards.builders.deploy.deliverable1': '本番環境の設定',
    'cards.builders.deploy.deliverable2': 'CI/CD パイプライン',
    'cards.builders.deploy.deliverable3': '環境変数とシークレットの分離',
    'cards.builders.guardrails.badge': '早い監査（3〜5日）',
    'cards.builders.guardrails.title': 'AIコストのガードレールとセキュリティ診断',
    'cards.builders.guardrails.description': 'AWSやLLMの費用増加を防ぎ、露出したAPIキーや重要なIAM問題を早く見つけます。',
    'cards.builders.guardrails.deliverable1': 'IAMポリシーの強化',
    'cards.builders.guardrails.deliverable2': 'API利用額の制限',
    'cards.builders.guardrails.deliverable3': 'コードセキュリティレビュー',
    'cards.builders.session.badge': '60分の相談',
    'cards.builders.session.title': '1-on-1 アーキテクチャ相談',
    'cards.builders.session.description': 'デプロイの問題解消、設計レビュー、技術スタックの選定のためのビデオ通話です。',
    'cards.builders.session.deliverable1': '60分の録画付き相談',
    'cards.builders.session.deliverable2': '要点メモ付きのまとめ',
    'cards.builders.session.deliverable3': '明確な次のアクション',
    'about.eyebrow': '仕事の背景',
    'about.title': '学術的な厳密さと産業インフラ設計の融合',
    'about.bio': '私は<strong>Jose Felipe Arcidiacono</strong>です。Senior Cloud Architect、コンピュータサイエンス研究者、UNLPの大学講師です。',
    'about.description': 'AWSインフラ、FinOps、エンタープライズセキュリティを8年以上扱っており、試行錯誤ではなく、分析的な深さで設計を進めます。',
    'about.highlight1.title': '研究者',
    'about.highlight1.text': 'UNLPで分散システム、アルゴリズム、計算理論を研究。',
    'about.highlight2.title': '企業向けセキュリティ',
    'about.highlight2.text': 'Deloitteのサイバーセキュリティ経験を活かし、監査と制御を重視。',
    'about.highlight3.title': 'AWS 8年超',
    'about.highlight3.text': 'クラウド設計、SRE、FinOps、Terraformを実務で経験。',
    'about.highlight4.title': '完全独立',
    'about.highlight4.text': 'プロジェクト単位の集中支援、エージェンシー不要。',
    'approach.eyebrow': '進め方',
    'approach.title': 'チームを止めない、明確な進め方。',
    'approach.step1.title': '要件整理と読み取り専用アクセス',
    'approach.step1.text': 'スコープを固め、チームを止めずにセキュアな読み取り専用IAMで確認を進めます。',
    'approach.step2.title': '独立した監査とプロトタイプ',
    'approach.step2.text': '深い分析、セキュリティ評価、Terraformプロトタイプを独立して実行します。',
    'approach.step3.title': '提案と共有',
    'approach.step3.text': 'ADRs、レポート、実装可能なコードをまとめ、経営層向けに分かりやすく共有します。',
    'faq.eyebrow': 'よくある質問',
    'faq.title': '始める前に、よくある質問。',
    'cta.eyebrow': '次のインフラ判断をもっと簡単に',
    'cta.title': 'AWSの監査やリファクタリングの準備はできていますか？',
    'cta.button': '診断を予約する',
    'engineers.eyebrow': 'エンジニア向け 1-on-1 アドバイザリー',
    'engineers.title': 'エンジニア向け 1-on-1 アドバイザリー',
    'engineers.subtitle': 'キャリアメンターシップ・システムデザイン模擬面接・技術指導',
    'engineers.description': '大学の研究者およびシニアクラウドアーキテクトによる、キャリアアップや分散システム・システム設計のための個別指導セッションです。',
    'engineers.tab1.label': 'キャリア',
    'engineers.tab1.badge': '60分セッション • 1-on-1 ライブ',
    'engineers.tab1.title': 'キャリア & シニアリティ・メンターシップ',
    'engineers.tab1.description': 'シニアエンジニアやテックリードを目指す開発者のための個別キャリアコーチング。技術的ロードマップの策定や意思決定スキルの向上をサポートします。',
    'engineers.tab1.deliverable1': '60分間の個別オンラインセッション',
    'engineers.tab1.deliverable2': '個別キャリアロードマップとアクションプラン',
    'engineers.tab1.deliverable3': '録画データ ＋ 要約レポート',
    'engineers.tab1.price': '$80 USD / 回',
    'engineers.tab2.label': 'System Design',
    'engineers.tab2.badge': '60分セッション • 実践トレーニング',
    'engineers.tab2.title': 'システムデザイン 模擬面接',
    'engineers.tab2.description': 'システム設計（System Design）、分散システム、AWSアーキテクチャに特化した実践的な模擬面接。設計上のトレードオフの評価と明確な説明方法を学びます。',
    'engineers.tab2.deliverable1': '45分間のシステム設計課題 ＋ 15分間のフィードバック',
    'engineers.tab2.deliverable2': '詳細評価レポート（アーキテクチャ視点・コミュニケーション評価）',
    'engineers.tab2.deliverable3': 'おすすめの学習資料',
    'engineers.tab2.price': '$90 USD / 回',
    'engineers.tab3.label': '技術相談',
    'engineers.tab3.badge': '60分セッション • 技術課題解決',
    'engineers.tab3.title': '分散システム & コンピュータサイエンス技術相談',
    'engineers.tab3.description': '複雑な技術課題や高度なコンピュータサイエンス（並行処理、分散システム、アルゴリズム）の質問に答える個別セッションです。',
    'engineers.tab3.deliverable1': '事前資料・コードの事前確認',
    'engineers.tab3.deliverable2': '60分間の技術相談・解説',
    'engineers.tab3.deliverable3': 'セッション後の技術メモ・図解',
    'engineers.tab3.price': '$75 USD / 回'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const menuButton = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu?.classList.toggle('hidden', isOpen);
    menuButton.innerHTML = `<i data-lucide="${isOpen ? 'menu' : 'x'}" class="h-5 w-5"></i>`;
    lucide.createIcons();
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton?.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.add('hidden');
    });
  });

  document.querySelector('[data-year]').textContent = new Date().getFullYear();

  const setLanguage = (language) => {
    document.documentElement.lang = language === 'jp' ? 'ja' : language;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = translations[language]?.[element.dataset.i18n];
      if (value) element.innerHTML = value;
    });

    const servicePrices = {
      en: ['$800 <small>USD</small>', '$1,200 <small>USD</small>', '$2,500 <small>USD</small>', '$600 <small>USD / month</small>', '$500 <small>USD</small>', '$400 <small>USD</small>', '$150 <small>USD / session</small>'],
      es: ['$800 <small>USD</small>', '$1,200 <small>USD</small>', '$2,500 <small>USD</small>', '$600 <small>USD / mes</small>', '$500 <small>USD</small>', '$400 <small>USD</small>', '$150 <small>USD / sesión</small>'],
      jp: ['$800 <small>USD</small>', '$1,200 <small>USD</small>', '$2,500 <small>USD</small>', '$600 <small>USD / 月</small>', '$500 <small>USD</small>', '$400 <small>USD</small>', '$150 <small>USD / セッション</small>']
    };
    document.querySelectorAll('.service-card .service-bottom strong').forEach((element, index) => {
      element.innerHTML = servicePrices[language][index] || element.innerHTML;
    });

    const serviceBadges = {
      en: ['1–2 Weeks <span>&bull;</span> Fixed Scope', '2 Weeks <span>&bull;</span> Fixed Scope', '3–4 Weeks <span>&bull;</span> PoC / Migration', 'Monthly Retainer <span>&bull;</span> 5–10 hrs / month', '1 Week Engagement', 'Fast Audit (3–5 Days)', '60-Min Live Session'],
      es: ['1–2 semanas <span>&bull;</span> Alcance fijo', '2 semanas <span>&bull;</span> Alcance fijo', '3–4 semanas <span>&bull;</span> PoC / Migración', 'Retainer mensual <span>&bull;</span> 5–10 hs / mes', 'Trabajo de 1 semana', 'Auditoría rápida (3–5 días)', 'Llamada de 60 min'],
      jp: ['1〜2週間 <span>&bull;</span> 固定範囲', '2週間 <span>&bull;</span> 固定範囲', '3〜4週間 <span>&bull;</span> PoC / 移行', '月額リテイナー <span>&bull;</span> 月5〜10時間', '1週間', '早い監査（3〜5日）', '60分の相談']
    };
    document.querySelectorAll('.service-card .pill').forEach((element, index) => {
      element.innerHTML = serviceBadges[language][index] || element.innerHTML;
    });

    const cardButtonLabels = {
      en: ['Request security audit', 'Optimize AWS spend', 'Start IaC migration', 'Apply for advisory', 'Deploy the product', 'Request security check', 'Book advisory session', 'Book mentorship call', 'Schedule mock interview', 'Book technical advisory'],
      es: ['Request security audit', 'Optimize AWS spend', 'Start IaC migration', 'Apply for advisory', 'Deploy the product', 'Request security check', 'Book advisory session', 'Book mentorship call', 'Schedule mock interview', 'Book technical advisory'],
      jp: ['セキュリティ監査を依頼する', 'AWSのコスト最適化を依頼する', 'IaC移行を開始する', 'アドバイザリーを依頼する', 'プロダクトをデプロイする', 'セキュリティ診断を依頼する', 'アドバイザリー相談を予約する', 'メンタリング相談を予約する', '模擬面接を予約する', '技術相談を予約する']
    };
    document.querySelectorAll('.service-card a[aria-label]').forEach((element, index) => {
      const label = cardButtonLabels[language]?.[index];
      if (label) element.setAttribute('aria-label', label);
    });

    const faqCopy = {
      en: [
        ['What payment methods do you accept for international clients?', 'I accept international USD bank transfers (ACH/Wire) and payments via standard contractor platforms (Deel, Wise, Payoneer). For clients based in South America/Argentina, local direct transfers with regional invoicing are also available.'],
        ['How are engagements structured?', 'All services are <strong>fixed-scope, time-boxed engagements</strong>. You get clear, actionable deliverables: production-ready Terraform modules, security assessment matrices, or step-by-step FinOps roadmaps without hidden hourly costs.'],
        ['Do you offer follow-up implementation support?', 'After the initial diagnosis, I can coordinate technical implementation, ongoing support, or team mentoring through a monthly retainer or a milestone-based project.']
      ],
      es: [
        ['¿Aceptás pagos locales en pesos (Argentina) o únicamente dólares?', 'Aceptamos pagos locales por transferencia bancaria en pesos (CBU/CVU). Si estás en Argentina, aplicamos una <strong>bonificación especial por pago directo</strong> sobre la cotización del dólar MEP/Cripto del día. También podés abonar en USD a través de transferencia internacional o plataformas habilitadas.'],
        ['¿Cómo es la modalidad de contratación y los entregables?', 'Trabajo bajo la modalidad de <strong>engagements acotados con alcance cerrado (Fixed-Scope)</strong>. Al finalizar la auditoría o consultoría, recibís el código IaC (Terraform), informes de seguridad/costos y las notas técnicas de arquitectura (ADRs) listas para aplicar.'],
        ['¿Qué pasa si necesito ayuda para implementar los cambios después de la consultoría?', 'Si luego del diagnóstico requerís horas de ejecución, acompañamiento técnico o mentoría para tu equipo, podemos coordinar un esquema mensual (<em>retainer</em>) o un proyecto a medida por hitos.']
      ],
      jp: [
        ['レポートや成果物の言語は何ですか？', '打ち合わせやメールは<strong>日本語（やさしい日本語）</strong>または<strong>英語</strong>で対応できます。技術レポート、Terraformコード、構成図などの成果物は、国際標準の<strong>英語</strong>で作成します。'],
        ['どのような形態で依頼できますか？', '単発の<strong>セキュリティ監査・コスト最適化</strong>（1〜2週間）から、定期的な<strong>アーキテクチャ相談</strong>（月額）まで対応します。すべてフルリモートで行います。'],
        ['実装支援もできますか？', '診断後に、実装作業、継続的な技術支援、チーム向けのメンタリングを、月額リテイナーまたはマイルストーン型のプロジェクトで対応できます。']
      ]
    };

    document.querySelectorAll('.faq-item').forEach((item, index) => {
      const copy = faqCopy[language]?.[index];
      if (!copy) {
        item.hidden = true;
        return;
      }
      item.hidden = false;
      item.querySelector('summary').textContent = copy[0];
      item.querySelector('p').innerHTML = copy[1];
    });

    document.querySelectorAll('[data-language]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.language === language);
    });

    localStorage.setItem('preferred-language', language);
  };

  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanels = document.querySelectorAll('.tab-panel');

  const activateTab = (targetId) => {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tabTarget === targetId;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });
    tabPanels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });
  };

  const applyTabFromHash = () => {
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash.startsWith('solutions')) {
      if (tabButtons.length) activateTab(tabButtons[0].dataset.tabTarget);
      return;
    }

    const params = hash.includes('?') ? new URLSearchParams(hash.split('?')[1]) : null;
    const tab = params ? params.get('tab') : null;
    const targetId = tab ? `solutions-${tab}` : 'solutions-enterprise';

    if (document.getElementById(targetId)) {
      activateTab(targetId);
      const section = document.getElementById('solutions');
      if (section && hash.includes('?')) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => activateTab(button.dataset.tabTarget));
  });

  document.querySelectorAll('[data-solution-tab]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const tab = link.dataset.solutionTab;
      const targetId = `solutions-${tab}`;
      if (!targetId || !document.getElementById(targetId)) return;

      event.preventDefault();
      history.replaceState(null, '', `#solutions?tab=${tab}`);
      activateTab(targetId);
      document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (tabButtons.length) {
    const defaultTarget = tabButtons[0].dataset.tabTarget;
    activateTab(defaultTarget);
    applyTabFromHash();
  }

  window.addEventListener('hashchange', applyTabFromHash);

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  setLanguage(localStorage.getItem('preferred-language') || 'en');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
});
