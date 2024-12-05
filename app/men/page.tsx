"use client";

import React, { useState } from "react";
import FirstPage from "./first";
import SecondPage from "./second";
import Thirdpage from "./third";
import BookTablePage from "./booktable";
import LastPage from "./last";
const First = () => {
  const [tab, setTab] = useState<
    "first" | "second" | "third" | "last" | "book"
  >("first");
  const HandleFirstPage = () => {};
  const HandleSecond = () => {};
  const HandleThird = () => {};
  const HandleBook = () => {};
  const HandleLast = () => {};
  return (
    <div>
      {tab == "first" && <FirstPage />}
      {tab == "second" && <SecondPage />}
      {tab == "third" && <Thirdpage />}
      {tab == "book" && <LastPage />}
      {tab == "last" && <BookTablePage />}

      <div className="flex gap-6 flex-col">
        {" "}
        <button
          onClick={() => {
            setTab("second");
          }}
        >
          second
        </button>
        <button
          onClick={() => {
            setTab("third");
          }}
        >
          third
        </button>
        <button
          onClick={() => {
            setTab("first");
          }}
        >
          first
        </button>
        <button
          onClick={() => {
            setTab("last");
          }}
        >
          last
        </button>
      </div>
    </div>
  );
};

export default First;
