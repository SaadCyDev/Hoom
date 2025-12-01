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
  Sparkles,
  Award,
  PlayCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import im from "../public/hero.webp";
import logow from "./icon4.png";

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const phrases = [
    "Votre Réussite Scolaire",
    "l'Excellence Académique",
    "Réussir Vos Examens",
    "votre Progression",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change toutes les 3 secondes
    return () => clearInterval(interval);
  }, [phrases.length]); // Dépendance à phrases.length

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Cours Interactifs",
      description: "Contenu pédagogique adapté à chaque niveau et filière",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Communauté Active",
      description: "Échangez avec d'autres étudiants et enseignants",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Suivi des Progrès",
      description: "Analysez vos performances et identifiez vos points forts",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Admissions & Bourses",
      description:
        "Trouvez des opportunités d'études et de financement dans le monde entier",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Apprentissage Structuré",
      description:
        "Programme progressif et accompagné pour réussir chaque étape",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Pédagogique",
      description:
        "Recommandations personnalisées grâce à une intelligence artificielle",
      gradient: "from-fuchsia-500 to-purple-500",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Vidéos de Cours",
      description:
        "Supports visuels pour faciliter la compréhension des notions clés",
      gradient: "from-violet-500 to-indigo-500",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Support Réactif",
      description:
        "Une assistance disponible pour répondre à toutes vos questions",
      gradient: "from-lime-500 to-green-500",
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
    { number: "600+", label: "Étudiants", icon: <Users className="w-6 h-6" /> },
    { number: "20+", label: "Cours", icon: <BookOpen className="w-6 h-6" /> },
    {
      number: "98%",
      label: "Satisfaction",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Support",
      icon: <MessageSquare className="w-6 h-6" />,
    },
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
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100"
            : "bg-white/80 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="relative p-3 rounded-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <img src={logow} className="w-8 h-8" alt="Hoom logo" />
                </div>
              </div>

              <span className="text-3xl font-bold bg-gradient-to-r from-[#2196F3] to-cyan-600 bg-clip-text text-transparent">
                Hoom
              </span>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 active:scale-95"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                    menuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-gray-800 top-3 transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                    menuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                />
              </div>
            </button>

            <nav className="hidden md:flex items-center space-x-2">
              {[
                { href: "#lycee", label: "Lycée" },
                { href: "#universite", label: "Université" },
                { href: "#it-services", label: "Services IT" },
                { href: "#features", label: "Fonctionnalités" },
                { href: "#temoignages", label: "Témoignages" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 rounded-xl text-gray-700 hover:text-[#2196F3] font-medium transition-all duration-300 group overflow-hidden"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2196F3]/10 to-cyan-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></span>
                </a>
              ))}
            </nav>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              menuOpen ? "max-h-96 py-4 border-t" : "max-h-0"
            }`}
          >
            <nav className="space-y-2">
              {[
                { href: "#lycee", label: "Lycée" },
                { href: "#universite", label: "Université" },
                { href: "#it-services", label: "Services IT" },
                { href: "#features", label: "Fonctionnalités" },
                { href: "#temoignages", label: "Témoignages" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:text-[#2196F3] hover:bg-blue-50 transition-all font-medium transform hover:translate-x-2 duration-300"
                  style={{
                    animation: menuOpen
                      ? `slideInLeft 0.3s ease-out ${idx * 0.1}s both`
                      : "none",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 md:py-20 bg-gradient-to-br from-white via-pink-50/50 to-white">
        {/* Abstract Background Shapes (Luxe Style) */}
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-orange-500 rounded-full blur-3xl opacity-40 transform translate-x-1/4 -translate-y-1/2 hidden lg:block"
          style={{ zIndex: 0 }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-gray-700 rounded-full blur-3xl opacity-10 hidden lg:block"
          style={{ zIndex: 0 }}
        ></div>

        {/* Contenu principal centré */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Colonne 2 : Le Texte et CTA (Gauche) */}
            <div className="w-full lg:w-1/2 order-1 lg:order-1 text-center lg:text-left text-gray-900">
              {/* Intro/Greeting */}

              {/* Titre */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                {/* Hoom est là pour */}
                <span
                  key={currentPhraseIndex} // La clé force le re-rendu, essentiel pour la transition CSS
                  className="block bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent transition-opacity duration-1000 animate-fade-in"
                >
                  {phrases[currentPhraseIndex]}
                </span>
              </h1>

              {/* Sous-titre */}
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
                Hoom est là pour vous accompagner vers la réussite, avec des
                sujets, des cours personnalisés, des QCM, des exercices et des
                annales spécialement conçus pour vous.
              </p>

              {/* Boutons d'Action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Bouton Primaire (Pink Luxe Style) */}
                <button className="group relative bg-gradient-to-r from-orange-600 to-fuchsia-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/50 transform hover:scale-105">
                  <span className="relative z-10">Démarrer l'App</span>
                  <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />
                </button>

                {/* Bouton Secondaire (Outline Style) */}
                <button
                  // onClick={() => setShowVideo(true)}
                  className="group relative border-2 border-gray-400 text-gray-800 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-gray-100 hover:border-pink-600 transform hover:scale-105"
                >
                  <PlayCircle className="w-5 h-5 mr-2 inline-block transition-transform" />
                  <span>Découvrir la plateforme</span>
                </button>
              </div>
            </div>

            {/* Colonne 1 : L'Image et les Cartes (Droite) */}
            <div className="w-full lg:w-1/2 order-2 lg:order-2 flex justify-center relative min-h-[500px]">
              {/* Large Abstract Shape behind the image */}
              <div
                className="absolute w-[450px] h-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full shadow-2xl"
                style={{
                  clipPath:
                    "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)",
                }}
              >
                <div
                  className="absolute inset-0 bg-pink-600 opacity-80 rounded-full"
                  style={{
                    clipPath:
                      "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)",
                  }}
                ></div>
              </div>

              {/* Main Image Card (floating a bit) */}
              <div className="p-2 bg-white rounded-[2rem] shadow-2xl max-w-sm w-full relative z-10 self-center">
                <img
                  src={im}
                  alt="Professeur africain souriant"
                  className="w-full h-auto object-cover rounded-[1.75rem]"
                />
              </div>

              {/* Floating Mini-Card 1: Projects/Courses */}
              <div className="absolute top-10 lg:top-20 right-10 transform translate-x-1/3 bg-white p-5 rounded-3xl shadow-xl flex items-center space-x-3 transition-all duration-300 hover:scale-105 cursor-pointer z-20">
                <div className="bg-pink-100 p-2 rounded-xl">
                  <BookOpen className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <span className="text-xl font-bold text-pink-600 block">
                    20+
                  </span>
                  <span className="text-gray-500 text-sm">
                    Cours & Matières
                  </span>
                </div>
              </div>

              {/* Floating Mini-Card 2: Satisfaction */}
              <div className="absolute bottom-10 left-10 transform -translate-x-1/3 bg-white p-5 rounded-3xl shadow-xl flex items-center space-x-3 transition-all duration-300 hover:scale-105 cursor-pointer z-20">
                <Star className="w-6 h-6 text-yellow-500" />
                <div>
                  <span className="text-xl font-bold text-gray-800 block">
                    4.8
                  </span>
                  <span className="text-gray-500 text-sm">Satisfaction</span>
                </div>
              </div>

              {/* Floating Mini-Card 3: Role/Label (Optional) */}
              <div className="absolute bottom-20 right-0 transform translate-x-1/4 bg-white p-5 rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer z-20">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <div>
                    <span className="font-bold text-gray-800 block">
                      Tuteur IA
                    </span>
                    <span className="text-gray-500 text-sm">
                      Disponible 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your original services section title, moved here to match Luxe style */}
        </div>
      </section>

      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full rounded-3xl shadow-2xl"
              src=""
              title="Hoom Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2196F3] rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2196F3]/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="text-[#2196F3] mb-4 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-[#2196F3] to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            {/* <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-100 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-[#2196F3] animate-pulse" />
              <span className="text-[#2196F3] font-bold">Pourquoi Hoom ?</span>
            </div> */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Une plateforme complète pour
              <span className="block mt-3 bg-gradient-to-r from-[#2196F3] to-cyan-600 bg-clip-text text-transparent">
                votre réussite
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Des outils innovants conçus pour maximiser vos chances de réussite
              académique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-4 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2196F3] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="lycee"
        className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Formations par niveau
            </h2>
            <p className="text-xl text-gray-600">
              Des parcours adaptés à chaque étape de votre scolarité
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-4 animate-fade-in-up">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl transform group-hover:rotate-12 transition-transform duration-500">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-extrabold">9e Année</h3>
                  </div>
                  <p className="text-orange-50 leading-relaxed">
                    Prépare-toi pour le brevet avec des ressources interactives
                    et adaptées à ton niveau.
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  {neuviemeServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-orange-50 transition-all duration-300 group/item transform hover:translate-x-2 cursor-pointer"
                    >
                      <div className="flex-shrink-0 text-orange-500 bg-orange-100 p-2 rounded-xl group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:-translate-y-1">
                  <span>Explorer les services 9e</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              id="universite"
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-br from-[#2196F3] to-cyan-500 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl transform group-hover:rotate-12 transition-transform duration-500">
                      <Target className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-extrabold">Terminale</h3>
                  </div>
                  <p className="text-blue-50 leading-relaxed">
                    Préparez-vous efficacement au bac avec nos contenus
                    interactifs et nos outils d'IA.
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 gap-4">
                  {terminalServices.slice(0, 5).map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 group/item transform hover:translate-x-2 cursor-pointer"
                    >
                      <div className="flex-shrink-0 text-[#2196F3] bg-blue-100 p-2 rounded-xl group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full bg-gradient-to-r from-[#2196F3] to-cyan-500 text-white px-6 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:-translate-y-1">
                  <span>Explorer Terminale</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl transform group-hover:rotate-12 transition-transform duration-500">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-extrabold">Université</h3>
                  </div>
                  <p className="text-emerald-50 leading-relaxed">
                    Ressources pour réussir à l'université avec des outils
                    adaptés à votre spécialité.
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  {universityServices.slice(0, 5).map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-emerald-50 transition-all duration-300 group/item transform hover:translate-x-2 cursor-pointer"
                    >
                      <div className="flex-shrink-0 text-emerald-500 bg-emerald-100 p-2 rounded-xl group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:-translate-y-1">
                  <span>Explorer Université</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="it-services"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-rose-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl mb-6 shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer">
              <Monitor className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Services Informatiques
              <span className="block mt-3 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Professionnels
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Solutions complètes pour tous vos besoins : réparation,
              installation, sécurité et récupération de données
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-4 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-orange-600 p-3 rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-[#2196F3] via-cyan-600 to-teal-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl animate-fade-in-up">
            <div className="absolute inset-0">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                    opacity: 0.1 + Math.random() * 0.2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Besoin d'une assistance technique ?
              </h3>
              <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Notre équipe d'experts est prête à résoudre tous vos problèmes
                informatiques rapidement et efficacement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center bg-white text-[#2196F3] px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Contactez-nous
                </a>
                <a
                  href="https://wa.me/77219608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-[#2196F3] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Toutes les filières couvertes
            </h2>
            <p className="text-xl text-gray-600">
              Des ressources spécialisées pour chaque domaine d'études
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sciences & Technologies",
                desc: "Mathématiques, Physique, Chimie, Informatique",
                gradient: "from-blue-500 to-cyan-500",
              },

              {
                title: "Économie & Gestion",
                desc: "Économie, Commerce, Management, Finance",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                title: "Lettres & Sciences Humaines",
                desc: "Littérature, Histoire, Philosophie, Langues",
                gradient: "from-rose-500 to-pink-500",
              },
            ].map((filiere, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${filiere.gradient} hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative">
                  <h4 className="font-bold text-white text-xl mb-3">
                    {filiere.title}
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    {filiere.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="temoignages"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            {/* <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-100 rounded-full mb-6">
              <Star className="w-5 h-5 text-amber-600 fill-current animate-pulse" />
              <span className="text-amber-600 font-bold">Témoignages</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Ce que disent nos
              <span className="block mt-3 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                étudiants
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les témoignages de ceux qui ont réussi avec Hoom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-4 animate-fade-in-up cursor-pointer ${
                  index === activeTestimonial
                    ? "ring-2 ring-amber-500 scale-105"
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current transform group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 0.05}s` }}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  {/* <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                  /> */}
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#2196F3] via-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.1 + Math.random() * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
            Prêt à transformer votre parcours scolaire ?
          </h2>
          <p
            className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Rejoignez des centaines d'étudiants qui ont choisi Hoom pour réussir
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="group bg-white text-[#2196F3] px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:-translate-y-1">
              <span>Essai gratuit 7 jours</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-[#2196F3] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Demander une démo
            </button>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-100 rounded-full mb-6">
              <HelpCircle className="w-5 h-5 text-[#2196F3] animate-pulse" />
              <span className="text-[#2196F3] font-bold">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce qu'il faut savoir pour bien démarrer avec Hoom
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = openFaqs.includes(i);
              return (
                <div
                  key={i}
                  className={`border-2 rounded-2xl transition-all duration-500 animate-fade-in-up cursor-pointer ${
                    isOpen
                      ? "bg-blue-50 border-blue-200 shadow-lg scale-105"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-bold text-gray-900">
                      {item.q}
                    </span>
                    <span
                      className={`flex-shrink-0 transition-all duration-500 ${
                        isOpen
                          ? "text-[#2196F3] bg-blue-100 p-2 rounded-xl transform rotate-180"
                          : "text-gray-500"
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-5 text-gray-700 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2196F3] to-cyan-500 text-white text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Besoin d'aide ? Contactez le support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-up">
            Une question ? Besoin d'assistance ? Notre équipe est là pour vous
            aider.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <Mail className="w-7 h-7" />,
                title: "Email",
                value: "info@hoom.space",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Phone className="w-7 h-7" />,
                title: "Téléphone",
                value: "77219608",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                icon: <MessageCircle className="w-7 h-7" />,
                title: "WhatsApp",
                value: "77219608",
                gradient: "from-orange-500 to-amber-500",
              },
              {
                icon: <MapPin className="w-7 h-7" />,
                title: "Adresse",
                value: "Djibouti, Djibouti-ville, Barwaqo 2",
                gradient: "from-rose-500 to-pink-500",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent transform hover:-translate-y-3 animate-fade-in-up cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${contact.gradient} text-white mb-4 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  {contact.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">
                  {contact.title}
                </h4>
                <p className="text-gray-700 font-medium">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold">Hoom</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                La plateforme éducative qui accompagne votre réussite scolaire
                et universitaire.
              </p>

              <div className="mb-6">
                <h5 className="text-sm font-bold mb-4 text-gray-300">
                  Suivez-nous
                </h5>
                <div className="flex space-x-3">
                  {[
                    {
                      icon: <Facebook className="w-5 h-5" />,
                      href: "https://facebook.com/hoom",
                      color: "hover:text-blue-500",
                    },
                    {
                      icon: <Instagram className="w-5 h-5" />,
                      href: "https://instagram.com/hoom",
                      color: "hover:text-pink-500",
                    },
                    {
                      icon: <Twitter className="w-5 h-5" />,
                      href: "https://twitter.com/hoom",
                      color: "hover:text-sky-500",
                    },
                    {
                      icon: <Video className="w-5 h-5" />,
                      href: "https://www.tiktok.com/@hoom_edtech",
                      color: "hover:text-white",
                    },
                    {
                      icon: <Youtube className="w-5 h-5" />,
                      href: "https://youtube.com/@hoom-edtech",
                      color: "hover:text-red-500",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      href: "https://www.linkedin.com/company/hoom-edtech/",
                      color: "hover:text-blue-400",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-800 p-3 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-bold mb-4 text-gray-300">
                  Téléchargez l'app
                </h5>
                <div className="flex flex-col space-y-3">
                  {[
                    {
                      name: "Google Play",
                      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
                      href: "https://play.google.com/store/apps/details?id=com.hoom.app",
                    },
                    {
                      name: "App Store",
                      icon: <Smartphone className="w-5 h-5 text-blue-400" />,
                      href: "https://apps.apple.com/app/hoom/id123456789",
                    },
                  ].map((store, index) => (
                    <a
                      key={index}
                      href={store.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                      {store.icon}
                      <div className="text-left">
                        <div className="text-xs text-gray-400">
                          {index === 0 ? "Disponible sur" : "Télécharger sur"}
                        </div>
                        <div className="font-bold text-sm">{store.name}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {[
              {
                title: "Éducation",
                items: [
                  "Lycée",
                  "Université",
                  "Préparation Bac",
                  "Orientation",
                ],
              },
              {
                title: "Support",
                items: ["Aide", "Contact", "FAQ", "Tutoriels"],
              },
              {
                title: "Entreprise",
                items: ["À propos", "Carrières", "Presse", "Partenaires"],
              },
            ].map((column, colIdx) => (
              <div
                key={colIdx}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(colIdx + 1) * 0.1}s` }}
              >
                <h4 className="text-lg font-bold mb-6">{column.title}</h4>
                <ul className="space-y-3 text-gray-400">
                  {column.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <a
                        href="#"
                        className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 animate-fade-in-up">
            <p>&copy; 2025 Hoom. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out both;
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 2000px 100%;
          animation: shimmer 3s linear infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
