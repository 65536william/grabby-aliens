import Link from "next/link";

function getTagColour(tag) {
  switch (tag) {
    case "core":
      return "text-red-700 bg-red-50";
    case "speculative":
      return "text-indigo-700 bg-indigo-50";
    case "interview":
      return "text-yellow-700 bg-yellow-50";
    case "presentation":
      return "text-blue-700 bg-blue-50";
    case "blog":
      return "text-green-700 bg-green-50";
    case "forum":
      return "text-purple-700 bg-purple-50";
    case "article":
      return "text-pink-700 bg-pink-50";
  }
}

const Card = ({ text, link, date, tags, image }) => (
  <Link href={link} passHref>
    <div className="flex flex-col bg-gray-50 lg:p-7 sm:p-5 p-3 lg:shadow-lg sm:shadow-md shadow lg:rounded-2xl sm:rounded-xl rounded-lg h-auto">
      <div>
        <a className="cursor-pointer font-bold font-sans lg:text-xl sm:text-lg text-base">
          {text}
        </a>
      </div>
      {date && (
        <div className="flex justify-between items-center lg:pt-5 sm:pt-3 pt-1">
          <p>{date}</p>
          {tags &&
            tags.map((tag) => (
              <p
                key={tag}
                className={`font-sans font-medium lg:text-base sm:text-sm text-xs px-2 py-1 rounded-md ${getTagColour(
                  tag
                )}`}
              >
                {tag.toUpperCase()}
              </p>
            ))}
        </div>
      )}
    </div>
  </Link>
);

export default Card;
