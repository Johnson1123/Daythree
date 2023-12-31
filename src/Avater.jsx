import { Link } from "react-router-dom";

const Avater = ({ item, key }) => {
  return (
    <div key={key}>
      <Link to={`/productDetail/${item.id}`} replace>
        <img
          src={item.images[0]}
          alt=""
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Link>
      <p className="">{item.price}</p>
    </div>
  );
};

export default Avater;
