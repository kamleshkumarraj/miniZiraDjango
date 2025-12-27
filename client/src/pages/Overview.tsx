import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import BoardHeader from "../components/BoardHeader";

/* ================= TYPES ================= */
type Status = "TO_DO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE";

interface Ticket {
  id: number;
  key: string;
  title: string;
  status: Status;
  assignee: string;
}

interface Sprint {
  id: string;
  name: string;
  state: "ACTIVE" | "BACKLOG";
}

/* ================= DATA ================= */
const team = [
  { name: "Amit Kumar", role: "Backend" },
  { name: "Neha Patel", role: "Frontend" },
  { name: "Rohit Verma", role: "QA" },
  { name: "Ritika Sharma", role: "PM" },
];

const sprints: Sprint[] = [
  { id: "SPR-14", name: "Sprint 14 – Q4 Core", state: "ACTIVE" },
  { id: "SPR-15", name: "Sprint 15 – Growth", state: "BACKLOG" },
];

const tickets: Ticket[] = [
  { id: 1, key: "NUC-205", title: "Feedback collector", status: "TO_DO", assignee: "Amit" },
  { id: 2, key: "NUC-206", title: "API version bump", status: "IN_PROGRESS", assignee: "Neha" },
  { id: 3, key: "NUC-208", title: "NPS UI", status: "IN_REVIEW", assignee: "Rohit" },
  { id: 4, key: "NUC-210", title: "Payment fix", status: "DONE", assignee: "Amit" },
];

const statusColors: Record<Status, string> = {
  TO_DO: "#94a3b8",
  IN_PROGRESS: "#38bdf8",
  IN_REVIEW: "#facc15",
  DONE: "#22c55e",
};

/* ================= COMPONENT ================= */
const DashboardOverview = () => {
  const [selectedSprint, setSelectedSprint] = useState<Sprint>(sprints[0]);

  const byStatus = (status: Status) =>
    tickets.filter((t) => t.status === status);

  const pieData = (Object.keys(statusColors) as Status[]).map((s) => ({
    name: s.replace("_", " "),
    value: byStatus(s).length,
  }));

  const weeklyProgress = [
    { week: "Week 1", done: 6 },
    { week: "Week 2", done: 11 },
    { week: "Week 3", done: 18 },
    { week: "Week 4", done: 26 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] text-[#e8edf4] px-8 py-6">
      <BoardHeader />

      {/* ================= TEAM ================= */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Team Members</h2>
        <div className="flex gap-4 flex-wrap">
          {team.map((m) => (
            <div
              key={m.name}
              className="px-5 py-4 rounded-[16px] bg-white/5 border border-white/10"
            >
              <div className="font-bold">{m.name}</div>
              <div className="text-sm text-[#9aa6b8]">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SPRINTS ================= */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Sprints</h2>
        <div className="flex gap-6 flex-wrap">
          {sprints.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelectedSprint(s)}
              className={`cursor-pointer p-6 rounded-[20px] bg-white/5 border border-white/10
              hover:-translate-y-1 transition ${
                selectedSprint.id === s.id
                  ? "ring-2 ring-[#00e0c8]"
                  : ""
              }`}
            >
              <h3 className="font-bold">{s.name}</h3>
              <span
                className={`text-xs mt-2 inline-block px-3 py-1 rounded-full ${
                  s.state === "ACTIVE"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-slate-500/20 text-slate-400"
                }`}
              >
                {s.state}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TICKETS BY STATUS ================= */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-4">
          Tickets – {selectedSprint.name}
        </h2>

        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {(Object.keys(statusColors) as Status[]).map((status) => (
            <div
              key={status}
              className="rounded-[18px] bg-white/5 border border-white/10 p-4"
            >
              <div className="flex justify-between font-bold mb-3">
                {status.replace("_", " ")}
                <span className="text-sm text-[#9aa6b8]">
                  {byStatus(status).length}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {byStatus(status).map((t) => (
                  <div
                    key={t.id}
                    className="p-3 rounded-[14px] bg-white/10"
                  >
                    <strong>{t.key}</strong>
                    <p className="text-sm text-[#9aa6b8]">{t.title}</p>
                    <span className="text-xs text-[#9aa6b8]">
                      {t.assignee}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ANALYTICS ================= */}
      <section className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
        {/* PIE */}
        <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
          <h3 className="font-bold mb-4">Ticket Status Distribution</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90}>
                {pieData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={Object.values(statusColors)[i]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BAR */}
        <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
          <h3 className="font-bold mb-4">Weekly Progress</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={weeklyProgress}>
              <XAxis dataKey="week" stroke="#9aa6b8" />
              <YAxis stroke="#9aa6b8" />
              <Tooltip />
              <Bar dataKey="done" fill="#00e0c8" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default DashboardOverview;
