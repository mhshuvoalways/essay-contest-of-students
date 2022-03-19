import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyArticle } from "../../store/actions/articleAction";
import ReactHtmlParser from "react-html-parser";

const Result = () => {
  const dispatch = useDispatch();
  const articleReducer = useSelector((store) => store.articleReducer);

  useEffect(() => {
    dispatch(getMyArticle());
  }, [dispatch]);

  const reverseArticles = [...articleReducer.articles];

  return (
    <div className="mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 m-auto">
      {reverseArticles.map((article) => (
        <div className="mb-20 border border-pink-500 bg-gray-50 p-10">
          <div className="flex items-center md:gap-24 gap-5 py-5 border-pink-800 border-b">
            <p>Language:</p>
            <p>{article.language}</p>
          </div>
          <div className="flex items-center md:gap-16 gap-5 py-5 border-pink-800 border-b">
            <p>Type of Article:</p>
            <p>{article.typeofArticle}</p>
          </div>
          <div className="flex items-center md:gap-32 gap-5 py-5 border-pink-800 border-b">
            <p>Marks:</p>
            <p>{article.marks}</p>
          </div>
          <div className="flex items-center md:gap-32 gap-5 py-5 border-pink-800 border-b">
            <p>Grade:</p>
            <p>{article.grade ? article.grade : "You didn't get grade yet"}</p>
          </div>
          <div className="flex items-center md:gap-8 gap-5 py-5 border-pink-800 border-b">
            <p className="w-36">Article has been shared:</p>
            <div className="grid">
              {article.sharedLinks.length ? (
                article.sharedLinks.map((el) => (
                  <a href={el.link} className="my-2 underline">
                    {el.link}
                  </a>
                ))
              ) : (
                <p className="my-2">
                  Your article has not been shared anywhere
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap md:gap-32 gap-5 py-5 ">
            <p>Article:</p>
            <p> {ReactHtmlParser(article.article)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
