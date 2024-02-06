// SettingLayout.js
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SettingLayout = () => {
  const responseData = useLoaderData();
  const {
    data: { profile_image },
  } = responseData;
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(true);

  const handleLinkClick = () => {
    // Hide the sidebar only on screens smaller than 'sm'
    if (window.innerWidth < 640) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    // Initially hide the content on small screens
    if (window.innerWidth < 640) {
      setShowSidebar(true);
    }
  }, []);

  return (
    <section className="flex min-h-screen">
      {showSidebar && (
        <div className="w-screen sm:w-1/3 xl:w-1/4 shadow-2xl">
          <Sidebar
            profile_image={profile_image}
            onLinkClick={handleLinkClick}
          />
        </div>
      )}
      <div
        className={`flex-auto sm:p-10 ${
          showSidebar ? "hidden sm:block" : "block"
        }`}
      >
        <Outlet />
      </div>
    </section>
  );
};

export default SettingLayout;
