import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { getDrinks } from "../../Store/Drinks/Drinks.action";
import "../../Loading.css";
import "./Drinks.css";

let propsPage = "";

const Drinks = ({ drinksData, getDrinks }) => {
  const history = useHistory();

  function back() {
    propsPage.history.goBack();
  }

  function drinkDetailPage(drink) {
    history.push("/drinks/detail/" + drink);
  }

  useEffect(() => {
    getDrinks();
  }, [getDrinks]);

  return drinksData.loading ? (
    <ReactLoading
      type={"spin"}
      color={"#0F4C81"}
      height={"10%"}
      width={"10%"}
      className="loading"
    />
  ) : drinksData.error ? (
    <h2>{drinksData.error}</h2>
  ) : (
    <div className="container">
      <br></br>
      <button 
        name=""
        id="btn-voltar"
        className="btn btn-secondary"
        onClick={() => back()}
      >
        <FontAwesomeIcon icon="arrow-left" /> Back
      </button>
      <br />
      <br />
      <h1>{propsPage.match.params.category}</h1>
      <br />
      <div>
        <div className="row">
          {drinksData &&
            drinksData.drinks &&
            drinksData.drinks.drinks.map((drink) => (
              <div className="col-md-3 cards" key={drink["idDrink"]}>
                <div className="card">
                  <img
                    src={drink["strDrinkThumb"]}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{drink["strDrink"]}</h5>
                    <p className="card-text">
                      Click to see the details of this drink.
                    </p>
                    <button
                      onClick={() => drinkDetailPage(drink["idDrink"])}
                      className="btn btn-primary"
                    >
                      Drinks
                    </button>
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
    drinksData: state.drinks,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let category = ownProps.match.params.category;
  propsPage = ownProps;
  return {
    getDrinks: () => dispatch(getDrinks(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
