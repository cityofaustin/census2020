import React from "react";
import { StaticQuery, graphql } from "gatsby";

function URLify(string) {
  return string
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

const EmailCollection = ({ data, lang }) => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const [
    emailCollectionFormState,
    setEmailCollectionFormState,
  ] = React.useState({});
  const [
    emailCollectionFormMessage,
    setEmailCollectionFormMessage,
  ] = React.useState({});

  const handleEmailCollectionInputChange = e => {
    setEmailCollectionFormState({
      ...emailCollectionFormState,
      [e.target.name]: e.target.value,
    });
  };

  async function handleEmailCollectionSubmit(e) {
    e.preventDefault();
    const form = e.target;

    if (
      !emailCollectionFormState["input-type-email"] ||
      !emailCollectionFormState["input-type-name"]
    ) {
      setEmailCollectionFormMessage({
        color: "red",
        content: "Please provide both your e-mail address and your name.",
      });
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...emailCollectionFormState,
        }),
      });
      setEmailCollectionFormMessage({
        color: "green",
        content: "Thanks for signing up!",
      });
    } catch (error) {
      console.error(error);
      setEmailCollectionFormMessage({
        color: "red",
        content: "An error occurred. Please try again later.",
      });
    }
  }

  const text = data.text.nodes.filter(
    item => item.frontmatter.language === lang
  )[0].frontmatter.components.emailCollection;

  return (
    <section className="padding-y-3 text-center display-flex flex-column flex-align-center">
      <h3>{text.title}</h3>
      <form
        name="email-collection-form"
        className="usa-form"
        method="post"
        style={{ width: "80%" }}
        onSubmit={handleEmailCollectionSubmit}
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        method="post"
      >
        <input
          type="hidden"
          name="email-collection-form"
          value="email-collection-form"
        />
        <label className="usa-label" htmlFor="input-type-email">
          {text.email}
        </label>
        <input
          className="usa-input"
          id="input-type-email"
          name="input-type-email"
          type="text"
          onChange={handleEmailCollectionInputChange}
        />
        <label className="usa-label" htmlFor="input-type-name">
          {text.name}
        </label>
        <input
          className="usa-input"
          id="input-type-name"
          name="input-type-name"
          type="text"
          onChange={handleEmailCollectionInputChange}
        />
        <label className="usa-label" htmlFor="usa-textarea">
          {text.communities}
        </label>
        <textarea
          className="usa-textarea"
          id="usa-textarea"
          name="usa-textarea"
          type="text"
          onChange={handleEmailCollectionInputChange}
        />
        <input
          className="usa-button usa-button--outline"
          type="submit"
          value={text.submit}
        />
      </form>
      <span
        style={{
          paddingTop: 15,
          height: 15,
          color: emailCollectionFormMessage["color"],
        }}
      >
        {emailCollectionFormMessage["content"]}
      </span>
    </section>
  );
};

export default props => (
  <StaticQuery
    render={data => <EmailCollection data={data} {...props} />}
    query={graphql`
      query {
        text: allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "text" } } }
        ) {
          nodes {
            frontmatter {
              language
              components {
                emailCollection {
                  title
                  email
                  name
                  communities
                  submit
                }
              }
            }
          }
        }
      }
    `}
  />
);
