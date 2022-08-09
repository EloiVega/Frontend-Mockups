import React from "react";

const Card = (props) => {
  const type = props.cardType;
  const cardRender = (
    <div
      className={`w-full h-48 sm:80 lg:h-M1 shadow-md flex flex-col items-center gap-y-4`}
    >
        <img className = {`w-full h-4/6`} src = {props.image_path} alt = {props.image_alt}/>
        <div className = {`w-11/12 grow flex flex-col`}>
            <h2 className = {`font-bold`}>{props.title}</h2>
            <div className = {`text-gray-400 text-sm hidden lg:block`}>
              <h3>{props.price}$</h3>
              <p>{props.author}</p>
            </div>
        </div>
    </div>
  );

  return cardRender;
};

export default Card;
