import { useState } from "react";
import { Link } from "react-router-dom";

interface User {
  fullName: string;
  email: string;
}

interface HeaderProps {
  user: User | null;
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const user:HeaderProps['user'] = null;
  return (
    <header className="sticky top-0 z-[99999] bg-gradient-to-br from-[rgba(18,25,33,0.72)] to-[rgba(10,15,20,0.72)] backdrop-blur-[20px] border-b border-white/10 shadow-[0_6px_30px_rgba(0,0,0,0.35)]">
      <div className="max-w-[1300px] mx-auto px-[30px] py-[14px] flex items-center justify-between">
        {/* LOGO */}
        <div className="text-[1.9rem] font-extrabold tracking-wide text-[#00e0c8] cursor-pointer transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_25px_#00e0c8]">
          MiniZira
        </div>

        {/* NAV LINKS */}
        <nav className="flex gap-[30px]">
          {[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Projects", to: "/projects" },
            { label: "Tasks", to: "/app/sprints" },
            { label: "Teams", to: "/teams" },
            { label: "Issues", to: "/issues" },
            { label: "Reports", to: "/reports" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="relative text-[#9aa6b8] font-medium transition-colors duration-200 hover:text-[#00e0c8]
                         after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-[#00e0c8]
                         after:rounded-md after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="relative">
          {!user ? (
            /* LOGIN BUTTON */
            <button
              onClick={() => (window.location.href = "/auth/login")}
              className="px-5 py-[10px] rounded-xl font-semibold bg-[#00e0c8] text-black
                         shadow-[0_0_20px_rgba(0,224,200,0.18)]
                         transition-all duration-200 hover:-translate-y-[2px] hover:scale-105 hover:shadow-[0_0_28px_#00e0c8]"
            >
              Login
            </button>
          ) : (
            /* AVATAR + DROPDOWN */
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {/* Avatar */}
              <div className="w-[44px] h-[44px] rounded-full border-2 border-[#00e0c8] bg-cyan-400 text-red-600
                              flex items-center justify-center text-[28px] font-bold
                              shadow-[0_0_16px_rgba(0,224,200,0.18)]
                              transition-transform duration-200 hover:scale-110 hover:shadow-[0_0_25px_#00e0c8]">
                {user?.fullName?.charAt(0)}
              </div>

              {/* DROPDOWN */}
              {open && (
                <div
                  className="absolute right-[-80px] top-[56px] w-[200px] flex flex-col
                             bg-[rgba(10,15,20,0.55)] backdrop-blur-[22px]
                             border border-white/10 rounded-[14px]
                             shadow-[0_0_25px_rgba(0,0,0,0.45)]
                             animate-[dropdownFade_0.35s_ease_forwards]"
                >
                  <span className="px-5 py-3 text-[#9aa6b8] font-medium">
                    👤 {user?.fullName}
                  </span>

                  {[
                    { label: "Profile", to: "/profile" },
                    { label: "Settings", to: "/settings" },
                    { label: "Logout", to: "/logout" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="px-5 py-3 text-[#9aa6b8] font-medium transition-colors duration-200
                                 hover:bg-[rgba(0,224,200,0.18)] hover:text-[#00e0c8]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Dropdown animation */}
      <style>{`
        @keyframes dropdownFade {
          0% { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Header;
