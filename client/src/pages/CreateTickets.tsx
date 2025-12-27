import { useState } from "react";

/* ================= TYPES ================= */
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

/* ================= COLORS ================= */
const typeColor: Record<TicketType, string> = {
  STORY: "bg-[#61bd4f]",
  BUG: "bg-[#d04437]",
  TASK: "bg-[#2684ff]",
  SPIKE: "bg-[#ff9f1a]",
};

const priorityColor: Record<Priority, string> = {
  LOW: "bg-emerald-500/20 text-emerald-400",
  MEDIUM: "bg-amber-500/20 text-amber-400",
  HIGH: "bg-red-500/20 text-red-400",
};

/* ================= COMPONENT ================= */
const CreateTicket = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [form, setForm] = useState({
    title: "",
    type: "TASK" as TicketType,
    priority: "MEDIUM" as Priority,
    assignee: "",
    dueDate: "",
  });

  const createTicket = () => {
    if (!form.title || !form.assignee || !form.dueDate) return;

    setTickets((prev) => [
      ...prev,
      {
        id: Date.now(),
        key: `NUC-${Math.floor(Math.random() * 900 + 100)}`,
        title: form.title,
        status: "TO_DO",
        type: form.type,
        priority: form.priority,
        assignee: form.assignee,
        dueDate: form.dueDate,
      },
    ]);

    setForm({
      title: "",
      type: "TASK",
      priority: "MEDIUM",
      assignee: "",
      dueDate: "",
    });
  };

  return (
    <div className="min-h-screen px-10 py-8 bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] text-[#e8edf4]">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,200,0.12),transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto space-y-10">
        {/* ================= HEADER ================= */}
        <header>
          <h1 className="text-3xl font-extrabold">Create Ticket</h1>
          <p className="text-[#9aa6b8]">
            Create issues and preview them as they will appear on the board
          </p>
        </header>

        {/* ================= FORM ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-4 text-xl font-bold">Ticket Details</h2>

          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2">
            <input
              placeholder="Ticket title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="col-span-2 px-4 py-3 rounded-[14px] bg-white/5 border border-white/10 outline-none focus:border-[#00e0c8]"
            />

            <select
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value as TicketType })
              }
              className="px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
            >
              <option>STORY</option>
              <option>BUG</option>
              <option>TASK</option>
              <option>SPIKE</option>
            </select>

            <select
              value={form.priority}
              onChange={(e) =>
                setForm({
                  ...form,
                  priority: e.target.value as Priority,
                })
              }
              className="px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
            >
              <option>LOW</option>
              <option>MEDIUM</option>
              <option>HIGH</option>
            </select>

            <input
              placeholder="Assignee"
              value={form.assignee}
              onChange={(e) =>
                setForm({ ...form, assignee: e.target.value })
              }
              className="px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
            />

            <input
              type="date"
              value={form.dueDate}
              onChange={(e) =>
                setForm({ ...form, dueDate: e.target.value })
              }
              className="px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
            />

            <button
              onClick={createTicket}
              className="col-span-4 mt-2 py-3 rounded-[14px] bg-[#00e0c8] text-black font-bold shadow-[0_0_18px_rgba(0,224,200,0.25)]"
            >
              Create Ticket
            </button>
          </div>
        </section>

        {/* ================= CREATED TICKETS ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-4 text-xl font-bold">
            Created Tickets (Board Preview)
          </h2>

          <div className="flex flex-col gap-3 max-h-[68vh] overflow-auto pr-1 pb-2">
            {tickets.map((t) => (
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
                  <div className="px-2 py-1 text-xs font-bold rounded bg-white/10">
                    {t.key}
                  </div>
                  <span
                    className={`ml-auto text-xs font-bold px-2 py-1 rounded-full ${priorityColor[t.priority]}`}
                  >
                    {t.priority}
                  </span>
                </div>

                <h3 className="mb-1 font-bold">{t.title}</h3>

                <div className="flex items-center justify-between mt-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center font-bold text-indigo-400 rounded-full w-7 h-7 bg-indigo-500/20">
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
      </div>

      {/* shimmer animation */}
      <style>{`
        @keyframes cardShimmer {
          0% { left: -60%; }
          50% { left: 60%; }
          100% { left: -60%; }
        }
      `}</style>
    </div>
  );
};

export default CreateTicket;
