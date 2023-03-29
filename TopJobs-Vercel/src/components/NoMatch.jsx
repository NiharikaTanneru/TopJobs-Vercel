import { useNavigate } from "react-router";

// Below is the Error Page and appears when user enters different path in url
const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="container text-center mt-2 bg-light">
          <img
            srcSet="./../Images/error.png"
            alt=""
            style={{ width: "50rem", height: "30rem", marginTop: "2rem" }}
          />
        </div>
        <button
          className="btn btn-secondary d-block m-auto mt-4"
          datatest-id="bu"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </>
  );
};

export default NoMatch;
