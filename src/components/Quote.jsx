import PropTypes from "prop-types";

const Quote = ({ text, author }) => {
  return (
    <div className="">
      <span className="italic">{`"${text}" `}</span>
      <span className="font-bold">{`${
        author === "type.fit" ? "" : "- " + author.split(", type.fit")[0]
      }`}</span>
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
};

export default Quote;
