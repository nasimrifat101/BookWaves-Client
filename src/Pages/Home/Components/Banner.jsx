const Banner = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 lg:h-[500px]">
        <div className="space-y-3 p-3 lg:p-0">
          <h1 className=" text-2xl text-center lg:text-left lg:text-[50px] font-bold lg:mt-36">Your Virtual Library</h1>
          <p className="text-center lg:text-left lg:text-4xl">Where knowledge meets convenience.</p>
        </div>
        <div>
          <img src="https://i.postimg.cc/GtTMg32k/6721752.jpg" alt="" className="p-3 lg:p-0 lg:w-full lg:mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
