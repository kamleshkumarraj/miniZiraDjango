import { useState } from "react";

/* ================= TYPES ================= */
type Priority = "LOW" | "MEDIUM" | "HIGH";
type Status = "BACKLOG" | "PLANNED";

interface Ticket {
  id: string;
  key: string;
  title: string;
  priority: Priority;
  assignee?: string;
  points: number;
  status: Status;
}

/* ================= MOCK DATA ================= */
const initialBacklog: Ticket[] = [
  { id: "1", key: "NUC-301", title: "Refactor payment module", priority: "HIGH", points: 8, status: "BACKLOG" },
  { id: "2", key: "NUC-302", title: "Improve search latency", priority: "MEDIUM", points: 5, status: "BACKLOG" },
  { id: "3", key: "NUC-303", title: "Add feedback modal", priority: "LOW", points: 3, status: "BACKLOG" },
];

const team = [
  { name: "Amit", capacity: 10 },
  { name: "Neha", capacity: 8 },
  { name: "Rohit", capacity: 6 },
];

/* ================= COMPONENT ================= */
const SprintPlanning = () => {
  const [sprintName, setSprintName] = useState("Sprint 16 – Core Stabilization");
  const [sprintGoal, setSprintGoal] = useState(
    "Reduce production bugs and stabilize payment & search flows"
  );

  const [backlog, setBacklog] = useState<Ticket[]>(initialBacklog);
  const [sprintTickets, setSprintTickets] = useState<Ticket[]>([]);

  const moveToSprint = (ticket: Ticket) => {
    setBacklog(backlog.filter((t) => t.id !== ticket.id));
    setSprintTickets([...sprintTickets, { ...ticket, status: "PLANNED" }]);
  };

  const totalPoints = sprintTickets.reduce((sum, t) => sum + t.points, 0);
  const teamCapacity = team.reduce((sum, m) => sum + m.capacity, 0);

  return (
    <div className="min-h-screen px-10 py-8 bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] text-[#e8edf4]">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,200,0.12),transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto space-y-10">
        {/* ================= HEADER ================= */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold">Sprint Planning</h1>
            <p className="text-[#9aa6b8]">
              Define sprint scope, capacity, and commit work
            </p>
          </div>

          <button
            disabled={totalPoints > teamCapacity}
            className={`px-6 py-3 rounded-[14px] font-bold transition ${
              totalPoints > teamCapacity
                ? "bg-red-500/30 text-red-400 cursor-not-allowed"
                : "bg-[#00e0c8] text-black shadow-[0_0_18px_rgba(0,224,200,0.25)]"
            }`}
          >
            Commit Sprint
          </button>
        </header>

        {/* ================= SPRINT META ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-bold mb-4">Sprint Details</h2>

          <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
            <div>
              <label className="text-sm text-[#9aa6b8]">Sprint Name</label>
              <input
                value={sprintName}
                onChange={(e) => setSprintName(e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10 outline-none focus:border-[#00e0c8]"
              />
            </div>

            <div>
              <label className="text-sm text-[#9aa6b8]">Sprint Goal</label>
              <input
                value={sprintGoal}
                onChange={(e) => setSprintGoal(e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10 outline-none focus:border-[#00e0c8]"
              />
            </div>
          </div>
        </section>

        {/* ================= CAPACITY ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-bold mb-4">Team Capacity</h2>

          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            {team.map((m) => (
              <div
                key={m.name}
                className="p-4 rounded-[18px] bg-white/10 flex justify-between"
              >
                <span className="font-bold">{m.name}</span>
                <span className="text-[#00e0c8] font-bold">
                  {m.capacity} pts
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 text-sm text-[#9aa6b8]">
            Sprint Load:{" "}
            <strong
              className={
                totalPoints > teamCapacity ? "text-red-400" : "text-[#00e0c8]"
              }
            >
              {totalPoints} / {teamCapacity} pts
            </strong>
          </div>
        </section>

        {/* ================= BACKLOG → SPRINT ================= */}
        <section className="grid grid-cols-2 gap-8 max-xl:grid-cols-1">
          {/* BACKLOG */}
          <div className="rounded-[22px] bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-4">Product Backlog</h2>

            <div className="space-y-3">
              {backlog.map((t) => (
                <div
                  key={t.id}
                  className="p-4 rounded-[16px] bg-white/10 flex justify-between items-center"
                >
                  <div>
                    <strong>{t.key}</strong>
                    <p className="text-[#9aa6b8] text-sm">{t.title}</p>
                    <span className="text-xs text-[#9aa6b8]">
                      {t.points} pts · {t.priority}
                    </span>
                  </div>

                  <button
                    onClick={() => moveToSprint(t)}
                    className="px-4 py-2 rounded-[12px] bg-[#00e0c8] text-black font-bold"
                  >
                    ➜ Add
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SPRINT SCOPE */}
          <div className="rounded-[22px] bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-4">Sprint Scope</h2>

            {sprintTickets.length === 0 ? (
              <p className="text-[#9aa6b8]">
                No issues added to sprint yet
              </p>
            ) : (
              <div className="space-y-3">
                {sprintTickets.map((t) => (
                  <div
                    key={t.id}
                    className="p-4 rounded-[16px] bg-white/10"
                  >
                    <strong>{t.key}</strong>
                    <p className="text-[#9aa6b8] text-sm">{t.title}</p>
                    <span className="text-xs text-[#00e0c8]">
                      {t.points} pts
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SprintPlanning;
