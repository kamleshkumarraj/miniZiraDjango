import BoardHeader from "../components/BoardHeader";

type Status = "TO_DO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE";
type Priority = "LOW" | "MEDIUM" | "HIGH";
type TicketType = "STORY" | "BUG" | "TASK" | "SPIKE";

interface Ticket {
  id: number;
  key: string;
  title: string;
  status: Status;
  type: TicketType;
  priority: Priority;
  assignee: string;
  dueDate: string;
}

const Board = () => {
  const tickets: Ticket[] = [
    { id: 1, key: "NUC-205", title: "Implement feedback collector", status: "TO_DO", type: "STORY", priority: "HIGH", assignee: "Amit K", dueDate: "2025-11-10" },
    { id: 2, key: "NUC-206", title: "Bump version for new API", status: "TO_DO", type: "BUG", priority: "MEDIUM", assignee: "Ritika S", dueDate: "2025-11-12" },
    { id: 3, key: "NUC-208", title: "Add NPS feedback", status: "TO_DO", type: "TASK", priority: "LOW", assignee: "Neha P", dueDate: "2025-11-08" },
    { id: 4, key: "NUC-213", title: "Update T&C copy", status: "IN_PROGRESS", type: "TASK", priority: "MEDIUM", assignee: "Rohit V", dueDate: "2025-11-15" },
    { id: 5, key: "NUC-215", title: "Stripe integration spike", status: "IN_PROGRESS", type: "SPIKE", priority: "HIGH", assignee: "Karan G", dueDate: "2025-11-14" },
    { id: 7, key: "NUC-338", title: "Multi-dest search UI", status: "IN_REVIEW", type: "TASK", priority: "MEDIUM", assignee: "Anita", dueDate: "2025-11-09" },
    { id: 8, key: "NUC-336", title: "Quick booking web", status: "DONE", type: "TASK", priority: "MEDIUM", assignee: "Rohit", dueDate: "2025-11-05" },
    { id: 9, key: "NUC-346", title: "Payment provider fix", status: "DONE", type: "BUG", priority: "HIGH", assignee: "Neha", dueDate: "2025-11-03" },
  ];

  const statuses: Status[] = ["TO_DO", "IN_PROGRESS", "IN_REVIEW", "DONE"];
  const byStatus = (s: Status) => tickets.filter((t) => t.status === s);

  const typeColor = {
    STORY: "bg-[#61bd4f]",
    BUG: "bg-[#d04437]",
    TASK: "bg-[#2684ff]",
    SPIKE: "bg-[#ff9f1a]",
  };

  const priorityColor = {
    LOW: "bg-emerald-500/20 text-emerald-400",
    MEDIUM: "bg-amber-500/20 text-amber-400",
    HIGH: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] px-6 py-6 text-[#e8edf4]">
      <BoardHeader />

      <main className="relative grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,200,0.12),transparent_70%)] blur-[80px] pointer-events-none" />

        {statuses.map((status) => (
          <section
            key={status}
            className="relative z-10 rounded-[18px] bg-white/5 border border-white/10 backdrop-blur-[18px] shadow-[0_0_40px_rgba(0,0,0,0.45)] p-3"
          >
            {/* Column header */}
            <div className="flex justify-between items-center px-2 py-2 font-extrabold text-[#e8edf4]">
              {status.replace("_", " ")}
              <span className="text-sm text-[#9aa6b8]">
                {byStatus(status).length}
              </span>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-3 max-h-[68vh] overflow-auto pr-1 pb-2">
              {byStatus(status).map((t) => (
                <article
                  key={t.id}
                  className="relative bg-white/5 border border-white/10 rounded-[16px] p-3 shadow hover:-translate-y-1 hover:shadow-xl transition overflow-hidden"
                >
                  {/* Top */}
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-7 h-7 rounded-md text-white font-bold flex items-center justify-center text-sm ${typeColor[t.type]}`}
                    >
                      {t.type[0]}
                    </div>
                    <div className="text-xs font-bold bg-white/10 px-2 py-1 rounded">
                      {t.key}
                    </div>
                    <span
                      className={`ml-auto text-xs font-bold px-2 py-1 rounded-full ${priorityColor[t.priority]}`}
                    >
                      {t.priority}
                    </span>
                  </div>

                  <h3 className="font-bold mb-1">{t.title}</h3>

                  <div className="flex justify-between items-center mt-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                        {t.assignee[0]}
                      </div>
                      <span className="text-[#9aa6b8]">
                        <strong>Due</strong> {t.dueDate}
                      </span>
                    </div>
                    <span className="text-[#9aa6b8] text-xl">⋯</span>
                  </div>

                  {/* Shimmer */}
                  <div className="absolute left-[-40%] top-[-40%] w-[60%] h-[180%] bg-gradient-to-r from-white/5 via-white/20 to-white/5 skew-x-[-18deg] animate-[cardShimmer_6s_linear_infinite] pointer-events-none" />
                </article>
              ))}
            </div>
          </section>
        ))}

        <style>{`
          @keyframes cardShimmer {
            0% { left: -60%; }
            50% { left: 60%; }
            100% { left: -60%; }
          }
        `}</style>
      </main>
    </div>
  );
};

export default Board;
