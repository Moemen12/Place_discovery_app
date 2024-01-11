import { Outlet, useLoaderData } from "react-router-dom";
import { Sidebar } from "../../components";

const SettingLayout = () => {
  const responseData = useLoaderData();
  const {
    data: { profile_image },
  } = responseData;

  return (
    <section className="flex min-h-screen">
      <div className="sm:w-1/3 xl:w-1/4 shadow-2xl">
        <Sidebar profile_image={profile_image} />
      </div>
      <div className="flex-auto p-10 bg-slate-100">
        <Outlet />
      </div>
    </section>
  );
};

export default SettingLayout;
