import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Loader = ({ loading }) => {
  return (
    <div className={loading && "loader"}>
      <PulseLoader
        ariaLabel="triangle-loading"
        loading={loading}
        color="#fff"
        size={20}
        //timeout={1000} //3 secs
      />
    </div>
  );
};

export default Loader;
