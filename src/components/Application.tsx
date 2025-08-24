import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Application = () => {
  const applicationSteps = [
    {
      step: "1",
      title: "Online Application",
      description: "Complete our comprehensive application form and submit your motivation letter.",
      timeline: "5 minutes"
    },
    {
      step: "2", 
      title: "Assessment",
      description: "Take our aptitude test and participate in a technical interview with our admissions team.",
      timeline: "1 week"
    },
    {
      step: "3",
      title: "Portfolio Review",
      description: "Submit a small project or portfolio to demonstrate your passion and potential.",
      timeline: "3 days"
    },
    {
      step: "4",
      title: "Final Interview",
      description: "Meet with our team to discuss your goals and how Moringa can help you achieve them.",
      timeline: "30 minutes"
    }
  ];

  const requirements = [
    "Basic computer literacy and internet access",
    "High school diploma or equivalent",
    "Strong motivation to learn and grow",
    "Commitment to complete the intensive program",
    "English proficiency (intermediate level)"
  ];

  const nextIntakes = [
    { program: "Software Development", startDate: "March 4, 2024", deadline: "February 20, 2024" },
    { program: "Data Science", startDate: "March 11, 2024", deadline: "February 27, 2024" },
    { program: "UX/UI Design", startDate: "March 18, 2024", deadline: "March 6, 2024" },
    { program: "Digital Marketing", startDate: "March 25, 2024", deadline: "March 13, 2024" }
  ];

  return (
    <section id="apply" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your career? Here's everything you need to know about 
            applying to Moringa School and taking the first step toward your tech future.
          </p>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Application Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {applicationSteps.map((step, index) => (
              <Card key={index} className="bg-card-gradient border-border text-center relative">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{step.title}</CardTitle>
                  <p className="text-xs text-accent font-medium">{step.timeline}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Requirements */}
          <Card className="bg-card-gradient border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">What You Need</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Next Intakes */}
          <Card className="bg-card-gradient border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Next Intakes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nextIntakes.map((intake, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-card-foreground">{intake.program}</h4>
                    <p className="text-sm text-muted-foreground">
                      Starts: {intake.startDate}
                    </p>
                    <p className="text-xs text-accent font-medium">
                      Apply by: {intake.deadline}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-primary/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Transform Your Future?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't wait - our programs fill up quickly. Start your application today 
            and join the next generation of African tech leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;