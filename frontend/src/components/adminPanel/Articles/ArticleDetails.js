import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getIndividualActicle } from "../../../store/actions/articleAction";
import parse from "html-react-parser";

const ArticleDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const articleReducer = useSelector(
    (store) => store.articleReducer.indivudualArticles
  );

  useEffect(() => {
    dispatch(getIndividualActicle(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 m-auto">
      {articleReducer && (
        <div className="border border-pink-500 bg-gray-50 p-10">
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Name:</p>
            <p>{articleReducer.author.name}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Email:</p>
            <p>{articleReducer.author.email}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Phone:</p>
            <p>{articleReducer.author.phone}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Language:</p>
            <p>{articleReducer.language}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Type of Article:</p>
            <p>{articleReducer.typeofArticle}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Marks:</p>
            <p>{articleReducer.finalMarks}</p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Grade:</p>
            <p>
              {articleReducer.grade
                ? articleReducer.grade
                : "Didn't get grade yet"}
            </p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Quarterly:</p>
            <p>
              {articleReducer.qya.quarterly + " of " + articleReducer.qya.year}
            </p>
          </div>
          <div className="flex items-center gap-5 py-5 border-pink-800 border-b">
            <p className="w-28">Article has been shared:</p>
            <div className="grid">
              {articleReducer.sharedLinks.length ? (
                articleReducer.sharedLinks.map((el) => (
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
            <p> {parse(articleReducer.article)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
