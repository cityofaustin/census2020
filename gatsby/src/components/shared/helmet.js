import React from "react";
// useHelmetTags hook uses the uri and titleData.title and uses them to
// provide accurate information to the <Helmet>'s <title> and <html> tags
export const useHelmetTags = (uri, titleData) => {
  const [title, setTitle] = React.useState("");
  const [language, setLanguage] = React.useState("en");
  React.useEffect(() => {
    if (titleData) setTitle(titleData.title);
    if (uri !== "/") setLanguage(uri.substring(1).split("/")[0]);
  }, [titleData, uri]);

  return { title, language };
};
