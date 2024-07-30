import React from "react";
import Chart from "../Chart";
import { MdArrowForward } from "react-icons/md";


const Card3 = () => {
  return (
    <div className="mt-7 flex gap-1 flex-col">
      <div className="flex gap-1 justify-end">
        <p className="text-[0.8rem] text-blue-500 text-right">
          Detailed Insight
        </p>
        <MdArrowForward color="#3b82f6" />
      </div>
      <section className="bg-primaryColor h-fit w-full font-Popins flex flex-col justify-between">
        <div className="p-4">
          <p className="text-[0.8rem] text-zinc-400">
            Payout volume: last 30 days
          </p>
          <p className="text-[0.8rem] text-zinc-400">
            ₹
            <span className="text-sm text-zinc-200 font-semibold">238,895</span>
            .00
          </p>
        </div>
        <div className="flex-1">
          <Chart />
        </div>
        <div className="h-2 bg-[#192d37] w-full mt-[-1px]"></div>
      </section>
    </div>
  );
};

export default Card3;
