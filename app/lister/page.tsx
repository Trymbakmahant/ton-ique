"use client";

import React, { useState } from "react";
import { FirstPage } from "./first";
import SecondPage from "./second";
import Thirdpage from "./third";
import BookTablePage from "./booktable";
import LastPage from "./last";
import BackButton from "@/components/backbutton";
const First = () => {
  const [tab, setTab] = useState<number>(1);

  function updateTab(tab: number) {
    setTab(tab);
  }
  return (
    <div>
      {tab == 1 && <FirstPage updateTab={updateTab} />}
      {tab == 2 && <SecondPage updateTab={updateTab} />}
      {tab == 3 && <Thirdpage />}
      {tab == 4 && <LastPage />}
      {tab == 5 && <BookTablePage />}

      <div className="flex gap-6   flex-col">
        {tab != 1 ? (
          <button
            onClick={() => {
              setTab(1);
            }}
          >
            first
          </button>
        ) : (
          <BackButton />
        )}
      </div>
    </div>
  );
};

export default First;
