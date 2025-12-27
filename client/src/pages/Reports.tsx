import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ================= DATA ================= */
const sprintBurndown = [
  { day: "Day 1", remaining: 120 },
  { day: "Day 3", remaining: 96 },
  { day: "Day 5", remaining: 78 },
  { day: "Day 7", remaining: 55 },
  { day: "Day 9", remaining: 34 },
  { day: "Day 11", remaining: 18 },
  { day: "Day 13", remaining: 6 },
  { day: "Day 14", remaining: 0 },
];

const velocityData = [
  { sprint: "Sprint 12", points: 24 },
  { sprint: "Sprint 13", points: 28 },
  { sprint: "Sprint 14", points: 32 },
  { sprint: "Sprint 15", points: 30 },
];

const workloadData = [
  { name: "Amit", value: 14 },
  { name: "Neha", value: 10 },
  { name: "Rohit", value: 6 },
  { name: "Ritika", value: 4 },
];

const cycleTimeData = [
  { stage: "To Do", days: 2 },
  { stage: "In Progress", days: 4 },
  { stage: "In Review", days: 1 },
  { stage: "Done", days: 0.5 },
];

const pieColors = ["#00e0c8", "#38bdf8", "#facc15", "#f87171"];

/* ================= COMPONENT ================= */
const Reports = () => {
  return (
    <div className="min-h-screen px-10 py-8 bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] text-[#e8edf4]">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,200,0.12),transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto space-y-12">
        {/* ================= HEADER ================= */}
        <header>
          <h1 className="text-3xl font-extrabold">Reports</h1>
          <p className="text-[#9aa6b8]">
            Track sprint health, delivery speed, and predictability
          </p>
        </header>

        {/* ================= FILTERS ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-4 text-lg font-bold">Report Filters</h2>

          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2">
            <select className="px-4 py-3 rounded-[14px] bg-white/5 border border-white/10">
              <option>Current Sprint</option>
              <option>Sprint 15</option>
              <option>Sprint 14</option>
            </select>

            <select className="px-4 py-3 rounded-[14px] bg-white/5 border border-white/10">
              <option>All Teams</option>
              <option>Core Team</option>
              <option>Growth Team</option>
            </select>

            <select className="px-4 py-3 rounded-[14px] bg-white/5 border border-white/10">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>

            <button className="px-4 py-3 rounded-[14px] bg-[#00e0c8] text-black font-bold">
              Apply Filters
            </button>
          </div>
        </section>

        {/* ================= SPRINT HEALTH ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-6 text-xl font-bold">Sprint Burndown</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sprintBurndown}>
              <XAxis dataKey="day" stroke="#9aa6b8" />
              <YAxis stroke="#9aa6b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="remaining"
                stroke="#00e0c8"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>

        {/* ================= DELIVERY ================= */}
        <section className="grid grid-cols-2 gap-8 max-xl:grid-cols-1">
          {/* VELOCITY */}
          <div className="rounded-[22px] bg-white/5 border border-white/10 p-6">
            <h2 className="mb-4 text-xl font-bold">Velocity Trend</h2>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={velocityData}>
                <XAxis dataKey="sprint" stroke="#9aa6b8" />
                <YAxis stroke="#9aa6b8" />
                <Tooltip />
                <Bar
                  dataKey="points"
                  fill="#38bdf8"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* WORKLOAD */}
          <div className="rounded-[22px] bg-white/5 border border-white/10 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Workload Distribution
            </h2>

            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={workloadData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                >
                  {workloadData.map((_, i) => (
                    <Cell key={i} fill={pieColors[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* ================= CYCLE TIME ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-6 text-xl font-bold">
            Cycle Time (Average Days)
          </h2>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={cycleTimeData}>
              <XAxis dataKey="stage" stroke="#9aa6b8" />
              <YAxis stroke="#9aa6b8" />
              <Tooltip />
              <Bar
                dataKey="days"
                fill="#facc15"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* ================= INSIGHTS ================= */}
        <section className="rounded-[22px] bg-white/5 border border-white/10 p-6">
          <h2 className="mb-4 text-xl font-bold">
            Key Insights
          </h2>

          <ul className="space-y-2 text-[#9aa6b8] list-disc list-inside">
            <li>Velocity has stabilized over last 3 sprints</li>
            <li>Review stage is the shortest bottleneck</li>
            <li>Backend workload is higher than frontend</li>
            <li>Sprint completed on time with no spillover</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Reports;
