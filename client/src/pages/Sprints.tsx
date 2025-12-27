import JiraSidebar from "../components/JiraSidebar";

interface Sprint {
  id: number;
  name: string;
  goal: string;
  start: string;
  end: string;
  deadline: string;
  issues: number;
  isBacklog?: boolean;
}

const Sprints = () => {
  const activeSprints: Sprint[] = [
    {
      id: 1,
      name: "Sprint 14",
      goal: "Complete payment gateway overhaul.",
      start: "2025-01-01",
      end: "2025-01-14",
      deadline: "2025-01-16",
      issues: 18,
    },
    {
      id: 2,
      name: "Sprint 15",
      goal: "Prepare UI revamp for dashboard analytics.",
      start: "2025-01-15",
      end: "2025-01-29",
      deadline: "2025-02-01",
      issues: 22,
    },
  ];

  const backlog: Sprint = {
    id: 999,
    name: "Backlog",
    goal: "Backlog items (not scheduled).",
    start: "-",
    end: "-",
    deadline: "-",
    issues: 41,
    isBacklog: true,
  };

  return (
    <div className="grid grid-cols-[240px_1fr] bg-[#f4f5f7] min-h-screen text-[#1e293b] font-inter">
      <JiraSidebar active="sprints" />

      <main className="p-8">
        <h1 className="text-[1.8rem] font-extrabold mb-6">
          Project Backlog & Sprints
        </h1>

        {/* ACTIVE SPRINTS */}
        {activeSprints.map((s) => (
          <div
            key={s.id}
            className="relative mb-7 p-5 rounded-[10px] bg-white/60 backdrop-blur-xl border border-[#dcdfe6] overflow-hidden"
          >
            {/* Shine */}
            <div className="absolute top-0 left-[-20%] w-[60%] h-full bg-gradient-to-r from-white/40 to-transparent skew-x-[-18deg] animate-[shine_7s_linear_infinite]" />

            <div className="flex justify-between items-center">
              <div>
                <div className="text-[1.3rem] font-bold">{s.name}</div>
                <div className="text-sm text-[#64748b]">
                  {s.start} → {s.end}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-[#64748b]">
                  {s.issues} issues
                </span>
                <a
                  href={`/app/tickets?sprint=${s.id}`}
                  className="bg-[#0052cc] hover:bg-[#003d99] text-white px-4 py-2 rounded-md text-sm font-semibold transition"
                >
                  View Sprint
                </a>
              </div>
            </div>

            <div className="mt-4 bg-white/70 border border-[#dcdfe6] rounded-md px-3 py-2 text-sm">
              <strong>Goal:</strong> {s.goal}
            </div>

            <div className="py-5 text-sm text-[#64748b]">
              Sprint items will display here (collapsed preview).
            </div>
          </div>
        ))}

        {/* BACKLOG */}
        <div className="relative p-5 rounded-[10px] bg-white/60 backdrop-blur-xl border border-[#dcdfe6] overflow-hidden">
          <div className="absolute top-0 left-[-20%] w-[60%] h-full bg-gradient-to-r from-white/40 to-transparent skew-x-[-18deg] animate-[shine_7s_linear_infinite]" />

          <div className="flex justify-between items-center">
            <div className="text-[1.3rem] font-bold text-[#b54708]">
              Backlog
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-[#64748b]">
                {backlog.issues} issues
              </span>
              <a
                href={`/app/tickets?sprint=${backlog.id}`}
                className="bg-[#0052cc] hover:bg-[#003d99] text-white px-4 py-2 rounded-md text-sm font-semibold transition"
              >
                View Backlog
              </a>
            </div>
          </div>

          <div className="mt-4 bg-white/70 border border-[#dcdfe6] rounded-md px-3 py-2 text-sm">
            <strong>Goal:</strong> {backlog.goal}
          </div>

          <div className="py-5 text-sm text-[#64748b]">
            Backlog items preview here...
          </div>
        </div>

        {/* keyframes */}
        <style>{`
          @keyframes shine {
            0% { left: -40%; }
            50% { left: 70%; }
            100% { left: -40%; }
          }
        `}</style>
      </main>
    </div>
  );
};

export default Sprints;
