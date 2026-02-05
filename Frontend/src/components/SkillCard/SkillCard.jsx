import React from "react";

function SkillCard({ title, desc, img }) {
  return (
    <div className="w-full h-48 py-9 pr-12.5 bg-skill-gradient-dark rounded-2xl border-t-4 border-t-gray-100 dark:border-t-[#213774] z-10">
      <div className="flex items-center gap-6.5">
        <img className="size-30" src={img} alt={`${title} logo`} />

        <div className="mt-2.5 max-w-67">
          <h2 className="text-3xl">{title}</h2>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
