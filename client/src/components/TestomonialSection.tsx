import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "MiniZira helped our small team (6 engineers) move from chaotic tracking to structured sprints — our delivery predictability improved by 40%.",
      by: "— Aisha, Engineering Manager, Flowbyte",
    },
    {
      quote:
        "The automation rules saved us several hours per week on triage and assignment. The UI is clean and fast.",
      by: "— Raj, Product Owner, FintechNow",
    },
    {
      quote:
        "Switching to MiniZira was painless. Onboarding was quick and our stakeholders loved the roadmap view.",
      by: "— Meera, CTO, HealthSync",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-[80px] relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,200,0.12),transparent_70%)] blur-[60px]" />

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <h2 className="text-3xl font-bold mb-[10px]">
          What teams say about MiniZira
        </h2>
        <p className="text-[#9aa6b8] mb-[50px]">
          Real quotes from teams who replaced heavy tools and regained time.
        </p>

        {/* Carousel Card */}
        <div className="relative">
          <div className="p-[36px] rounded-[22px] bg-white/5 border border-white/10 backdrop-blur-[22px] shadow-[0_0_40px_rgba(0,0,0,0.45)] transition-all duration-500">
            <blockquote className="text-lg leading-relaxed mb-[20px]">
              “{testimonials[index].quote}”
            </blockquote>
            <div className="text-[#00e0c8] font-semibold">
              {testimonials[index].by}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-[10px] mt-[26px]">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-[12px] h-[12px] rounded-full transition ${
                  i === index
                    ? "bg-[#00e0c8] scale-125"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
