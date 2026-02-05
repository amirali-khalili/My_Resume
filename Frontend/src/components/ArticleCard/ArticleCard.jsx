import React from "react";

function ArticleCard({ title, desc }) {
  return (
    <li>
      <a href="" className="inline-block cursor-pointer">
        <div className="w-66 md:w-76 lg:w-96 p-6 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 hover:dark:bg-slate-700 transition-colors">
          {/* Card Img */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </div>

          {/* Card Texts */}
          <div className="mt-6 space-y-2">
            <h3 className="text-xl md:text-2xl tracking-tight font-Dana-DemiBold">
              {title}
            </h3>
            <p className="text-[12px] md:text-base">{desc}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default ArticleCard;
