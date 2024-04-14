/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const RightSide = ({ data }) => {
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {data[0] && (
          <div className="col-span-12 mb-6 md:col-span-8">
            <img className="w-full" src={data[0].urlToImage} alt="thumb" />
            {/* <!-- info --> */}
            <div className="col-span-12 mt-6 md:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {data[0].title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">
                description {data[0].description}
              </p>
              <p className="mt-5 text-base text-[#94908C]">
                {" "}
                {data[0].publishedAt}
              </p>
            </div>
          </div>
        )}
        {data.slice(1).map((news) => (
          <div className="col-span-12 md:col-span-8" key={news.id}>
            {/* <!-- info --> */}
            <div className="col-span-12 md:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {news.title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">{news.description}</p>
              <p className="mt-5 text-base text-[#94908C]">
                {news.publishedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSide;
