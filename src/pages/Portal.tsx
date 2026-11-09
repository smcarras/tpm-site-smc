import React, { useState, useEffect, useRef } from 'react';
import { Clock, FileText, Users, Shield, BarChart3, CheckCircle, ArrowRight, Smartphone } from 'lucide-react';
import CTAButton from '../components/CTAButton';

interface PortalProps {
  onNavigate: (page: string) => void;
}

function ImageWithFallback(props: any) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==\" alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />
  );
}

function AnimatedText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}

export default function Portal({ onNavigate }: PortalProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-40 bg-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="blob blob-a"></div>
          <div className="blob blob-b"></div>
          <div className="blob blob-c"></div>
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        <style>{`
          .blob {
            position: absolute;
            border-radius: 9999px;
            filter: blur(80px);
            opacity: 0.55;
            will-change: transform;
          }
          .blob-a {
            width: 520px; height: 520px;
            top: -140px; left: -120px;
            background: radial-gradient(circle at 30% 30%, #4a48a3, #1e1c6d);
            animation: blobA 26s ease-in-out infinite;
          }
          .blob-b {
            width: 460px; height: 460px;
            top: 40px; right: -140px;
            background: radial-gradient(circle at 30% 30%, #e14b3b, #be061b);
            opacity: 0.4;
            animation: blobB 32s ease-in-out infinite;
          }
          .blob-c {
            width: 400px; height: 400px;
            bottom: -160px; left: 45%;
            background: radial-gradient(circle at 30% 30%, #6f6dc4, #312e88);
            animation: blobC 30s ease-in-out infinite;
          }
          @keyframes blobA {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(90px,70px) scale(1.12); }
          }
          @keyframes blobB {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(-80px,60px) scale(1.15); }
          }
          @keyframes blobC {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(-60px,-70px) scale(1.1); }
          }
        `}</style>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedText>
            <div className="text-center">
              <h1 className="text-7xl lg:text-9xl mb-10 leading-[0.95] tracking-tighter font-light">
                The <span>Portal</span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-slate-600 mb-14 leading-relaxed max-w-3xl mx-auto font-light">
                One login. Everything you need.
              </p>
              
              <div className="flex flex-wrap gap-5 justify-center">
                <CTAButton 
                  variant="secondary" 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                >
                  Request Access
                </CTAButton>
                <button
                  className="px-10 py-5 text-lg bg-transparent text-slate-900 border-2 border-slate-300 rounded-md hover:bg-slate-50 transition-all font-light"
                >
                  Login
                </button>
              </div>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Estimates in Minutes',
                description: 'Turn estimates around fast.',
              },
              {
                icon: FileText,
                title: 'Instant Invoicing',
                description: 'Bill clients within minutes.',
              },
              {
                icon: Users,
                title: 'Talent Management',
                description: 'Contracts, timesheets, scheduling.',
              },
              {
                icon: Shield,
                title: 'Compliance Safeguards',
                description: 'Taxes and union rules handled.',
              },
              {
                icon: BarChart3,
                title: 'Real-Time Dashboard',
                description: 'Track all your projects.',
              },
              {
                icon: Smartphone,
                title: 'Mobile Access',
                description: 'Work from anywhere.',
              }
            ].map((feature, index) => (
              <AnimatedText key={index} delay={index * 100}>
                <div className="group bg-white rounded-lg p-10 hover:bg-blue-900 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                    <feature.icon className="text-white" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl mb-3 text-slate-900 group-hover:text-white transition-colors font-light">{feature.title}</h3>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed font-light">{feature.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Preview Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedText>
              <div>
                <h2 className="text-6xl lg:text-7xl mb-8 tracking-tighter font-light text-slate-900">
                  Built for <span className="text-blue-900">Your Workflow</span>
                </h2>
                <p className="text-xl text-slate-700 mb-8 leading-relaxed font-light">
                  Fast, intuitive, and designed to help you get things done.
                </p>
                
                <div className="space-y-4 mb-10">
                  {[
                    'One-click estimate-to-invoice',
                    'Secure client login',
                    'Automatic tax engine',
                    'Real-time tracking'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white" size={18} strokeWidth={1.5} />
                      </div>
                      <span className="text-lg text-slate-700 font-light">{item}</span>
                    </div>
                  ))}
                </div>
                
                <CTAButton 
                  variant="secondary"
                  onClick={() => onNavigate('contact')}
                >
                  Request a Demo
                </CTAButton>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzgzODc1Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Portal dashboard interface"
                  className="rounded-lg w-full shadow-2xl"
                />
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-40 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <AnimatedText>
              <div>
                <div className="text-7xl mb-4 text-white font-light">38+</div>
                <div className="text-xl text-slate-400 font-light">Years of Innovation</div>
              </div>
            </AnimatedText>
            <AnimatedText delay={100}>
              <div>
                <div className="text-7xl mb-4 text-white font-light">100%</div>
                <div className="text-xl text-slate-400 font-light">Satisfaction Guaranteed</div>
              </div>
            </AnimatedText>
            <AnimatedText delay={200}>
              <div>
                <div className="text-7xl mb-4 text-white font-light">24/7</div>
                <div className="text-xl text-slate-400 font-light">Portal Access</div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedText>
            <h2 className="text-6xl lg:text-7xl mb-8 tracking-tighter font-light text-slate-900">Ready to get started?</h2>
            <p className="text-xl mb-14 text-slate-600 font-light">
              Join teams already working smarter.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all text-lg font-light"
              >
                Request Portal Access
              </button>
              <button
                className="px-10 py-5 bg-transparent text-slate-900 border-2 border-slate-300 rounded-md hover:bg-slate-50 transition-all text-lg font-light"
              >
                Login
              </button>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
}
