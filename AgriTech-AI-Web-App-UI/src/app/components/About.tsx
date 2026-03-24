import { Brain, Zap, Shield, Users, TrendingUp, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Algorithms",
    description: "State-of-the-art machine learning models trained on millions of agricultural data points for accurate predictions.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Lightning-fast analysis of market conditions, weather patterns, and logistics data for instant decision-making.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with encrypted data storage and reliable 99.9% uptime guarantee.",
  },
  {
    icon: Users,
    title: "Farmer-Centric Design",
    description: "Built with input from thousands of farmers to ensure practical, easy-to-use interfaces.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Our users report an average 25% increase in profits through optimized logistics and market selection.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning platform recognized by agricultural and technology organizations worldwide.",
  },
];

const stats = [
  { value: "10,000+", label: "Active Farmers" },
  { value: "95%", label: "Accuracy Rate" },
  { value: "₹2.5Cr+", label: "Saved in Costs" },
  { value: "24/7", label: "Support" },
];

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About AgriTech AI
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              We're revolutionizing agriculture through artificial intelligence, helping farmers 
              optimize their entire farm-to-market journey with data-driven insights and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To empower farmers with cutting-edge AI technology that transforms agricultural 
              logistics, maximizes profitability, and ensures food security for future generations. 
              We believe in sustainable, intelligent farming that benefits both farmers and consumers.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-green-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Technology Stack
            </h2>
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Multi-Agent AI Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our platform uses a sophisticated multi-agent system where four specialized AI agents 
                    work collaboratively to optimize different aspects of farm logistics:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Agent 1:</strong> Predicts crop yields using weather data, soil conditions, and historical patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Agent 2:</strong> Optimizes storage facility selection based on capacity, location, and cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Agent 3:</strong> Analyzes market trends to identify optimal selling opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Agent 4:</strong> Calculates most cost-effective transport routes and methods</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Data Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We integrate data from meteorological departments, agricultural market committees, 
                    satellite imagery, IoT sensors, and historical farm records to provide the most 
                    accurate and actionable insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Join the Agricultural Revolution
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Experience the power of AI-driven farm management. Start optimizing your operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@agritech-ai.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/workflow"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
            >
              Try the Platform
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
