interface SidebarProps {
  active: "dashboard" | "profile" | "tickets";
}

const Sidebar = ({ active }: SidebarProps) => {
  const linkClass = (key: string) =>
    `px-3 py-2 rounded-xl font-semibold transition ${
      active === key
        ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/10 text-white"
        : "text-white/70 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <aside className="w-[220px] hidden lg:flex flex-col gap-6 px-5 py-7 backdrop-blur-md bg-white/5 border-r border-white/5 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center font-extrabold text-white shadow-lg">
          MZ
        </div>
        <span className="font-bold">Mini-Zira</span>
      </div>

      <nav className="flex flex-col gap-2 mt-4">
        <a className={linkClass("dashboard")} href="/app/dashboard">Dashboard</a>
        <a className={linkClass("profile")} href="/app/profile">Profile</a>
        <a className={linkClass("tickets")} href="/app/tickets">Tickets</a>
        <a className="px-3 py-2 rounded-xl font-semibold text-white/70 hover:bg-white/5" href="/auth/logout">
          Logout
        </a>
      </nav>

      <div className="mt-auto text-xs text-white/50">Mini-Zira • v1</div>
    </aside>
  );
};

export default Sidebar;
