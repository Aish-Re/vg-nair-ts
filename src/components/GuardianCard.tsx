import { useState } from "react";

type GuardianCardProps = {
  name : string;
  position : string;
  about : string
};

function GuardianCard (props : GuardianCardProps) {
  const[isExpanded, setIsExpanded]=useState(false)
  return (
    <div className="guardiancard">
      <h2>{props.name}</h2>
      <p className="position">{props.position}</p>
      <p className={`about ${isExpanded ? "expanded" : "not-expanded"}`}>
        {props.about}
      </p>

      <span className="read-more"
      onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : " Read More"}
      </span>

    </div>
  )
}

export default GuardianCard;