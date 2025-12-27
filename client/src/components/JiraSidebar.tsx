const JiraSidebar = ({ active }: { active: string }) => {
  const link = (name: string) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition ${
      active === name
        ? "bg-white/20 text-white"
        : "text-[#c6d0e0] hover:bg-white/10 hover:text-white"
    }`;

  return (
    <aside className="bg-[#091e42] h-screen w-[240px] p-5 text-white">
      <div className="text-3xl font-extrabold mb-6">MZ</div>

      <nav className="flex flex-col gap-1">
        <a href="/app/dashboard" className={link("dashboard")}>
          Dashboard
        </a>
        <a href="/app/sprints" className={link("sprints")}>
          Sprints
        </a>
        <a href="/app/tickets" className={link("tickets")}>
          Tickets
        </a>
        <a href="/auth/logout" className={link("logout")}>
          Logout
        </a>
      </nav>
    </aside>
  );
};

export default JiraSidebar;
