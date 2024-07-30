import { FaAngleDown } from "react-icons/fa6";
import { MdPersonOutline } from "react-icons/md";
import XLogo from "../../assets/images/Xlogo.png";

const activityData = [
  {
    date: "23 JUL",
    day: "Tuesday",
    icon: <MdPersonOutline color="#e4e4e7" size={15} />,
    description: "contact created",
  },
  {
    date: "9 JUL",
    day: "Tuesday",
    icon: <img src={XLogo} alt="XLogo" style={{ width: 15, height: 15 }} />,
    description: (
      <p className="text-[0.8rem]">
        ₹<span className="text-sm text-zinc-200 font-semibold">300</span>.00
        credit into your account
      </p>
    ),
  },
  {
    date: "1 JUL",
    day: "Monday",
    icon: <img src={XLogo} alt="XLogo" style={{ width: 15, height: 15 }} />,
    description: (
      <p className="text-[0.8rem]">
        <span className="text-sm text-zinc-200 font-semibold">1</span> payout
        worth ₹<span className="text-sm text-zinc-200 font-semibold">2,38,665</span>.00 created
      </p>
    ),
  },
  {
    date: "24 JUL",
    day: "Monday",
    icon: <img src={XLogo} alt="XLogo" style={{ width: 15, height: 15 }} />,
    description: "", // Empty description
  },
];

const Card4 = () => {
  return (
    <>
      <section className="bg-primaryColor h-auto p-6 w-full mt-7 font-Poppins flex flex-col justify-between mb-4">
        <div className="flex justify-between mb-4">
          <div className="flex gap-3">
            <p className="text-md font-semibold text-zinc-200">Activity Feed</p>
            <p className="text-[0.8rem] text-zinc-400">
              ⓘ updated a few seconds ago
            </p>
          </div>
          <p className="text-[0.8rem] flex items-center gap-2 text-blue-500">
            Show filters <FaAngleDown />
          </p>
        </div>
        <div className="p-5">
          <div className="flex flex-col gap-5">
            {activityData.map((activity, index) => (
              <div
                key={index}
                className="bg-gradient-to-r flex items-center justify-between from-[#181c24] to-primaryColor to-[70%] w-full p-10 gap-10"
              >
                <div className="flex items-center gap-24">
                  <div className="flex flex-col gap-1 ml-10">
                    <p className="text-[0.85rem] font-semibold text-zinc-200">
                      {activity.date}
                    </p>
                    <p className="text-[0.8rem] text-zinc-400">
                      {activity.day}
                    </p>
                  </div>
                  <div className="h-10 border-l border-neutral-700 w-1"></div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#171b22]">{activity.icon}</div>
                    <p className="text-[0.8rem] text-zinc-400">
                      {typeof activity.description === "string" ? (
                        <span>{activity.description}</span>
                      ) : (
                        activity.description
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <button className="bg-[#2a2e35] uppercase text-[0.8rem] py-2 px-3 text-zinc-200">
                Look for older activities ↓
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card4;
