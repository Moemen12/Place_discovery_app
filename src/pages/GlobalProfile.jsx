import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

const GlobalProfile = () => {
  const data = useLoaderData();
  const baseUrl = useSelector((store) => store.baseUrl);
  const { username, email, bio, profile_image, trip_count } = data;

  return (
    <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
      <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div className=" h-32 overflow-hidden">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt=""
          />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <img
            className="h-32 w-32 bg-white p-2 rounded-full"
            src={
              profile_image
                ? baseUrl + `/storage` + profile_image
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
            }
            alt="profile_image"
          />
        </div>
        <div className=" ">
          <div className="text-center px-14">
            <h2 className="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
            <a
              className="text-gray-400 mt-2 hover:text-blue-500"
              href="https://www.instagram.com/immohitdhiman/"
              target="BLANK()"
            >
              @immohitdhiman
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the s standard dummy text ever
              since the 1500s,{" "}
            </p>
          </div>
          <hr className="mt-6" />
          <div className="flex  bg-gray-50 ">
            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              <p>
                <span className="font-semibold">2.5 k </span> Followers
              </p>
            </div>
            <div className="border"></div>
            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              <p>
                {" "}
                <span className="font-semibold">2.0 k </span> Following
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalProfile;
