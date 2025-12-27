const Footer = () => {
  return (
    <footer className="bg-[#0d1117] border-t border-[#222] text-[#e6edf3] pt-[60px] pb-[30px]">
      {/* MAIN GRID */}
      <div
        className="max-w-[1300px] mx-auto px-10 grid gap-10
                   grid-cols-[1.8fr_1fr_1fr_1fr_1fr]
                   max-[1100px]:grid-cols-3
                   max-[700px]:grid-cols-1"
      >
        {/* BRAND */}
        <div className="footer-col brand max-[1100px]:col-span-3 max-[700px]:text-center">
          <h2 className="text-[2.3rem] font-bold text-[#00c2b3] mb-2">
            MiniZira
          </h2>

          <p className="text-[#9aa6b8] leading-relaxed">
            Your lightweight alternative to Jira for managing projects,
            teams, issues and workflows — built for simplicity and speed.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-[14px] my-[22px] max-[700px]:justify-center">
            {[
              "733547",
              "733558",
              "733579",
              "733561",
            ].map((id) => (
              <a key={id} href="#">
                <img
                  src={`https://cdn-icons-png.flaticon.com/512/733/${id}.png`}
                  className="w-[30px] h-[30px] opacity-80
                             brightness-0 invert
                             transition-transform duration-200
                             hover:opacity-100 hover:scale-110"
                />
              </a>
            ))}
          </div>

          {/* NEWSLETTER */}
          <div className="mt-6">
            <h4 className="text-[1.2rem] font-semibold text-[#00c2b3]">
              Subscribe to Updates
            </h4>

            <p className="text-[#8894a7] mt-2 mb-4">
              Stay informed about new features, release notes and improvements.
            </p>

            <div className="flex max-[700px]:flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-3 bg-[#161b22] text-white
                           border border-[#333] outline-none
                           rounded-l-lg max-[700px]:rounded-lg"
              />
              <button
                className="px-5 py-3 bg-[#00c2b3] text-black font-semibold
                           rounded-r-lg max-[700px]:rounded-lg
                           max-[700px]:mt-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* LINK COLUMNS */}
        {[
          {
            title: "Product",
            links: [
              "Project Dashboard",
              "Issue Tracking",
              "Kanban Board",
              "Reports & Analytics",
              "Team Collaboration",
              "Automation Rules",
            ],
          },
          {
            title: "Company",
            links: [
              "About MiniZira",
              "Careers",
              "Leadership",
              "Contact Support",
              "Press & Media",
              "Blog Updates",
            ],
          },
          {
            title: "Resources",
            links: [
              "Documentation",
              "API Reference",
              "Status Page",
              "Release Notes",
              "Community Forum",
              "Guide & Tutorials",
            ],
          },
          {
            title: "Legal",
            links: [
              "Privacy Policy",
              "Terms & Conditions",
              "Security Compliance",
              "GDPR",
              "Data Processing",
            ],
          },
        ].map((col) => (
          <div key={col.title} className="footer-col">
            <h3 className="text-[1.2rem] font-semibold text-[#00c2b3] mb-4">
              {col.title}
            </h3>

            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#9aa6b8] transition-all duration-200
                               hover:text-[#00c2b3] hover:pl-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="mt-[60px] border-t border-[#222] pt-5 text-center text-[0.9rem] text-[#7f8b99]">
        <p>© 2025 MiniZira — Modern Project Management Platform</p>
        <p className="mt-2 text-[#00c2b3]">
          Made with ♥ for developers, teams & creators
        </p>
      </div>
    </footer>
  );
};

export default Footer;
