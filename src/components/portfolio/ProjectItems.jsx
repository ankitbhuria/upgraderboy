import React from 'react'

function ProjectItems({item}) {
  return (
    <>
      <div className="project__card" key={item.id}>
        <img src={item.image} alt="Project" className="project__img" />

        <h3 className="project__title">{item.title}</h3>
        <div className="project__link">
          {item.demo ? <a href={item.demo ? item.demo : "#"} className="project__button">
            Demo{" "}
            <i className="bx bx-sm bxl-google-cloud project__button-icon"></i>
          </a> : ""}
          {item.github ? <a href={item.github ? item.github : "#"} className="project__button">
            Code <i className="bx bx-sm bxl-github project__button-icon"></i>
          </a> : ""}
          {item.buy ? <a href={item.buy ? item.buy : "#"} className="project__button">
            Code <i className="bx bx-sm bxs-coffee-togo project__button-icon"></i>
          </a> : ""}
        </div>
      </div>
    </>
  );
}

export default ProjectItems;
