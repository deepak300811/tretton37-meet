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
          <div className="detail-fields">
            <p>{employee.name}</p>
            <p>Office: {employee.office}</p>
          </div>
          <div className="socials">
            {employee.linkedIn && (
              <a
                className="mr-point-4"
                href={`https://www.linkedin.com/${employee.linkedIn}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fab fa-linkedin "></i>
              </a>
            )}
            {employee.gitHub && (
              <a
                className="mr-point-4"
                href={`https://github.com/${employee.gitHub}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fab fa-github "></i>
              </a>
            )}
            {employee.twitter && (
              <a
                href={`https://twitter.com/${employee.twitter}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fab fa-twitter-square "></i>
              </a>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default DerailCard;
