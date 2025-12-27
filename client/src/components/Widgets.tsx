const Widgets = () => {
  return (
    <aside className="w-[320px] hidden xl:flex flex-col gap-5">
      <div className="p-5 rounded-xl bg-white/5 border border-white/5">
        <h3 className="font-semibold mb-2">Recent activity</h3>
        <p className="text-white/60 text-sm">No recent activity to show.</p>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
        <h4 className="font-semibold mb-1">Account</h4>
        <p className="text-white/60 text-sm">Plan • Free</p>
      </div>
    </aside>
  );
};

export default Widgets;
