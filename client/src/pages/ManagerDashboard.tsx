import { useState } from "react";
import { Outlet } from "react-router-dom";

/* ================= TYPES ================= */
type SprintStatus = "PLANNED" | "ACTIVE" | "COMPLETED";

interface Sprint {
  id: string;
  name: string;
  goal: string;
  startDate: string;
  endDate: string;
  status: SprintStatus;
}

interface Ticket {
  id: string;
  title: string;
  assignee: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
}

/* ================= COMPONENT ================= */
const ManagerDashboard = () => {
  const [sprints, setSprints] = useState<Sprint[]>([
    {
      id: "SPR-14",
      name: "Sprint 14 – Q4 Foundations",
      goal: "Stabilize platform & payment flow",
      startDate: "2025-11-01",
      endDate: "2025-11-15",
      status: "ACTIVE",
    },
    {
      id: "SPR-15",
      name: "Sprint 15 – Growth Features",
      goal: "Launch feedback & analytics",
      startDate: "2025-11-16",
      endDate: "2025-11-30",
      status: "PLANNED",
    },
  ]);

  const [selectedSprint, setSelectedSprint] = useState<Sprint | null>(
    sprints[0]
  );

  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: "NUC-401",
      title: "Feedback collector backend",
      assignee: "Amit",
      priority: "HIGH",
    },
    {
      id: "NUC-402",
      title: "Analytics dashboard UI",
      assignee: "Neha",
      priority: "MEDIUM",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] text-[#e8edf4] flex">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[260px] border-r border-white/10 bg-white/5 backdrop-blur-[20px] p-6 space-y-6">
        <h2 className="text-xl font-extrabold text-[#00e0c8]">
          Manager Panel
        </h2>

        <nav className="space-y-3 text-sm">
          {[
            "Dashboard",
            "Sprint Planning",
            "Create Sprint",
            "Create Ticket",
            "Team & Capacity",
            "Reports",
            "Settings",
          ].map((item) => (
            <div
              key={item}
              className="px-4 py-2 rounded-[12px] hover:bg-white/10 cursor-pointer transition"
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      <main className="relative flex-1 p-10 space-y-10">
        <Outlet />
      </main>



      {/* ================= MAIN ================= */}
      
    </div>
  );
};

export default ManagerDashboard;
