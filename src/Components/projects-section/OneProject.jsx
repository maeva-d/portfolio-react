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
  feature6,
  projectURL,
}) => {
  return (
    <article className="one-project">
      <LazyLoadImage src={img} alt={alt} />
      <div>
        <ul>
          <h4>{title}</h4>
          <h5>{stack}</h5>
          <li>{feature1}</li>
          <li>{feature2}</li>
          <li>{feature3}</li>
          <li>{feature4}</li>
          <li>{feature5}</li>
          <li>{feature6}</li>
        </ul>
        {stack !== "EN COURS ..." && (
          <CTAButton
            text={"Découvrir"}
            className="button"
            onClick={() => {
              window.open(projectURL, "_blank");
            }}
          ></CTAButton>
        )}
      </div>
    </article>
  );
};

export default OneProject;
