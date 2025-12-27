import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Can I migrate data from other tools?",
      a: "Yes — CSV import for issues, users and projects is available. We also provide migration guides for common tools and a simple API to automate imports.",
    },
    {
      q: "How does permissions & roles work?",
      a: "Roles (Admin, Manager, Member, Viewer) determine access. Project-level roles allow fine-grained control and can be customized with permissions.",
    },
    {
      q: "Is there an API?",
      a: "Yes — RESTful APIs for issues, projects, users and automation. API keys can be generated per user and scoped by permission.",
    },
    {
      q: "How secure is my data?",
      a: "We use encrypted storage, TLS in transit, role-based access control, and regular security reviews. Enterprise customers can request audits and dedicated instances.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[80px] relative">
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,200,0.12),transparent_70%)] blur-[60px]" />

      <div className="relative z-10 max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[50px]">
          <h2 className="text-3xl font-bold mb-[8px]">
            Frequently asked questions
          </h2>
          <p className="text-[#9aa6b8]">
            Common questions new teams ask when trying MiniZira.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-[16px]">
          {faqs.map((item, index) => {
            const open = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-[18px] bg-white/5 border border-white/10 backdrop-blur-[18px] shadow-[0_0_40px_rgba(0,0,0,0.45)] overflow-hidden transition"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                  className="w-full flex justify-between items-center p-[22px] text-left font-semibold text-[#e8edf4]"
                >
                  <span>{item.q}</span>
                  <span
                    className={`ml-[12px] text-[#00e0c8] transition-transform duration-300 ${
                      open ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-[22px] pb-[22px] text-[#9aa6b8] leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-[40px] text-[#9aa6b8]">
          Still have questions?{" "}
          <a
            href="#contact"
            className="text-[#00e0c8] font-semibold hover:underline"
          >
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
}
