
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@qtrackpro.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+974-XXXX-XXXX',
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Doha, Qatar',
      description: 'Visit our office in the heart of Doha'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Sun - Thu: 8AM - 6PM',
      description: 'Qatar Standard Time (UTC+3)'
    }
  ];

  const offices = [
    {
      city: 'Doha',
      country: 'Qatar',
      address: 'West Bay Business District\nP.O. Box 12345\nDoha, Qatar',
      phone: '+974-XXXX-XXXX',
      email: 'doha@qtrackpro.com'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Dubai International Financial Centre\nP.O. Box 67890\nDubai, UAE',
      phone: '+971-X-XXX-XXXX',
      email: 'dubai@qtrackpro.com'
    },
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      address: 'King Abdullah Financial District\nP.O. Box 11111\nRiyadh, Saudi Arabia',
      phone: '+966-X-XXX-XXXX',
      email: 'riyadh@qtrackpro.com'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your project management? We're here to help you get started 
            and answer any questions about QTrack Pro.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Your company or organization"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project management needs..."
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-lg font-medium text-primary mb-1">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-custom bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="font-semibold mb-4">Need Immediate Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Our support team is available to help you with any questions about QTrack Pro.
                </p>
                <button className="btn-secondary">Schedule a Call</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Offices</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Serving clients across the Gulf region with local presence and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="card-custom text-center">
                <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                <p className="text-muted-foreground mb-4">{office.country}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Address:</p>
                    <p className="text-muted-foreground whitespace-pre-line">{office.address}</p>
                  </div>
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-primary">{office.phone}</p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-primary">{office.email}</p>
                  </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait – start your free trial today and experience the power of QTrack Pro 
              for your project management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">Start Free Trial</button>
              <button className="btn-secondary text-lg">Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
