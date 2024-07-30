import Bank from "../../assets/images/bank.png";
import Gradient from "../../assets/images/gradient.png";

const ProgressBar = ({ percentage }) => {
  return (
    <div
      className="relative w-full bg-zinc-600 rounded-full mb-2"
      style={{ height: "3px" }}
    >
      <div
        className="absolute top-0 left-0 bg-emerald-500 rounded-full"
        style={{ width: `${percentage}%`, height: "100%" }}
      />
    </div>
  );
};

const Card1 = () => {
  return (
    <section className="relative bg-primaryColor h-[150px]  rounded-xl w-full mt-2 font-Popins">
      <div className="relative h-full w-full">
        <img
          src={Gradient}
          alt="gradient-background"
          className="absolute top-0 left-0 h-full w-[20%] rounded-xl"
          style={{ padding: "inherit" }}
        />
        <div className="flex items-center h-[90%] gap-3 ">
          <div className="relative ml-12 flex flex-col justify-center items-center h-full px-4">
            <img
              src={Bank}
              alt="bank-image"
              className="relative z-10"
              width={60}
            />
            <p className="relative z-10 text-white uppercase text-[0.7rem] font-semibold mt-2 text-center">
              Current <br /> Account
            </p>
          </div>
          <div className="relative flex flex-col justify-between font-Popins w-full  px-4">
            <p className="font-semibold  text-zinc-200 text-[1.15rem] ">
              Open your RazorpayX account.
            </p>
            <p className="text-[0.8rem] text-zinc-400 mb-4">
              Don't let bankache come in your growth. Apply for Razort pay
              account with few basic details.
            </p>
            <div className="flex  gap-2 mb-4">
              <ProgressBar percentage={40} />
              <ProgressBar percentage={0} />
              <ProgressBar percentage={0} />
              <ProgressBar percentage={0} />
            </div>
            <div className="flex items-center justify-between">
              <button className="px-2 py-1 bg-blue-500 text-white w-fit text-[0.8rem] rounded-sm">
                Start Application
              </button>
              <p className="text-zinc-400 text-[0.8rem]">0/4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card1;
