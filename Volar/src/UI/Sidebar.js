import React, { useRef, useState } from "react";
import classes from "./Sidebar.module.css";
import { FiSearch } from "react-icons/fi";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SideBar = () => {
  const [updatingSearchTopics, setUpdatingSearchTopics] = useState([
    "Rooms",
    "Sofas",
  ]);

  const searchRef = useRef();
  const priceMinRef = useRef();
  const priceMaxRef = useRef();
  const [priceMin, setPriceMin] = React.useState("0");
  const [priceMax, setPriceMax] = React.useState("300000");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const sliderControl = (sliderID) => {
    switch (sliderID) {
      case "slider1":
        setPriceMin(priceMinRef.current.value);
        break;
      case "slider2":
        setPriceMax(priceMaxRef.current.value);
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const searchTopics = [...updatingSearchTopics];

    searchTopics.push(searchRef.current.value);
    setUpdatingSearchTopics(searchTopics);

    searchRef.current.value = "";

    console.log(updatingSearchTopics);
  };

  const removeItemFromList = (item) => {
    const searchTopics = [...updatingSearchTopics];

    const index = searchTopics.indexOf(item);
    if (index > -1) searchTopics.splice(index, 1);

    setUpdatingSearchTopics(searchTopics);
  };

  const searchTopicsRender = updatingSearchTopics.map((item) => (
    <span
      className={`w-11/12 m-auto h-7 rounded-full bg-gray-500 flex justify-center items-center text-white font-bold tracking-wider cursor-pointer`}
      onClick={() => {
        removeItemFromList(item);
      }}
    >
      {item}
    </span>
  ));

  return (
    <div
      className={`${classes.sideMainBody} xl:w-1/6 lg:w-3/12 h-full hidden lg:flex flex-col justify-center gap-y-3 pr-4 border-r-2 border-r-solid border-r-gray-300`}
    >
      <div className={`${classes.sideSearch} w-11/12 m-auto h-8 relative`}>
        <form className={`w-full h-full relative`}>
          <input
            ref={searchRef}
            className={`w-full h-full outline-0 border border-solid border-gray-300 text-xs font-light pl-5 tracking-wide text-gray-500 hover:border-black`}
            placeholder="search for rooms"
          />
          <button
            className={`outline-0 border-0 bg-white cursor-pointer w-6 h-5/6 absolute top-1/2 right-0.5 -translate-y-1/2`}
            onClick={submitHandler}
            type="submit"
          >
            <FiSearch className={`${classes.searchIcon}`} />
          </button>
        </form>
      </div>
      <div
        className={`${classes.sideList} w-full flex items-center flex-col gap-y-2`}
      >
        {searchTopicsRender}
      </div>

      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ boxShadow: "none", "border-bottom-left-radius": "0px" }}
          className={`border-t border-t-solid border-t-gray-300 shadow-none`}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "80%", flexShrink: 0, fontWeight: "bold", fontSize: "14px" }}
            >
              Room Type
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={`flex flex-col gap-2`}>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="living"
                  id="living"
                />
                <label className={`cursor-pointer`} for="living">
                  Living Room
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="master"
                  id="master"
                />
                <label className={`cursor-pointer`} for="master">
                  Master bedroom
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="bedroom"
                  id="bedroom"
                />
                <label className={`cursor-pointer`} for="bedroom">
                  Bedroom
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="kitchen"
                  id="kitchen"
                />
                <label className={`cursor-pointer`} for="kitchen">
                  Kitchen
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="bathroom"
                  id="bathroom"
                />
                <label className={`cursor-pointer`} for="bathroom">
                  Bathroom
                </label>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ boxShadow: "none" }}
          className={`border-t border-t-solid border-t-gray-300 shadow-none`}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "80%", flexShrink: 0, fontWeight: "bold", fontSize: "14px" }}
            >
              Furniture Type
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={`flex flex-col gap-2`}>
              <div className={`flex gap-2`}>
                <input
                  name="furnitureType"
                  type="radio"
                  value="living"
                  id="fancy"
                />
                <label className={`cursor-pointer`} for="fancy">
                  Fancy
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="furnitureType"
                  type="radio"
                  value="master"
                  id="relaxing"
                />
                <label className={`cursor-pointer`} for="relaxing">
                  Relaxing
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="furnitureType"
                  type="radio"
                  value="bedroom"
                  id="both"
                  checked="checked"
                />
                <label className={`cursor-pointer`} for="both">
                  Both
                </label>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{ boxShadow: "none" }}
          className={`border-t border-t-solid border-t-gray-300 shadow-none`}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "80%", flexShrink: 0, fontWeight: "bold", fontSize: "14px" }}
            >
              Price
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={`flex `}>
              <div
                className={`flex flex-col w-1/2`}
                onMouseDown={() => sliderControl("slider1")}
              >
                <label for="pricemin" className={` font-bold text-sm`}>
                  {priceMin}
                </label>
                <input
                  onChange={() => sliderControl("slider1")}
                  id="pricemin"
                  type="range"
                  min="0"
                  max="150000"
                  value={priceMin}
                  ref={priceMinRef}
                />
              </div>
              <div className={`flex flex-col w-1/2`}>
                <label for="pricemax" className={`self-end font-bold text-sm`}>
                  {priceMax}
                </label>
                <input
                  onChange={() => sliderControl("slider2")}
                  id="pricemax"
                  type="range"
                  min="150000"
                  max="300000"
                  value={priceMax}
                  ref={priceMaxRef}
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{ boxShadow: "none", "border-bottom-left-radius": "0px" }}
          className={`border-t border-t-solid border-t-gray-300 shadow-none`}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "80%", flexShrink: 0, fontWeight: "bold", fontSize: "14px" }}
            >
              Origin
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={`flex flex-col gap-2`}>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="living"
                  id="country1"
                />
                <label className={`cursor-pointer`} for="country1">
                  Country1
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="master"
                  id="country2"
                />
                <label className={`cursor-pointer`} for="country2">
                  Country2
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="bedroom"
                  id="country3"
                />
                <label className={`cursor-pointer`} for="country3">
                  Country3
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="kitchen"
                  id="country4"
                />
                <label className={`cursor-pointer`} for="country4">
                  Country4
                </label>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          sx={{ boxShadow: "none", "border-bottom-left-radius": "0px" }}
          className={`border-t border-t-solid border-t-gray-300 shadow-none`}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "80%", flexShrink: 0, fontWeight: "bold", fontSize: "14px" }}
            >
              Creator
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={`flex flex-col gap-2`}>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="living"
                  id="creator1"
                />
                <label className={`cursor-pointer`} for="creator1">
                  Creator1
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="master"
                  id="creator2"
                />
                <label className={`cursor-pointer`} for="creator2">
                  Creator2
                </label>
              </div>
              <div className={`flex gap-2`}>
                <input
                  name="roomType"
                  type="checkbox"
                  value="bedroom"
                  id="creator3"
                />
                <label className={`cursor-pointer`} for="creator3">
                  Creator3
                </label>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default SideBar;
