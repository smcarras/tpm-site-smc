import React, { useState, useEffect, useRef } from 'react';
import { Film, Zap, Users, DollarSign, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';

interface NewMediaProps {
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

export default function NewMedia({ onNavigate }: NewMediaProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedText>
            <div className="text-center">
              <h1 className="text-7xl lg:text-9xl mb-10 leading-[0.95] tracking-tighter font-light">
                <span className="text-blue-900">Dynamic Tools</span> for Dynamic Productions
              </h1>
              
              <p className="text-2xl lg:text-3xl text-slate-600 mb-14 leading-relaxed max-w-4xl mx-auto font-light">
                NBA, NFL, and high-profile work demand speed and precision.
              </p>
              
              <CTAButton 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('portal')}
              >
                Explore Portal
              </CTAButton>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: 'Fast estimates',
                description: 'Know your costs in minutes.',
              },
              {
                icon: Users,
                title: 'Crew booking',
                description: 'Contracts and schedules organized.',
              },
              {
                icon: DollarSign,
                title: 'Get paid faster',
                description: 'Streamlined invoicing.',
              },
              {
                icon: CheckCircle,
                title: 'Full compliance',
                description: 'Union rules handled automatically.',
              }
            ].map((item, index) => (
              <AnimatedText key={index} delay={index * 100}>
                <div className="group bg-white rounded-lg p-10 hover:bg-blue-900 transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors mx-auto">
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

      {/* Image + Text Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedText>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOQkElMjBiYXNrZXRiYWxsJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3ODM5NzEwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional sports production"
                className="rounded-lg shadow-2xl"
              />
            </AnimatedText>
            
            <AnimatedText delay={200}>
              <div>
                <h2 className="text-6xl lg:text-7xl mb-8 tracking-tighter font-light text-slate-900">
                  Built for <span className="text-blue-900">High-Profile Work</span>
                </h2>
                <p className="text-xl text-slate-700 mb-6 leading-relaxed font-light">
                  NBA and NFL productions demand precision and speed.
                </p>
                <div className="space-y-4">
                  {[
                    'Complex talent agreements',
                    'Multiple projects simultaneously',
                    'Real-time crew tracking',
                    'Full union compliance'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white" size={18} strokeWidth={1.5} />
                      </div>
                      <span className="text-lg text-slate-700 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-40 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedText>
            <div className="text-center mb-20">
              <h2 className="text-6xl lg:text-7xl mb-6 tracking-tighter font-light">Perfect For</h2>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Film,
                title: 'NBA & NFL Productions',
                description: 'High-profile sports content requires precision timing and flawless execution.',
              },
              {
                icon: Zap,
                title: 'New Media Content',
                description: 'Fast-paced content creation needs fast-paced tools.',
              },
              {
                icon: Users,
                title: 'Multi-Project Productions',
                description: 'Managing multiple shoots? Keep everything organized.',
              }
            ].map((item, index) => (
              <AnimatedText key={index} delay={index * 100}>
                <div className="bg-slate-800/50 rounded-lg p-10 h-full">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="text-white" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl mb-4 font-light">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light">{item.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedText>
            <h2 className="text-6xl lg:text-7xl mb-8 tracking-tighter font-light text-slate-900">Ready to elevate your productions?</h2>
            <p className="text-xl mb-14 text-slate-600 font-light">
              Join production teams already working smarter.
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
