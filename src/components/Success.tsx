import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Success = () => {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Software Engineer at Safaricom",
      location: "Nairobi, Kenya",
      quote: "Moringa School transformed my career completely. From waitressing to software engineering in 6 months. The hands-on projects and mentorship made all the difference.",
      initial: "SW"
    },
    {
      name: "James Ochieng",
      role: "Data Scientist at Twiga Foods",
      location: "Kampala, Uganda",
      quote: "The data science program gave me real-world skills I use daily. Working with actual datasets from day one prepared me for the challenges I face in my role.",
      initial: "JO"
    },
    {
      name: "Amina Hassan",
      role: "UX Designer at iHub",
      location: "Nairobi, Kenya", 
      quote: "The design thinking approach at Moringa is incredible. I learned to solve real problems for real users, and my portfolio got me hired before I even graduated.",
      initial: "AH"
    },
    {
      name: "David Kimani",
      role: "Digital Marketing Manager at Equity Bank",
      location: "Nairobi, Kenya",
      quote: "From zero marketing knowledge to leading campaigns for one of Kenya's largest banks. Moringa's practical approach made it possible.",
      initial: "DK"
    }
  ];

  const stats = [
    { number: "3,000+", label: "Graduates Placed" },
    { number: "92%", label: "Job Placement Rate" },
    { number: "150%", label: "Average Salary Increase" },
    { number: "50+", label: "Hiring Partners" }
  ];

  return (
    <section id="success" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our graduates are building the future of technology across Africa and beyond. 
            See how Moringa School has transformed careers and lives.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card-gradient border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="bg-primary text-primary-foreground">
                    <AvatarFallback>{testimonial.initial}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <blockquote className="text-card-foreground mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
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

export default Success;