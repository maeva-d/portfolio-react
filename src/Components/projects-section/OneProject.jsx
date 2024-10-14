import { LazyLoadImage } from "react-lazy-load-image-component";
import CTAButton from "../CTA-button/CTAButton";
import "./one-project.scss";

const OneProject = ({
  img,
  alt,
  title,
  stack,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  projectURL,
}) => {
  //   const redirectToProject = (url) => {
  //     window.open(url, "_blank");
  //   };

  return (
    <article className="one-project">
      <LazyLoadImage
        src={img}
        alt={alt}
        // onMouseEnter={() => {
        //   if (window.innerWidth > 640) setShowDescTripAdvisor(true);
        // }}
      />
      {/* {showDescTripAdvisor ||
    (window.innerWidth < 640 && ( */}
      <div
      // className="description"
      // onMouseLeave={() => {
      //   if (window.innerWidth > 640) setShowDescTripAdvisor(false);
      // }}
      >
        <ul>
          <h4>{title}</h4>
          <h5>{stack}</h5>
          <li>{feature1}</li>
          <li>{feature2}</li>
          <li>{feature3}</li>
          <li>{feature4}</li>
          <li>{feature5}</li>
        </ul>
        <CTAButton
          text={"Découvrir"}
          className="button"
          onClick={() => {
            window.open(projectURL, "_blank");
          }}
        ></CTAButton>
      </div>
      {/* ))} */}
    </article>
  );
};

export default OneProject;
