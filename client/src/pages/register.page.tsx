import { useState } from "react";

interface RegisterFormState {
  fullName: string;
  username: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
  avatar?: File | null;
  avatarPreview?: string;
}

const Register = () => {
  const [form, setForm] = useState<RegisterFormState>({
    fullName: "",
    username: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    avatar: null,
    avatarPreview: "",
  });

  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const togglePassword = (field: "password" | "confirm") => {
    if (field === "password") {
      setForm((p) => ({ ...p, showPassword: !p.showPassword }));
    } else {
      setForm((p) => ({
        ...p,
        showConfirmPassword: !p.showConfirmPassword,
      }));
    }
  };

  const handleAvatarChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setForm((prev) => ({
        ...prev,
        avatar: file,
        avatarPreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setMessage("Account created successfully!");

    console.log("Register Payload:", form);
    // TODO: backend API call
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1117] to-[#131a23] text-[#e8edf4]">
      <div className="w-[90%] max-w-[1150px] flex rounded-[22px] bg-white/10 backdrop-blur-[22px] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.45),0_0_30px_rgba(0,224,200,0.18)] overflow-hidden md:flex-row flex-col">

        {/* LEFT PANEL */}
        <div className="flex-[1.2] flex flex-col justify-center p-[60px] bg-gradient-to-br from-[rgba(14,20,28,0.55)] to-[rgba(10,15,20,0.4)] border-r border-white/5 backdrop-blur-[25px] md:text-left text-center">
          <h1 className="text-[2.5rem] text-white mb-5">
            Create Your MiniZira Account 🚀
          </h1>

          <p className="text-[#9aa6b8] text-[1.1rem] mb-8">
            Manage your projects, issues, tasks & teams in one powerful modern dashboard.
          </p>

          <div className="mt-10 p-6 rounded-[16px] bg-white/5 border border-[rgba(0,224,200,0.28)] backdrop-blur-[22px] shadow-[0_0_24px_rgba(0,224,200,0.18)]">
            <h2 className="text-[#00e0c8] text-[1.7rem]">MiniZira</h2>
            <p className="text-[#9aa6b8]">
              Simple. Fast. Modern. A clean alternative to Jira.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 p-[60px] flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[370px]"
          >
            <h2 className="text-center text-[2rem] text-[#00e0c8] drop-shadow-[0_0_14px_rgba(0,224,200,0.18)] mb-8">
              Register
            </h2>

            {message && (
              <p className="text-green-400 text-center mb-4">{message}</p>
            )}
            {error && (
              <p className="text-red-400 text-center mb-4">{error}</p>
            )}

            {/* AVATAR */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <img
                src={
                  form.avatarPreview ||
                  "https://via.placeholder.com/100"
                }
                className="w-[100px] h-[100px] rounded-full border-2 border-[#00e0c8] object-cover shadow-[0_0_12px_rgba(0,224,200,0.18)] animate-[softGlow_3s_infinite_alternate]"
              />

              <label className="px-5 py-2 bg-[#00e0c8] text-black rounded-[12px] font-semibold cursor-pointer shadow-[0_0_14px_rgba(0,224,200,0.18)] hover:scale-105 transition">
                Upload Avatar
                <input type="file" hidden onChange={handleAvatarChange} />
              </label>
            </div>

            {/* INPUTS */}
            {[
              ["Full Name", "fullName"],
              ["Username", "username"],
              ["Role", "role"],
              ["Email", "email"],
            ].map(([label, name]) => (
              <div className="mb-5" key={name}>
                <label className="block mb-1">{label}</label>
                <input
                  type={name === "email" ? "email" : "text"}
                  name={name}
                  required
                  value={(form as any)[name]}
                  onChange={handleChange}
                  className="w-full p-3 rounded-[12px] bg-white/5 border border-white/10 text-white backdrop-blur-[16px] focus:border-[#00e0c8] focus:shadow-[0_0_14px_rgba(0,224,200,0.18),0_0_4px_#00e0c8]"
                />
              </div>
            ))}

            {/* PASSWORD */}
            {[
              ["Password", "password", form.showPassword],
              ["Confirm Password", "confirmPassword", form.showConfirmPassword],
            ].map(([label, name, visible]: any) => (
              <div className="mb-5 relative" key={name}>
                <label className="block mb-1">{label}</label>
                <input
                  type={visible ? "text" : "password"}
                  name={name}
                  required
                  value={(form as any)[name]}
                  onChange={handleChange}
                  className="w-full p-3 pr-12 rounded-[12px] bg-white/5 border border-white/10 text-white backdrop-blur-[16px] focus:border-[#00e0c8]"
                />
                <button
                  type="button"
                  onClick={() =>
                    togglePassword(name === "password" ? "password" : "confirm")
                  }
                  className="absolute right-4 top-[38px] text-[#9aa6b8]"
                >
                  👁
                </button>
              </div>
            ))}

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full p-[14px] bg-[#00e0c8] text-black font-bold text-[1.1rem] rounded-[12px] shadow-[0_0_14px_rgba(0,224,200,0.18)] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_22px_#00e0c8] transition"
            >
              Create Account
            </button>

            <p className="mt-4 text-center text-[#9aa6b8]">
              Already have an account?{" "}
              <a href="/login" className="text-[#00e0c8] hover:drop-shadow-[0_0_8px_#00e0c8]">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
