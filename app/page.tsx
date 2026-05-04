"use client";

import { useState } from "react";

// SVG Icons
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TargetCircleIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MoneyIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const PackageIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const WindowIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9h16M4 15h16M9 5v14M15 5v14" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ColorIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const RulerIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const HexagonIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3v12a2 2 0 002 2h8a2 2 0 002-2V3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21v-8" />
  </svg>
);

const LightningIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col flex-1 font-sans bg-white">
        
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-secondary">
              <span className="text-primary">Hollanda</span> Sineklik
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="#products" className="text-secondary hover:text-primary transition font-medium">Ürünler</a>
              <a href="#about" className="text-secondary hover:text-primary transition font-medium">Hakkımızda</a>
              <a href="#dealer" className="text-secondary hover:text-primary transition font-medium">Bayilik</a>
              <a href="#faq" className="text-secondary hover:text-primary transition font-medium">SSS</a>
            </nav>
            <div className="flex gap-3 items-center">
              <div className="hidden md:flex gap-3">
                <a href="tel:+905403363873" className="bg-primary hover:bg-[#6fa86d] text-white px-4 py-2 rounded-full font-medium transition text-sm flex items-center gap-2">
                  <PhoneIcon /> Ara
                </a>
                <a href="https://wa.me/905403363873" target="blank" rel="noopener noreferrer" className="bg-secondary hover:bg-[#2a3646] text-white px-4 py-2 rounded-full font-medium transition text-sm flex flex-col items-center justify-center">
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </a>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-secondary"
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
          
          {/* Mobil Menü */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
              <nav className="flex flex-col gap-4">
                <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-secondary hover:text-primary transition font-medium py-2">Ürünler</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-secondary hover:text-primary transition font-medium py-2">Hakkımızda</a>
                <a href="#dealer" onClick={() => setMobileMenuOpen(false)} className="text-secondary hover:text-primary transition font-medium py-2">Bayilik</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-secondary hover:text-primary transition font-medium py-2">SSS</a>
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                  <a href="tel:+905403363873" className="bg-primary hover:bg-[#6fa86d] text-white px-4 py-3 rounded-full font-medium transition text-sm flex items-center justify-center gap-2">
                    <PhoneIcon /> +90 540 336 3873
                  </a>
                  <a href="https://wa.me/905403363873" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-[#2a3646] text-white px-4 py-3 rounded-full font-medium transition text-sm flex flex-col items-center justify-center">
                    <WhatsAppIcon />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Güven Barı */}
        <div className="bg-secondary text-white py-3 px-4 text-sm font-medium text-center">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 items-center">
            <span className="flex items-center gap-2"><CheckIcon /> Üreticiden Direkt</span>
            <span className="flex items-center gap-2"><TruckIcon /> 4-8 Gün Teslim</span>
            <span className="flex items-center gap-2"><CheckCircleIcon /> 2 Yıl Garanti</span>
            <span className="flex items-center gap-2"><TargetCircleIcon /> Ücretsiz Montaj Desteği</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-secondary via-[#404e5e] to-[#2a3646] text-white py-24 md:py-40 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="text-primary font-medium text-sm flex items-center gap-2"><TruckIcon /> Hollanda Geneli Teslimat</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">Hollanda Sineklik</span><br />
              Üreticiden En İyi Fiyat
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
              <strong>Plise sineklik</strong>, jaluzi perde, zip perde modellerini doğrudan <em>üreticiden</em> alın. Türkiye'den Hollanda'ya <u>4-8 gün</u> içinde kapınıza teslim ediyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+905403363873"
                className="bg-primary hover:bg-[#6fa86d] text-white font-semibold py-5 px-10 rounded-full transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center gap-2 justify-center"
              >
                <PhoneIcon /> +90 540 336 3873
              </a>
              <a
                href="https://wa.me/905403363873"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-secondary font-semibold py-5 px-10 rounded-full transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex flex-col items-center justify-center"
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-white/80">Mutlu Müşteri</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-primary mb-1">4-8</div>
                <div className="text-sm text-white/80">Gün Teslimat</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-primary mb-1">2 Yıl</div>
                <div className="text-sm text-white/80">Garanti</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-primary mb-1">%100</div>
                <div className="text-sm text-white/80">Memnuniyet</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CheckCircleIcon />
                </div>
                <h3 className="text-lg font-bold mb-2">Üreticiden Direkt</h3>
                <p className="text-sm text-white/80">Aracı olmadan doğrudan üretici fiyat avantajı</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <TruckIcon />
                </div>
                <h3 className="text-lg font-bold mb-2">Hızlı Teslimat</h3>
                <p className="text-sm text-white/80">Türkiye'den Hollanda'ya 4-8 gün kapıya teslim</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <TargetCircleIcon />
                </div>
                <h3 className="text-lg font-bold mb-2">Özel Ebatlı</h3>
                <p className="text-sm text-white/80">Her pencere ve kapıya özel ölçü üretimi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ürün Kategorileri */}
        <section id="products" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary text-center mb-4">
              Ürün Kategorilerimiz
            </h2>
            <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto text-lg">
              <strong>Hollanda Sineklik</strong> olarak her ihtiyaca uygun premium çözümler sunuyoruz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-secondary">
                  <WindowIcon />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">Sineklik Sistemleri</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Pencereleriniz için <em>kaliteli</em> sineklik çözümleri sunuyoruz. Sivrisinek ve haşerelerden korunmanın en etkili yoludur. <strong>Fiberglas</strong> ağımız ince ancak sağlamdır. Hava sirkülasyonunu engellemez.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Sırtlı, pencere ve kapı modellerimiz mevcuttur. Her pencere tipine uygun çözüm üretiyoruz. <u>Özel</u> ebat üretimimizle tam uyum sağlıyoruz.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 font-medium">
                  <li>• Sırtlı Sineklik - Sırtlı mekanizma</li>
                  <li>• Pencere Sinekliği - Tüm pencere tipleri</li>
                  <li>• Kapı Sinekliği - Manyetik kilitli</li>
                  <li>• Panjur Sineklik - Otomatik sistem</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-secondary">
                  <TargetIcon />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">Plise Sineklik</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <u>Katlanabilir</u> yapısıyla pratik kullanım sunar. Dar alanlar için ideal çözümdür. <strong>Pleat</strong> teknolojisi sayesinde kompakt depolama sağlar. Kumaşımız toz tutmaz.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Plise pencere ve kapı modellerimiz mevcuttur. <em>Çift</em> taraflı kullanım imkanı vardır. Özel ebatlı üretimimizle her ölçüye uyum sağlarız.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 font-medium">
                  <li>• Plise Pencere - 30cm-200cm arası</li>
                  <li>• Plise Kapı - Tek ve çift kanatlı</li>
                  <li>• Özel Ebatlı Plise - Ölçüye özel</li>
                  <li>• Motorlu Plise - Akıllı kontrol</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-secondary">
                  <ColorIcon />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">Plise Perde</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Dekoratif ve <strong>fonksiyonel</strong> plise perdeler üretiyoruz. Işık kontrolü için mükemmel seçenektir. <em>Termal</em> yalıtım sağlar, enerji tasarrufu eder. Kumaşımız solmaz.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Çift kademeli, tek kademeli ve delikli modellerimiz vardır. <u>RAL</u> renk koduna göre üretim yapabiliriz. Her dekorasyona uyum sağlar.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 font-medium">
                  <li>• Çift Kademeli - Üstten/alttan kontrol</li>
                  <li>• Tek Kademeli - Standart model</li>
                  <li>• Delikli Model - Işık geçirgen</li>
                  <li>• Blackout - Tam karanlık</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-secondary">
                  <RulerIcon />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">Jaluzi Perde</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <em>Klasik</em> ve şık jaluzi perdeler sunuyoruz. Her dekorasyona uyum sağlayan modern tasarımlarımız vardır. <strong>Alüminyum</strong> lamellerimiz paslanmaz. Dayanıklıdır.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  16mm, 25mm ve 50mm lamel genişlikleri mevcuttur. <u>Ahşap</u> ve PVC seçeneklerimiz de vardır. Motorlu sistem ile otomatik kontrol sağlanır.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 font-medium">
                  <li>• Alüminyum Jaluzi - 16/25/50mm</li>
                  <li>• Ahşap Jaluzi - Doğal ahşap</li>
                  <li>• PVC Jaluzi - Ekonomik çözüm</li>
                  <li>• Motorlu Jaluzi - Akıllı sistem</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-secondary">
                  <HexagonIcon />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">Honeycomb Perde</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Yalıtım</strong> sağlayan arı kovanı perdeler üretiyoruz. Enerji tasarrufu için ideal çözümdür. <em>Hücreli</em> yapısı hava tutar. Isı yalıtımı sağlar, faturayı düşürür.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Tek ve çift hücreli modellerimiz vardır. <u>Blackout</u> seçeneği tam karanlık sağlar. Geniş renk yelpazesi sunuyoruz.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 font-medium">
                  <li>• Tek Hücreli - Standart yalıtım</li>
                  <li>• Çift Hücreli - Maksimum yalıtım</li>
                  <li>• Blackout Model - Tam karanlık</li>
                  <li>• Day/Night - Çift kumaşlı</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-secondary">
                  <LightningIcon />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">Zip Perde</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <u>Yüksek</u> performanslı zip perdeler sunuyoruz. Geniş açıklıklar için profesyonel çözümdür. Güçlü mekanizma sağlamlık sunar.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Teras ve balkon için idealdir. <em>Sert</em> hava koşullarına dayanıklıdır. Özel zip teknolojisi ile kumaş sıkı tutunur.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 font-medium">
                  <li>• Zip Teras - Geniş açıklıklar</li>
                  <li>• Zip Balkon - Kompakt tasarım</li>
                  <li>• Motorlu Zip - Otomatik kontrol</li>
                  <li>• Özel Ebatlı - Ölçüye özel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Neden Üreticiden Almalısınız? */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Neden Üreticiden Almalısınız?
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                Aracı olmadan doğrudan üreticiden alış ile en uygun fiyat garantisi
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <MoneyIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">%40-50 Fiyat Avantajı</h3>
                <p className="text-gray-600 leading-relaxed">
                  Aracı olmadığı için doğrudan üretici fiyatı alırsınız. Bayi ve dağıtıcı marjı ödemezsiniz.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircleIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Özel Ebatlı Üretim</h3>
                <p className="text-gray-600 leading-relaxed">
                  Her pencere ve kapıya özel ölçü üretimi yapılır. Standart ölçü sınırlaması yoktur.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <TruckIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Hızlı Teslimat</h3>
                <p className="text-gray-600 leading-relaxed">
                  Türkiye'den Hollanda'ya 4-8 gün kapıya teslim. Stok sorunu yaşanmaz.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <PackageIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Geniş Ürün Yelpazesi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sineklik, plise perde, jaluzi, honeycomb, zip perde gibi tüm modeller mevcuttur.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <BookIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">7/24 Teknik Destek</h3>
                <p className="text-gray-600 leading-relaxed">
                  WhatsApp ve telefon üzerinden sürekli destek sağlanır. Montaj danışmanlığı verilir.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <TargetCircleIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">2 Yıl Garanti</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tüm ürünlerimiz 2 yıl garantilidir. Yedek parça desteği sürekli sağlanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hakkımızda Section */}
        <section id="about" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Hakkımızda
              </h2>
              <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto text-lg">
                <strong>Hollanda Sineklik</strong> olarak 2015 yılından beri sineklik ve perde sektöründe profesyonel hizmet sunuyoruz.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Üreticiden Direkt Alış</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Türkiye'deki üretim tesislerimizden doğrudan Hollanda'ya gönderim yapıyoruz. Aracı olmadığı için <u>en uygun fiyat</u> garantisi sunuyoruz.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Kalite standartlarımız yüksek, fiyatlarımız rekabetçi. Ürünlerimiz <em>2 yıl garantili</em> ve uzun ömürlüdür.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-secondary mb-4">Neden Biz?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2"><CheckIcon /> Üreticiden direkt fiyat avantajı</li>
                  <li className="flex items-start gap-2"><CheckIcon /> 4-8 gün hızlı teslimat</li>
                  <li className="flex items-start gap-2"><CheckIcon /> 2 yıl tam garanti</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Özel ebat üretim</li>
                  <li className="flex items-start gap-2"><CheckIcon /> 7/24 müşteri desteği</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray-600">Mutlu Müşteri</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-gray-600">Yıllık Tecrübe</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">%100</div>
                <p className="text-gray-600">Memnuniyet</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ölçüye Özel Üretim Süreci */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Ölçüye Özel Üretim Süreci
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                Her pencere ve kapıya özel ölçü üretimi yapılır. Standart ölçü sınırlaması yoktur.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary font-bold text-xl">1</div>
                <h3 className="text-lg font-bold text-secondary mb-2">Ölçü Alımı</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pencere veya kapı ölçülerinizi alın. Genişlik ve yükseklik değerlerini net bir şekilde belirleyin.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary font-bold text-xl">2</div>
                <h3 className="text-lg font-bold text-secondary mb-2">Model Seçimi</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sineklik, plise perde veya jaluzi modellerinden seçiminizi yapın. Renk ve özellik belirleyin.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary font-bold text-xl">3</div>
                <h3 className="text-lg font-bold text-secondary mb-2">Üretim</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Türkiye'deki üretim tesisimizde özel ebatlı üretim başlar. 1-3 gün içinde hazırlanır.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary font-bold text-xl">4</div>
                <h3 className="text-lg font-bold text-secondary mb-2">Teslimat</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hollanda'ya kargo ile gönderilir. 4-8 gün içinde kapınıza teslim edilir.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Ölçü Alma İpuçları</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-secondary mb-3">Pencere İçin:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Çerçeve içine ölçü alın</li>
                    <li>• Genişlik ve yükseklik ölçün</li>
                    <li>• Köşeleri kontrol edin</li>
                    <li>• Montaj alanını belirleyin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-3">Kapı İçin:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Kapı çerçevesine ölçü alın</li>
                    <li>• Genişlik ve yükseklik ölçün</li>
                    <li>• Menteşe yönünü belirleyin</li>
                    <li>• Manyetik kilit alanını kontrol edin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sineklik Modelleri Karşılaştırma Tablosu */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Sineklik Modelleri Karşılaştırma
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                Hangi model sizin için en uygun? Özellikleri karşılaştırın.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="p-4 text-left">Özellik</th>
                    <th className="p-4 text-center">Sineklik</th>
                    <th className="p-4 text-center">Plise Sineklik</th>
                    <th className="p-4 text-center">Plise Perde</th>
                    <th className="p-4 text-center">Jaluzi Perde</th>
                    <th className="p-4 text-center">Honeycomb</th>
                    <th className="p-4 text-center">Zip Perde</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-secondary">Hava Sirkülasyonu</td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-secondary">Işık Kontrolü</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-secondary">Isı Yalıtımı</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-secondary">Kompakt Depolama</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-secondary">Geniş Açıklıklar</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-secondary">Blackout Seçeneği</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                    <td className="p-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-secondary">Fiyat Aralığı</td>
                    <td className="p-4 text-center">€</td>
                    <td className="p-4 text-center">€€</td>
                    <td className="p-4 text-center">€€</td>
                    <td className="p-4 text-center">€€€</td>
                    <td className="p-4 text-center">€€€</td>
                    <td className="p-4 text-center">€€€€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Kullanım Alanları */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Kullanım Alanları
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                Sineklik ve perde sistemlerimiz her alanda kullanıma uygundur
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Ev İçin</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Salon ve yatak odaları</li>
                  <li>• Mutfak ve banyo</li>
                  <li>• Balkon ve teras</li>
                  <li>• Çocuk odaları</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Ofis İçin</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Toplantı odaları</li>
                  <li>• Çalışma alanları</li>
                  <li>• Lobi ve koridorlar</li>
                  <li>• Yönetici odaları</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Otel İçin</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Oda pencereleri</li>
                  <li>• Restoran alanları</li>
                  <li>• Lobi ve resepsiyon</li>
                  <li>• Toplantı salonları</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Restoran İçin</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Mutfak pencereleri</li>
                  <li>• Yeme içme alanları</li>
                  <li>• Teras alanları</li>
                  <li>• Özel odalar</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Mağaza İçin</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Vitrin pencereleri</li>
                  <li>• Depo alanları</li>
                  <li>• Kasa alanları</li>
                  <li>• Müşteri bekleme alanları</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Hastane İçin</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Hasta odaları</li>
                  <li>• Ameliyathaneler</li>
                  <li>• Koridorlar</li>
                  <li>• Yönetim birimleri</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Malzeme Kalitesi */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Malzeme Kalitesi
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                Sadece en kaliteli malzemeler kullanıyoruz
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-secondary mb-3">Fiberglas Ağ</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Sineklik ağımız yüksek kaliteli fiberglastan üretilir. Sivrisinek ve haşereleri engeller, hava sirkülasyonunu korur.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Paslanmaz</li>
                  <li>• UV dayanıklı</li>
                  <li>• Kolay temizlenebilir</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-secondary mb-3">Alüminyum Profil</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Jaluzi ve zip perdelerde kullanılan alüminyum lameller paslanmaz ve uzun ömürlüdür.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Paslanmaz</li>
                  <li>• Hafif ve sağlam</li>
                  <li>• Renk solmaz</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-secondary mb-3">Premium Kumaş</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Plise ve honeycomb perdelerde kullanılan kumaşlarımız solmaz, leke tutmaz ve kolay temizlenir.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Solmaz</li>
                  <li>• Leke tutmaz</li>
                  <li>• Anti-bakteriyel</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-secondary mb-3">ABS Plastik</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Mekanizma parçalarında kullanılan ABS plastik dayanıklı ve uzun ömürlüdür.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Darbe dayanıklı</li>
                  <li>• Hafif</li>
                  <li>• Yüksek kalite</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-secondary mb-3">Çelik Mekanizma</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Motorlu sistemlerde kullanılan çelik mekanizma güçlü ve güvenilirdir.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Güçlü</li>
                  <li>• Sessiz</li>
                  <li>• Uzun ömürlü</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-secondary mb-3">Manyetik Kilit</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Kapı sinekliklerinde kullanılan manyetik kilit güvenli ve pratiktir.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Güçlü</li>
                  <li>• Otomatik</li>
                  <li>• Dayanıklı</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Renk Seçenekleri */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Renk Seçenekleri
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                Her dekorasyona uygun geniş renk yelpazesi
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-full h-20 bg-gray-800 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold text-secondary mb-2">Siyah</h3>
                <p className="text-gray-600 text-sm">Modern ve şık</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-full h-20 bg-gray-300 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold text-secondary mb-2">Gri</h3>
                <p className="text-gray-600 text-sm">Nötr ve zarif</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-full h-20 bg-white border border-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold text-secondary mb-2">Beyaz</h3>
                <p className="text-gray-600 text-sm">Klasik ve temiz</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-full h-20 bg-amber-700 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold text-secondary mb-2">Kahve</h3>
                <p className="text-gray-600 text-sm">Sıcak ve doğal</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-full h-20 bg-amber-100 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold text-secondary mb-2">Bej</h3>
                <p className="text-gray-600 text-sm">Hafif ve yumuşak</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-full h-20 bg-slate-400 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold text-secondary mb-2">Lacivert</h3>
                <p className="text-gray-600 text-sm">Derin ve ciddi</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-full h-20 bg-stone-600 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold text-secondary mb-2">Antrasit</h3>
                <p className="text-gray-600 text-sm">Güçlü ve modern</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-full h-20 bg-emerald-700 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold text-secondary mb-2">Yeşil</h3>
                <p className="text-gray-600 text-sm">Doğal ve ferah</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4 text-center">Özel Renk Üretimi</h3>
              <p className="text-gray-600 text-center mb-6">
                RAL renk koduna göre özel renk üretimi yapabiliriz. İstediğiniz rengi WhatsApp üzerinden iletin.
              </p>
              <div className="text-center">
                <a
                  href="https://wa.me/905403363873?text=Özel%20renk%20hakkında%20bilgi%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-[#6fa86d] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <WhatsAppIcon />
                  <span>Özel Renk İste</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Proje ve Toplu Üretim */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Proje ve Toplu Üretim
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                Oteller, ofisler, restoranlar ve toplu konut projeleri için özel üretim
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-secondary mb-4">Proje Üretimi</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Otel, hastane, ofis gibi büyük projeler için özel üretim yapıyoruz. Proje yöneticisi atanır.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Proje yöneticisi atanır</li>
                  <li>• Özel fiyatlandırma</li>
                  <li>• Teslimat programı</li>
                  <li>• Montaj desteği</li>
                  <li>• Yedek parça garantisi</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-secondary mb-4">Toplu Üretim</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  10 adet üzeri siparişlerde özel fiyat avantajı sağlanır. Seri üretim indirimleri uygulanır.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• %15-25 indirim</li>
                  <li>• Ücretsiz kargo</li>
                  <li>• Öncelikli üretim</li>
                  <li>• Satış sonrası destek</li>
                  <li>• 2 yıl garanti</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Proje İçin İletişim</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-white/80">Tamamlanan Proje</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-white/80">Toplu Sipariş</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">%20</div>
                  <p className="text-white/80">Proje İndirimi</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <a
                  href="https://wa.me/905403363873?text=Proje%20hakkında%20bilgi%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-[#6fa86d] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <WhatsAppIcon />
                  <span>Proje İçin WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bölge ve Alt Şehirler */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Hizmet Bölgemiz
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                Hollanda geneline 4-8 gün kapıya teslim
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Kuzey Hollanda</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Amsterdam</li>
                  <li>• Haarlem</li>
                  <li>• Alkmaar</li>
                  <li>• Zaandam</li>
                  <li>• Hoorn</li>
                  <li>• Den Helder</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Güney Hollanda</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Rotterdam</li>
                  <li>• Lahey</li>
                  <li>• Dordrecht</li>
                  <li>• Leiden</li>
                  <li>• Delft</li>
                  <li>• Gouda</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Kuzey Brabant</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Eindhoven</li>
                  <li>• 's-Hertogenbosch</li>
                  <li>• Tilburg</li>
                  <li>• Breda</li>
                  <li>• Helmond</li>
                  <li>• Roosendaal</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Limburg</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Maastricht</li>
                  <li>• Venlo</li>
                  <li>• Heerlen</li>
                  <li>• Sittard</li>
                  <li>• Roermond</li>
                  <li>• Geleen</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Gelderland</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Arnhem</li>
                  <li>• Nijmegen</li>
                  <li>• Apeldoorn</li>
                  <li>• Ede</li>
                  <li>• Doetinchem</li>
                  <li>• Zutphen</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Overijssel</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Enschede</li>
                  <li>• Zwolle</li>
                  <li>• Deventer</li>
                  <li>• Almelo</li>
                  <li>• Hengelo</li>
                  <li>• Oldenzaal</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4 text-center">Diğer Bölgeler</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Utrecht</h4>
                  <p className="text-gray-600 text-sm">Utrecht, Amersfoort</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Flevoland</h4>
                  <p className="text-gray-600 text-sm">Almere, Lelystad</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Friesland</h4>
                  <p className="text-gray-600 text-sm">Leeuwarden, Heerenveen</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Zeeland</h4>
                  <p className="text-gray-600 text-sm">Middelburg, Vlissingen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Müşteri Yorumları */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Müşteri Yorumları
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                500+ mutlu müşterimizin deneyimlerini okuyun
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-primary text-xl">★★★★★</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Amsterdam'daki evim için plise sineklik siparişi verdim. 5 gün içinde teslim edildi. Kalite çok iyi, fiyat ise Hollanda'daki yerel satıcılardan çok daha uygun."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">A</div>
                  <div>
                    <div className="font-semibold text-secondary">Ahmet K.</div>
                    <div className="text-gray-500 text-sm">Amsterdam</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-primary text-xl">★★★★★</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Rotterdam'daki restoranımız için 15 adet sineklik siparişi verdik. Toplu sipariş indirimleri çok avantajlı. Montaj da kolaydı, kesinlikle tavsiye ederim."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">M</div>
                  <div>
                    <div className="font-semibold text-secondary">Mehmet Y.</div>
                    <div className="text-gray-500 text-sm">Rotterdam</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-primary text-xl">★★★★★</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Eindhoven'deki ofisimiz için jaluzi perde siparişi verdik. Özel ölçü üretimi çok başarılı. WhatsApp üzerinden destek sürekli verildi. Teşekkürler."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">E</div>
                  <div>
                    <div className="font-semibold text-secondary">Elif D.</div>
                    <div className="text-gray-500 text-sm">Eindhoven</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-primary text-xl">★★★★★</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Lahey'deki evim için honeycomb perde siparişi verdim. Isı yalıtımı gerçekten çok iyi. Fiyat kalite oranı mükemmel. Yine sipariş vereceğim."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">A</div>
                  <div>
                    <div className="font-semibold text-secondary">Ayşe S.</div>
                    <div className="text-gray-500 text-sm">Lahey</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-primary text-xl">★★★★★</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Utrecht'teki otel projemiz için 50 adet plise perde siparişi verdik. Proje yöneticisi atanmıştı, süreci çok profesyonel yönettiler."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">İ</div>
                  <div>
                    <div className="font-semibold text-secondary">İbrahim M.</div>
                    <div className="text-gray-500 text-sm">Utrecht</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-primary text-xl">★★★★★</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Maastricht'teki evim için zip perde siparişi verdim. Balkonum artık sivrisineksiz. Kalite çok iyi, montaj da basitti. Teşekkürler Hollanda Sineklik."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">Z</div>
                  <div>
                    <div className="font-semibold text-secondary">Zeynep B.</div>
                    <div className="text-gray-500 text-sm">Maastricht</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fiyatı Etkileyen Faktörler */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Fiyatı Etkileyen Faktörler
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                Fiyatlandırma nasıl belirlenir?
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <RulerIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Ölçü</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pencere veya kapı ölçüsü fiyatı etkiler. Genişlik ve yükseklik arttıkça fiyat artar. Özel ebatlı üretim fiyatı standart ölçüden farklı olabilir.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <ColorIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Model</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sineklik, plise perde, jaluzi, honeycomb ve zip perde modelleri farklı fiyat aralıklarına sahiptir. Zip perde en pahalı, sineklik en ekonomik seçenektir.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <ColorIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Renk</h3>
                <p className="text-gray-600 leading-relaxed">
                  Standart renkler (beyaz, gri, siyah) daha uygun fiyatlıdır. RAL renk koduna göre özel renk üretimi ek maliyet gerektirir.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <LightningIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Motorlu Sistem</h3>
                <p className="text-gray-600 leading-relaxed">
                  Motorlu sistemler manuel sistemlere göre daha pahalıdır. Akıllı kontrol özellikleri ek maliyet getirir.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <PackageIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Adet</h3>
                <p className="text-gray-600 leading-relaxed">
                  10 adet üzeri siparişlerde toplu üretim indirimi uygulanır. %15-25 arası indirim sağlanır.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <TruckIcon />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Kargo</h3>
                <p className="text-gray-600 leading-relaxed">
                  Türkiye'den Hollanda'ya kargo ücreti fiyata dahildir. Toplu siparişlerde kargo ücretsiz olabilir.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-secondary text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Fiyat Teklifi Al</h3>
              <p className="text-white/80 text-center mb-6">
                Ölçülerinizi ve model seçiminizi WhatsApp üzerinden iletin, size özel fiyat teklifi verelim.
              </p>
              <div className="text-center">
                <a
                  href="https://wa.me/905403363873?text=Fiyat%20teklifi%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-[#6fa86d] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <WhatsAppIcon />
                  <span>Fiyat Teklifi Al</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Kısa Kurumsal Tanıtım */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Hakkımızda
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
                2015 yılından beri sineklik ve perde sektöründe profesyonel hizmet
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Üreticiden Direkt Alış</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Türkiye'deki üretim tesislerimizden doğrudan Hollanda'ya gönderim yapıyoruz. Aracı olmadığı için <u>en uygun fiyat</u> garantisi sunuyoruz.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Kalite standartlarımız yüksek, fiyatlarımız rekabetçi. Ürünlerimiz <em>2 yıl garantili</em> ve uzun ömürlüdür.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-secondary mb-4">Vizyonumuz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hollanda'daki Türk topluluğuna ve tüm müşterilerimize en kaliteli sineklik ve perde çözümlerini en uygun fiyatla sunmak. Müşteri memnuniyetini her şeyin önünde tutmak.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray-600">Mutlu Müşteri</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-gray-600">Yıllık Tecrübe</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">%100</div>
                <p className="text-gray-600">Memnuniyet</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gelişmiş Bayilik Section */}
        <section id="dealer" className="py-20 px-4 bg-gradient-to-br from-secondary via-[#404e5e] to-[#2a3646] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Bayilik Fırsatı</h2>
              <p className="text-lg max-w-3xl mx-auto text-white/80">
                <strong>Hollanda Sineklik</strong> bayi ailesine katılın. Üreticiden doğrudan alış ile yüksek kar marjı elde edin.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <MoneyIcon />
                </div>
                <h3 className="text-xl font-bold mb-3">Yüksek Kar Marjı</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Üreticiden alış ile <u>ciddi</u> kar elde edin. Bayilerimize özel fiyatlar sunuyoruz.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <TargetCircleIcon />
                </div>
                <h3 className="text-xl font-bold mb-3">Bölgesel Koruma</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Kendi <strong>bölgenizde</strong> tekel olun. Bölgesel bayilik hakkı veriyoruz.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <BookIcon />
                </div>
                <h3 className="text-xl font-bold mb-3">Eğitim Desteği</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  <em>Satış</em> ve montaj eğitimi veriyoruz. Profesyonel destek sağlıyoruz.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <PackageIcon />
                </div>
                <h3 className="text-xl font-bold mb-3">Stok Garantisi</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Sürekli tedarik garantisi veriyoruz. <strong>Yedek parça</strong> desteği sağlıyoruz.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Bayilik Şartları</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Gereksinimler:</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li className="flex items-start gap-2"><CheckIcon /> Minimum 10 adet ilk sipariş</li>
                    <li className="flex items-start gap-2"><CheckIcon /> Showroom veya depo alanı</li>
                    <li className="flex items-start gap-2"><CheckIcon /> Montaj ekibi veya montaj partneri</li>
                    <li className="flex items-start gap-2"><CheckIcon /> Müşteri hizmetleri yeteneği</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Sağlanan Avantajlar:</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li className="flex items-start gap-2"><CheckIcon /> %40-50 kar marjı</li>
                    <li className="flex items-start gap-2"><CheckIcon /> Bölgesel koruma</li>
                    <li className="flex items-start gap-2"><CheckIcon /> Ücretsiz pazarlama materyalleri</li>
                    <li className="flex items-start gap-2"><CheckIcon /> 7/24 teknik destek</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/905403363873?text=Bayilik%20hakkında%20bilgi%20almak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-[#6fa86d] text-white font-semibold py-5 px-10 rounded-full transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex flex-col items-center justify-center"
              >
                <WhatsAppIcon />
                <span>Bayilik İçin WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 bg-gradient-to-br from-primary via-[#6fa86d] to-[#5a8a58] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Hemen Sipariş Verin
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90">
              Türkiye'den Hollanda'ya 4-8 gün kapıya teslim. Üreticiden direkt alış ile en uygun fiyat garantisi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+905403363873"
                className="bg-white hover:bg-gray-100 text-secondary font-semibold py-5 px-10 rounded-full transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center gap-2 justify-center"
              >
                <PhoneIcon /> +90 540 336 3873
              </a>
              <a
                href="https://wa.me/905403363873"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-[#2a3646] text-white font-semibold py-5 px-10 rounded-full transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex flex-col items-center justify-center"
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-white/80">Mutlu Müşteri</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">4-8</div>
                <div className="text-sm text-white/80">Gün Teslimat</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">2 Yıl</div>
                <div className="text-sm text-white/80">Garanti</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">%100</div>
                <div className="text-sm text-white/80">Memnuniyet</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sıkça Sorulan Sorular */}
        <section id="faq" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary text-center mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              <strong>Hollanda Sineklik</strong> hakkında merak edilenler.
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Hollanda Sineklik kaç günde teslim edilir?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Türkiye'den Hollanda'ya <em>4-8 gün</em> içinde adrese kapıya teslim yapıyoruz. Üretim süresi 1-3 gün, kargo süresi 3-5 gün sürer. Özel ebatlı üretimlerde süre biraz uzayabilir.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Garanti süresi nedir?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tüm ürünlerimiz <u>2 yıl</u> garantilidir. Garanti kapsamında mekanizma arızaları, kumaş sorunları ve montaj hataları dahildir. Kullanım hatası ve dış etkiler garanti dışındadır.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Bayilik şartları nelerdir?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>WhatsApp</strong> üzerinden bizimle iletişime geçin. Minimum 10 adet ilk sipariş, showroom veya depo alanı, montaj ekibi gereklidir. Bayilerimize %40-50 kar marjı, bölgesel koruma ve 7/24 teknik destek sağlıyoruz.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Özel ölçü üretimi yapılıyor mu?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Evet, her pencere ve kapıya özel ölçü üretimi yapıyoruz. Standart ölçü sınırlaması yoktur. WhatsApp üzerinden ölçülerinizi iletin, size özel fiyat teklifi verelim.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Hangi renk seçenekleri mevcut?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Standart renkler: beyaz, gri, siyah, kahve, bej, lacivert, antrasit ve yeşil. Ayrıca RAL renk koduna göre özel renk üretimi yapabiliriz. Özel renkler için ek maliyet uygulanır.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Montaj nasıl yapılır?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ürünlerimiz kolay montajlıdır. Kullanım kılavuzu ve montaj vidaları paket dahildir. WhatsApp üzerinden montaj desteği sağlıyoruz. İsterseniz montaj partneri yönlendirebiliriz.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Toplu sipariş indirimi var mı?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Evet, 10 adet üzeri siparişlerde %15-25 arası toplu üretim indirimi uygulanır. Proje siparişlerinde özel fiyatlandırma ve proje yöneticisi atanır.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Kargo ücreti ne kadar?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Türkiye'den Hollanda'ya kargo ücreti fiyata dahildir. Tekli siparişlerde standart kargo, toplu siparişlerde kargo ücretsizdir.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Hangi bölgelere teslimat yapıyorsunuz?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hollanda geneline teslimat yapıyoruz. Amsterdam, Rotterdam, Lahey, Eindhoven, Utrecht, Maastricht gibi tüm büyük şehirler ve tüm illere 4-8 gün kapıya teslim.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Motorlu sistem seçeneği var mı?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Evet, plise perde, jaluzi ve zip perdeler için motorlu sistem seçeneği mevcuttur. Motorlu sistemler manuel sistemlere göre daha pahalıdır ancak kullanım kolaylığı sağlar.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Ödeme seçenekleri nelerdir?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  WhatsApp üzerinden banka havalesi, IBAN ve kredi kartı ödeme seçenekleri mevcuttur. %50 peşin, kalan %50 teslimatta ödeme opsiyonu da sunuyoruz.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  İade ve değişim mümkün mü?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Özel ebatlı üretim olduğu için iade ve değişim mümkün değildir. Ancak ürün kusurlu ise 2 yıl garanti kapsamında değişim yapılır. Sipariş öncesi ölçü kontrolü önemlidir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Hollanda Sineklik</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Üreticiden direkt alış ile en uygun fiyat garantisi. Türkiye'den Hollanda'ya 4-8 gün kapıya teslim.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Ürünler</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>Sineklik Sistemleri</li>
                  <li>Plise Sineklik</li>
                  <li>Plise Perde</li>
                  <li>Jaluzi Perde</li>
                  <li>Honeycomb Perde</li>
                  <li>Zip Perde</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Hızlı Linkler</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li><a href="#about" className="hover:text-primary transition">Hakkımızda</a></li>
                  <li><a href="#dealer" className="hover:text-primary transition">Bayilik</a></li>
                  <li><a href="#faq" className="hover:text-primary transition">SSS</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">İletişim</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>📞 +90 540 336 3873</li>
                  <li>📧 info@sineklikhollanda.com.tr</li>
                  <li>🌍 Hollanda Geneli Teslimat</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
              <p>© 2024 Hollanda Sineklik. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>

        {/* Mobil Alt Sabit Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 md:hidden z-50">
          <div className="flex justify-around items-center">
            <a href="tel:+905403363873" className="flex flex-col items-center text-secondary hover:text-primary transition">
              <PhoneIcon />
              <span className="text-xs mt-1">Ara</span>
            </a>
            <a href="https://wa.me/905403363873" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-secondary hover:text-primary transition">
              <WhatsAppIcon />
              <span className="text-xs mt-1">WhatsApp</span>
            </a>
            <a href="#dealer" className="flex flex-col items-center text-secondary hover:text-primary transition">
              <BuildingIcon />
              <span className="text-xs mt-1">Bayilik</span>
            </a>
          </div>
        </div>

        {/* Masaüstü Sağ Alt WhatsApp İkonu */}
        <a
          href="https://wa.me/905403363873"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50 flex-col"
        >
          <WhatsAppIcon />
          <span className="text-xs mt-1">WhatsApp</span>
        </a>

      </div>
    </>
  );
}
