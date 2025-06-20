
import React from 'react';
import Layout from '../components/Layout';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      bestFor: 'Small Teams',
      price: '$19',
      period: 'per user/month',
      description: 'Perfect for small teams getting started with project management',
      features: [
        'Up to 10 projects',
        'Basic Gantt charts',
        'Team collaboration',
        'Mobile app access',
        'Email support',
        'Basic reporting',
        'File storage (5GB)',
        'API access'
      ],
      notIncluded: [
        'BOQ management',
        'Advanced analytics',
        'Custom workflows',
        'Priority support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Business',
      bestFor: 'SMEs & Agencies',
      price: '$39',
      period: 'per user/month',
      description: 'Advanced features for growing businesses and agencies',
      features: [
        'Unlimited projects',
        'Advanced Gantt charts',
        'BOQ management',
        'Custom fields',
        'Advanced reporting',
        'API integrations',
        'File storage (50GB)',
        'Priority email support',
        'Time tracking',
        'Budget management',
        'Client portals',
        'Custom branding'
      ],
      notIncluded: [
        'Custom workflows',
        'PMO dashboard',
        'SLA guarantees'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      bestFor: 'Public/Govt. Organizations',
      price: 'Custom',
      period: 'pricing',
      description: 'Enterprise-grade solution with full customization and support',
      features: [
        'Everything in Business',
        'Custom workflows',
        'PMO dashboard',
        'Advanced security',
        'SSO integration',
        'Dedicated support',
        'Training & onboarding',
        'Custom integrations',
        'Unlimited storage',
        'SLA guarantees',
        'Multi-tenant setup',
        'Compliance reporting'
      ],
      notIncluded: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'What does the free trial include?',
      answer: 'Our 14-day free trial includes full access to all Business plan features with up to 5 users. No credit card required.'
    },
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, we offer 20% discount on all plans when billed annually. Enterprise customers can negotiate custom terms.'
    },
    {
      question: 'Is there Arabic language support?',
      answer: 'Yes, QTrack Pro fully supports Arabic language with RTL text direction and localized interfaces.'
    },
    {
      question: 'What integrations are available?',
      answer: 'We integrate with popular tools like Jira, MS Teams, Oracle, Google Drive, and many others. Custom integrations available for Enterprise plans.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. All plans include core project management features 
            with 14-day free trial and no setup fees.
          </p>
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
            <span className="text-sm font-medium">💡</span>
            <span className="text-sm">All plans include 14-day free trial</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative card-custom ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.bestFor}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                        <X size={16} className="text-muted-foreground flex-shrink-0" />
                        <span className="text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-custom">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              No credit card required. Get full access to all Business plan features for 14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">Start Free Trial</button>
              <button className="btn-secondary text-lg">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
