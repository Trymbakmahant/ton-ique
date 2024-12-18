"use client";

import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ChevronsLeft } from "lucide-react";

type FirstPageProps = {
  forwardTab: () => void;
  backTab: () => void;
};

const SecondPage: React.FC<FirstPageProps> = ({ forwardTab, backTab }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white px-6 py-8">
      {/* Progress Indicator */}
      <ChevronsLeft
        size={32}
        color="gray"
        onClick={() => backTab()}
        className="cursor-pointer absolute  border-2 border-gray-300  rounded-full top-4 left-4"
      />
      <div className="text-gray-400 text-lg font-medium">2/3</div>

      {/* Icon and Title */}
      <div className="flex flex-col items-center ">
        <Image
          src="/images/secondpage.png" // Replace with actual image path
          alt="Location"
          width={150}
          height={100}
        />

        <h1 className="text-2xl font-bold text-gray-800">Where</h1>
      </div>

      {/* Card Section */}
      <div className="w-full max-w-md bg-gray-50 shadow-md  flex items-center  flex-col rounded-xl p-6 space-y-4">
        <div className="w-full">
          <h2 className="text-lg font-semibold text-gray-800">Hotel Marriot</h2>
          <p className="text-sm text-gray-500">Borewell Rd, Whitefield</p>
        </div>
        <Image
          src="/images/marriote.png" // Replace with actual hotel image path
          alt="Hotel Marriot"
          className="rounded-lg"
          width={400}
          height={200}
        />
        <p className="text-sm text-gray-700 italic">
          &quot;Great first impression, plenty of options to make your date
          extra special.&quot;
        </p>
        <div className="w-[80%] flex justify-around">
          <Dialog>
            <DialogTrigger>
              <CiLocationOn size={20} />{" "}
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <IoMenuOutline size={20} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <div className="flex flex-col  gap-2 py-5 items-center">
                  <div className="flex w-[80%] justify-between">
                    {" "}
                    <span className="text-xl text-gray-400">Option</span>
                    <span className="text-xl text-gray-400">Price</span>
                  </div>
                  <Separator className="w-[80%]" />
                  <div className="flex w-[80%] justify-between">
                    <span>Candle Light Dinner</span>
                    <span>$ 1,00,000</span>
                  </div>
                  <div className="flex w-[80%] justify-between">
                    <span>Candle Light Dinner</span>
                    <span>$ 1,00,000</span>
                  </div>
                  <div className="flex w-[80%] justify-between">
                    <span>Candle Light Dinner</span>
                    <span>$ 1,00,000</span>
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <FaRegHeart size={20} />
            </DialogTrigger>
            <DialogContent className="w-fit px-6">
              <div className="w-full  flex h-full flex-col items-center justify-center">
                <div className="rounded-full border-[1px] w-10 h-10  flex items-center justify-center">
                  <IoMdHeart color="#BE0D0D" size={30} />
                </div>

                <div> Added to favorites successfully !</div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Yes/No Buttons */}
      <div className="w-full max-w-md flex justify-between items-center space-x-4 mt-6">
        <button className="w-1/2 py-3 rounded-full border border-gray-400 text-gray-700 font-medium hover:bg-gray-100">
          No
        </button>
        <button
          onClick={() => forwardTab()}
          className="w-1/2 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800"
        >
          Yes
        </button>
      </div>
    </div>
  );
};
export default SecondPage;
