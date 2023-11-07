/* eslint-disable react/prop-types */

const FeaBookCard = ({ book }) => {
  const { image } = book;
  return (
    <div>
      <div className=" card card-compact hover:shadow-xl">
        <figure>
          <img
            src={image}
            alt="Books Cover"
            className=" p-2 rounded-2xl"
          />
        </figure>
      </div>
    </div>
  );
};

export default FeaBookCard;
