import React from "react";

const hashtagsArray = [
  "#EverybodyCounts",
  " #TodosCuentan",
  "#每一位都計算在內",
  "الجميع_مهمون#",
  "#MọiNgườiĐềuCóPhần",
  "#모두가중요합니다",
  "#हर_कोई_मायने_रखता_है",
];

export default function Hashtags() {
  return (
    <section className="padding-y-4 bg-primary-dark">
      <div className="grid-container">
        <div className="grid-row">
          {hashtagsArray.map((tag, i) => (
            <div
              className={`${
                i === hashtagsArray.length - 1 ? "grid-col" : "grid-col-auto"
              } margin-y-2 text-center`}
            >
              <span className="font-sans-xl text-white padding-x-3">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
