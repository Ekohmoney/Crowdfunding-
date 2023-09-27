import React from "react";
import useCampaign from "../hooks/useCampaign";
import Image from "../assets/crowd.png";
import { shortenAccount } from "../utils";

const ListCampaign = () => {
  const campaigns = useCampaign();
  return (
    <>
      <h1 className="text-7xl text-blue-500 text-center font-bold underline mb-8">
        CrowdFunding
      </h1>
      <div className="grid grid-cols-3 gap-5 max-w-[80%] mx-auto">
        {campaigns.map((item, index) => (
          <div
            key={index}
            className="border-2 border-blue-500 group py-5 px-5 hover:bg-blue-500 hover:text-white"
          >
            <div className="w-full mx-auto">
              <img src={Image} className="w-full" />
            </div>
            <div className="grid gap-y-3 mt-5">
              <h1 className="text-5xl font-bold">
                Campaign: <br />
                <span className="text-blue-500 group-hover:text-black text-4xl">{item[0]}</span>
              </h1>
              <p className="text-2xl font-semibold">
                Owner: <br />
                <span className="text-blue-500 group-hover:text-black">{shortenAccount(item[2])}</span>
              </p>
              <p className="text-2xl font-semibold">
                Goal: <span className="text-blue-500 group-hover:text-black">{item[1].toString()}</span>{" "}
                ETH
              </p>
              <p className="text-2xl font-semibold">
                Duration:{" "}
                <span className="text-blue-500 group-hover:text-black">{item[3].toString()}</span>{" "}
                seconds
              </p>
              <p className="text-2xl font-semibold">
                Active:{" "}
                <span className="text-blue-500 group-hover:text-black">{item[4] ? "Yes" : "No"}</span>
              </p>
              <p className="text-2xl font-semibold">
                Funds:{" "}
                <span className="text-blue-500 group-hover:text-black">{item[5].toString()} </span>ETH
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListCampaign;
