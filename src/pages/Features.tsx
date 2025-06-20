
import React from 'react';
import Layout from '../components/Layout';
import { Calendar, Users, FileText, Search, Home, List } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Gantt Charts & Task Automation',
      description: 'Advanced project scheduling with intelligent task dependencies, automated workflows, and milestone tracking.',
      benefits: ['Automated task scheduling', 'Dependency management', 'Progress tracking', 'Resource allocation']
    },
    {
      icon: FileText,
      title: 'Budgeting & Resource Planning',
      description: 'Comprehensive budget management with BOQ support, cost tracking, and resource optimization tools.',
      benefits: ['BOQ integration', 'Cost center tracking', 'Budget forecasting', 'Resource optimization']
    },
    {
      icon: Users,
      title: 'Document Collaboration & Approvals',
      description: 'Secure document management with version control, approval workflows, and team collaboration features.',
      benefits: ['Version control', 'Approval workflows', 'Real-time collaboration', 'Secure sharing']
    },
    {
      icon: Search,
      title: 'AI-Powered Risk Alerts',
      description: 'Intelligent risk detection and early warning systems to keep your projects on track and within budget.',
      benefits: ['Predictive analytics', 'Risk assessment', 'Early warnings', 'Mitigation strategies']
    },
    {
      icon: Home,
      title: 'Dual-Language Arabic/English Support',
      description: 'Full support for Arabic and English languages with RTL text support and localized interfaces.',
      benefits: ['RTL support', 'Localized UI', 'Multi-language reports', 'Cultural adaptation']
    },
    {
      icon: List,
      title: 'Field Reporting with Mobile Access',
      description: 'Mobile-first field reporting tools with offline capabilities and real-time data synchronization.',
      benefits: ['Mobile app', 'Offline mode', 'Real-time sync', 'Photo attachments']
    }
  ];

  const integrations = [
    'Jira', 'MS Teams', 'Oracle', 'Trello', 'Google Drive', 'Slack', 'Zoom', 'SharePoint'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Powerful <span className="text-gradient">Features</span> for Modern Teams
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage projects efficiently, from planning to delivery, 
            with tools designed specifically for the Gulf region.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-16">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-2' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-primary" size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="card-custom p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                    <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl flex items-center justify-center">
                      <span className="text-muted-foreground text-lg">Feature Demo</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-card">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Seamless <span className="text-gradient">Integrations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect QTrack Pro with your existing tools and workflows for maximum productivity.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="card-custom text-center py-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-primary">{integration.charAt(0)}</span>
                </div>
                <h3 className="font-semibold">{integration}</h3>
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
              Experience the Power of QTrack Pro
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how our features can transform your project management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">Start Free Trial</button>
              <button className="btn-secondary text-lg">Request Demo</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
