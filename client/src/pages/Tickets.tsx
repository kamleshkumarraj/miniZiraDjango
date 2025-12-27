import { useState } from "react";

type Status = "TO_DO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE";
type Priority = "LOW" | "MEDIUM" | "HIGH";
type TicketType = "TASK" | "BUG" | "STORY";

interface Comment {
  initials: string;
  author: string;
  date: string;
  text: string;
}

interface Ticket {
  key: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  type: TicketType;
  assignee: string;
  reporter: string;
  sprint: string;
  createdAt: string;
  updatedAt: string;
}

const TicketDetails = () => {
  const [ticket, setTicket] = useState<Ticket>({
    key: "NUC-205",
    title: "Implement feedback collector module",
    description:
      "We need to create a new feedback collector module ...",
    status: "IN_PROGRESS",
    priority: "HIGH",
    type: "TASK",
    assignee: "Amit Kumar",
    reporter: "Ritika Sharma",
    sprint: "Sprint 14 - Q4 2025",
    createdAt: "2025-10-30 11:40",
    updatedAt: "2025-11-05 08:22",
  });

  const [comments, setComments] = useState<Comment[]>([
    {
      initials: "AK",
      author: "Amit Kumar",
      date: "2025-11-05 09:20",
      text: "Completed backend API integration. Need UI testing.",
    },
    {
      initials: "RS",
      author: "Ritika Sharma",
      date: "2025-11-05 10:11",
      text: "UI tests running. Approving soon.",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const postComment = () => {
    if (!newComment.trim()) return;
    setComments((prev) => [
      ...prev,
      {
        initials: "U",
        author: "You",
        date: new Date().toISOString().slice(0, 16).replace("T", " "),
        text: newComment,
      },
    ]);
    setNewComment("");
  };

  return (
    <div className="relative min-h-screen px-8 py-8 bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] text-[#e8edf4]">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,200,0.12),transparent_70%)] blur-[90px] pointer-events-none" />

      <main className="relative z-10 max-w-[1200px] mx-auto">
        {/* HEADER */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <span className="text-sm text-[#9aa6b8] font-bold">
              {ticket.key}
            </span>
            <h1 className="text-[1.9rem] font-extrabold mt-1">
              {ticket.title}
            </h1>
          </div>

          <button className="px-4 py-2 rounded-[14px] bg-white/10 border border-white/10 font-bold hover:bg-white/20 transition">
            More
          </button>
        </header>

        {/* BODY */}
        <div className="grid grid-cols-[2fr_1fr] gap-10 max-lg:grid-cols-1">
          {/* LEFT */}
          <section>
            {/* META CONTROLS */}
            <div className="flex flex-wrap gap-6 mb-6">
              {[
                ["Status", "status", ["TO_DO", "IN_PROGRESS", "IN_REVIEW", "DONE"]],
                ["Priority", "priority", ["LOW", "MEDIUM", "HIGH"]],
                ["Type", "type", ["TASK", "BUG", "STORY"]],
              ].map(([label, field, options]: any) => (
                <div key={label} className="flex flex-col">
                  <label className="text-xs text-[#9aa6b8] mb-1">
                    {label}
                  </label>
                  <select
                    value={(ticket as any)[field]}
                    onChange={(e) =>
                      setTicket({
                        ...ticket,
                        [field]: e.target.value,
                      })
                    }
                    className="px-3 py-2 rounded-[12px] bg-white/5 border border-white/10 text-[#e8edf4] outline-none focus:border-[#00e0c8]"
                  >
                    {options.map((o: string) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* DESCRIPTION */}
            <section className="mb-8">
              <h2 className="font-bold mb-2">Description</h2>
              <div className="rounded-[16px] bg-white/5 border border-white/10 p-4 leading-relaxed text-[#9aa6b8]">
                {ticket.description}
              </div>
            </section>

            {/* COMMENTS */}
            <section>
              <h2 className="font-bold mb-4">Comments</h2>

              {/* Add comment */}
              <div className="mb-6">
                <textarea
                  rows={3}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full p-4 rounded-[14px] bg-white/5 border border-white/10 text-[#e8edf4] outline-none focus:border-[#00e0c8]"
                />
                <button
                  onClick={postComment}
                  className="mt-3 px-5 py-2 rounded-[14px] bg-[#00e0c8] text-black font-bold shadow-[0_0_14px_rgba(0,224,200,0.2)] hover:-translate-y-[2px] transition"
                >
                  Post
                </button>
              </div>

              {/* Thread */}
              <div className="flex flex-col gap-4">
                {comments.map((c, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-[16px] bg-white/5 border border-white/10"
                  >
                    <div className="w-11 h-11 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-extrabold">
                      {c.initials}
                    </div>
                    <div>
                      <div className="text-xs text-[#9aa6b8]">
                        <strong className="text-[#e8edf4]">
                          {c.author}
                        </strong>{" "}
                        · {c.date}
                      </div>
                      <p className="mt-1 text-[#9aa6b8]">
                        {c.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className="flex flex-col gap-6">
            {/* DETAILS */}
            <div className="rounded-[18px] bg-white/5 border border-white/10 p-5">
              <h3 className="font-bold mb-4">Details</h3>
              {[
                ["Assignee", ticket.assignee],
                ["Reporter", ticket.reporter],
                ["Sprint", ticket.sprint],
                ["Created", ticket.createdAt],
                ["Updated", ticket.updatedAt],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between text-sm mb-2"
                >
                  <span className="text-[#9aa6b8]">{k}</span>
                  <strong>{v}</strong>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="rounded-[18px] bg-white/5 border border-white/10 p-5 flex flex-col gap-3">
              <h3 className="font-bold mb-2">Actions</h3>
              <button className="rounded-[14px] py-2 font-bold bg-white/10 hover:bg-white/20 transition">
                Move to Sprint
              </button>
              <button className="rounded-[14px] py-2 font-bold bg-[#00e0c8] text-black">
                Assign
              </button>
              <button className="rounded-[14px] py-2 font-bold bg-red-500/20 text-red-400 hover:bg-red-500/30 transition">
                Delete
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default TicketDetails;
