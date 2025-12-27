import { useState } from "react";

const ProfilePage = () => {
  const [user] = useState({
    name: "Amit Kumar",
    initials: "AK",
    role: "Senior Software Engineer",
    department: "Product Engineering",
    employeeId: "EMP-2049",
    email: "amit.kumar@minizira.io",
    status: "Active",
    location: "Bangalore, India",
    timezone: "GMT +5:30",
    manager: "Ritika Sharma",
    employmentType: "Full-time",
    joinedOn: "2022-08-15",
    lastActive: "2025-11-06 10:42",
  });

  return (
    <div className="min-h-screen px-10 py-10 bg-gradient-to-br from-[#0d1117] via-[#111821] to-[#0d1117] text-[#e8edf4]">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,200,0.12),transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto space-y-10">
        {/* ================= HEADER ================= */}
        <section className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-[#00e0c8]/20 text-[#00e0c8] flex items-center justify-center text-3xl font-extrabold">
            {user.initials}
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-extrabold">{user.name}</h1>
            <p className="text-[#9aa6b8] mt-1">
              {user.role} · {user.department}
            </p>
            <div className="flex gap-4 mt-2 text-sm text-[#9aa6b8]">
              <span>ID: {user.employeeId}</span>
              <span>Status: <strong className="text-[#00e0c8]">{user.status}</strong></span>
              <span>{user.location}</span>
            </div>
          </div>

          <button className="px-5 py-2 rounded-[14px] bg-[#00e0c8] text-black font-bold shadow-[0_0_14px_rgba(0,224,200,0.2)]">
            Edit Profile
          </button>
        </section>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-[2.2fr_1fr] gap-8 max-xl:grid-cols-1">
          {/* ================= LEFT ================= */}
          <section className="space-y-8">
            {/* Profile Details */}
            <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
              <h2 className="text-xl font-bold mb-4">Profile Details</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Email", user.email],
                  ["Manager", user.manager],
                  ["Employment Type", user.employmentType],
                  ["Timezone", user.timezone],
                  ["Joined On", user.joinedOn],
                  ["Last Active", user.lastActive],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-[#9aa6b8]">{k}</span>
                    <strong>{v}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
              <h2 className="text-xl font-bold mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  ["React", "Expert"],
                  ["Node.js", "Expert"],
                  ["TypeScript", "Advanced"],
                  ["MongoDB", "Advanced"],
                  ["System Design", "Advanced"],
                  ["Agile / Scrum", "Expert"],
                ].map(([skill, level]) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/10 text-sm"
                  >
                    {skill} · <strong className="text-[#00e0c8]">{level}</strong>
                  </span>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
              <h2 className="text-xl font-bold mb-4">Work Activity</h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  ["Assigned", "48"],
                  ["Completed", "312"],
                  ["In Review", "7"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-[16px] bg-white/10 p-4"
                  >
                    <div className="text-2xl font-extrabold text-[#00e0c8]">
                      {v}
                    </div>
                    <div className="text-sm text-[#9aa6b8]">{k}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= RIGHT ================= */}
          <aside className="space-y-8">
            {/* Permissions */}
            <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
              <h3 className="font-bold mb-4">Role & Permissions</h3>
              <ul className="space-y-2 text-sm text-[#9aa6b8]">
                <li>✔ Create & edit issues</li>
                <li>✔ Assign tasks</li>
                <li>✔ Sprint planning</li>
                <li>✔ Access reports</li>
                <li>✖ Admin settings</li>
              </ul>
            </div>

            {/* Preferences */}
            <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
              <h3 className="font-bold mb-4">Preferences</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9aa6b8]">Default Board</span>
                  <strong>Kanban</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9aa6b8]">Notifications</span>
                  <strong>Enabled</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9aa6b8]">Language</span>
                  <strong>English</strong>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
              <h3 className="font-bold mb-4">Security</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9aa6b8]">Login Method</span>
                  <strong>Email + Password</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9aa6b8]">2FA</span>
                  <strong className="text-green-400">Enabled</strong>
                </div>
                <button className="w-full mt-3 py-2 rounded-[14px] bg-white/10 hover:bg-white/20 transition">
                  Reset Password
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
