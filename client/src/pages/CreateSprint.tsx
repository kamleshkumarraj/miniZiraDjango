import { useState } from "react";

/* ================= TYPES ================= */
type SprintStatus = "PLANNED" | "ACTIVE" | "COMPLETED";

interface Sprint {
  id?: string;
  name: string;
  goal: string;
  startDate: string;
  endDate: string;
  duration: number;
  capacityPoints: number;
  workingDays: number;
  status: SprintStatus;
  visibility: "TEAM" | "PRIVATE";
}

/* ================= COMPONENT ================= */
const SprintCreateEdit = () => {
  // simulate edit mode if id exists
  const [isEditMode] = useState(true);

  const [sprint, setSprint] = useState<Sprint>({
    id: "SPR-16",
    name: "Sprint 16 – Platform Stability",
    goal: "Reduce production bugs and stabilize payment & infra flows",
    startDate: "2025-11-01",
    endDate: "2025-11-15",
    duration: 14,
    capacityPoints: 32,
    workingDays: 10,
    status: "PLANNED",
    visibility: "TEAM",
  });

  const update = (field: keyof Sprint, value: any) =>
    setSprint({ ...sprint, [field]: value });

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this sprint?")) {
      alert("Sprint deleted (simulate API)");
    }
  };

  return (
    <div className="min-h-screen px-10 py-8 bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] text-[#e8edf4]">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,200,0.12),transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto space-y-10">
        {/* ================= HEADER ================= */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold">
              {isEditMode ? "Edit Sprint" : "Create Sprint"}
            </h1>
            <p className="text-[#9aa6b8]">
              Define sprint timeline, capacity, and rules
            </p>
          </div>

          <button className="px-6 py-3 rounded-[14px] bg-[#00e0c8] text-black font-bold shadow-[0_0_18px_rgba(0,224,200,0.25)]">
            {isEditMode ? "Save Changes" : "Create Sprint"}
          </button>
        </header>

        {/* ================= BASIC DETAILS ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-4 text-xl font-bold">Sprint Details</h2>

          <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
            <div>
              <label className="text-sm text-[#9aa6b8]">Sprint Name</label>
              <input
                value={sprint.name}
                onChange={(e) => update("name", e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10 outline-none focus:border-[#00e0c8]"
              />
            </div>

            <div>
              <label className="text-sm text-[#9aa6b8]">Sprint Goal</label>
              <input
                value={sprint.goal}
                onChange={(e) => update("goal", e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10 outline-none focus:border-[#00e0c8]"
              />
            </div>
          </div>
        </section>

        {/* ================= TIMELINE ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-4 text-xl font-bold">Timeline</h2>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
            <div>
              <label className="text-sm text-[#9aa6b8]">Start Date</label>
              <input
                type="date"
                value={sprint.startDate}
                onChange={(e) => update("startDate", e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
              />
            </div>

            <div>
              <label className="text-sm text-[#9aa6b8]">End Date</label>
              <input
                type="date"
                value={sprint.endDate}
                onChange={(e) => update("endDate", e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
              />
            </div>

            <div>
              <label className="text-sm text-[#9aa6b8]">Duration (days)</label>
              <input
                type="number"
                value={sprint.duration}
                onChange={(e) => update("duration", +e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
              />
            </div>
          </div>
        </section>

        {/* ================= CAPACITY ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-4 text-xl font-bold">Capacity Planning</h2>

          <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
            <div>
              <label className="text-sm text-[#9aa6b8]">
                Total Capacity (Story Points)
              </label>
              <input
                type="number"
                value={sprint.capacityPoints}
                onChange={(e) => update("capacityPoints", +e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
              />
            </div>

            <div>
              <label className="text-sm text-[#9aa6b8]">
                Working Days
              </label>
              <input
                type="number"
                value={sprint.workingDays}
                onChange={(e) => update("workingDays", +e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
              />
            </div>
          </div>

          <p className="mt-4 text-sm text-[#9aa6b8]">
            Capacity is used during sprint planning to validate workload.
          </p>
        </section>

        {/* ================= RULES ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-4 text-xl font-bold">Sprint Rules</h2>

          <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
            <div>
              <label className="text-sm text-[#9aa6b8]">Sprint Status</label>
              <select
                value={sprint.status}
                onChange={(e) =>
                  update("status", e.target.value as SprintStatus)
                }
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
              >
                <option>PLANNED</option>
                <option>ACTIVE</option>
                <option>COMPLETED</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-[#9aa6b8]">Visibility</label>
              <select
                value={sprint.visibility}
                onChange={(e) =>
                  update("visibility", e.target.value)
                }
                className="mt-1 w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10"
              >
                <option value="TEAM">Team</option>
                <option value="PRIVATE">Private</option>
              </select>
            </div>
          </div>
        </section>

        {/* ================= DANGER ZONE ================= */}
        {isEditMode && (
          <section className="rounded-[22px] bg-red-500/10 border border-red-500/30 p-6">
            <h2 className="mb-2 text-xl font-bold text-red-400">
              Danger Zone
            </h2>
            <p className="mb-4 text-sm text-red-300">
              Deleting a sprint is irreversible. All sprint metadata will be lost.
            </p>
            <button
              onClick={handleDelete}
              className="px-6 py-3 rounded-[14px] bg-red-600 text-white font-bold"
            >
              Delete Sprint
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default SprintCreateEdit;
