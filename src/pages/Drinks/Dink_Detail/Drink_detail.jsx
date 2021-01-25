import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { getDrinksDetail } from "../../../Store/Drinks_Detail/Drinks_Detail.action";
import "../../../Loading.css";
import "./Drinks_detail.css";

let propsPage = "";

const DrinksDetail = ({ drinksDetailData, getDrinksDetail }) => {
  function back() {
    propsPage.history.goBack();
  }

  useEffect(() => {
    getDrinksDetail();
  }, []);

  return drinksDetailData.loading ? (
    <ReactLoading
      type={"spin"}
      color={"#0F4C81"}
      height={"10%"}
      width={"10%"}
      className="loading"
    />
  ) : drinksDetailData.error ? (
    <h2>{drinksDetailData.error}</h2>
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
        <FontAwesomeIcon icon="arrow-left" /> Back
      </a>
      <br />
      <br />
      <div>
        {drinksDetailData &&
          drinksDetailData.drinksDetails &&
          drinksDetailData.drinksDetails.drinks.map((drink) => (
            <div className="row justify-content-center">
              <div className="col-md-6">
                <img
                  src={drink["strDrinkThumb"]}
                  height="300px"
                  width="300px"
                  alt=""
                  className="float-right"
                />
              </div>
              <div className="col-md-6">
                <h5>Details</h5>
                <p>{drink["strCategory"]}</p>
                <p>{drink["strAlcoholic"]}</p>
                <p>{drink["strGlass"]}</p>
                <p>{drink["strMeasure1"]}</p>
                <h5>Ingredients</h5>
                <p>{drink["strIngredient1"]}</p>
                <p>{drink["strIngredient2"]}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    drinksDetailData: state.drinksDetail,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let drink = ownProps.match.params.drink;
  propsPage = ownProps;
  return {
    getDrinksDetail: () => dispatch(getDrinksDetail(drink)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksDetail);
