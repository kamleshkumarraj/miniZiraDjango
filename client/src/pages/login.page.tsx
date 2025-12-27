import { useEffect, useState } from "react";

type Role = "USER" | "PROJECT_MANAGER" | "ADMIN";

interface LoginFormState {
  email: string;
  password: string;
  role: Role;
  showPassword: boolean;
}

const Login = () => {
  const [form, setForm] = useState<LoginFormState>({
    email: "",
    password: "",
    role: "USER",
    showPassword: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const togglePassword = () => {
    setForm((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", form);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("registered")) {
      alert("User registered successfully.");
      window.history.replaceState({}, "", "/auth/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1117] to-[#131a23] text-[#e8edf4] font-sans">
      <div className="w-[90%] max-w-[1100px] flex rounded-[20px] backdrop-blur-[22px] bg-white/10 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.45),0_0_30px_rgba(0,224,200,0.18)] overflow-hidden md:flex-row flex-col">

        {/* LEFT PANEL */}
        <div className="flex-[1.2] p-[60px] bg-gradient-to-br from-[rgba(14,20,28,0.55)] to-[rgba(10,15,20,0.4)] backdrop-blur-[25px] border-r border-white/5 md:text-left text-center">
          <h1 className="text-[2.6rem] font-bold text-white mb-5">
            Welcome Back 👋
          </h1>

          <p className="text-[1.1rem] text-[#9aa6b8] mb-10">
            Login to manage your projects, teams,
            <br />
            tasks, issues and workflows with MiniZira.
          </p>

          <div className="mt-10 p-6 rounded-[16px] bg-white/5 border border-[rgba(0,224,200,0.28)] backdrop-blur-[20px] shadow-[0_0_24px_rgba(0,224,200,0.18)]">
            <h2 className="text-[1.8rem] text-[#00e0c8] mb-1">MiniZira</h2>
            <p className="text-[#9aa6b8]">
              The lightweight alternative to Jira — fast, clean & modern.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 p-[60px] flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[360px]"
          >
            <h2 className="text-center text-[2rem] text-[#00e0c8] mb-10 drop-shadow-[0_0_12px_rgba(0,224,200,0.18)]">
              Login
            </h2>

            {/* EMAIL */}
            <div className="mb-6">
              <label className="block mb-1 text-[1rem] font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-[14px] rounded-[12px] bg-white/5 border border-white/10 text-white outline-none backdrop-blur-[14px] transition focus:border-[#00e0c8] focus:shadow-[0_0_14px_rgba(0,224,200,0.18),0_0_4px_#00e0c8]"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-6 relative">
              <label className="block mb-1 text-[1rem] font-medium">
                Password
              </label>
              <input
                type={form.showPassword ? "text" : "password"}
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full p-[14px] pr-12 rounded-[12px] bg-white/5 border border-white/10 text-white outline-none backdrop-blur-[14px] transition focus:border-[#00e0c8] focus:shadow-[0_0_14px_rgba(0,224,200,0.18),0_0_4px_#00e0c8]"
              />

              {/* Eye Icon */}
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 top-[42px] text-[#9aa6b8] hover:text-[#00e0c8]"
              >
                {form.showPassword ? (
                  // Eye Off
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M10.58 10.58A2 2 0 0013.42 13.42"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 12C3.6 7.4 7.6 4 12 4c1.7 0 3.3.5 4.7 1.3M22 12c-1.6 4.6-5.6 8-10 8-1.7 0-3.3-.5-4.7-1.3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  // Eye
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 12C3.6 7.4 7.6 4 12 4s8.4 3.4 10 8c-1.6 4.6-5.6 8-10 8s-8.4-3.4-10-8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* ROLE */}
            <div className="mb-6">
              <label className="block mb-1 text-[1rem] font-medium">
                Role
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full p-[14px] rounded-[12px] bg-white/5 border border-white/10 text-white outline-none backdrop-blur-[14px]"
              >
                <option className="text-black">USER</option>
                <option className="text-black">PROJECT_MANAGER</option>
                <option className="text-black">ADMIN</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full mt-2 p-[14px] rounded-[12px] bg-[#00e0c8] text-black text-[1.1rem] font-bold shadow-[0_0_12px_rgba(0,224,200,0.18)] transition hover:-translate-y-[3px] hover:scale-[1.03] hover:shadow-[0_0_20px_#00e0c8]"
            >
              Login
            </button>

            {/* REGISTER */}
            <p className="mt-5 text-center text-[#9aa6b8] text-sm">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-[#00e0c8] hover:drop-shadow-[0_0_8px_#00e0c8]">
                Create Now
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
