import { useState } from "react";

type Section =
  | "GENERAL"
  | "PROJECT"
  | "TEAM"
  | "PERMISSIONS"
  | "NOTIFICATIONS"
  | "INTEGRATIONS"
  | "SECURITY"
  | "DANGER";

const Settings = () => {
  const [active, setActive] = useState<Section>("GENERAL");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] text-[#e8edf4] flex">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[280px] border-r border-white/10 bg-white/5 backdrop-blur-[18px] p-6 space-y-6">
        <h2 className="text-xl font-extrabold text-[#00e0c8]">
          Settings
        </h2>

        <nav className="space-y-2 text-sm">
          {[
            ["GENERAL", "General"],
            ["PROJECT", "Project Settings"],
            ["TEAM", "Team & Users"],
            ["PERMISSIONS", "Permissions"],
            ["NOTIFICATIONS", "Notifications"],
            ["INTEGRATIONS", "Integrations"],
            ["SECURITY", "Security"],
            ["DANGER", "Danger Zone"],
          ].map(([key, label]) => (
            <div
              key={key}
              onClick={() => setActive(key as Section)}
              className={`px-4 py-2 rounded-[12px] cursor-pointer transition ${
                active === key
                  ? "bg-[#00e0c8]/20 text-[#00e0c8]"
                  : "hover:bg-white/10"
              }`}
            >
              {label}
            </div>
          ))}
        </nav>
      </aside>

      {/* ================= CONTENT ================= */}
      <main className="relative flex-1 px-10 py-8">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,200,0.12),transparent_70%)] blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] space-y-10">
          {/* ================= GENERAL ================= */}
          {active === "GENERAL" && (
            <section className="space-y-6">
              <h1 className="text-2xl font-extrabold">
                General Settings
              </h1>

              <div className="rounded-[22px] bg-white/5 border border-white/10 p-6">
                <h2 className="mb-4 font-bold">Workspace</h2>
                <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
                  <div>
                    <label className="text-sm text-[#9aa6b8]">
                      Workspace Name
                    </label>
                    <input
                      defaultValue="MiniZira Workspace"
                      className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#9aa6b8]">
                      Default Timezone
                    </label>
                    <select className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10">
                      <option>GMT +5:30 (India)</option>
                      <option>UTC</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ================= PROJECT ================= */}
          {active === "PROJECT" && (
            <section className="space-y-6">
              <h1 className="text-2xl font-extrabold">
                Project Settings
              </h1>

              <div className="rounded-[22px] bg-white/5 border border-white/10 p-6">
                <h2 className="mb-4 font-bold">Project Details</h2>
                <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
                  <input
                    defaultValue="Beyond Gravity"
                    className="px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
                  />
                  <input
                    defaultValue="BG"
                    className="px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
                  />
                </div>
              </div>

              <div className="rounded-[22px] bg-white/5 border border-white/10 p-6">
                <h2 className="mb-4 font-bold">Features</h2>
                {["Backlog", "Sprints", "Reports", "Automation"].map(
                  (f) => (
                    <label
                      key={f}
                      className="flex items-center gap-3 mb-3"
                    >
                      <input type="checkbox" defaultChecked />
                      <span>{f}</span>
                    </label>
                  )
                )}
              </div>
            </section>
          )}

          {/* ================= TEAM ================= */}
          {active === "TEAM" && (
            <section className="space-y-6">
              <h1 className="text-2xl font-extrabold">
                Team & Users
              </h1>

              <div className="rounded-[22px] bg-white/5 border border-white/10 p-6 space-y-4">
                {[
                  ["Amit Kumar", "Admin"],
                  ["Neha Patel", "Developer"],
                  ["Rohit Verma", "QA"],
                ].map(([name, role]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between"
                  >
                    <span>{name}</span>
                    <select className="px-3 py-1 rounded bg-white/10">
                      <option>{role}</option>
                      <option>Viewer</option>
                    </select>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ================= PERMISSIONS ================= */}
          {active === "PERMISSIONS" && (
            <section className="space-y-6">
              <h1 className="text-2xl font-extrabold">
                Permissions
              </h1>

              <div className="rounded-[22px] bg-white/5 border border-white/10 p-6">
                {[
                  "Create Issues",
                  "Edit Issues",
                  "Assign Issues",
                  "Commit Sprint",
                  "Delete Sprint",
                ].map((p) => (
                  <label
                    key={p}
                    className="flex items-center justify-between mb-3"
                  >
                    <span>{p}</span>
                    <select className="px-3 py-1 rounded bg-white/10">
                      <option>Admins</option>
                      <option>Developers</option>
                      <option>Everyone</option>
                    </select>
                  </label>
                ))}
              </div>
            </section>
          )}

          {/* ================= NOTIFICATIONS ================= */}
          {active === "NOTIFICATIONS" && (
            <section className="space-y-6">
              <h1 className="text-2xl font-extrabold">
                Notifications
              </h1>

              <div className="rounded-[22px] bg-white/5 border border-white/10 p-6">
                {[
                  "Issue Assigned",
                  "Status Changed",
                  "Sprint Started",
                  "Sprint Completed",
                ].map((n) => (
                  <label
                    key={n}
                    className="flex items-center gap-3 mb-3"
                  >
                    <input type="checkbox" defaultChecked />
                    <span>{n}</span>
                  </label>
                ))}
              </div>
            </section>
          )}

          {/* ================= INTEGRATIONS ================= */}
          {active === "INTEGRATIONS" && (
            <section className="space-y-6">
              <h1 className="text-2xl font-extrabold">
                Integrations
              </h1>

              <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
                {["GitHub", "Slack", "Jenkins", "Email"].map(
                  (i) => (
                    <div
                      key={i}
                      className="p-6 rounded-[18px] bg-white/5 border border-white/10"
                    >
                      <div className="mb-2 font-bold">{i}</div>
                      <button className="px-4 py-2 rounded-[12px] bg-[#00e0c8] text-black font-bold">
                        Configure
                      </button>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          {/* ================= SECURITY ================= */}
          {active === "SECURITY" && (
            <section className="space-y-6">
              <h1 className="text-2xl font-extrabold">
                Security
              </h1>

              <div className="rounded-[22px] bg-white/5 border border-white/10 p-6 space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked />
                  <span>Two-factor authentication</span>
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  <span>Restrict IP access</span>
                </label>
              </div>
            </section>
          )}

          {/* ================= DANGER ================= */}
          {active === "DANGER" && (
            <section className="space-y-6">
              <h1 className="text-2xl font-extrabold text-red-400">
                Danger Zone
              </h1>

              <div className="rounded-[22px] bg-red-500/10 border border-red-500/30 p-6">
                <p className="mb-4 text-red-300">
                  These actions are irreversible.
                </p>

                <button className="px-6 py-3 rounded-[14px] bg-red-600 text-white font-bold">
                  Delete Project
                </button>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default Settings;
