import { GoPeople, GoShareAndroid } from "react-icons/go";
import { image2 } from "../assets/images";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoRemove } from "react-icons/io5";
const Saved = () => {
  return (
    <section>
      <div className="px-12 bg-slate-500">
        <div className="flex items-center justify-between py-4">
          <p>Moemen saadeh/Saved</p>
          <div
            className="w-10 h-10 rounded-full"
            style={{ background: `url(${image2})`, backgroundSize: "cover" }}
          ></div>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 px-8 md:px-16 xl:px-32 md:gap-x-16 xl:gap-x-24 text-center py-16 gap-y-16">
          {[1, 2, 3, 4, 5, 6].map((li, index) => {
            return (
              <div className="card shadow-2xl" key={index}>
                <div
                  className="rounded-lg relative h-56"
                  style={{
                    background: `url(${image2})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="absolute right-2 top-2 w-7 h-7 md:h-10 md:w-10 bg-white rounded-full grid place-items-center cursor-pointer">
                    <IoRemove size={"1rem"} color="red" />
                  </div>
                </div>
                <div className="px-4 py-4 text-black">
                  <b className="text-2xl flex">Paris</b>
                  <div className="flex items-center gap-6 py-1">
                    <MdOutlineCalendarMonth color="black" size={"2rem"} />
                    <b className="text-xl">27/12/23</b>
                  </div>
                  <div className="flex items-center gap-6 pt-2">
                    <div className="flex items-center flex-1 gap-6">
                      <GoPeople color="black" size={"2rem"} />
                      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        {/* {rating.lastFive_People_image.map((person, index) => ( */}
                        <div className="avatar border-transparent">
                          <div className="w-10">
                            <img
                              src={
                                null ||
                                "https://cdn-icons-png.flaticon.com/512/1144/1144760.png?ga=GA1.1.1229095363.1703014299&"
                              }

                              // alt={`Person ${index + 1}`}
                            />
                          </div>
                        </div>
                        {/* ))} */}

                        <div className="avatar placeholder border-transparent">
                          <div className="w-10 bg-slate-600 text-white">
                            <span>+{null || 3}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <GoShareAndroid color="black" size={"2rem"} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Saved;
