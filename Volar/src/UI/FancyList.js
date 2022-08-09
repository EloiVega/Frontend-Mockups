import React, { useState } from "react";
import Card from "./Card";
import classes from "./FancyList.module.css";

const FancyList = () => {
  const [highlightedImage, setHighlightedImage] = useState({
    id: 1,
    image_path:
      "https://img.freepik.com/free-psd/interior-living-room-wall-mockup_354781-202.jpg?w=1380&t=st=1659390572~exp=1659391172~hmac=572cde05d4d7bebefd37cf63ddc5617785be2e3ad61c20e8a1bb20b244329173",
    title: "Cozy Brown Special Set",
    description: "The perfect set for you mental satisfaction and your comfort",
    cols: 2,
    rows: 1,
  });

  const variableList = [
    {
      id: 1,
      image_path:
        "https://img.freepik.com/free-psd/interior-living-room-wall-mockup_354781-202.jpg?w=1380&t=st=1659390572~exp=1659391172~hmac=572cde05d4d7bebefd37cf63ddc5617785be2e3ad61c20e8a1bb20b244329173",
      title: "Cozy Brown Special Set",
      price: 15000,
      author: "Browny Browns",
    },
    {
      id: 2,
      image_path:
        "https://img.freepik.com/free-photo/living-room-wall-mockup-with-green-velvet-armchair-blank-white-interior-background_41470-4735.jpg?w=1480&t=st=1659920619~exp=1659921219~hmac=11d9f3287e8021fd2d222150d0eff354d9e69273a8c33035167ac100d1f59ed2",
      title: "Perfect room Reading set",
      price: 5000,
      author: "vantinaj",
    },
    {
      id: 3,
      image_path:
        "https://img.freepik.com/free-photo/green-sofa-with-table-green-wall-wooden-flooring_41470-4689.jpg?w=1060&t=st=1659920895~exp=1659921495~hmac=a0eed129e540a2428ee754a65fa51f8d308b22a1e147ba5fb2769d25dd3f600e",
      title: "Breezy green living",
      price: 6500,
      author: "vantinaj",
    },
    {
      id: 4,
      image_path:
        "https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-58445.jpg?w=1380&t=st=1659920941~exp=1659921541~hmac=8e6ee8c2558dc917cc63f0b29da8beee3d2fb525bf28d0d28ef699c1dd4c314c",
      title: "The Fancy English",
      price: 10500,
      author: "wirestock",
    },
    {
      id: 5,
      image_path:
        "https://img.freepik.com/free-photo/luxury-kitchen-corner-design-with-dark-blue-wall_41470-4887.jpg?w=1480&t=st=1659921000~exp=1659921600~hmac=2d134810f1ed1014871739da584031f7f2c51cf7599f02f085769d570f65c838",
      title: "Navy Kitchen",
      price: 9000,
      author: "vantinaj",
    },
    {
      id: 6,
      image_path:
        "https://img.freepik.com/free-photo/green-sofa-with-table-green-wall-wooden-flooring_41470-4689.jpg?w=1060&t=st=1659920895~exp=1659921495~hmac=a0eed129e540a2428ee754a65fa51f8d308b22a1e147ba5fb2769d25dd3f600e",
      title: "Breezy green living",
      price: 6500,
      author: "vantinaj",
    },
    {
      id: 7,
      image_path:
        "https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-58445.jpg?w=1380&t=st=1659920941~exp=1659921541~hmac=8e6ee8c2558dc917cc63f0b29da8beee3d2fb525bf28d0d28ef699c1dd4c314c",
      title: "The Fancy English",
      price: 10500,
      author: "wirestock",
    },
    {
      id: 8,
      image_path:
        "https://img.freepik.com/free-photo/luxury-kitchen-corner-design-with-dark-blue-wall_41470-4887.jpg?w=1480&t=st=1659921000~exp=1659921600~hmac=2d134810f1ed1014871739da584031f7f2c51cf7599f02f085769d570f65c838",
      title: "Navy Kitchen",
      price: 9000,
      author: "vantinaj",
    },
    {
      id: 9,
      image_path:
        "https://img.freepik.com/free-psd/interior-living-room-wall-mockup_354781-202.jpg?w=1380&t=st=1659390572~exp=1659391172~hmac=572cde05d4d7bebefd37cf63ddc5617785be2e3ad61c20e8a1bb20b244329173",
      title: "Cozy Brown Special Set",
      price: 15000,
      author: "Browny Browns",
    },
    {
      id: 10,
      image_path:
        "https://img.freepik.com/free-photo/living-room-wall-mockup-with-green-velvet-armchair-blank-white-interior-background_41470-4735.jpg?w=1480&t=st=1659920619~exp=1659921219~hmac=11d9f3287e8021fd2d222150d0eff354d9e69273a8c33035167ac100d1f59ed2",
      title: "Perfect room Reading set",
      price: 5000,
      author: "vantinaj",
    },
    {
      id: 11,
      image_path:
        "https://img.freepik.com/free-photo/green-sofa-with-table-green-wall-wooden-flooring_41470-4689.jpg?w=1060&t=st=1659920895~exp=1659921495~hmac=a0eed129e540a2428ee754a65fa51f8d308b22a1e147ba5fb2769d25dd3f600e",
      title: "Breezy green living",
      price: 6500,
      author: "vantinaj",
    },
    {
      id: 12,
      image_path:
        "https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-58445.jpg?w=1380&t=st=1659920941~exp=1659921541~hmac=8e6ee8c2558dc917cc63f0b29da8beee3d2fb525bf28d0d28ef699c1dd4c314c",
      title: "The Fancy English",
      price: 10500,
      author: "wirestock",
    },
    {
      id: 13,
      image_path:
        "https://img.freepik.com/free-photo/luxury-kitchen-corner-design-with-dark-blue-wall_41470-4887.jpg?w=1480&t=st=1659921000~exp=1659921600~hmac=2d134810f1ed1014871739da584031f7f2c51cf7599f02f085769d570f65c838",
      title: "Navy Kitchen",
      price: 9000,
      author: "vantinaj",
    },
    {
      id: 14,
      image_path:
        "https://img.freepik.com/free-photo/green-sofa-with-table-green-wall-wooden-flooring_41470-4689.jpg?w=1060&t=st=1659920895~exp=1659921495~hmac=a0eed129e540a2428ee754a65fa51f8d308b22a1e147ba5fb2769d25dd3f600e",
      title: "Breezy green living",
      price: 6500,
      author: "vantinaj",
    },
    {
      id: 15,
      image_path:
        "https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-58445.jpg?w=1380&t=st=1659920941~exp=1659921541~hmac=8e6ee8c2558dc917cc63f0b29da8beee3d2fb525bf28d0d28ef699c1dd4c314c",
      title: "The Fancy English",
      price: 10500,
      author: "wirestock",
    },
    {
      id: 16,
      image_path:
        "https://img.freepik.com/free-photo/luxury-kitchen-corner-design-with-dark-blue-wall_41470-4887.jpg?w=1480&t=st=1659921000~exp=1659921600~hmac=2d134810f1ed1014871739da584031f7f2c51cf7599f02f085769d570f65c838",
      title: "Navy Kitchen",
      price: 9000,
      author: "vantinaj",
    },
  ];

  const renderedHighlightedImage = (
    <div
      className={`hidden w-9/12 mb-10 justify-evenly self-center rounded-2xl pr-3 pl-3 ${classes.highlighted} xl:h-80 lg:flex flex-col xl:flex-row justify-center items-center gap-x-5 shadow-lg shadow-neutral-300 relative`}
    >
      <div
        className={`h-4/6 xl:h-5/6 xl:w-7/12 flex xl:justify-center ${classes.lgSmallMarginRight}`}
      >
        <img className={`w-auto h-full`} src={highlightedImage.image_path} />
      </div>
      <div
        className={`w-full xl:w-4/12 flex flex-col justify-start items-start gap-y-1 self-start xl:translate-y-1/2`}
      >
        <h2 className={`font-bold text-xl tracking-wider `}>
          {highlightedImage.title}
        </h2>
        <p className={`w-8/12 text-ellipsis`}>{highlightedImage.description}</p>
      </div>
    </div>
  );

  const renderedFancyList = variableList.map((item) => (
    <Card
      key={item.id}
      image_path={item.image_path}
      image_alt={item.title}
      title={item.title}
      price={item.price}
      author={item.author}
    />
  ));

  return (
    <div className={`grow flex flex-col`}>
      {/* Highlighted Image */}
      {renderedHighlightedImage}

      {/* Variable Size List of Images */}
      <div
        className={`w-95/100 self-center mt-10 mb-10 grid grid-cols-2 xl:grid-cols-auto 2xl:grid-cols-4 gap-x-5 gap-y-5 justify-center items-center grid-flow-row`}
      >
        {renderedFancyList}
      </div>
    </div>
  );
};

export default FancyList;
