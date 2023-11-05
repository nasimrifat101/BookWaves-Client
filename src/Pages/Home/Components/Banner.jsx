const Banner = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 min-h-screen">
        <div className=" space-y-3">
          <h1 className="text-[50px] font-bold mt-32">Your Virtual Library</h1>
          <p className="text-4xl">Where knowledge meets convenience.</p>
        </div>
        <div>
          <img src="https://i.postimg.cc/GtTMg32k/6721752.jpg" alt="" className="w-full mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
