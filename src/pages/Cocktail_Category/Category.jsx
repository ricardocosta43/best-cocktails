import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { getCategories } from "../../Store/Categories/Categories.action";
import "../../Loading.css";

const Categories = ({ categoriesData, getCategories }) => {
  const history = useHistory();

  function back() {
    history.push("/");
  }

  function drinkPage(category) {
    //category = category.replace(" ","_");
    history.push("/drinks/" + category);
  }

  useEffect(() => {
    getCategories();
  }, [getCategories]);

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
      <button 
        className="btn btn-secondary"
        onClick={() => back()}
      >
        <FontAwesomeIcon icon="arrow-left" /> Back
      </button >
      <br />
      <br />
      <h1>Drinks Categories</h1>
      <br/>
      <div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {categoriesData &&
                categoriesData.categories.drinks &&
                categoriesData.categories.drinks.map((category) => (
                  <tr key={category["strCategory"]}>
                    <td>{category["strCategory"]}</td>
                    <td>
                      <button
                        className="btn btn-link"
                        onClick={() => drinkPage(category["strCategory"])}
                      >
                        <FontAwesomeIcon icon="search" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
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
