import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

import {
  BookOpen,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  GraduationCap,
  Target,
  CheckCircle,
  Brain,
  FileText,
  Video,
  Globe,
  MessageSquare,
  HelpCircle,
  Zap,
  Calculator,
  Trophy,
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Smartphone,
  Menu,
  X,
  Plus,
  Minus,
  Shield,
  Monitor,
  Settings,
  Database,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Cours Interactifs",
      description: "Contenu pédagogique adapté à chaque niveau et filière",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Communauté Active",
      description: "Échangez avec d'autres étudiants et enseignants",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Suivi des Progrès",
      description: "Analysez vos performances et identifiez vos points forts",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Admissions & Bourses",
      description:
        "Trouvez des opportunités d'études et de financement dans le monde entier",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Apprentissage Structuré",
      description:
        "Programme progressif et accompagné pour réussir chaque étape",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Pédagogique",
      description:
        "Recommandations personnalisées grâce à une intelligence artificielle",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Vidéos de Cours",
      description:
        "Supports visuels pour faciliter la compréhension des notions clés",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Support Réactif",
      description:
        "Une assistance disponible pour répondre à toutes vos questions",
    },
  ];
  const faqs = [
    {
      q: "Qu'est-ce que Hoom ?",
      a: "Hoom est une application éducative destinée aux élèves et étudiants francophones. Elle propose des quiz, des cours, des annales et des exercices pratiques alignés sur le programme du Bac, ainsi qu'un tuteur intelligent pour guider les révisions.",
    },
    {
      q: "Comment télécharger et installer l'application ?",
      a: "Hoom est disponible sur Google Play et l'App Store. Recherchez \"Hoom\", téléchargez l'application, puis suivez les instructions pour créer votre compte.",
    },
    {
      q: "Quels sont les contenus disponibles ?",
      a: "Fiches de révision, quiz interactifs, exercices corrigés, sujets des années précédentes, conseils d'examens, et modules de micro-apprentissage ajoutés régulièrement.",
    },
    {
      q: "Comment fonctionne le paiement via Waafi ?",
      a: "Pour activer l'accès complet, envoyez le montant de l'abonnement au numéro Waafi : 77219608. Indiquez votre nom d'utilisateur ou numéro de téléphone dans le message. Après réception, vous recevrez une clé de produit par SMS ou e-mail à saisir dans l'app.",
    },
    {
      q: "Combien coûte l'abonnement ?",
      a: "Plusieurs formules (mensuelle, semestrielle, familiale). Les tarifs sont visibles dans l'application. Le contenu de base est gratuit, l'abonnement Premium débloque tous les cours et exercices. Nous offrons des prix réduits aux étudiants, bien inférieurs au marché.",
    },
    {
      q: "En combien de temps vais-je recevoir ma clé après paiement ?",
      a: "Généralement sous 24 heures après le paiement Waafi. Si vous ne recevez rien passé ce délai, contactez le support.",
    },
    {
      q: "Que se passe-t-il si je perds ma clé de produit ?",
      a: "Contactez l'assistance Hoom avec les détails du paiement (numéro Waafi et date). Nous vérifierons l'opération et vous fournirons une nouvelle clé.",
    },
    {
      q: "Puis-je accéder à l'application hors connexion ?",
      a: "Oui. Vous pouvez télécharger des cours/exercices pour les consulter offline. La progression se synchronise dès le retour en ligne.",
    },
    {
      q: "L'application est-elle sécurisée pour les mineurs ?",
      a: "Hoom intègre des contrôles parentaux et respecte la protection des données. Pas de publicité intrusive ni de contenu inapproprié.",
    },
    {
      q: "Qui contacter en cas de problème ?",
      a: "Support : info@hoom.space • Téléphone/WhatsApp : 77219608 • Et sur nos réseaux sociaux officiels.",
    },
  ];

  const terminalServices = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Résumés de Cours",
      description: "Synthèses complètes de tous vos cours",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Cours Complets",
      description: "Leçons détaillées par matière et chapitre",
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Travaux Pratiques",
      description: "TP guidés avec corrections détaillées",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Annales du Bac",
      description: "Sujets des années précédentes avec corrigés",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "IA de Suivi",
      description: "Intelligence artificielle pour votre progression",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "QCM Interactifs",
      description: "Quiz adaptatifs pour tester vos connaissances",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Exercices Ciblés",
      description: "Entraînements personnalisés par difficulté",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Vidéos de Cours",
      description: "Contenus visuels pour mieux comprendre",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Sujets Type Bac",
      description: "Préparation intensive aux épreuves",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Bourses Mondiales",
      description: "Opportunités de financement partout dans le monde",
    },
  ];

  const neuviemeServices = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Cours Résumés",
      description:
        "Fiches synthétiques pour chaque chapitre de math, SVT et physique",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Vidéos Interactives",
      description:
        "Explications animées pour mieux comprendre les notions clés",
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Quiz & QCM",
      description: "Testez vos connaissances par matière et par chapitre",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Exercices Ciblés",
      description: "Entraînement par niveau de difficulté pour bien progresser",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Fiches de Révision",
      description: "Tout ce qu'il faut retenir avant les contrôles",
    },
  ];

  const universityServices = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Résumés de Cours",
      description: "Synthèses par matière et spécialité",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Travaux Dirigés",
      description: "TD corrigés et expliqués étape par étape",
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Travaux Pratiques",
      description: "TP avec protocoles et analyses",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Contrôle Continu",
      description: "Préparation aux évaluations régulières",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Contrôle Final",
      description: "Révisions intensives pour les examens",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Bourses d'Études",
      description: "Financements et opportunités internationales",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Forums Étudiants",
      description: "Communauté d'entraide et de partage",
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Aide aux Projets",
      description: "Accompagnement personnalisé pour vos projets",
    },
  ];

  const testimonials = [
    {
      name: "Ayan Mohamed",
      role: "Terminale S",
      content:
        "Grâce à Hoom, j'ai mieux compris les mathématiques et les sciences. Les QCM et les vidéos m'ont beaucoup aidée.",
      rating: 5,
    },
    {
      name: "Youssouf Ali",
      role: "L1 informatique",
      content:
        "La plateforme est très utile pour les révisions. Les cours sont clairs, bien structurés et faciles d'accès.",
      rating: 5,
    },
    {
      name: "Fatouma Hassan",
      role: "Terminale ES",
      content:
        "J'adore l'interface et les fonctionnalités. C'est motivant et vraiment adapté à notre programme.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "100+", label: "Étudiants" },
    { number: "20+", label: "Cours" },
    { number: "98%", label: "Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  const itServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Antivirus Kaspersky",
      description:
        "Installation et configuration complète de Kaspersky pour protéger votre PC contre les menaces",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Changement de Système",
      description:
        "Installation et migration vers Windows, Linux ou tout autre système d'exploitation",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Résolution de Problèmes",
      description:
        "Dépannage et réparation de problèmes logiciels et système de votre ordinateur",
      image:
        "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Récupération de Données",
      description:
        "Restauration de fichiers supprimés depuis PC, téléphones et disques externes",
      image:
        "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
    },
  ];

  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const toggleFaq = (i: number) =>
    setOpenFaqs((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-[#2196F3]" />
              <span className="text-2xl font-bold text-[#333333]">Hoom</span>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                {menuOpen ? (
                  <X className="w-6 h-6 text-gray-800" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800" />
                )}
              </button>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#lycee"
                className="text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Lycée
              </a>
              <a
                href="#universite"
                className="text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Université
              </a>
              <a
                href="#it-services"
                className="text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Services IT
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Fonctionnalités
              </a>
              <a
                href="#temoignages"
                className="text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Témoignages
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                FAQ
              </a>

              <a
                href="#contact"
                className="text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:block text-sm text-gray-600">
              Plateforme éducative pour votre réussite
            </div>
          </div>

          {menuOpen && (
            <nav className="md:hidden mt-2 space-y-2 pb-4 border-t pt-4">
              <a
                href="#lycee"
                className="block text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Lycée
              </a>
              <a
                href="#universite"
                className="block text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Université
              </a>
              <a
                href="#it-services"
                className="block text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Services IT
              </a>
              <a
                href="#features"
                className="block text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Fonctionnalités
              </a>
              <a
                href="#temoignages"
                className="block text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Témoignages
              </a>
              <a
                href="#faq"
                className="block text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                FAQ
              </a>

              <a
                href="#contact"
                className="block text-gray-700 hover:text-[#2196F3] transition-colors"
              >
                Contact
              </a>
              <div className="text-sm text-gray-600 mt-2">
                Plateforme éducative pour votre réussite
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative h-[850px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#2196F3]/80 via-[#2196F3]/70 to-[#1976D2]/80" />

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#FF9800] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-[#FF9800] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-60 left-1/2 w-1 h-1 bg-[#FF9800] rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Votre réussite scolaire
            <span className="text-[#FF9800] block">commence ici</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Hoom accompagne les lycéens et les étudiants universitaires vers
            l'excellence académique avec des cours personnalisés, des outils
            innovants et des services informatiques professionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2196F3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 shadow-lg">
              <span>Commencer gratuitement</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setShowVideo(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2196F3] transition-colors"
            >
              Découvrir la plateforme
            </button>
          </div>
        </div>
      </section>

      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/eBJy18teKXo?autoplay=1"
              title="Hoom Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-2xl bg-black/50 px-3 py-1 rounded hover:bg-black/70"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-[#2196F3] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">
              Pourquoi choisir Hoom ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une plateforme complète conçue pour maximiser vos chances de
              réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-[#2196F3] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-[#FF9800] mr-3" />
                <h3 className="text-2xl font-bold text-[#333333]">9e Année</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Prépare-toi pour le brevet avec des ressources interactives et
                adaptées à ton niveau.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                {neuviemeServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-[#FF9800] mt-1">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-[#333333] text-sm">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="bg-[#FF9800] text-white px-6 py-3 rounded-lg hover:bg-[#F57C00] transition-colors">
                Explorer les services 9e
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#2196F3] mr-3" />
                <h3 className="text-2xl font-bold text-[#333333]">Terminale</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Préparez-vous efficacement au bac avec nos contenus interactifs.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                {terminalServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-[#2196F3] mt-1">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-[#333333] text-sm">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="bg-[#2196F3] text-white px-6 py-3 rounded-lg hover:bg-[#1976D2] transition-colors">
                Explorer Terminale
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-[#FF9800] mr-3" />
                <h3 className="text-2xl font-bold text-[#333333]">
                  Université
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Ressources pour réussir à l'université avec des outils adaptés.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                {universityServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-[#FF9800] mt-1">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-[#333333] text-sm">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="bg-[#FF9800] text-white px-6 py-3 rounded-lg hover:bg-[#F57C00] transition-colors">
                Explorer Université
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="it-services"
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF9800] rounded-2xl mb-6">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#333333] mb-4">
              Services Informatiques Hoom
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes pour tous vos besoins informatiques :
              réparation, installation, sécurité et récupération de données
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2196F3] group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Besoin d'une assistance technique ?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Notre équipe d'experts est prête à résoudre tous vos problèmes
              informatiques rapidement et efficacement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-[#2196F3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contactez-nous
              </a>
              <a
                href="https://wa.me/77219608"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2196F3] transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">
              Toutes les filières couvertes
            </h2>
            <p className="text-xl text-gray-600">
              Des ressources spécialisées pour chaque domaine d'études
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h4 className="font-semibold text-[#2196F3] mb-2">
                Sciences & Technologies
              </h4>
              <p className="text-[#1976D2] text-sm">
                Mathématiques, Physique, Chimie, Informatique
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <h4 className="font-semibold text-[#FF9800] mb-2">
                Médecine & Santé
              </h4>
              <p className="text-[#F57C00] text-sm">
                PACES, Médecine, Pharmacie, Kinésithérapie
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h4 className="font-semibold text-[#2196F3] mb-2">
                Économie & Gestion
              </h4>
              <p className="text-[#1976D2] text-sm">
                Économie, Commerce, Management, Finance
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <h4 className="font-semibold text-[#FF9800] mb-2">
                Lettres & Sciences Humaines
              </h4>
              <p className="text-[#F57C00] text-sm">
                Littérature, Histoire, Philosophie, Langues
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="temoignages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">
              Ce que disent nos étudiants
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les témoignages de ceux qui ont réussi avec Hoom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#FF9800] fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-[#333333]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2196F3] to-[#1976D2]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à transformer votre parcours scolaire ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des milliers d'étudiants qui ont choisi Hoom pour réussir
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2196F3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Essai gratuit 7 jours
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2196F3] transition-colors">
              Demander une démo
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#333333] mb-6">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Une question ? Besoin d'assistance ? Notre équipe est là pour vous
            aider.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-12">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#2196F3] mt-1" />
              <div>
                <h4 className="font-semibold text-[#333333]">Email</h4>
                <p className="text-gray-600">info@hoom.space</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#2196F3] mt-1" />
              <div>
                <h4 className="font-semibold text-[#333333]">Téléphone</h4>
                <p className="text-gray-600">77219608</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageCircle className="w-6 h-6 text-[#FF9800] mt-1" />
              <div>
                <h4 className="font-semibold text-[#333333]">WhatsApp</h4>
                <p className="text-gray-600">77219608</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#2196F3] mt-1" />
              <div>
                <h4 className="font-semibold text-[#333333]">Adresse</h4>
                <p className="text-gray-600">
                  Djibouti, DJibouti-ville, Barwaqo 2
                </p>
              </div>
            </div>
          </div>

          <section id="faq" className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#333333] mb-3">
                  Questions fréquentes
                </h2>
                <p className="text-gray-600">
                  Tout ce qu'il faut savoir pour bien démarrer avec Hoom
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((item, i) => {
                  const isOpen = openFaqs.includes(i);
                  return (
                    <div
                      key={i}
                      className={`border border-gray-200 rounded-xl transition-colors ${
                        isOpen ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(i)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="text-base md:text-lg font-semibold text-[#333333]">
                          {item.q}
                        </span>
                        <span className="shrink-0 text-gray-500">
                          {isOpen ? (
                            <Minus className="w-5 h-5" aria-hidden="true" />
                          ) : (
                            <Plus className="w-5 h-5" aria-hidden="true" />
                          )}
                        </span>
                      </button>

                      <div
                        className={`px-5 pb-4 transition-all duration-300 ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                        <p className="text-gray-700 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2196F3] text-white font-semibold hover:bg-[#1976D2] transition-colors"
                >
                  Besoin d'aide ? Contactez le support
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <footer className="bg-[#333333] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-8 h-8 text-[#2196F3]" />
                <span className="text-2xl font-bold">Hoom</span>
              </div>
              <p className="text-gray-400 mb-4">
                La plateforme éducative qui accompagne votre réussite scolaire.
              </p>

              <div className="mb-6">
                <h5 className="text-sm font-semibold mb-3 text-gray-300">
                  Suivez-nous
                </h5>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/hoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#2196F3] transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/hoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF9800] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/hoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#2196F3] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@hoom_edtech?_t=ZM-8yoO6yHn45t&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Video className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com/@hoom-edtech?si=Uh5Nk0MM1QII3HKG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF9800] transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/hoom-edtech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#2196F3] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold mb-3 text-gray-300">
                  Téléchargez l'app
                </h5>
                <div className="flex flex-col space-y-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.hoom.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors"
                  >
                    <Smartphone className="w-4 h-4 text-[#FF9800]" />
                    <div className="text-xs">
                      <div className="text-gray-300">Disponible sur</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </a>
                  <a
                    href="https://apps.apple.com/app/hoom/id123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors"
                  >
                    <Smartphone className="w-4 h-4 text-[#2196F3]" />
                    <div className="text-xs">
                      <div className="text-gray-300">Télécharger sur</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Éducation</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Lycée
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Université
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Préparation Bac
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Orientation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Aide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tutoriels
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Carrières
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Presse
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partenaires
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hoom. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
