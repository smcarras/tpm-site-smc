import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
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

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedText>
            <div className="text-center">
              <h1 className="text-7xl lg:text-9xl mb-10 leading-[0.95] tracking-tighter font-light">
                Request <span className="text-red-600">Portal Access</span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
                Join teams already working smarter. Get started today.
              </p>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <AnimatedText>
                <h2 className="text-5xl mb-6 tracking-tighter font-light text-slate-900">Get Portal Access</h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                  Fill out the form. Our team will respond within 24 hours.
                </p>
              </AnimatedText>

              {isSubmitted ? (
                <AnimatedText>
                  <div className="bg-white border-2 border-green-500 rounded-lg p-12 text-center">
                    <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-white" size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-4xl mb-4 text-slate-900 font-light">Thank You!</h3>
                    <p className="text-lg text-slate-700 font-light">
                      We'll be in touch within 24 hours to set up your portal access.
                    </p>
                  </div>
                </AnimatedText>
              ) : (
                <AnimatedText delay={100}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-700 mb-3 text-lg font-light">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-lg font-light"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-slate-700 mb-3 text-lg font-light">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-lg font-light"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-slate-700 mb-3 text-lg font-light">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-lg font-light"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-slate-700 mb-3 text-lg font-light">
                        Company/Organization *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-lg font-light"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-slate-700 mb-3 text-lg font-light">
                        Your Role *
                      </label>
                      <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-lg font-light"
                      >
                        <option value="">Select your role</option>
                        <option value="political-consultant">Political Consultant</option>
                        <option value="agent">Agent</option>
                        <option value="talent">Talent</option>
                        <option value="new-media">New Media Producer</option>
                        <option value="production">Production Manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-slate-700 mb-3 text-lg font-light">
                        Tell us about your needs
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-lg font-light"
                        placeholder="What are you looking to accomplish?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white px-10 py-5 rounded-md hover:bg-red-700 transition-all text-lg flex items-center justify-center gap-3 font-light"
                    >
                      <Send size={24} strokeWidth={1.5} />
                      Request Portal Access
                    </button>
                  </form>
                </AnimatedText>
              )}
            </div>

            {/* Contact Info & Quick Links */}
            <div className="space-y-8">
              <AnimatedText delay={200}>
                <div>
                  <h2 className="text-5xl mb-6 tracking-tighter font-light text-slate-900">Get in Touch</h2>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                    Have questions? Our team is here to help.
                  </p>

                  <div className="space-y-6">
                    {[
                      { icon: Mail, title: 'Email Us', value: 'info@talentpaymaster.com' },
                      { icon: Phone, title: 'Call Us', value: '(555) 123-4567' },
                      { icon: MapPin, title: 'Office Hours', value: 'Monday - Friday: 9am - 6pm EST' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-white" size={28} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-lg mb-1 font-light text-slate-900">{item.title}</h3>
                          <p className="text-slate-600 font-light">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedText>

              {/* Quick Links */}
              <AnimatedText delay={300}>
                <div className="bg-white p-10 rounded-lg border border-slate-200">
                  <h3 className="text-3xl mb-4 font-light text-slate-900">Learn More</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed font-light">
                    Want to see what the portal can do first?
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: 'Explore the Portal Features', page: 'portal' },
                      { label: 'For Political Consultants', page: 'political' },
                      { label: 'For New Media Teams', page: 'newmedia' },
                      { label: 'For Agents & Talent', page: 'agents' }
                    ].map((link, index) => (
                      <button
                        key={index}
                        onClick={() => onNavigate(link.page)}
                        className="w-full text-left px-6 py-4 bg-slate-50 rounded-md hover:bg-blue-900 hover:text-white transition-all border border-slate-200 hover:border-blue-900 flex items-center justify-between group font-light"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} strokeWidth={1.5} />
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedText>
            <div className="text-center mb-16">
              <h2 className="text-6xl lg:text-7xl mb-6 tracking-tighter font-light text-slate-900">Why Request Access?</h2>
            </div>
          </AnimatedText>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Fast Setup', description: 'Portal access configured within 24-48 hours.' },
              { title: 'Dedicated Support', description: 'Personalized onboarding and ongoing support.' },
              { title: 'No Obligation', description: 'Request a demo and see the portal in action first.' }
            ].map((item, index) => (
              <AnimatedText key={index} delay={index * 100}>
                <div className="bg-slate-50 rounded-lg p-10 text-center h-full">
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-white" size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl mb-3 font-light text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{item.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
