import { Heart, Target, Eye, Leaf, TrendingUp, Shield, Lightbulb, Users, CheckCircle2, Sprout, Sun, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function AboutUs() {
  const values = [
    {
      icon: Users,
      title: "Farmer First",
      description: "Every decision we make prioritizes the needs and success of farmers, ensuring their voices shape our solutions.",
      color: "#2E7D32",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "We believe in open, honest communication and clear explanations of how our AI models work.",
      color: "#81C784",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Building technology that supports long-term agricultural sustainability and environmental stewardship.",
      color: "#689F38",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously advancing AI technology to solve real-world agricultural challenges.",
      color: "#F9A825",
    },
  ];

  const technologies = [
    {
      title: "AI Yield Prediction",
      description: "Advanced machine learning models analyze historical data, weather patterns, and crop health to forecast yields with 95% accuracy.",
      icon: TrendingUp,
      color: "#2E7D32",
    },
    {
      title: "Storage Optimization",
      description: "Intelligent algorithms match your harvest with optimal storage facilities based on location, capacity, and cost efficiency.",
      icon: Sprout,
      color: "#81C784",
    },
    {
      title: "Market Intelligence",
      description: "Real-time price forecasting and demand analysis help you identify the best markets for maximum profit.",
      icon: Target,
      color: "#F9A825",
    },
    {
      title: "Transport Planning",
      description: "Route optimization and cost calculation ensure efficient, economical delivery from farm to market.",
      icon: Cloud,
      color: "#689F38",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1F8F4] via-white to-[#E8F5E9]">
      {/* Hero Section - Sunrise Inspired */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2E7D32] via-[#81C784] to-[#FFE082] text-white">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFE082] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2E7D32] rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating natural elements */}
        <div className="absolute top-16 right-20 opacity-10 animate-pulse">
          <Sun className="w-32 h-32 text-[#FFE082]" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <Leaf className="w-40 h-40 text-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-5 py-2 backdrop-blur-sm">
              <Heart className="w-4 h-4 mr-2" />
              Our Story & Mission
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About GreenHarvest AI
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow">
              Empowering farmers with intelligent, data-driven farm-to-market decisions—inspired by the natural rhythm of agriculture.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#E8F5E9] text-[#2E7D32] border-[#2E7D32]/20 px-4 py-1.5">
                Our Mission
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#263238] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Reducing Farmer Losses Through Intelligent AI
              </h2>
              <p className="text-lg text-[#546E7A] leading-relaxed mb-6">
                Every year, farmers lose significant income due to unpredictable yields, inefficient storage, 
                poor market timing, and high transportation costs. We're changing that.
              </p>
              <p className="text-lg text-[#546E7A] leading-relaxed">
                GreenHarvest AI combines cutting-edge artificial intelligence with deep agricultural expertise 
                to optimize every step of the farm-to-market journey. Our mission is to ensure farmers make 
                informed decisions that maximize profits while minimizing waste and risk.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#2E7D32]/10 p-8">
              <div className="space-y-6">
                {[
                  { icon: TrendingUp, text: "95% yield prediction accuracy", color: "#2E7D32" },
                  { icon: Sprout, text: "Optimal storage facility matching", color: "#81C784" },
                  { icon: Target, text: "Real-time market price intelligence", color: "#F9A825" },
                  { icon: Cloud, text: "Cost-effective transport planning", color: "#689F38" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)` }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-lg text-[#263238] font-medium flex-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-24 bg-gradient-to-r from-[#E8F5E9] to-[#F1F8F4] rounded-3xl p-12 border-2 border-[#2E7D32]/10 shadow-xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#81C784] flex items-center justify-center shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            <Badge className="mb-4 bg-white text-[#2E7D32] border-[#2E7D32]/20 px-4 py-1.5">
              Our Vision
            </Badge>
            <h2 className="text-4xl font-bold text-[#263238] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              A Future of Smarter, Sustainable Agriculture
            </h2>
            <p className="text-xl text-[#546E7A] leading-relaxed mb-8">
              We envision a world where every farmer has access to intelligent tools that make agriculture 
              more profitable, sustainable, and resilient. Where AI-driven insights empower farmers to thrive 
              in an ever-changing climate and market landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Smarter Decisions", description: "Data-driven insights for every farm" },
                { title: "Sustainable Farming", description: "Reduce waste and environmental impact" },
                { title: "Profitable Ecosystems", description: "Fair prices and efficient markets" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-[#263238] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#546E7A]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#FFF8E1] text-[#F9A825] border-[#F9A825]/20 px-4 py-1.5">
              What We Do
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#263238] mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              End-to-End Farm Logistics Optimization
            </h2>
            <p className="text-xl text-[#546E7A] max-w-3xl mx-auto leading-relaxed">
              Our multi-agent AI system provides comprehensive decision support for the entire agricultural supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#2E7D32]/10 shadow-xl hover:shadow-2xl transition-all">
              <div className="h-2 bg-gradient-to-r from-[#2E7D32] to-[#81C784]"></div>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#81C784] flex items-center justify-center mb-4 shadow-lg">
                  <Sprout className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Multi-Agent AI System</CardTitle>
                <CardDescription className="text-base">
                  Four specialized AI agents working in harmony to optimize yield, storage, pricing, and transport
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Crop Yield Prediction Agent",
                    "Storage Management Agent",
                    "Price & Market Prediction Agent",
                    "Transport Cost Optimization Agent",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2E7D32] flex-shrink-0" />
                      <span className="text-[#546E7A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#F9A825]/10 shadow-xl hover:shadow-2xl transition-all">
              <div className="h-2 bg-gradient-to-r from-[#F9A825] to-[#FFE082]"></div>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F9A825] to-[#FFE082] flex items-center justify-center mb-4 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Decision Support</CardTitle>
                <CardDescription className="text-base">
                  Intelligent recommendations backed by data, with full farmer control and transparency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Automated data flow between agents",
                    "Manual override capability",
                    "Real-time insights and analytics",
                    "Easy-to-understand visualizations",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F9A825] flex-shrink-0" />
                      <span className="text-[#546E7A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Technology */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#E3F2FD] text-[#689F38] border-[#689F38]/20 px-4 py-1.5">
              Our Technology
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#263238] mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-[#546E7A] max-w-3xl mx-auto leading-relaxed">
              Cutting-edge algorithms and models designed specifically for agricultural intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <Card key={idx} className="border-2 hover:shadow-2xl transition-all group" style={{ borderColor: `${tech.color}20` }}>
                  <div className="h-2" style={{ background: `linear-gradient(90deg, ${tech.color} 0%, ${tech.color}dd 100%)` }}></div>
                  <CardHeader>
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform"
                      style={{ background: `linear-gradient(135deg, ${tech.color} 0%, ${tech.color}dd 100%)` }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{tech.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{tech.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#E8F5E9] text-[#2E7D32] border-[#2E7D32]/20 px-4 py-1.5">
              Our Core Values
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#263238] mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Drives Us
            </h2>
            <p className="text-xl text-[#546E7A] max-w-3xl mx-auto leading-relaxed">
              These principles guide every decision we make and every feature we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={idx} 
                  className="border-2 hover:shadow-2xl transition-all group text-center"
                  style={{ borderColor: `${value.color}20` }}
                >
                  <CardHeader className="pb-6">
                    <div 
                      className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-xl group-hover:scale-110 transition-transform"
                      style={{ background: `linear-gradient(135deg, ${value.color} 0%, ${value.color}dd 100%)` }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{value.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-br from-[#2E7D32] via-[#81C784] to-[#F9A825] rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE082] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2E7D32] rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Transform Your Farm-to-Market Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers already using GreenHarvest AI to make smarter, more profitable decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
