import React from "react";
import RecyclingRoundedIcon from "@mui/icons-material/RecyclingRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

const Promotion = () => {
  return (
    <div className="m-0 product_section">
      <div className="d-flex justify-content-evenly">
        <div className="prom_txt">
          <RecyclingRoundedIcon style={{ fontSize: "54px" }} />
          <p className="mb-0 mt-2">Easy Exchange</p>
        </div>
        <div className="prom_txt">
          <VolunteerActivismRoundedIcon style={{ fontSize: "54px" }} />
          <p className="mb-0 mt-2">100% Handpicked</p>
        </div>
        <div className="prom_txt">
          <VerifiedRoundedIcon style={{ fontSize: "54px" }} />
          <p className="mb-0 mt-2">Assured Quality</p>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
