import React from "react";
import SkillCard from "../SkillCard/SkillCard";
import ReactLogo from "../../assets/images/Logos/React.png";
import TailwindLogo from "../../assets/images/Logos/Tailwind.png";
import PythonLogo from "../../assets/images/Logos/Python.png";
import jsLogo from "../../assets/images/Logos/JavaScript.png";

function AboutMe() {
  const skills = [
    {
      title: "React",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit remearum in",
      img: ReactLogo,
    },
    {
      title: "Tailwind",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit remearum in",
      img: TailwindLogo,
    },
    {
      title: "Python",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit remearum in",
      img: PythonLogo,
    },
    {
      title: "JavaScript",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit remearum in",
      img: jsLogo,
    },
  ];

  return (
    <>
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
                deleniti ipsam? Dolorem nemo repudiandae quod iusto harum?
                Ratione sed dolorem cum molestias amet! Culpa nostrum, itaque
                quia molestiae iste vero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative w-[75%] mx-auto mt-20 mb-10">
        {/* Blured Circle */}
        <div className="circle--blured  top-[-5%] left-[15%]"></div>

        <h1 className="font-Morabba-Bold text-5xl ">مهارت ها</h1>

        <div className="grid grid-cols-2  gap-4 mt-11 bg-transparent ">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title} // همیشه یه key بده به کامپوننت‌های لیست
              title={skill.title}
              desc={skill.desc}
              img={skill.img}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutMe;
