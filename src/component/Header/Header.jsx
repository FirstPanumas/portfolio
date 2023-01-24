import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectedList } from "../../store/ListSlice";
export const Header = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.list);
  

  //console.log(list);
  const ref = useRef(null);
  const handelClick = () => {
    dispatch(selectedList(list + 1));
    // ref.current?.scrollIntoView({ behavior: "smooth" });
    //console.log(`Form Header : ${props}`);
  };


  return (
    <div style={{ height: "100vh"}}>
      <h1>Header</h1>
      <ul>
        <li>
          <button onClick={handelClick}> Click it !!</button>
        </li>
      </ul>
    </div>
  );
};
