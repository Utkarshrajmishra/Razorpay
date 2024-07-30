import { IoSearchOutline } from "react-icons/io5";
import { PiSpeakerHigh } from "react-icons/pi";
import { GoPersonAdd } from "react-icons/go";
import { FiRefreshCcw } from "react-icons/fi";
import RazorPayXLogo from "../assets/images/Xlogo.png";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
const Home = () => {
  return (
    <div className="flex-1 h-screen bg-secondaryColor font-Popins overflow-y-scroll overflow-x-hidden">
      <section className="flex gap-4 items-center justify-end p-4">
        <button className="text-[0.8rem] text-white py-1 px-4 bg-blue-500">
          PAYOUT
        </button>
        <IoSearchOutline fontSize={18} color="#2563eb" />
        <PiSpeakerHigh fontSize={18} color="#eab308" />
        <GoPersonAdd fontSize={18} color="#2563eb" />
      </section>
      <section className=" h-screen mt-2  flex justify-center">
        <div className="md:w-[70%] w-[92%]  h-screen ">
          <div className="flex">
            <img src={RazorPayXLogo} alt="razor-pay-logo" width={17} />
            <p className="text-sm text-zinc-400 font-Popins">
              <span className="font-semibold">RazarPayX Lite</span>
              <i className="text-[0.8rem]"> as of a few seconds ago </i>
            </p>
            <div className="flex items-center ml-1">
              <FiRefreshCcw color="#a1a1aa" fontSize={12} />
            </div>
          </div>
          <div>
            <div className="flex items-center font-Popins md:w-[62%] w-[80%] justify-between ml-2 mt-2">
              <p className=" text-zinc-400 font-Popins flex items-center text-md ">
                <span className="font-semibold">₹</span>
                <span className="text-xl font-semibold text-white">100</span>.09
              </p>
              <div className="flex gap-1">
                <div className="h-6 border-l border-neutral-700 w-2 "></div>
                <p className="text-sm cursor-pointer text-blue-500">
                  + Add Balance
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm outline-dotted outline-[2px] mt-8 text-zinc-400 outline-zinc-500 p-4 w-full rounded-sm">
                🎉 You are all catch up .{" "}
                <span className="text-[0.8rem]">
                  There are no items pending on you.
                </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-200 font-semibold mt-8">Onboarding updates <span className="text-zinc-400 text-[0.8rem] font-light">(1)</span></p>
            </div>
            <div>
              <Card1/>
              <Card2/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
