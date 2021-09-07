import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";
import Band from "./Band";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);
  const band= bands.map((band)=><Band key={band} band={band} />);

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>
        <li>{band}</li>
      </ul>
    </div>
  );
}

export default BandsContainer;
