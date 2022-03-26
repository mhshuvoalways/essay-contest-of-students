import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyArticle } from "../../../store/actions/articleAction";
import parse from "html-react-parser";

const Result = ({ downloadHandler }) => {
  const dispatch = useDispatch();
  const articleReducer = useSelector((store) => store.articleReducer);

  useEffect(() => {
    dispatch(getMyArticle());
  }, [dispatch]);

  const reverseArticles = [...articleReducer.articles];

  return (
    <div className="mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 m-auto">
      {reverseArticles.reverse().map((article) => (
        <div
          className="border border-pink-500 bg-gray-50 p-10 mb-10"
          key={article._id}
        >
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Language:</p>
            <p>{article.language}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Type of Article:</p>
            <p>{article.typeofArticle}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Marks:</p>
            <p>{article.finalMarks}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Grade:</p>
            <p>{article.grade ? article.grade : "Didn't get grade yet"}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Quarterly:</p>
            <p>{article.qya.quarterly + " of " + article.qya.year}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Article has been shared:</p>
            <div className="grid">
              {article.sharedLinks.length ? (
                article.sharedLinks.map((el) => (
                  <a href={el.link} className="my-2 underline">
                    {el.link}
                  </a>
                ))
              ) : (
                <p className="my-2">Article has not been shared anywhere</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-5 py-5">
            <p className="w-28">Article:</p>
            <p> {parse(article.article)}</p>
          </div>
          {article.grade && (
            <button
              className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-900"
              onClick={() =>
                downloadHandler(article.author.name, article.grade)
              }
            >
              DOWNLOAD CERTIFICATE
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Result;
