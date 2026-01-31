import React from "react";
import SkillCard from "../SkillCard/SkillCard";

function AboutMe() {
  const skills = [
    "HTML & CSS",
    "React",
    "EcmaScript6",
    "Tawilind",
    "Git & Github",
    "Bootstrap",
    "Python",
  ];

  return (
    <section className="flex lg:justify-between items-center mt-7 mx-auto w-[75%]">
      {/* Image */}
      <div>
        <img src="/src/assets/images/Group 62.svg" alt="" />
      </div>

      {/* Titles & Desc & Skill Cards */}
      <div className="flex lg:flex-col gap-10 w-98">
        {/* About Me & Desc*/}
        <div className="flex flex-col gap-8">
          {/* Title */}

          <h1 className="flex gap-2 text-7xl">
            <span>درباره</span>
            <span className="text-primary">من</span>
          </h1>
          {/* Desc */}
          <div className="text-[18px] text-secondary-light dark:text-secondary-dark">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              deleniti ipsam? Dolorem nemo repudiandae quod iusto harum? Ratione
              sed dolorem cum molestias amet! Culpa nostrum, itaque quia
              molestiae iste vero.
            </p>
          </div>
        </div>

        {/* Title & Skill Cards */}
        <div className="">
          {/* Title */}
          <h1 className="flex gap-2 text-5xl mb-5">
            <span>مهارت ها</span>
          </h1>

          {/* Skill Cards */}

          <div className="flex flex-wrap gap-3 p-4 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200  rounded-2xl">
            {skills.map((skill) => (
              <SkillCard key={skill} title={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
