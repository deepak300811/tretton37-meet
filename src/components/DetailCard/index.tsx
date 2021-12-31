import React from "react";
import IEmployee from "../../types/Employee";
import "./styles.css";

const DerailCard = ({ employee }: { employee: IEmployee }) => {
  return (
    <>
      <div className="card-container p-1">
        <section
          className="img-section"
          style={{
            background: `url(${
              employee.imagePortraitUrl ||
              employee.imageWallOfLeetUrl ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
            }) no-repeat center 20% / cover`,
          }}
        ></section>
        <section className="detail-section mt-1">
          <p>{employee.name}</p>
          <p>Office: {employee.office}</p>
        </section>
      </div>
    </>
  );
};

export default DerailCard;
