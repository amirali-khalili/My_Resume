import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
function ArticlesSlider() {
  const articles = [
    {
      id: 1,
      title: "امنیت سایت و داده‌ها",
      excerpt: "روش‌های نوین برای محافظت از وب سایت ها در برابر حملات",
    },
    {
      id: 2,
      title: "طراحی رابط کاربری مدرن",
      excerpt: "اصول مهم در ساخت رابط های کاربری سریع ساده و کاربرپسند",
    },
    {
      id: 3,
      title: "بهینه سازی عملکرد وب",
      excerpt: "تکنیک هایی برای افزایش سرعت بارگذاری صفحات و تجربه بهتر",
    },
    {
      id: 4,
      title: "ری اکت و معماری فرانت اند",
      excerpt: "روش های اصولی برای ساخت پروژه های مقیاس پذیر در ری اکت",
    },
    {
      id: 5,
      title: "سئو در توسعه وب",
      excerpt: "چگونه سایت را برای موتورهای جستجو بهینه کنیم و دیده شویم",
    },
  ];
  return (
    <div className="flex overflow-hidden mt-34">
      <h1 className="font-Morabba-Bold text-4xl sm:text-5xl lg:text-6xl ">
        مقالات
      </h1>
      <ul className="flex gap-10 py-4 animate-infinite-scroll mt-20">
        {" "}
        {[...articles, ...articles].map((article) => (
          <ArticleCard title={article.title} desc={article.excerpt} />
        ))}
      </ul>
    </div>
  );
}
export default ArticlesSlider;
