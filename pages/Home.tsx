import React, { useState, useEffect, useRef } from 'react';
import { Zap, DollarSign, Users, Shield, Clock, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import images from '../config/images';

interface HomeProps {
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
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==" alt="Error loading image" {...rest} data-original-url={src} />
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

export default function Home({ onNavigate }: HomeProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbiUyMGRyYW1hdGljfGVufDF8fHx8MTc4Mzk3NDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cinematic production"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center text-white py-20">
          <AnimatedText>
            <h1 className="text-7xl lg:text-9xl mb-10 leading-[0.95] tracking-tighter font-light">
              Faster Estimates.<br />
              Faster Payments.<br />
              <span className="text-red-600">Zero Drama.</span>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={200}>
            <p className="text-xl lg:text-2xl text-white/90 mb-14 leading-relaxed max-w-3xl mx-auto font-light">
              Behind every killer campaign and breakout production is a team that refuses to get buried in paperwork.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={400}>
            <div className="flex flex-wrap gap-5 justify-center">
              <CTAButton 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('portal')}
              >
                Explore Portal
              </CTAButton>
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 text-lg bg-transparent text-white border-2 border-white/40 rounded-md hover:bg-white/10 transition-all font-light"
              >
                Contact
              </button>
            </div>
          </AnimatedText>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Yesterday's Pioneers Section */}
      <section className="py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedText>
            <div className="text-center mb-24">
              <h2 className="text-6xl lg:text-7xl mb-12 tracking-tighter font-light leading-[1.1]">
                <span className="text-slate-900">Yesterday's Pioneers.</span><br />
                <span className="text-blue-900">Today's Advantage.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
                Innovating since 1986. We helped set industry standards in the '90s. Today, we built a portal that matches your speed.
              </p>
            </div>
          </AnimatedText>

          {/* Key Benefits - Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                text: 'Estimates in minutes',
              },
              {
                icon: Zap,
                text: 'Bill clients instantly',
              },
              {
                icon: DollarSign,
                text: 'Get paid fast',
              },
              {
                icon: Users,
                text: 'Total control. One login.',
              },
              {
                icon: Shield,
                text: 'Built for consultants & agents',
              },
              {
                icon: CheckCircle,
                text: 'Auto compliance',
              }
            ].map((benefit, index) => (
              <AnimatedText key={index} delay={index * 100}>
                <div className="group bg-slate-50 rounded-lg p-8 hover:bg-blue-900 transition-all duration-300 h-full">
                  <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center mb-5 group-hover:bg-red-600 transition-colors">
                    <benefit.icon className="text-white" size={20} strokeWidth={1.5} />
                  </div>
                  <p className="text-lg text-slate-700 group-hover:text-white transition-colors font-light">{benefit.text}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients Logo Banner */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-500 font-light">Trusted By</p>
        </div>
        <div className="relative">
          {/* LOGO BANNER - TO ADD YOUR ACTUAL LOGOS:
              1. Go to /config/images.ts
              2. Find the "clientLogos" section
              3. Replace the placeholder URLs with your actual logo image URLs
              The logos will automatically update here once you save the file. */}
          <div className="flex animate-scroll items-center">
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {/* History Channel Logo */}
                <div className="flex-shrink-0 px-16 flex items-center justify-center h-24">
                  <ImageWithFallback
                    src={images.clientLogos.historyChannel}
                    alt="History Channel"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                {/* Investigation Discovery Logo */}
                <div className="flex-shrink-0 px-16 flex items-center justify-center h-24">
                  <ImageWithFallback
                    src={images.clientLogos.investigationDiscovery}
                    alt="Investigation Discovery"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                {/* Discovery Channel Logo */}
                <div className="flex-shrink-0 px-16 flex items-center justify-center h-24">
                  <ImageWithFallback
                    src={images.clientLogos.discoveryChannel}
                    alt="Discovery Channel"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                {/* NFL Logo */}
                <div className="flex-shrink-0 px-16 flex items-center justify-center h-24">
                  <ImageWithFallback
                    src={images.clientLogos.nfl}
                    alt="NFL"
                    className="h-20 w-auto object-contain"
                  />
                </div>
                
                {/* TLC Logo */}
                <div className="flex-shrink-0 px-16 flex items-center justify-center h-24">
                  <ImageWithFallback
                    src={images.clientLogos.tlc}
                    alt="TLC"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                {/* National Geographic Logo */}
                <div className="flex-shrink-0 px-16 flex items-center justify-center h-24">
                  <ImageWithFallback
                    src={images.clientLogos.nationalGeographic}
                    alt="National Geographic"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Horizontal Scroll Features Section */}
      <section className="py-40 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <AnimatedText>
            <div className="text-center">
              <h2 className="text-6xl lg:text-7xl mb-6 tracking-tighter font-light">
                The <span className="text-red-600">Portal</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                One login. Everything you need.
              </p>
            </div>
          </AnimatedText>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {[
              {
                title: 'Instant Estimates',
                description: 'Turn estimates around in minutes. Know your costs and move forward fast.',
                icon: Clock,
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzgzODc1Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'Fast Payments',
                description: 'Send invoices directly. Bill clients within minutes.',
                icon: DollarSign,
                image: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgzOTczOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'Team Management',
                description: 'Manage talent and crew with contracts, timesheets, and scheduling.',
                icon: Users,
                image: 'https://images.unsplash.com/photo-1668706971199-37e30a4e6298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBjYW1wYWlnbiUyMHN0cmF0ZWd5fGVufDF8fHx8MTc4Mzk3MDg4MXww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'Auto Compliance',
                description: 'Taxes, pensions, and union rules handled automatically.',
                icon: Shield,
                image: 'https://images.unsplash.com/photo-1683481669762-90b3800049b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGZsYWclMjBhYnN0cmFjdHxlbnwxfHx8fDE3ODM5NzM5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[450px] snap-center"
              >
                <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-red-600/50 transition-all group h-full">
                  <div className="aspect-video bg-slate-800 relative overflow-hidden">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                        <feature.icon className="text-white" size={20} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl mb-3 font-light">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-light">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        <div className="text-center mt-20">
          <CTAButton 
            variant="secondary" 
            size="lg"
            onClick={() => onNavigate('portal')}
          >
            Explore Portal
          </CTAButton>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedText>
            <div className="text-center mb-24">
              <h2 className="text-6xl lg:text-7xl mb-6 tracking-tighter font-light text-slate-900">Who We Serve</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                Built for consultants, agents, and new media leaders.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Political Consultants',
                description: 'Fast estimates, instant billing, full compliance.',
                page: 'political',
              },
              {
                icon: Zap,
                title: 'New Media',
                description: 'Speed and precision for NBA, NFL, and high-profile work.',
                page: 'newmedia',
              },
              {
                icon: Shield,
                title: 'Agents & Talent',
                description: 'Get people paid well and paid fast.',
                page: 'agents',
              }
            ].map((item, index) => (
              <AnimatedText key={index} delay={index * 150}>
                <div 
                  onClick={() => onNavigate(item.page)}
                  className="group bg-slate-50 rounded-lg p-10 hover:bg-blue-900 transition-all cursor-pointer h-full"
                >
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-all">
                    <item.icon className="text-white" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl mb-4 text-slate-900 group-hover:text-white transition-colors font-light">{item.title}</h3>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed mb-6 font-light">{item.description}</p>
                  <div className="flex items-center gap-2 text-blue-900 group-hover:text-white group-hover:gap-4 transition-all">
                    <span className="font-light">Learn more</span>
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedText>
            <h2 className="text-6xl lg:text-7xl mb-8 tracking-tighter font-light">Ready to get started?</h2>
            <p className="text-xl mb-14 text-slate-400 font-light">
              Join teams already working smarter.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-white text-slate-900 rounded-md hover:bg-slate-100 transition-all text-lg font-light"
              >
                Request Portal Access
              </button>
              <button
                onClick={() => onNavigate('portal')}
                className="px-10 py-5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all text-lg font-light"
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