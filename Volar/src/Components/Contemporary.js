import React, { useRef, useState } from "react";
import useDraggableScroll from "use-draggable-scroll";
import classes from "./Contemporary.module.css";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Contemporary = () => {
  const conList = useRef();
  const { onMouseDown } = useDraggableScroll(conList, {
    direction: "horizontal",
  });

  const [isSnapping, setIsSnapping] = useState(false);
  let timer;
  const activateSnappingBriefly = () => {
    if (timer) clearTimeout(timer);
    setIsSnapping(true);
    timer = setTimeout(() => {
      setIsSnapping(false);
    }, 10);
  };

  const prevTempPath = ["Home", "Shows"];
  const currentDestination = "Rooms";
  const pathRender = prevTempPath.map((item) => (
    <a className={`tracking-wider`} href={`/${item}`}>
      {item} /{" "}
    </a>
  ));

  const tempData = [
    {
      image_url:
        "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcmVtaXhwcm9qZWN0NC1mb24tcGxveS0wNF8xLmpwZw.jpg",
      title: "Vibrant Blue",
    },
    {
      image_url:
        "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcC00NjctdGQtMTUxNDMtMDEuanBn.jpg",
      title: "Neat Navy Blue",
    },
    {
      image_url:
        "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcC00NjUtcGEtMTc4OC0wM2EtbW9ja3VwLmpwZw.jpg",
      title: "Minimal Light Green",
    },
    {
      image_url:
        "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yNTAtYWUtMDNiLmpwZw.jpg",
      title: "Unique Jade Green",
    },
    {
      image_url:
        "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MTctZTA4LW1vY2t1cC5qcGc.jpg",
      title: "Classic Mono Duo",
    },
    {
      image_url:
        "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcC00NjctdGQtMTUxNDMtMDQtbW9ja3VwXzEuanBn.jpg",
      title: "Cyan Beauty",
    },
    {
      image_url:
        "https://img.freepik.com/free-psd/interior-modern-living-room-wall-mockup_354781-229.jpg?w=1380&t=st=1659291639~exp=1659292239~hmac=4cf0b9069f14facb8fcceff38e94ba50e958beb0c06201302edba1964ce375a9",
      title: "Fancy Comfort",
    },
  ];

  const dataRender = tempData.map((item) => (
    <div className={`${classes.listItem} h-5/6 `}>
      <img src={item.image_url} />
      <h2>{item.title}</h2>
    </div>
  ));

  return (
    <div
      className={`${classes.conMainBody} h-60 xl:h-64 lg:w-9/12 w-11/12 mt-5 m-auto flex flex-col justify-start relative`}
    >
      <span
        className={`${classes.conTempPath} absolute -top-3 left-0 text-xs text-gray-500 tracking-wide`}
      >
        {pathRender}
        {currentDestination}
      </span>
      <h1 className="title">Discover Contemporary Items</h1>
      <div
        ref={conList}
        onMouseDown={onMouseDown}
        className={`${classes.conList} pl-7 pr-7 h-full flex items-center gap-x-7 overflow-x-scroll`}
      >
        {dataRender}
      </div>
    </div>
  );
};

export default Contemporary;
