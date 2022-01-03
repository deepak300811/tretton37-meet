import React, { useEffect } from "react";
import { useRef } from "react";
import IEmployee from "../../types/Employee";
import "./styles.css";

const DerailCard = ({
  employee,
  isListView,
}: {
  employee: IEmployee;
  isListView: boolean;
}) => {
  const empTempText = employee.mainText;
  const empMainText = useRef(null);
  useEffect(() => {
    const temp = empMainText.current;
    temp.innerHTML = empTempText;
  }, []);
  return (
    <>
      <div className={`card-container p-point-5 ${isListView ? "list" : ""}`}>
        <section
          className="img-section"
          style={{
            background: `url(${
              employee.imagePortraitUrl ||
              employee.imageWallOfLeetUrl ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
            }) no-repeat center 30% / cover`,
          }}
        ></section>
        <section className="detail-section mt-1 ">
          <div className="detail-fields mb-point-5">
            <div className="mb-point-5">
              <p className="employee-name">
                {" "}
                <strong> {employee.name}</strong>
              </p>{" "}
            </div>
            <div className="mb-point-5">
              <p>
                <strong>Office:</strong> {employee.office}
              </p>
            </div>
            <div className={`list-${isListView ? "show" : "hide"} mb-point-5`}>
              <p>
                <strong>Email:</strong> {employee.email}
              </p>
            </div>
            <div className={`list-${isListView ? "show" : "hide"} mb-point-5`}>
              <p className="mb-point-2">
                {" "}
                <strong> About:</strong>
              </p>{" "}
              <p ref={empMainText}></p>
            </div>
            <div className={`list-${isListView ? "show" : "hide"} mb-point-5`}>
              <p>
                <strong>Manager:</strong> {employee.manager}
              </p>
            </div>
            <div className={`list-${isListView ? "show" : "hide"}`}>
              <p>
                <strong> Phone:</strong> {employee.phoneNumber}
              </p>
            </div>
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
