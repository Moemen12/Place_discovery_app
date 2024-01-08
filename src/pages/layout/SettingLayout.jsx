import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";

const SettingLayout = () => {
  return (
    <section className="flex min-h-screen">
      <div className="sm:w-1/3 xl:w-1/4 shadow-2xl">
        <Sidebar />
      </div>
      <div className="flex-auto p-10 bg-slate-100">
        <Outlet />
      </div>
    </section>
  );
};

export default SettingLayout;
