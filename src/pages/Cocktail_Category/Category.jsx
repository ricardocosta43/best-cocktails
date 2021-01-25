import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { getCategories } from "../../Store/Categories/Categories.action";

const Categories = ({ categoriesData, getCategories }) => {
  const history = useHistory();

  function back() {
    history.push("/");
  }

  useEffect(() => {
    getCategories();
  }, []);

  return categoriesData.loading ? (
    <ReactLoading
          type={"spin"}
          color={"#0F4C81"}
          height={"10%"}
          width={"10%"}
          className="loading"
        />
  ) : categoriesData.error ? (
    <h2>{categoriesData.error}</h2>
  ) : (
    <div className="container">
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
      <br />
      <br />
      <div>
        <div className="row">
          {categoriesData &&
            categoriesData.categories.drinks &&
            categoriesData.categories.drinks.map((category) => (
              <div className="col-md-3">
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{category["strCategory"]}</h5>
                    <p className="card-text">
                      Clique para ver os drinks desta categoria.
                    </p>
                    <a href="javascript:void(0)" className="btn btn-primary">
                      Drinks
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoriesData: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
