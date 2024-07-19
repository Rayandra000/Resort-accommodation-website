import React, { useState } from "react";
import Dcards from "./Dcards";
import "../gallery/Gallery.css";
import "./Destinations.css";
import Sdata from "./Sdata";

const Allitem = () => {
  const [items, setItems] = useState(Sdata);
  return (
    <>
      <section className="gallery desi mtop">
        <div className="container">
          <div className="content grid">
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Allitem;
