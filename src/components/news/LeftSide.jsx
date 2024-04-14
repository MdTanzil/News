/* eslint-disable react/prop-types */
const LeftSide = ({ data }) => {
  // console.log(data);
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {data[1] && (
        <div className="col-span-12 grid grid-cols-12 gap-4">
          {/* <!-- info --> */}
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {data[1].title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{data[1].description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {data[1].publishedAt}
            </p>
          </div>
          {/* <!-- thumb --> */}
          <div className="col-span-12 lg:col-span-8">
            <img className="w-full" src={data[1].urlToImage} alt="thumb" />
            <p className="mt-5 text-base text-[#5C5955]">
              Illustration: {data[1].author}
            </p>
          </div>
        </div>
      )}
      {data[0] && (
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
          {/* <!-- info --> */}
          <div className="col-span-12 md:col-span-6">
            <a href="">
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                {data[0].title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">{data[0].description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {data[0].publishedAt}
            </p>
          </div>
          {/* <!-- thumb --> */}
          <div className="col-span-12 md:col-span-6">
            <img className="w-full" src={data[0].urlToImage} alt="thumb" />
          </div>
        </div>
      )}
      {data.slice(2).map((item) => (
        <div className="col-span-12 md:col-span-6 lg:col-span-4" key={item.id}>
          {/* <!-- info --> */}
          <div className="col-span-12 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                {item.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">{item.description}</p>
            <p className="mt-5 text-base text-[#94908C]">{item.publishedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
