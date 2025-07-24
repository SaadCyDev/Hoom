import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

import {
  BookOpen,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  GraduationCap,
  Target,
  Award,
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
  Search,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Smartphone,
  Menu, // ✅ ADD THIS
  X,
} from "lucide-react";
import React, { useState } from "react";

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
        "Grâce à Hoom, j’ai mieux compris les mathématiques et les sciences. Les QCM et les vidéos m’ont beaucoup aidée.",
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
        "J'adore l'interface et les fonctionnalités. C’est motivant et vraiment adapté à notre programme.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "100+", label: "Étudiants" },
    { number: "20+", label: "Cours" },
    { number: "98%", label: "Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Hoom</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#lycee"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Lycée
              </a>
              <a
                href="#universite"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Université
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Fonctionnalités
              </a>
              <a
                href="#temoignages"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Témoignages
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center">
              <div className="text-sm text-gray-600">
                Plateforme éducative pour votre réussite
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Hoom</span>
            </div>

            {/* Mobile menu button */}
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

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#lycee"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Lycée
              </a>
              <a
                href="#universite"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Université
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Fonctionnalités
              </a>
              <a
                href="#temoignages"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Témoignages
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:block text-sm text-gray-600">
              Plateforme éducative pour votre réussite
            </div>
          </div>

          {/* Mobile navigation */}
          {menuOpen && (
            <nav className="md:hidden mt-2 space-y-2 pb-4 border-t pt-4">
              <a
                href="#lycee"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                Lycée
              </a>
              <a
                href="#universite"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                Université
              </a>
              <a
                href="#features"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                Fonctionnalités
              </a>
              <a
                href="#temoignages"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                Témoignages
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
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

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-[850px] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg')",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-purple-900/80" />

        {/* Optional: floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-green-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-60 left-1/2 w-1 h-1 bg-green-200 rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Votre réussite scolaire
            <span className="text-blue-300 block">commence ici</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Hoom accompagne les lycéens en Terminale et les étudiants
            universitaires vers l'excellence académique avec des cours
            personnalisés et des outils innovants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 shadow-lg">
              <span>Commencer gratuitement</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setShowVideo(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
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

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lycée & Université Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Lycée */}
            <div id="lycee" className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Lycée - Terminale
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Préparez-vous efficacement au baccalauréat avec nos services
                complets adaptés à toutes les filières.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {terminalServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-green-600 mt-1">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Explorer les services Lycée
              </button>
            </div>

            {/* Université */}
            <div id="universite" className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Université</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Excellez dans vos études supérieures avec des ressources
                adaptées à votre filière et un accompagnement personnalisé.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {universityServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-blue-600 mt-1">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Explorer les services Université
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Specializations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Toutes les filières couvertes
            </h2>
            <p className="text-xl text-gray-600">
              Des ressources spécialisées pour chaque domaine d'études
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">
                Sciences & Technologies
              </h4>
              <p className="text-blue-700 text-sm">
                Mathématiques, Physique, Chimie, Informatique
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h4 className="font-semibold text-green-900 mb-2">
                Médecine & Santé
              </h4>
              <p className="text-green-700 text-sm">
                PACES, Médecine, Pharmacie, Kinésithérapie
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h4 className="font-semibold text-purple-900 mb-2">
                Économie & Gestion
              </h4>
              <p className="text-purple-700 text-sm">
                Économie, Commerce, Management, Finance
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <h4 className="font-semibold text-orange-900 mb-2">
                Lettres & Sciences Humaines
              </h4>
              <p className="text-orange-700 text-sm">
                Littérature, Histoire, Philosophie, Langues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="temoignages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à transformer votre parcours scolaire ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des milliers d'étudiants qui ont choisi Hoom pour réussir
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Essai gratuit 7 jours
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Demander une démo
            </button>
          </div>
        </div>
      </section>
      {/* Contact Section */}

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Une question ? Besoin d'assistance ? Notre équipe est là pour vous
            aider.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-12">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">info@hoom.space</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Téléphone</h4>
                <p className="text-gray-600">+25377219608</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageCircle className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                <p className="text-gray-600">+25377219608</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Adresse</h4>
                <p className="text-gray-600">
                  Djibouti, DJibouti-ville, Barwaqo 2
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">Hoom</span>
              </div>
              <p className="text-gray-400 mb-4">
                La plateforme éducative qui accompagne votre réussite scolaire.
              </p>

              {/* Réseaux Sociaux */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold mb-3 text-gray-300">
                  Suivez-nous
                </h5>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/hoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/hoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/hoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://tiktok.com/@hoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Video className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/hoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Applications Mobiles */}
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
                    <Smartphone className="w-4 h-4 text-green-500" />
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
                    <Smartphone className="w-4 h-4 text-blue-500" />
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
