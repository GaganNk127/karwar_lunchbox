import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Ocean Background */}
      <section className="relative min-h-screen flex items-center justify-center ocean-gradient">
        {/* Wave SVG Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 800" fill="none">
            <path d="M0,400 C360,300 720,500 1440,400 L1440,800 L0,800 Z" 
                  fill="url(#ocean-gradient)" opacity="0.3" className="animate-wave"/>
            <path d="M0,500 C360,400 720,600 1440,500 L1440,800 L0,800 Z" 
                  fill="url(#wave-gradient)" opacity="0.2" className="animate-wave" style={{animationDelay: '1s'}}/>
            <defs>
              <linearGradient id="ocean-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#022B3A" />
                <stop offset="100%" stopColor="#1F7A8C" />
              </linearGradient>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1F7A8C" />
                <stop offset="100%" stopColor="#2E8BA0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="animate-float">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-wave-blue/20 rounded-full mb-8 border-2 border-sand-beige/30">
              <svg className="w-12 h-12 text-sand-beige" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-ocean font-bold text-sand-beige mb-6 leading-tight">
            Karwar LunchBox
          </h1>
          
          <p className="text-2xl md:text-3xl text-sand-light mb-4 font-light">
            Healthy Homemade Lunch Delivered with Coastal Love
          </p>
          
          <p className="text-lg md:text-xl text-sand-beige/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Fresh, affordable, and hygienic meals prepared by home chefs and delivered to your workplace in Karwar. 
            Experience the taste of homemade food with the convenience of daily delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/order" className="btn-primary text-lg px-8 py-4">
              Order Now
            </Link>
            <Link to="/menu" className="btn-secondary text-lg px-8 py-4">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="card">
            <h2 className="text-3xl font-bold text-sand-beige mb-6">The Problem</h2>
            <ul className="space-y-4 text-sand-beige/80">
              <li className="flex items-start">
                <span className="text-wave-blue mr-3">•</span>
                Unhealthy restaurant food affecting your well-being
              </li>
              <li className="flex items-start">
                <span className="text-wave-blue mr-3">•</span>
                Costly tiffin services with inconsistent quality
              </li>
              <li className="flex items-start">
                <span className="text-wave-blue mr-3">•</span>
                Lack of reliable daily meal options for professionals
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h2 className="text-3xl font-bold text-sand-beige mb-6">Our Solution</h2>
            <ul className="space-y-4 text-sand-beige/80">
              <li className="flex items-start">
                <span className="text-wave-blue mr-3">✓</span>
                Affordable homemade subscription meals delivered daily
              </li>
              <li className="flex items-start">
                <span className="text-wave-blue mr-3">✓</span>
                Fresh, hygienic, and nutritious food prepared with love
              </li>
              <li className="flex items-start">
                <span className="text-wave-blue mr-3">✓</span>
                Flexible plans to suit your lifestyle and budget
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-sand-beige mb-16">Why Choose Karwar LunchBox?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-wave-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sand-beige mb-4">Homemade Taste</h3>
              <p className="text-sand-beige/70">Authentic Karwar recipes prepared with love and care, just like home.</p>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-wave-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sand-beige mb-4">Hygiene & Freshness</h3>
              <p className="text-sand-beige/70">Strict hygiene standards and daily fresh preparation guarantee quality.</p>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-wave-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sand-beige mb-4">Affordable Plans</h3>
              <p className="text-sand-beige/70">Flexible subscription options that fit your budget and schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 wave-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-sand-beige mb-12">Perfect For</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Office Workers</h3>
              <p className="text-white/80">Busy professionals who need healthy, convenient lunch options</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Students</h3>
              <p className="text-white/80">Students looking for nutritious and affordable meal solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Young Professionals</h3>
              <p className="text-white/80">Career-focused individuals who value health and convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-sand-beige mb-6">Ready to Experience Homemade Goodness?</h2>
          <p className="text-xl text-sand-beige/80 mb-8">
            Join hundreds of satisfied customers in Karwar who enjoy healthy, delicious meals every day.
          </p>
          <Link to="/order" className="btn-primary text-xl px-10 py-5">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
