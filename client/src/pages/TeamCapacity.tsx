import { useState } from "react";

/* ================= TYPES ================= */
interface TeamMember {
  id: string;
  name: string;
  role: string;
  availability: number; // %
  capacityPoints: number;
  assignedPoints: number;
}

interface Sprint {
  id: string;
  name: string;
  start: string;
  end: string;
}

/* ================= MOCK DATA ================= */
const sprint: Sprint = {
  id: "SPR-16",
  name: "Sprint 16 – Platform Stability",
  start: "2025-11-01",
  end: "2025-11-15",
};

const initialTeam: TeamMember[] = [
  {
    id: "U1",
    name: "Amit Kumar",
    role: "Backend Engineer",
    availability: 100,
    capacityPoints: 12,
    assignedPoints: 10,
  },
  {
    id: "U2",
    name: "Neha Patel",
    role: "Frontend Engineer",
    availability: 80,
    capacityPoints: 10,
    assignedPoints: 11,
  },
  {
    id: "U3",
    name: "Rohit Verma",
    role: "QA Engineer",
    availability: 60,
    capacityPoints: 6,
    assignedPoints: 4,
  },
  {
    id: "U4",
    name: "Ritika Sharma",
    role: "Product Manager",
    availability: 50,
    capacityPoints: 4,
    assignedPoints: 3,
  },
];

/* ================= COMPONENT ================= */
const TeamCapacity = () => {
  const [team, setTeam] = useState<TeamMember[]>(initialTeam);

  const totalCapacity = team.reduce(
    (sum, m) => sum + m.capacityPoints,
    0
  );
  const totalAssigned = team.reduce(
    (sum, m) => sum + m.assignedPoints,
    0
  );

  return (
    <div className="min-h-screen px-10 py-8 bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] text-[#e8edf4]">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,200,0.12),transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto space-y-10">
        {/* ================= HEADER ================= */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold">
              Team & Capacity
            </h1>
            <p className="text-[#9aa6b8]">
              Sprint capacity planning and workload visibility
            </p>
          </div>

          <button className="px-6 py-3 rounded-[14px] bg-[#00e0c8] text-black font-bold shadow-[0_0_18px_rgba(0,224,200,0.25)]">
            Adjust Capacity
          </button>
        </header>

        {/* ================= SPRINT CONTEXT ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-4 text-xl font-bold">Sprint Context</h2>

          <div className="flex flex-wrap gap-6 text-sm text-[#9aa6b8]">
            <div>
              <strong className="text-[#e8edf4]">Sprint</strong>
              <div>{sprint.name}</div>
            </div>
            <div>
              <strong className="text-[#e8edf4]">Duration</strong>
              <div>
                {sprint.start} → {sprint.end}
              </div>
            </div>
            <div>
              <strong className="text-[#e8edf4]">Total Capacity</strong>
              <div className="text-[#00e0c8] font-bold">
                {totalCapacity} pts
              </div>
            </div>
            <div>
              <strong className="text-[#e8edf4]">Assigned</strong>
              <div
                className={`font-bold ${
                  totalAssigned > totalCapacity
                    ? "text-red-400"
                    : "text-emerald-400"
                }`}
              >
                {totalAssigned} pts
              </div>
            </div>
          </div>
        </section>

        {/* ================= TEAM OVERVIEW ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-6 text-xl font-bold">Team Members</h2>

          <div className="space-y-4">
            {team.map((m) => {
              const overloaded = m.assignedPoints > m.capacityPoints;
              const usage =
                (m.assignedPoints / m.capacityPoints) * 100;

              return (
                <div
                  key={m.id}
                  className="p-5 rounded-[18px] bg-white/10 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-bold">{m.name}</div>
                      <div className="text-sm text-[#9aa6b8]">
                        {m.role}
                      </div>
                    </div>

                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        overloaded
                          ? "bg-red-500/20 text-red-400"
                          : "bg-emerald-500/20 text-emerald-400"
                      }`}
                    >
                      {overloaded ? "Overloaded" : "Healthy"}
                    </span>
                  </div>

                  {/* Capacity Bar */}
                  <div className="w-full h-3 mb-3 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full ${
                        overloaded
                          ? "bg-red-500"
                          : "bg-[#00e0c8]"
                      }`}
                      style={{ width: `${Math.min(usage, 100)}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-[#9aa6b8]">
                        Availability
                      </span>
                      <div className="font-bold">
                        {m.availability}%
                      </div>
                    </div>
                    <div>
                      <span className="text-[#9aa6b8]">
                        Capacity
                      </span>
                      <div className="font-bold">
                        {m.capacityPoints} pts
                      </div>
                    </div>
                    <div>
                      <span className="text-[#9aa6b8]">
                        Assigned
                      </span>
                      <div className="font-bold">
                        {m.assignedPoints} pts
                      </div>
                    </div>
                    <div>
                      <span className="text-[#9aa6b8]">
                        Free
                      </span>
                      <div className="font-bold">
                        {Math.max(
                          m.capacityPoints - m.assignedPoints,
                          0
                        )}{" "}
                        pts
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= RISK SUMMARY ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-4 text-xl font-bold">
            Capacity Risks
          </h2>

          {team.some(
            (m) => m.assignedPoints > m.capacityPoints
          ) ? (
            <ul className="text-red-400 list-disc list-inside">
              {team
                .filter(
                  (m) =>
                    m.assignedPoints > m.capacityPoints
                )
                .map((m) => (
                  <li key={m.id}>
                    {m.name} is overloaded by{" "}
                    {m.assignedPoints -
                      m.capacityPoints}{" "}
                    pts
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-emerald-400">
              All team members are within capacity.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default TeamCapacity;
