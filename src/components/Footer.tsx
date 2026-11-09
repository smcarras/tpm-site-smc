import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src="/TPM-Logo.png"
                alt="Talent PayMaster"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Innovating since 1986, TPM delivers modern pay service tools for political consultants, agents, new media teams, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigate('portal')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  The Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('political')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Political Consultants
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('newmedia')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  New Media
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('about')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-6">Get Started</h3>
            <button
              onClick={() => handleNavigate('contact')}
              className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all shadow-md"
            >
              Request Portal Access
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Talent PayMaster. All rights reserved. Innovating since 1986.</p>
        </div>
      </div>
    </footer>
  );
}
