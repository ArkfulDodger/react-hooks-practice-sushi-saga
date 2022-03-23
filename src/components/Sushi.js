import React from "react";

function Sushi({ sushi, sushi: { name, img_url, price, created_at, eaten }, addEatenSushi }) {

  return (
    <div className="sushi">
      <div className="plate" onClick={() => addEatenSushi(sushi)}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
