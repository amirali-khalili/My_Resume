import React from "react";

function SkillCard({ title }) {
  return (
    <div className="inline-flex items-center justify-center px-4 py-2 leading-none border border-primary rounded-3xl">
      {title}
    </div>
  );
}

export default SkillCard;
