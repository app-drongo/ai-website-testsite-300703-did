'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  eyebrow: 'Test Website Demo',
  headline: 'Simple test website',
  headlineEmphasis: 'ready to use',
  leadText:
    'A clean, minimal test website perfect for demonstrations, prototyping, and development testing. Built with modern technologies and ready to customize for your needs.',
  testimonialText:
    'This test website template saved us hours of development time. Perfect for quick demos and client presentations.',
  testimonialAuthor: 'Alex Johnson',
  testimonialRole: 'Developer at TestCorp',
  testimonialRating: 5,
  primaryCTA: 'View Pricing',
  secondaryCTA: 'Learn More',
  primaryCTAHref: '#pricing',
  secondaryCTAHref: '#about',
  statsValue1: '100%',
  statsLabel1: 'Test Ready',
  statsValue2: '2',
  statsLabel2: 'Main Sections',
  statsValue3: '1',
  statsLabel3: 'Simple Page',
  announcementText: 'New: Simple one-page test website template',
  announcementLink: '#pricing',
  showAnnouncement: true,
  showTestimonial: true,
  showStats: true,
  layoutStyle: 'centered',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

      {/* Decorative elements */}
      <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-transparent via-border to-transparent" />
      <div className="absolute left-0 bottom-0 h-px w-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`min-h-[85vh] py-20 sm:py-24 lg:py-32 ${
            config.layoutStyle === 'centered' ? 'text-center' : ''
          }`}
        >
          {/* Announcement Bar */}
          {config.showAnnouncement && (
            <div
              className={`mb-12 ${config.layoutStyle === 'centered' ? 'flex justify-center' : ''}`}
            >
              <button
                onClick={() => navigate(config.announcementLink)}
                className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-4 py-2 text-sm transition-all hover:border-border hover:bg-muted/50"
                data-editable-href="announcementLink"
                data-href={config.announcementLink}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span data-editable="announcementText" className="text-muted-foreground">
                  {config.announcementText}
                </span>
                <ChevronRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          )}

          <div
            className={`grid gap-16 ${
              config.layoutStyle === 'asymmetric' ? 'lg:grid-cols-[1fr,auto]' : ''
            }`}
          >
            <div className={`max-w-3xl ${config.layoutStyle === 'centered' ? 'mx-auto' : ''}`}>
              {/* Eyebrow Text */}
              <p
                data-editable="eyebrow"
                className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground"
              >
                {config.eyebrow}
              </p>

              {/* Main Headline */}
              <h1 className="text-5xl font-light leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                <span data-editable="headline" className="text-foreground">
                  {config.headline}
                </span>{' '}
                <span data-editable="headlineEmphasis" className="relative font-normal italic">
                  <span className="relative z-10 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {config.headlineEmphasis}
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 7 Q50 0 100 7"
                      stroke="var(--primary)"
                      strokeWidth="0.5"
                      fill="none"
                      opacity="0.4"
                    />
                  </svg>
                </span>
              </h1>

              {/* Lead Text */}
              <p
                data-editable="leadText"
                className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
              >
                {config.leadText}
              </p>

              {/* CTA Buttons */}
              <div
                className={`mt-10 flex gap-4 ${
                  config.layoutStyle === 'centered' ? 'justify-center' : ''
                }`}
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden px-8 text-base"
                  onClick={() => navigate(config.primaryCTAHref)}
                  data-editable-href="primaryCTAHref"
                  data-href={config.primaryCTAHref}
                >
                  <span className="relative z-10 flex items-center">
                    <span data-editable="primaryCTA">{config.primaryCTA}</span>
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-base hover:bg-transparent hover:text-foreground"
                  onClick={() => navigate(config.secondaryCTAHref)}
                  data-editable-href="secondaryCTAHref"
                  data-href={config.secondaryCTAHref}
                >
                  <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              {/* Stats Section */}
              {config.showStats && (
                <div
                  className={`mt-16 grid grid-cols-3 gap-8 border-t border-border/30 pt-8 ${
                    config.layoutStyle === 'centered' ? 'max-w-lg mx-auto' : 'max-w-md'
                  }`}
                >
                  <div
                    className="group cursor-default"
                    onMouseEnter={() => setHoveredStat(1)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div
                      className={`text-2xl font-light transition-all ${
                        hoveredStat === 1 ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      <span data-editable="statsValue1">{config.statsValue1}</span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      <span data-editable="statsLabel1">{config.statsLabel1}</span>
                    </div>
                  </div>
                  <div
                    className="group cursor-default"
                    onMouseEnter={() => setHoveredStat(2)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div
                      className={`text-2xl font-light transition-all ${
                        hoveredStat === 2 ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      <span data-editable="statsValue2">{config.statsValue2}</span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      <span data-editable="statsLabel2">{config.statsLabel2}</span>
                    </div>
                  </div>
                  <div
                    className="group cursor-default"
                    onMouseEnter={() => setHoveredStat(3)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div
                      className={`text-2xl font-light transition-all ${
                        hoveredStat === 3 ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      <span data-editable="statsValue3">{config.statsValue3}</span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      <span data-editable="statsLabel3">{config.statsLabel3}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Testimonial Card - Only in asymmetric layout */}
            {config.showTestimonial && config.layoutStyle === 'asymmetric' && (
              <div className="relative lg:max-w-sm">
                <div className="sticky top-8">
                  <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6">
                    {/* Rating Stars */}
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < config.testimonialRating
                              ? 'fill-primary text-primary'
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="relative">
                      <svg
                        className="absolute -left-2 -top-2 h-8 w-8 text-primary/10"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p
                        data-editable="testimonialText"
                        className="relative text-sm italic text-muted-foreground"
                      >
                        {config.testimonialText}
                      </p>
                    </blockquote>

                    {/* Author */}
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          <span data-editable="testimonialAuthor">{config.testimonialAuthor}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <span data-editable="testimonialRole">{config.testimonialRole}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
                </div>
              </div>
            )}
          </div>

          {/* Testimonial for centered layout */}
          {config.showTestimonial && config.layoutStyle === 'centered' && (
            <div className="mt-20 flex justify-center">
              <div className="max-w-2xl rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 text-center">
                <div className="mb-4 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < config.testimonialRating ? 'fill-primary text-primary' : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <blockquote>
                  <p
                    data-editable="testimonialText"
                    className="text-lg italic text-muted-foreground"
                  >
                    "{config.testimonialText}"
                  </p>
                </blockquote>
                <div className="mt-4">
                  <div className="font-medium text-foreground">
                    <span data-editable="testimonialAuthor">{config.testimonialAuthor}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable="testimonialRole">{config.testimonialRole}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
