import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Drinks = (props) => {
  const history = useHistory();

  function back() {
    history.push("/categories");
  }

  return (
    <div className="container">
      {/* {loading && (
        <ReactLoading
          type={"spin"}
          color={"#0F4C81"}
          height={"10%"}
          width={"10%"}
          className="loading"
        />
      )} */}
      {
        //!loading &&
        <div>
          <br></br>
          <a
            name=""
            id="btn-voltar"
            className="btn btn-secondary"
            href="javascript:void(0)"
            role="button"
            onClick={() => back()}
          >
            <FontAwesomeIcon icon="arrow-left" /> Voltar
          </a>
          <br></br>
        </div>
      }
    </div>
  );
};

export default Drinks;
