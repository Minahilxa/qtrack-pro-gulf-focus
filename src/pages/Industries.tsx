
import React from 'react';
import Layout from '../components/Layout';
import { Home, Users, Calendar, FileText } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Home,
      title: 'Government & Public Projects',
      description: 'Aligned with QNPM standards for government project management',
      features: [
        'QNPM compliance and reporting',
        'Public sector workflow templates',
        'Multi-agency collaboration tools',
        'Audit trail and transparency features',
        'Arabic government document templates'
      ],
      caseStudy: 'Helped Qatar Ministry of Planning streamline infrastructure project delivery by 40%'
    },
    {
      icon: FileText,
      title: 'Construction & Infrastructure',
      description: 'Comprehensive tools for construction project lifecycle management',
      features: [
        'Milestone tracking and reporting',
        'Contractor portal and communication',
        'Site inspection and safety management',
        'Material and equipment tracking',
        'BOQ integration and cost control'
      ],
      caseStudy: 'Managed $500M+ in construction projects across Doha with zero budget overruns'
    },
    {
      icon: Users,
      title: 'Enterprise & SMEs',
      description: 'Scalable solutions for businesses of all sizes in the Gulf region',
      features: [
        'Custom workflow automation',
        'Client project portals',
        'Resource planning and allocation',
        'Performance analytics and KPIs',
        'Multi-currency support'
      ],
      caseStudy: 'Increased project delivery efficiency by 60% for leading Gulf consulting firms'
    },
    {
      icon: Calendar,
      title: 'Education & Healthcare',
      description: 'Specialized project management for facility and program management',
      features: [
        'Facility maintenance scheduling',
        'Compliance and regulation tracking',
        'Vendor and supplier management',
        'Budget allocation and tracking',
        'Staff scheduling and coordination'
      ],
      caseStudy: 'Optimized healthcare facility projects with 99.8% on-time completion rate'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Industries</span> We Serve
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored project management solutions for key sectors across Qatar and the Gulf region, 
            with deep understanding of local requirements and regulations.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-20">
            {industries.map((industry, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center">
                    <industry.icon className="text-primary" size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{industry.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{industry.description}</p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Key Features:</h3>
                      <ul className="space-y-3">
                        {industry.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border-l-4 border-primary">
                      <p className="text-sm font-medium text-primary mb-1">Success Story</p>
                      <p className="text-sm text-muted-foreground">{industry.caseStudy}</p>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="card-custom p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                    <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl flex items-center justify-center">
                      <span className="text-muted-foreground text-lg">Industry Solution Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proven Results Across <span className="text-gradient">All Industries</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by organizations of all sizes across the Gulf region
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Efficiency Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="card-custom text-center bg-gradient-to-br from-primary/5 to-primary/10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready for Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a customized demo tailored to your industry needs and see how QTrack Pro 
              can transform your project management processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">Request Industry Demo</button>
              <button className="btn-secondary text-lg">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
