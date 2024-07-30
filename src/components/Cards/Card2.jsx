import { IoIosCheckmark } from "react-icons/io";

const Card2 = () => {
  return (
    <>
      {" "}
      <section className="bg-primaryColor h-[150px] w-full mt-7 font-Popins flex flex-col justify-start p-4 relative">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-green-800" />
        <div className="flex items-start md:gap-20 gap-8 space-x-4">
          <p className="text-zinc-200 text-lg font-semibold">
            Amazon Instant <br /> Settlements
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-30" />
                <div className="absolute inset-1 bg-blue-700 rounded-full" />
              </div>
              <p className="text-zinc-200 text-[0.84rem] text-left">
                Let's get you started
              </p>
            </div>
            <div className="flex flex-col gap-1 pl-7">
              <p className="text-[0.74rem] text-zinc-200">
                Complete your application and get instant access to your Amazon
                payouts
              </p>
              <button className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white w-fit text-[0.8rem] rounded-sm">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primaryColor h-[150px] w-full font-Poppins flex flex-col justify-start p-4 relative">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-green-800" />
        <div className="flex items-start gap-14 relative">
          <p className="text-zinc-200 text-lg font-semibold min-w-[200px]">
            Creating payouts <br /> in Live mode
          </p>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center gap-2 relative">
              <div className=" w-fit h-fit rounded-full bg-[#304868]">
                <span className="text-[#86cf69] text-[20px] opacity-100">
                  <IoIosCheckmark />
                </span>
              </div>
              <div className="text-zinc-400 w-full">
                <p className="text-[0.84rem]">
                  <span className="font-semibold">Add Balance</span> to create
                  payout in Live mode
                </p>
                <div className="h-[1px] bg-zinc-500 w-full"></div>
              </div>
              <div className="absolute left-2 top-7 bottom-7 w-[2px] bg-zinc-500"></div>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <div className="relative w-5 h-5">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-30" />
                <div className="absolute inset-1 bg-blue-700 rounded-full" />
              </div>
              <div>
                <p className="text-zinc-200 text-sm font-semibold text-left">
                  Create payment
                </p>
                <p className="text-[0.8rem] text-zinc-200 ">
                  There are multiple ways where you can create your first
                  payout:
                </p>
                <div className="flex gap-2 mt-2">
                  <button className="px-2 py-1 font-Popins text-[0.8rem] bg-blue-600 hover:bg-blue-700 text-white w-fit  rounded-sm">
                    MAKE A PAYOUT
                  </button>
                  <button className="px-2 py-1 font-Popins text-[0.8rem] bg-[#2e353f] text-white w-fit  rounded-sm">
                    SHOW APPS FOR ME
                  </button>
                  <button className="px-2 py-1 font-Popins text-[0.8rem] bg-[#2e353f] text-white w-fit  rounded-sm">
                    API PAYMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Card2;
