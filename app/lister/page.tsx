"use client";

import React, { useState } from "react";
import { FirstPage } from "./first";
import SecondPage from "./second";
import Thirdpage from "./third";
import BookTablePage from "./booktable";
import LastPage from "./last";

const First = () => {
  const [tab, setTab] = useState<number>(1);

  function forwardTab() {
    setTab((prev) => prev + 1);
  }
  function backTab() {
    setTab((prev) => prev - 1);
  }
  return (
    <div>
      {tab == 1 && <FirstPage forwardTab={forwardTab} />}
      {tab == 2 && <SecondPage forwardTab={forwardTab} backTab={backTab} />}
      {tab == 3 && <Thirdpage forwardTab={forwardTab} backTab={backTab} />}
      {tab == 5 && <LastPage />}
      {tab == 4 && <BookTablePage backTab={backTab} forwardTab={forwardTab} />}
    </div>
  );
};

export default First;
