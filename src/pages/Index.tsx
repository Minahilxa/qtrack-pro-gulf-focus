
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Check, Users, Calendar, FileText, Search } from 'lucide-react';
import Layout from '../components/Layout';

const Index = () => {
  const industries = [
    { name: 'Government', color: 'bg-blue-500' },
    { name: 'Construction', color: 'bg-orange-500' },
    { name: 'SME', color: 'bg-purple-500' },
    { name: 'Healthcare', color: 'bg-green-500' },
  ];

  const features = [
    {
      icon: Calendar,
      title: 'Smart Planning',
      description: 'AI-powered project scheduling with Gantt charts and automated task management.'
    },
    {
      icon: FileText,
      title: 'Document Control',
      description: 'Secure document collaboration with approval workflows and version control.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools with Arabic-English dual language support.'
    },
    {
      icon: Search,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics with customizable dashboards.'
    },
  ];

  const testimonials = [
    {
      quote: "QTrack Pro streamlined our contractor reporting across all sites.",
      author: "Project Director",
      company: "Doha InfraWorks"
    },
    {
      quote: "Finally, a PM system built for Qatar.",
      author: "PMO Lead",
      company: "Ministry of Planning"
    },
    {
      quote: "The dual-language support made adoption seamless for our diverse team.",
      author: "Construction Manager",
      company: "Gulf Construction Ltd"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Seamless Project Management 
                  <span className="text-gradient"> Tailored for the Gulf</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  From planning to delivery — manage your projects with intelligent tools 
                  designed for Qatar's evolving landscape.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-lg">Get Started Free</button>
                <button className="btn-secondary text-lg">Request a Demo</button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check size={16} className="text-primary" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check size={16} className="text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="card-custom p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="QTrack Pro Dashboard Preview"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-[#9CD400] rounded-xl flex items-center justify-center">
                <ArrowDown className="text-white animate-bounce" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Showcase */}
      <section className="py-16 bg-card">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Leading Industries</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center space-x-3 px-6 py-3 rounded-full bg-white border border-border">
                <div className={`w-3 h-3 rounded-full ${industry.color}`}></div>
                <span className="font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">QTrack Pro</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for the Gulf region with features that matter to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-custom text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features" className="btn-primary">
              Explore All Features
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by teams across Qatar and the Gulf region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-custom">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="card-custom text-center bg-gradient-to-br from-primary/5 to-primary/10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of companies across Qatar and the Gulf region who trust QTrack Pro 
              for their project management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">Start Free Trial</button>
              <button className="btn-secondary text-lg">Schedule a Demo</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
