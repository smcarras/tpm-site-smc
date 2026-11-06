import React, { useState, useEffect, useRef } from 'react';
import { Users, DollarSign, TrendingUp, Shield, CheckCircle, Star, ArrowRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';

interface AgentsAndTalentProps {
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

export default function AgentsAndTalent({ onNavigate }: AgentsAndTalentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedText>
            <div className="text-center">
              <h1 className="text-7xl lg:text-9xl mb-10 leading-[0.95] tracking-tighter font-light">
                Develop Talent. <span className="text-red-600">Get Paid Well.</span> Get Paid Fast.
              </h1>
              
              <p className="text-2xl lg:text-3xl text-slate-600 mb-14 leading-relaxed max-w-4xl mx-auto font-light">
                Modern tools for agents and talent to manage bookings, payments, and contracts.
              </p>
              
              <CTAButton 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('portal')}
              >
                Access Portal
              </CTAButton>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* For Agents & Talent */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedText>
              <div className="bg-blue-900 text-white rounded-lg p-12 h-full">
                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                  <Star size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl mb-6 font-light">For Agents</h3>
                <p className="text-lg mb-6 text-white/90 leading-relaxed font-light">
                  Manage your entire roster with tools that save time.
                </p>
                <div className="space-y-3">
                  {[
                    'Manage multiple talent profiles',
                    'Track bookings and availability',
                    'Monitor payments',
                    'Generate reports instantly'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="flex-shrink-0" size={20} strokeWidth={1.5} />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>

            <AnimatedText delay={100}>
              <div className="bg-slate-900 text-white rounded-lg p-12 h-full">
                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                  <Users size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl mb-6 font-light">For Talent</h3>
                <p className="text-lg mb-6 text-white/90 leading-relaxed font-light">
                  Take control of your career with complete visibility.
                </p>
                <div className="space-y-3">
                  {[
                    'View all bookings and schedule',
                    'Track payments in real-time',
                    'Access contracts and documents',
                    'Submit timesheets easily'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="flex-shrink-0" size={20} strokeWidth={1.5} />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedText>
            <div className="text-center mb-20">
              <h2 className="text-6xl lg:text-7xl mb-6 tracking-tighter font-light text-slate-900">Complete Tools</h2>
              <p className="text-xl text-slate-600 font-light">Everything you need to succeed</p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: 'Get Paid Well and Fast',
                description: 'Streamlined payment processing. No delays.',
              },
              {
                icon: TrendingUp,
                title: 'Career Development',
                description: 'Track performance and opportunities.',
              },
              {
                icon: Shield,
                title: 'Full Compliance',
                description: 'Contracts, taxes, union requirements handled.',
              },
              {
                icon: Users,
                title: 'Centralized Management',
                description: 'All bookings and payments in one place.',
              },
              {
                icon: CheckCircle,
                title: 'Transparent Reporting',
                description: 'Complete visibility into earnings.',
              },
              {
                icon: Star,
                title: 'Dedicated Support',
                description: 'Our team is here to help you succeed.',
              }
            ].map((item, index) => (
              <AnimatedText key={index} delay={index * 100}>
                <div className="group bg-slate-50 rounded-lg p-10 hover:bg-blue-900 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                    <item.icon className="text-white" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl mb-3 text-slate-900 group-hover:text-white transition-colors font-light">{item.title}</h3>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed font-light">{item.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-40 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedText>
            <h2 className="text-6xl lg:text-7xl mb-8 tracking-tighter font-light">Built on Trust</h2>
            <p className="text-xl leading-relaxed mb-8 text-slate-400 font-light max-w-3xl mx-auto">
              Since 1986, we've been helping talent and agents succeed. Our reputation is built on getting people paid well, paid fast, and always staying compliant.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedText>
            <h2 className="text-6xl lg:text-7xl mb-8 tracking-tighter font-light text-slate-900">Ready to work smarter?</h2>
            <p className="text-xl mb-14 text-slate-600 font-light">
              Join agents and talent already succeeding with our tools.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all text-lg font-light"
              >
                Request Portal Access
              </button>
              <button
                onClick={() => onNavigate('portal')}
                className="px-10 py-5 bg-transparent text-slate-900 border-2 border-slate-300 rounded-md hover:bg-slate-50 transition-all text-lg font-light"
              >
                Learn More
              </button>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
}
