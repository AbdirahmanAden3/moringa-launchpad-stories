import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Programs = () => {
  const programs = [
    {
      title: "Software Development",
      duration: "6 months",
      description: "Master full-stack development with modern technologies including React, Node.js, and cloud deployment.",
      skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "AWS"],
      outcomes: "92% job placement rate within 6 months"
    },
    {
      title: "Data Science & Analytics",
      duration: "5 months", 
      description: "Learn to extract insights from data using Python, machine learning, and visualization tools.",
      skills: ["Python", "Machine Learning", "SQL", "Tableau", "Statistics", "R"],
      outcomes: "Average salary increase of 150%"
    },
    {
      title: "Digital Marketing",
      duration: "4 months",
      description: "Develop expertise in modern digital marketing strategies and analytics-driven campaigns.",
      skills: ["SEO", "Social Media", "Google Ads", "Analytics", "Content Strategy", "Email Marketing"],
      outcomes: "85% of graduates start agencies or get promoted"
    },
    {
      title: "UX/UI Design",
      duration: "4 months",
      description: "Create beautiful, user-centered digital experiences using industry-standard design tools.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Usability Testing", "Adobe Creative"],
      outcomes: "Average portfolio projects: 5+"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            World-Class Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our industry-focused curriculum is designed by experts and updated regularly to match current market demands. 
            Every program includes hands-on projects, mentorship, and career support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card-gradient border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl text-card-foreground">{program.title}</CardTitle>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {program.duration}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-medium text-accent">
                      🎯 {program.outcomes}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;