import React from "react";
import "./styles.css";
const Error = ({ errorMsg }: { errorMsg: string }) => {
  return (
    <div>
      <p className="error-text">{errorMsg}</p>
    </div>
  );
};

export default Error;
