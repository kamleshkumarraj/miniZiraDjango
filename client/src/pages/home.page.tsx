// import "../home.css";

import FAQSection from "../components/FAQSection";
import Testimonials from "../components/TestomonialSection";

// export default function HomePage() {
//   return (
//     <main className="page-wrap">
//       <section className="hero heavy-hero">
//         <div className="hero-inner">
//           <div className="hero-left">
//             <h1>MiniZira — Lightweight, Powerful Project Management</h1>
//             <p className="lead">
//               From idea to delivery: plan, track and ship — without the
//               overwhelm. Built for small teams and fast-moving startups who need
//               clarity, not complexity.
//             </p>

//             <ul className="hero-features">
//               <li>
//                 <strong>Kanban & Scrum:</strong> Boards, sprints and backlogs.
//               </li>
//               <li>
//                 <strong>Issue workflows:</strong> Custom statuses, transitions,
//                 and automations.
//               </li>
//               <li>
//                 <strong>Integrations:</strong> Git, Slack, Email & Attachments.
//               </li>
//             </ul>

//             <div className="hero-cta">
//               <button onClick={() => {}} className="btn primary">
//                 Get Started — It's Free
//               </button>
//               <a className="btn ghost" href="#pricing">
//                 See Pricing
//               </a>
//             </div>

//             <div className="trust">
//               <div className="stat">
//                 <span className="num">12k+</span>
//                 <span className="label">Active Users</span>
//               </div>
//               <div className="stat">
//                 <span className="num">4.8/5</span>
//                 <span className="label">Avg. Satisfaction</span>
//               </div>
//               <div className="stat">
//                 <span className="num">99%</span>
//                 <span className="label">Uptime SLA</span>
//               </div>
//             </div>
//           </div>

//           <div className="hero-right">
//             <div className="mockup">
//               <img
//                 src="https://saasjet.com/wp-content/uploads/2024/06/Jira-data-center.png"
//                 alt="mini-zira app mockup"
//               />
//               <div className="mockup-overlay">
//                 <div className="mini-card">
//                   <h4>Sprint Board</h4>
//                   <div className="progress">
//                     <div style={{ width: "50%" }}></div>
//                   </div>
//                   <div className="meta">
//                     24 tasks • 3 assignees • Due in 6 days
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="features" className="features heavy">
//         <div className="section-header">
//           <h2>Features that scale with your team</h2>
//           <p>
//             More than checklists — MiniZira gives structure to your work without
//             bogging your team down. Each feature is crafted to improve
//             collaboration and reduce meeting overhead.
//           </p>
//         </div>

//         <div className="features-grid">
//           <article className="feature">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
//               alt="projects"
//             />
//             <h3>Project Templates & Roadmaps</h3>
//             <p>
//               Create reusable templates for onboarding, releases, and incident
//               responses. Roadmaps give you long-term visibility with milestones,
//               dependencies and owner tags.
//             </p>
//             <ul>
//               <li>Template library (onboarding, releases, audits)</li>
//               <li>Milestones & timelines</li>
//               <li>Dependency visualization</li>
//             </ul>
//           </article>

//           <article className="feature">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/189/189253.png"
//               alt="issues"
//             />
//             <h3>Powerful Issue Tracking</h3>
//             <p>
//               Tickets with rich text, attachments, sub-tasks and custom fields —
//               plus filtering and saved queries so you find what matters fast.
//             </p>
//             <ul>
//               <li>Custom fields & labels</li>
//               <li>Linked issues & sub-tasks</li>
//               <li>Bulk actions & quick edit</li>
//             </ul>
//           </article>

//           <article className="feature">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/483/483361.png"
//               alt="kanban"
//             />
//             <h3>Kanban Boards & Sprints</h3>
//             <p>
//               Drag-and-drop boards, swimlanes, and sprint planning support to
//               keep your team focused on what’s next.
//             </p>
//             <ul>
//               <li>Custom columns & workflow rules</li>
//               <li>Swimlanes and WIP limits</li>
//               <li>Sprint planning & velocity charts</li>
//             </ul>
//           </article>

//           <article className="feature">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
//               alt="collab"
//             />
//             <h3>Team Collaboration & Notifications</h3>
//             <p>
//               Comments, mentions, file attachments and threaded discussions keep
//               context intact. Fine-grained notification controls prevent noise.
//             </p>
//             <ul>
//               <li>Email digests & Slack integration</li>
//               <li>Permissions & role management</li>
//               <li>Audit logs & activity feed</li>
//             </ul>
//           </article>

//           <article className="feature">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1067/1067888.png"
//               alt="automation"
//             />
//             <h3>Automation & Rules</h3>
//             <p>
//               Automate repetitive tasks with simple "when-this-then-that" rules:
//               triage, assign, escalate, or add labels automatically.
//             </p>
//             <ul>
//               <li>Rule templates (auto-assign, priority set)</li>
//               <li>Recurring tasks & reminders</li>
//               <li>Webhooks & API access</li>
//             </ul>
//           </article>

//           <article className="feature">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/2910/2910763.png"
//               alt="analytics"
//             />
//             <h3>Reports & Analytics</h3>
//             <p>
//               Pre-built charts and custom reports — cycle time, lead time,
//               burndown, throughput and more — exportable to CSV/PDF.
//             </p>
//             <ul>
//               <li>Custom dashboards</li>
//               <li>Export & scheduled reports</li>
//               <li>Role-based report sharing</li>
//             </ul>
//           </article>
//         </div>
//       </section>

//       <section id="workflow" className="workflow heavy">
//         <div className="section-header">
//           <h2>Typical team workflow — explained</h2>
//           <p>
//             Here’s a robust workflow example that teams use to go from idea to
//             production with minimal friction.
//           </p>
//         </div>

//         <div className="workflow-steps">
//           <div className="step detail">
//             <div className="num">1</div>
//             <div className="body">
//               <h3>Discovery & Backlog</h3>
//               <p>
//                 Stakeholders create epics and high-level goals. PMs break these
//                 into milestones and add prioritized user stories to the backlog.
//               </p>
//               <ul>
//                 <li>Capture acceptance criteria & business value</li>
//                 <li>Estimate via story points</li>
//                 <li>Tag with components and owners</li>
//               </ul>
//             </div>
//           </div>

//           <div className="step detail">
//             <div className="num">2</div>
//             <div className="body">
//               <h3>Planning & Sprint Prep</h3>
//               <p>
//                 Draft a sprint from the backlog, plan capacity, and define
//                 sprint goals. Create subtasks for the team to pick up during the
//                 sprint.
//               </p>
//               <ul>
//                 <li>Assign stories and set owners</li>
//                 <li>Link tasks to PRs and CI jobs</li>
//                 <li>Set target release date</li>
//               </ul>
//             </div>
//           </div>

//           <div className="step detail">
//             <div className="num">3</div>
//             <div className="body">
//               <h3>Implementation</h3>
//               <p>
//                 Engineers pick tasks, update statuses on the board, and create
//                 PRs. Automations transition issues to code-review and CI stages.
//               </p>
//               <ul>
//                 <li>Branch naming conventions & PR templates</li>
//                 <li>Auto-run CI and attach results to the issue</li>
//                 <li>Link deployments to releases</li>
//               </ul>
//             </div>
//           </div>

//           <div className="step detail">
//             <div className="num">4</div>
//             <div className="body">
//               <h3>Review & Release</h3>
//               <p>
//                 QA runs test plans, issues are triaged, and release notes are
//                 drafted. After verification, tasks are closed and shipped.
//               </p>
//               <ul>
//                 <li>Tag release candidate builds</li>
//                 <li>Postmortem for incidents</li>
//                 <li>Celebrate and retro</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="screens" className="screens heavy">
//         <div className="section-header">
//           <h2>Product Screenshots & Walkthroughs</h2>
//           <p>
//             Click any screenshot to enlarge. Images are illustrative — replace
//             with your real app screens when ready.
//           </p>
//         </div>

//         <div className="screen-grid">
//           <figure className="screen-item">
//             <img
//               src="https://cdni.iconscout.com/illustration/premium/thumb/project-management-illustration-download-in-svg-png-gif-file-formats--planning-management-people-office-pack-illustrations-2189735.png"
//               alt="project management"
//             />
//             <figcaption>Project Overview & Milestones</figcaption>
//           </figure>

//           <figure className="screen-item">
//             <img
//               src="https://cdni.iconscout.com/illustration/premium/thumb/kanban-methodology-illustration-download-in-svg-png-gif-file-formats--agile-board-scrum-business-pack-illustrations-3794391.png"
//               alt="kanban board"
//             />
//             <figcaption>Kanban Board & Swimlanes</figcaption>
//           </figure>

//           <figure className="screen-item">
//             <img
//               src="https://cdni.iconscout.com/illustration/premium/thumb/dashboard-illustration-download-in-svg-png-gif-file-formats--chart-analytics-admin-analysis-interface-pack-business-illustrations-4975989.png"
//               alt="analytics"
//             />
//             <figcaption>Dashboard & Analytics</figcaption>
//           </figure>

//           <figure className="screen-item">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
//               alt="mobile app"
//             />
//             <figcaption>Mobile quick actions & notifications</figcaption>
//           </figure>
//         </div>
//       </section>

//       <section id="pricing" className="pricing heavy">
//         <div className="section-header">
//           <h2>Pricing</h2>
//           <p>
//             Simple pricing that grows with you. No hidden fees. Annual plans
//             include discounts and priority support.
//           </p>
//         </div>

//         <div className="pricing-grid">
//           <div className="price-card">
//             <div className="badge">Free</div>
//             <h3>Starter</h3>
//             <div className="price">
//               $0 <span>/ month</span>
//             </div>
//             <ul>
//               <li>Up to 5 users</li>
//               <li>Basic project management</li>
//               <li>Community support</li>
//             </ul>
//             <button className="btn outline">Start Free</button>
//           </div>

//           <div className="price-card popular">
//             <div className="badge">Popular</div>
//             <h3>Pro</h3>
//             <div className="price">
//               $9 <span>/ user / month</span>
//             </div>
//             <ul>
//               <li>All Starter features</li>
//               <li>Unlimited projects & boards</li>
//               <li>Advanced reports & integrations</li>
//             </ul>
//             <button className="btn primary">Get Pro</button>
//           </div>

//           <div className="price-card">
//             <div className="badge">Enterprise</div>
//             <h3>Enterprise</h3>
//             <div className="price">Contact</div>
//             <ul>
//               <li>Self-host or dedicated cloud</li>
//               <li>SLA & 24/7 support</li>
//               <li>Custom onboarding & training</li>
//             </ul>
//             <button className="btn outline">Contact Sales</button>
//           </div>
//         </div>

//         <div className="pricing-cta">
//           <p>
//             Need help choosing? <a href="#contact">Contact our sales team</a> or
//             start a 14-day Pro trial.
//           </p>
//         </div>
//       </section>

//       <section id="testimonials" className="testimonials heavy">
//         <div className="section-header">
//           <h2>What teams say about MiniZira</h2>
//           <p>
//             Real quotes from teams who replaced heavy tools and regained time.
//           </p>
//         </div>

//         <div className="testimonials-wrap">
//           <div className="testimonial-item" data-index="0">
//             <blockquote>
//               "MiniZira helped our small team (6 engineers) move from chaotic
//               tracking to structured sprints — our delivery predictability
//               improved by 40%."
//             </blockquote>
//             <div className="by">— Aisha, Engineering Manager, Flowbyte</div>
//           </div>

//           <div className="testimonial-item" data-index="1">
//             <blockquote>
//               "The automation rules saved us several hours per week on triage
//               and assignment. The UI is clean and fast."
//             </blockquote>
//             <div className="by">— Raj, Product Owner, FintechNow</div>
//           </div>

//           <div className="testimonial-item" data-index="2">
//             <blockquote>
//               "Switching to MiniZira was painless. Onboarding was quick and our
//               stakeholders loved the roadmap view."
//             </blockquote>
//             <div className="by">— Meera, CTO, HealthSync</div>
//           </div>

//           <div className="testimonial-controls">
//             <button onClick={() => {}}></button>
//             <button onClick={() => {}}></button>
//             <button onClick={() => {}}></button>
//           </div>
//         </div>
//       </section>

//       <section id="faq" className="faq heavy">
//         <div className="section-header">
//           <h2>Frequently asked questions</h2>
//           <p>Common questions new teams ask when trying MiniZira.</p>
//         </div>

//         <div className="faq-grid">
//           <div className="faq-item" id="q1">
//             <button className="faq-q" onClick={() => {}}>
//               Can I migrate data from other tools?
//             </button>
//             <div className="panel">
//               <p>
//                 Yes — CSV import for issues, users and projects is available. We
//                 also provide migration guides for common tools and a simple API
//                 to automate imports.
//               </p>
//             </div>
//           </div>

//           <div className="faq-item" id="q2">
//             <button className="faq-q" onClick={() => {}}>
//               How does permissions & roles work?
//             </button>
//             <div className="panel">
//               <p>
//                 Roles (Admin, Manager, Member, Viewer) determine access.
//                 Project-level roles allow fine-grained control and can be
//                 customized with permissions.
//               </p>
//             </div>
//           </div>

//           <div className="faq-item" id="q3">
//             <button className="faq-q" onClick={() => {}}>
//               Is there an API?
//             </button>
//             <div className="panel">
//               <p>
//                 Yes — RESTful APIs for issues, projects, users and automation.
//                 API keys can be generated per user and scoped by permission.
//               </p>
//             </div>
//           </div>

//           <div className="faq-item" id="q4">
//             <button className="faq-q" onClick={() => {}}>
//               How secure is my data?
//             </button>
//             <div className="panel">
//               <p>
//                 We use encrypted storage, TLS in transit, role-based access
//                 control, and regular security reviews. Enterprise customers can
//                 request audits and dedicated instances.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="contact heavy">
//         <div className="section-header">
//           <h2>Get started with MiniZira</h2>
//           <p>
//             Questions? Want a demo? Leave your details and our team will reach
//             out within one business day.
//           </p>
//         </div>

//         <div className="contact-grid">
//           <form
//             className="contact-form"
//             action="<%= request.getContextPath()%>/contact"
//             method="post"
//           >
//             <label>
//               Name <input name="name" required />
//             </label>
//             <label>
//               Email <input name="email" type="email" required />
//             </label>
//             <label>
//               Company <input name="company" />
//             </label>
//             <label>
//               Message <textarea name="message" rows={4}></textarea>
//             </label>
//             <div className="form-actions">
//               <button className="btn primary" type="submit">
//                 Request Demo
//               </button>
//               <button className="btn outline" type="button" onClick={() => {}}>
//                 Start Free
//               </button>
//             </div>
//           </form>

//           <div className="contact-info">
//             <h3>Contact</h3>
//             <p>
//               Email:{" "}
//               <a href="mailto:sales@minizira.example">sales@minizira.example</a>
//             </p>
//             <p>Phone: +1 (555) 123-4567</p>

//             <h4>Office</h4>
//             <p>
//               MiniZira HQ
//               <br />
//               123 Startup Lane, Bangalore, India
//             </p>

//             <h4>Resources</h4>
//             <ul>
//               <li>
//                 <a href="#">Documentation</a>
//               </li>
//               <li>
//                 <a href="#">Migration Guide</a>
//               </li>
//               <li>
//                 <a href="#">Status & API</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

export default function HomePage() {
  return (
    <main className="max-w-[1250px] mx-auto px-[30px] py-[30px] text-[#e8edf4]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-[100px] bg-gradient-to-br from-[#0f141a] via-[#141c26] to-[#0d1117]">
        {/* radial glow */}
        <div className="absolute right-[-200px] top-[-200px] w-[1200px] h-[900px] bg-[radial-gradient(circle,rgba(0,224,200,0.2),transparent_70%)] blur-[50px]" />

        <div className="relative z-10 flex gap-[60px] items-center max-w-[1250px] mx-auto">
          {/* LEFT */}
          <div className="flex-[1.2]">
            <h1 className="text-[2.8rem] font-bold leading-[1.22]">
              MiniZira — Lightweight, Powerful Project Management
            </h1>

            <p className="text-[1.15rem] text-[#9aa6b8] mt-[18px] mb-[26px]">
              From idea to delivery: plan, track and ship — without the
              overwhelm. Built for small teams and fast-moving startups who need
              clarity, not complexity.
            </p>

            <ul className="grid gap-[12px] my-[26px]">
              {[
                "Kanban & Scrum: Boards, sprints and backlogs.",
                "Issue workflows: Custom statuses, transitions, and automations.",
                "Integrations: Git, Slack, Email & Attachments.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="p-[14px_16px] rounded-[14px] bg-white/5 border border-white/10 backdrop-blur-[18px]"
                >
                  {text}
                </li>
              ))}
            </ul>

            <div className="flex gap-[16px] mt-[20px]">
              <button className="px-[20px] py-[12px] rounded-[12px] font-semibold bg-[#00e0c8] text-black shadow-[0_0_14px_rgba(0,224,200,0.16)] hover:-translate-y-[3px] hover:scale-[1.03] transition">
                Get Started — It's Free
              </button>
              <a className="px-[20px] py-[12px] rounded-[12px] border border-white/10">
                See Pricing
              </a>
            </div>

            <div className="flex gap-[22px] mt-[28px]">
              {[
                ["12k+", "Active Users"],
                ["4.8/5", "Avg. Satisfaction"],
                ["99%", "Uptime SLA"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="px-[18px] py-[14px] text-center rounded-[12px] bg-white/5 border border-white/10 backdrop-blur-[16px]"
                >
                  <div className="text-[1.4rem] text-[#00e0c8] font-bold">
                    {num}
                  </div>
                  <div className="text-[#9aa6b8]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full p-[20px] rounded-[22px] bg-white/5 border border-white/10 backdrop-blur-[24px] shadow-[0_0_40px_rgba(0,0,0,0.45)]">
              <img
                className="rounded-[16px] w-full"
                src="https://saasjet.com/wp-content/uploads/2024/06/Jira-data-center.png"
                alt="mini-zira app mockup"
              />

              <div className="absolute left-[28px] bottom-[28px] w-[230px] p-[14px] rounded-[14px] bg-black/60 border border-white/10 backdrop-blur-[20px]">
                <h4 className="font-bold">Sprint Board</h4>
                <div className="h-[8px] bg-[#444] rounded-full my-[8px]">
                  <div className="h-full w-[50%] bg-[#00e0c8] rounded-full" />
                </div>
                <div className="text-sm text-[#9aa6b8]">
                  24 tasks • 3 assignees • Due in 6 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-[70px]">
        <div className="text-center mb-[40px]">
          <h2 className="text-3xl font-bold">
            Features that scale with your team
          </h2>
          <p className="text-[#9aa6b8] mt-[10px] max-w-[700px] mx-auto">
            More than checklists — MiniZira gives structure to your work without
            bogging your team down.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[26px]">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <article
              key={i}
              className="p-[26px] rounded-[18px] bg-white/5 border border-white/10 backdrop-blur-[18px] shadow-[0_0_40px_rgba(0,0,0,0.45)] hover:-translate-y-[6px] transition"
            >
              <img
                className="w-[55px] mb-[12px]"
                src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
                alt=""
              />
              <h3 className="font-bold text-lg mb-[8px]">
                Project Templates & Roadmaps
              </h3>
              <p className="text-[#9aa6b8] text-sm">
                Create reusable templates, milestones and long-term roadmaps.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="py-[70px]">
        <div className="text-center mb-[40px]">
          <h2 className="text-3xl font-bold">
            Typical team workflow — explained
          </h2>
          <p className="text-[#9aa6b8] mt-[10px] max-w-[700px] mx-auto">
            Here’s a robust workflow example that teams use to go from idea to
            production with minimal friction.
          </p>
        </div>

        <div className="space-y-[20px]">
          {[
            {
              num: "1",
              title: "Discovery & Backlog",
              desc: "Stakeholders create epics and high-level goals. PMs break these into milestones and add prioritized user stories to the backlog.",
              list: [
                "Capture acceptance criteria & business value",
                "Estimate via story points",
                "Tag with components and owners",
              ],
            },
            {
              num: "2",
              title: "Planning & Sprint Prep",
              desc: "Draft a sprint from the backlog, plan capacity, and define sprint goals. Create subtasks for the team to pick up during the sprint.",
              list: [
                "Assign stories and set owners",
                "Link tasks to PRs and CI jobs",
                "Set target release date",
              ],
            },
            {
              num: "3",
              title: "Implementation",
              desc: "Engineers pick tasks, update statuses on the board, and create PRs. Automations transition issues to code-review and CI stages.",
              list: [
                "Branch naming conventions & PR templates",
                "Auto-run CI and attach results to the issue",
                "Link deployments to releases",
              ],
            },
            {
              num: "4",
              title: "Review & Release",
              desc: "QA runs test plans, issues are triaged, and release notes are drafted. After verification, tasks are closed and shipped.",
              list: [
                "Tag release candidate builds",
                "Postmortem for incidents",
                "Celebrate and retro",
              ],
            },
          ].map((step) => (
            <div
              key={step.num}
              className="flex gap-[16px] p-[22px] rounded-[18px] bg-white/5 border border-white/10 backdrop-blur-[18px] shadow-[0_0_40px_rgba(0,0,0,0.45)]"
            >
              <div className="w-[55px] h-[55px] rounded-[12px] bg-[#00e0c8] text-black font-bold flex items-center justify-center">
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-[6px]">{step.title}</h3>
                <p className="text-[#9aa6b8] mb-[8px]">{step.desc}</p>
                <ul className="list-disc list-inside text-[#9aa6b8] text-sm space-y-[4px]">
                  {step.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="screens" className="py-[70px]">
        <div className="text-center mb-[40px]">
          <h2 className="text-3xl font-bold">
            Product Screenshots & Walkthroughs
          </h2>
          <p className="text-[#9aa6b8] mt-[10px] max-w-[700px] mx-auto">
            Click any screenshot to enlarge. Images are illustrative — replace
            with your real app screens when ready.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-[18px]">
          {[
            {
              img: "https://plaky.com/learn/wp-content/uploads/2023/10/Project-milestones-view-1024x939.png",
              cap: "Project Overview & Milestones",
            },
            {
              img: "https://cdn.prod.website-files.com/60c76f07dc83db305171350c/6778214b5877ce02edb79b30_67782070567550dfead2a13d_03.webp",
              cap: "Kanban Board & Swimlanes",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0pfKMIwyl9kWWMryzHSCxHb2h0q4RkEqTw&s",
              cap: "Dashboard & Analytics",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
              cap: "Mobile quick actions & notifications",
            },
          ].map((item) => (
            <figure
              key={item.cap}
              className="p-[16px] rounded-[18px] bg-white/5 border border-white/10 backdrop-blur-[16px] shadow-[0_0_40px_rgba(0,0,0,0.45)]"
            >
              <img
                src={item.img}
                alt={item.cap}
                className="w-full h-[160px] object-cover rounded-[12px]"
              />
              <figcaption className="text-sm text-[#9aa6b8] mt-[8px] text-center">
                {item.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="pricing" className="py-[70px]">
        <div className="text-center mb-[40px]">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <p className="text-[#9aa6b8] mt-[10px] max-w-[700px] mx-auto">
            Simple pricing that grows with you. No hidden fees. Annual plans
            include discounts and priority support.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[26px]">
          {[
            {
              badge: "Free",
              title: "Starter",
              price: "$0",
              suffix: "/ month",
              btn: "Start Free",
              primary: false,
            },
            {
              badge: "Popular",
              title: "Pro",
              price: "$9",
              suffix: "/ user / month",
              btn: "Get Pro",
              primary: true,
            },
            {
              badge: "Enterprise",
              title: "Enterprise",
              price: "Contact",
              suffix: "",
              btn: "Contact Sales",
              primary: false,
            },
          ].map((plan) => (
            <div
              key={plan.title}
              className="p-[30px] text-center rounded-[18px] bg-white/5 border border-white/10 backdrop-blur-[20px] shadow-[0_0_40px_rgba(0,0,0,0.45)]"
            >
              <div className="text-sm text-[#9aa6b8] mb-[8px]">
                {plan.badge}
              </div>
              <h3 className="font-bold text-lg mb-[10px]">{plan.title}</h3>
              <div className="text-[1.9rem] text-[#00e0c8] font-bold mb-[12px]">
                {plan.price}{" "}
                <span className="text-sm text-[#9aa6b8]">{plan.suffix}</span>
              </div>

              <ul className="text-[#9aa6b8] text-sm space-y-[6px] mb-[16px]">
                <li>Up to 5 users</li>
                <li>Basic project management</li>
                <li>Community support</li>
              </ul>

              <button
                className={
                  plan.primary
                    ? "px-[20px] py-[12px] rounded-[12px] font-semibold bg-[#00e0c8] text-black shadow-[0_0_14px_rgba(0,224,200,0.16)]"
                    : "px-[20px] py-[12px] rounded-[12px] border border-[#00e0c8] text-[#00e0c8]"
                }
              >
                {plan.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <FAQSection />

      <section id="contact" className="py-[90px] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,224,200,0.15),transparent_70%)] blur-[70px]" />

        <div className="relative z-10 max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="text-center mb-[60px]">
            <h2 className="text-3xl font-bold mb-[10px]">
              Get started with MiniZira
            </h2>
            <p className="text-[#9aa6b8] max-w-[700px] mx-auto">
              Questions? Want a demo? Leave your details and our team will reach
              out within one business day.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-[1fr_360px] gap-[40px]">
            {/* FORM */}
            <form
              className="p-[36px] rounded-[22px] bg-white/5 border border-white/10 backdrop-blur-[22px] shadow-[0_0_40px_rgba(0,0,0,0.45)] space-y-[18px]"
              action="<%= request.getContextPath()%>/contact"
              method="post"
            >
              <div>
                <label className="block text-sm text-[#9aa6b8] mb-[6px]">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full px-[16px] py-[14px] rounded-[12px] bg-white/5 border border-white/10 text-[#e8edf4] outline-none focus:border-[#00e0c8]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#9aa6b8] mb-[6px]">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-[16px] py-[14px] rounded-[12px] bg-white/5 border border-white/10 text-[#e8edf4] outline-none focus:border-[#00e0c8]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#9aa6b8] mb-[6px]">
                  Company
                </label>
                <input
                  name="company"
                  className="w-full px-[16px] py-[14px] rounded-[12px] bg-white/5 border border-white/10 text-[#e8edf4] outline-none focus:border-[#00e0c8]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#9aa6b8] mb-[6px]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-[16px] py-[14px] rounded-[12px] bg-white/5 border border-white/10 text-[#e8edf4] outline-none focus:border-[#00e0c8]"
                />
              </div>

              <div className="flex gap-[14px] pt-[10px]">
                <button
                  type="submit"
                  className="px-[22px] py-[14px] rounded-[14px] font-semibold bg-[#00e0c8] text-black shadow-[0_0_14px_rgba(0,224,200,0.18)] hover:-translate-y-[2px] transition"
                >
                  Request Demo
                </button>

                <button
                  type="button"
                  className="px-[22px] py-[14px] rounded-[14px] border border-[#00e0c8] text-[#00e0c8] hover:bg-[#00e0c8]/10 transition"
                >
                  Start Free
                </button>
              </div>
            </form>

            {/* INFO */}
            <div className="p-[30px] rounded-[22px] bg-white/5 border border-white/10 backdrop-blur-[20px] shadow-[0_0_40px_rgba(0,0,0,0.45)]">
              <h3 className="font-bold text-lg mb-[12px]">Contact</h3>

              <p className="text-[#9aa6b8] mb-[6px]">
                Email:{" "}
                <a
                  href="mailto:sales@minizira.example"
                  className="text-[#00e0c8]"
                >
                  sales@minizira.example
                </a>
              </p>

              <p className="text-[#9aa6b8] mb-[16px]">
                Phone: +1 (555) 123-4567
              </p>

              <h4 className="font-semibold mb-[6px]">Office</h4>
              <p className="text-[#9aa6b8] mb-[16px]">
                MiniZira HQ
                <br />
                123 Startup Lane, Bangalore, India
              </p>

              <h4 className="font-semibold mb-[8px]">Resources</h4>
              <ul className="space-y-[6px] text-[#9aa6b8]">
                <li>
                  <a href="#" className="hover:text-[#00e0c8]">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00e0c8]">
                    Migration Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00e0c8]">
                    Status & API
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Note */}
         
        </div>
      </section>
    </main>
  );
}
