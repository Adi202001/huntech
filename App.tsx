import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { SmartAssistant } from './components/SmartAssistant';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Spares } from './pages/Spares';
import { ViewState } from './types';
import { PRODUCTS } from './constants';

const ANIM_SELECTOR = [
  '.scroll-animate',
  '.scroll-animate-left',
  '.scroll-animate-right',
  '.scroll-animate-scale',
  '.anim-blur-in',
  '.anim-clip-x',
  '.anim-clip-y',
  '.anim-zoom',
  '.anim-flip',
  '.anim-line',
].join(', ');

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProductId]);

  // Update browser tab title per view
  useEffect(() => {
    const base = 'Huntech Engineers';
    let title = base;
    if (currentView === ViewState.PRODUCTS) title = `Machines · ${base}`;
    else if (currentView === ViewState.PRODUCT_DETAIL) {
      const product = PRODUCTS.find((p) => p.id === selectedProductId);
      title = product ? `${product.name} · ${base}` : `Machine · ${base}`;
    }
    else if (currentView === ViewState.ABOUT) title = `About · ${base}`;
    else if (currentView === ViewState.CONTACT) title = `Contact · ${base}`;
    else if (currentView === ViewState.SPARES) title = `Services & Spares · ${base}`;
    else title = `${base} — Precision Packaging Machinery`;
    document.title = title;
  }, [currentView, selectedProductId]);

  // Global scroll animation observer — re-runs on every view change
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const attach = () => document.querySelectorAll(ANIM_SELECTOR).forEach(el => observer.observe(el));
    attach();
    const t = setTimeout(attach, 120);
    return () => { observer.disconnect(); clearTimeout(t); };
  }, [currentView, selectedProductId]);

  const handleNavigate = (view: ViewState, productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Home onNavigate={handleNavigate} />;
      case ViewState.PRODUCTS:
        return <Products onNavigate={handleNavigate} />;
      case ViewState.PRODUCT_DETAIL:
        const product = PRODUCTS.find(p => p.id === selectedProductId);
        if (!product) return <Products onNavigate={handleNavigate} />;
        return (
          <ProductDetail 
            product={product} 
            onBack={() => setCurrentView(ViewState.PRODUCTS)}
            onNavigate={handleNavigate}
          />
        );
      case ViewState.ABOUT:
        return <About />;
      case ViewState.CONTACT:
        return <Contact />;
      case ViewState.SPARES:
        return <Spares />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <NavBar currentView={currentView} onChangeView={(view) => handleNavigate(view)} />
      
      <main className="flex-grow relative">
        <div key={`${currentView}-${selectedProductId}`} className="animate-in fade-in duration-300">
          {renderView()}
        </div>
      </main>

      <Footer onNavigate={(view) => handleNavigate(view)} />
      
      <SmartAssistant />
    </div>
  );
};

export default App;