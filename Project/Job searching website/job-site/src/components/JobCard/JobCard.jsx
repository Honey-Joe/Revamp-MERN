import DummyData from "../API/DummyData";
import { Banknote, Calendar } from "lucide-react";
const JobCard = (props) => {
  return (
    <>
      <div className=" border rounded-md shadow-lg p-5 border-gray-400 w-[100%]">
        <div className="flex gap-2 items-center">
          <img
            src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/64181631284a60412bd7feb8/logo.jpg?d=1718010333402"
            alt="company logo"
            className="h-10 rounded-full"
          />
          <div>
            <p className="font-['DM Sans'] text-lg font-semibold">
              {props.jobTitle}{" "}
            </p>
            <p className="font-['DM Sans'] text-[16px] font-normal text-gray-500">
              {props.companyName}
            </p>
          </div>
        </div>

        <div className="flex p-4 space-x-2">
          <p className="bg-[#F7F8FA] px-4 py-1 rounded-lg text-[#566474] font-['DM Sans']">
            {props.tags1}
          </p>
          <p className="bg-[#F7F8FA] px-4 py-1 rounded-lg text-[#566474] font-['DM Sans']">
            {props.tags2}
          </p>
          <p className="bg-[#F7F8FA] px-4 py-1 rounded-lg text-[#566474] font-['DM Sans']">
            {props.tags3}
          </p>
          <p className="bg-[#F7F8FA] px-4 py-1 rounded-lg text-[#566474] font-['DM Sans']">
            {props.tags4}
          </p>
          <p className="bg-[#F7F8FA] px-4 py-1 rounded-lg text-[#566474] font-['DM Sans']">
            {props.tags5}
          </p>
          <p className="bg-[#F7F8FA] px-4 py-1 rounded-lg text-[#566474] font-['DM Sans']">
            {props.tags6}
          </p>
        </div>

        <div className="flex justify-evenly">
          <div className="">
            <div className="flex gap-1 items-center">
              <Banknote className="text-[#9eaab7]" />{" "}
              <span className="text-[14px] text-[#9eaab7] font-['DM Sans']">
                Job offer
              </span>

            </div>

            <p className="text-[#566474] text-base font-['DM Snas'] font-bold">
              {props.offer}
            </p>
          </div>
          <div className="border border-gray-500" />
          <div>
            <div className="flex gap-1 items-center">
              <Calendar className="text-[#9eaab7]" />{" "}
              <span className="text-[14px] text-[#9eaab7] font-['DM Sans']">
                Start Date
              </span>
            </div>

            <p className="text-[#566474] text-base font-['DM Snas'] font-bold">
              {props.start}
            </p>
          </div>
          <div className="border border-gray-500" />
          <div className="">
            <div className="flex gap-1 items-center">
              <span className="text-[14px] text-[#9eaab7] font-['DM Sans']">
                #Openings
              </span>

            </div>

            <p className="text-[#566474] text-base font-['DM Snas'] font-bold">
              {props.open}
            </p>
          </div>
          <div className="border border-gray-500" />
          <div className="">
            <div className="flex gap-1 items-center">
              <span className="text-[14px] text-[#9eaab7] font-['DM Sans']">
                Experience
              </span>

            </div>

            <p className="text-[#566474] text-base font-['DM Snas'] font-bold">
              {props.exp}
            </p>
          </div>
        </div>

        <p>{props.exp}</p>
      </div>
    </>
  );
};

export default JobCard;
