import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Target, 
  Users, 
  Award,
  TrendingUp,
  Shield,
  Lightbulb,
  Handshake,
  ArrowRight,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * The Nest page - Company story, team, mission, and culture
 */

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    bio: 'With 15+ years in real estate, Sarah founded Tidal to bring transparency and excellence to property services. Licensed broker and investment strategist.',
    image: '/airo-assets/images/pages/the-nest/team-member-1',
    email: 'sarah@tidalrealty.com',
    linkedin: '#'
  },
  {
    name: 'Marcus Chen',
    role: 'Director of Asset Management',
    bio: 'Marcus oversees our property management division, ensuring every property is maintained to the highest standards. 10+ years managing portfolios.',
    image: '/airo-assets/images/pages/the-nest/team-member-2',
    email: 'marcus@tidalrealty.com',
    linkedin: '#'
  },
  {
    name: 'Jennifer Rodriguez',
    role: 'Senior Broker',
    bio: 'Jennifer specializes in luxury residential and commercial transactions. Top producer with $50M+ in annual sales and exceptional client satisfaction.',
    image: '/airo-assets/images/pages/the-nest/team-member-3',
    email: 'jennifer@tidalrealty.com',
    linkedin: '#'
  },
  {
    name: 'David Thompson',
    role: 'Investment Consultant',
    bio: 'David guides investors through market analysis and acquisition strategies. Former financial analyst with deep expertise in real estate investment.',
    image: '/airo-assets/images/pages/the-nest/team-member-4',
    email: 'david@tidalrealty.com',
    linkedin: '#'
  }
];

export default function TheNestPage() {
  return (
    <>
      <title>The Nest - About Tidal Realty Services</title>
      <meta name="description" content="Meet the team behind Tidal Realty Services. Learn about our mission, values, and commitment to exceptional real estate services." />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="/airo-assets/images/pages/the-nest/hero" 
              alt="Tidal Realty team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                Welcome to The Nest
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Where Expertise Meets Excellence
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                We're more than a real estate company. We're your partners in building wealth and achieving property goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="mb-4">Our Story</Badge>
                <h2 className="text-4xl font-bold mb-6">
                  Built on Trust, Driven by Results
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Tidal Realty Services was founded in 2015 with a simple mission: to provide real estate services that actually serve our clients' best interests.
                  </p>
                  <p>
                    We saw an industry where agents prioritized quick commissions over long-term relationships, where property managers were reactive instead of proactive, and where investors struggled to find trustworthy guidance.
                  </p>
                  <p>
                    So we built something different. A company where transparency isn't just a buzzword, it's how we operate. Where expertise is backed by results. Where your success is our success.
                  </p>
                  <p>
                    Today, we manage over 500 properties, have facilitated $250M+ in transactions, and maintain a 98% client satisfaction rate. But the numbers that matter most? The families we've helped find homes, the investors whose portfolios we've grown, and the property owners who sleep better knowing we're on their side.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/airo-assets/images/pages/the-nest/office-culture" 
                    alt="Tidal Realty office culture"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border">
                  <div className="text-3xl font-bold text-primary mb-1">2015</div>
                  <div className="text-sm text-muted-foreground">Founded in Houston</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Client-First Approach',
                  description: 'Your goals drive our strategy. We succeed when you succeed.'
                },
                {
                  icon: Shield,
                  title: 'Unwavering Integrity',
                  description: 'Transparency, honesty, and ethical practices in every transaction.'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation & Excellence',
                  description: 'Leveraging technology and expertise to deliver superior results.'
                },
                {
                  icon: Handshake,
                  title: 'Long-Term Partnerships',
                  description: 'Building relationships that last beyond a single transaction.'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary">
                    <CardContent className="p-6 text-center">
                      <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Meet the Team</Badge>
              <h2 className="text-4xl font-bold mb-4">The People Behind Tidal</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-[300px] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Social Links - Show on Hover */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a 
                          href={`mailto:${member.email}`}
                          className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Clients Choose Tidal</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                What sets us apart in the real estate industry
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Award,
                  title: 'Proven Track Record',
                  stat: '$250M+',
                  description: 'In successful transactions since 2015'
                },
                {
                  icon: Users,
                  title: 'Client Satisfaction',
                  stat: '98%',
                  description: 'Client satisfaction and retention rate'
                },
                {
                  icon: TrendingUp,
                  title: 'Portfolio Growth',
                  stat: '500+',
                  description: 'Properties under active management'
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                        <stat.icon className="h-10 w-10 text-primary" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">{stat.stat}</div>
                      <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                      <p className="text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Our Culture</Badge>
                <h2 className="text-4xl font-bold mb-4">Life at Tidal</h2>
                <p className="text-xl text-muted-foreground">
                  We believe great service starts with a great team
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Heart,
                    title: 'Work-Life Balance',
                    description: 'We support our team so they can support our clients with energy and enthusiasm.'
                  },
                  {
                    icon: Lightbulb,
                    title: 'Continuous Learning',
                    description: 'Regular training, certifications, and professional development opportunities.'
                  },
                  {
                    icon: Users,
                    title: 'Collaborative Environment',
                    description: 'We win together. Knowledge sharing and teamwork are core to our success.'
                  },
                  {
                    icon: Award,
                    title: 'Recognition & Growth',
                    description: 'Clear career paths and recognition for exceptional performance.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6 flex gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg h-fit">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
                    <p className="text-lg opacity-90 mb-6">
                      We're always looking for talented professionals who share our values and passion for real estate.
                    </p>
                    <Button size="lg" variant="secondary">
                      View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1440 320">
              <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Whether you're buying, selling, investing, or need property management, we're here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                  <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
                <div className="flex flex-col items-center gap-2">
                  <Phone className="h-6 w-6 opacity-90" />
                  <div className="font-bold">(713) 555-0123</div>
                  <div className="text-sm opacity-75">Mon-Fri 9am-6pm</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="h-6 w-6 opacity-90" />
                  <div className="font-bold">info@tidalrealty.com</div>
                  <div className="text-sm opacity-75">24hr response time</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="h-6 w-6 opacity-90" />
                  <div className="font-bold">Houston, TX</div>
                  <div className="text-sm opacity-75">Serving Greater Houston</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
