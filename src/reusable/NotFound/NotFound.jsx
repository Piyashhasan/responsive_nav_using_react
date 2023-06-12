import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="py-5 text-center">
      <h1 className="text-danger">Please type right URL .... !</h1>
      <Link to="/home">
        <button className="btn btn-primary mt-5">BACK TO HOME</button>
      </Link>
    </div>
  );
};

export default NotFound;
