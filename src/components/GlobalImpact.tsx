import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GlobalImpact = () => {
  const impactAreas = [
    {
      title: "Bridging the Skills Gap",
      description: "We're addressing Africa's tech talent shortage by training thousands of job-ready developers, designers, and digital marketers annually.",
      icon: "🌍"
    },
    {
      title: "Promoting Diversity",
      description: "45% of our graduates are women, helping create a more inclusive tech ecosystem across Africa and globally.",
      icon: "👥"
    },
    {
      title: "Economic Empowerment",
      description: "Our alumni contribute over $50M annually to the African economy, with many starting their own tech companies.",
      icon: "💼"
    },
    {
      title: "Global Reach",
      description: "Graduates work at international companies like Google, Microsoft, and Safaricom, representing African talent worldwide.",
      icon: "🚀"
    }
  ];

  const locations = [
    { country: "Kenya", students: "2,500+", established: "2014" },
    { country: "Uganda", students: "800+", established: "2017" },
    { country: "Rwanda", students: "400+", established: "2019" },
    { country: "Remote", students: "1,200+", established: "2020" }
  ];

  return (
    <section id="impact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Global Impact & Reach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moringa School is transforming the global tech landscape by building diverse, 
            world-class talent from Africa for the world.
          </p>
        </div>

        {/* Impact Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactAreas.map((area, index) => (
            <Card key={index} className="bg-card-gradient border-border text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{area.icon}</div>
                <CardTitle className="text-lg text-card-foreground">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Locations */}
        <div className="bg-primary/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Our Presence Across Africa
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {location.students}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {location.country}
                </div>
                <div className="text-sm text-muted-foreground">
                  Since {location.established}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Be Part of Our Global Community?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of Moringa graduates who are building the future of technology 
            and making an impact across Africa and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;