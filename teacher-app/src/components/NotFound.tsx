import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="card-body">
      <div className="row">
        <div className="col">
          <h6 className="center-justify">
            This page doesn't exist. Go <Link to={"./dashboard"}>here</Link>{" "}
            instead.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
