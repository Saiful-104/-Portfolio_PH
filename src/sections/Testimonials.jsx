import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Saiful builds web applications that are not only fast but also elegant. His React and Next.js expertise makes complex projects feel effortless",
    author: "MH Jaber",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4E03AQFj6tXWX2F5wg/profile-displayphoto-shrink_400_400/B4EZaDdb.jHcAg-/0/1745962255413?e=1774483200&v=beta&t=rfGvxFcT6ajhCmbKtlt31eR3fz3hy7MFiTVwwxLoV6s",
  },
  {
    quote:
      "Saiful has a rare combination of technical skill and creativity. He turns challenging problems into smooth, user-friendly solutions",
    author: "Touhidul Muhib Chowdhury",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4E03AQFzJyCWrKDgJw/profile-displayphoto-scale_400_400/B4EZhUg9tCGUAg-/0/1753764591517?e=1774483200&v=beta&t=4BDFTfGBGIMwkfDpBqzhLxjKx2LhXHdRUK7ggsueDcA",
  },
  {
    quote:
      "Saiful expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Sharifuzzaman Shihab",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQFX7nrap2CClg/profile-displayphoto-shrink_400_400/B56Zcsi1OCG0Ag-/0/1748799019750?e=1774483200&v=beta&t=Ggw3V-KS4EacLJdWNwwFjlTWAUKaBNE9JsulqVnfncM",
  },
  {
    quote:
      "Not only is Saiful technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "Rayhan Rahman",
    role: "CEO, Innovation Hub",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQFq05nuw4uSSg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715284261132?e=1774483200&v=beta&t=QniW0qgEaeSqj-dDWTE4JwLGFhyR8SqbySY-Ny77kTg",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
