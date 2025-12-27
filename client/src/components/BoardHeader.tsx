const BoardHeader = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <div>
          <div className="text-sm text-[#9aa6b8] mb-1">
            Projects / <strong className="text-[#e8edf4]">Beyond Gravity</strong>
          </div>
          <h1 className="text-[1.9rem] font-extrabold">
            Board
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-[#9aa6b8]">
            ⚡ <span>4 days remaining</span>
          </div>
          <button className="px-4 py-2 rounded-[14px] font-bold bg-[#00e0c8] text-black shadow-[0_0_14px_rgba(0,224,200,0.2)] hover:-translate-y-[2px] transition">
            Complete sprint
          </button>
        </div>
      </header>

      {/* Controls */}
      <div className="flex justify-between items-center mb-6 gap-3">
        <input
          type="search"
          placeholder="Search issues, e.g. NUC-205..."
          className="px-4 py-2 rounded-[14px] bg-white/5 border border-white/10 text-[#e8edf4] outline-none focus:border-[#00e0c8] min-w-[340px] max-sm:min-w-[160px]"
        />

        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {["AK", "RD", "VS", "+3"].map((a) => (
              <span
                key={a}
                className="w-9 h-9 rounded-full bg-white/10 text-[#00e0c8] flex items-center justify-center font-bold"
              >
                {a}
              </span>
            ))}
          </div>

          <div className="text-sm text-[#9aa6b8]">
            Group By:
            <select className="ml-1 bg-white/5 border border-white/10 rounded px-2 py-1 text-[#e8edf4]">
              <option>Choices</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardHeader;
