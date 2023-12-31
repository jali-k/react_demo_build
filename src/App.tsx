import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";
import { useState } from "react";
import Header from "./components/FixedHeader";
import Like from "./components/Like";
import MyCard from "./components/MyCard";
import image from "./card.jpg";
import imageBrown from "./br.jpeg";
import TestHeader from "./components/TestHeader";

function App() {
  const handleItemClick = (item: String) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibililty] = useState(false);
  const [drink, setPrice] = useState({ title: "Tea", price: 5 });

  function handleClick() {
    setPrice({
      ...drink, // Contains the atributes(properties) of the dring object.
      price: 6,
    });
  }

  return (
    <div>
      <Header></Header>
      <div id="h" style={{ height: "100px" }}></div>

      {/* <ListGroup
        items={["A", "B", "C", "D", "E", "F"]}
        heading={"Letters"}
        onSelectItem={handleItemClick}
      /> */}

      {/* Some code was removed from here an saved as react_test_code.txt at the react course folder */}

      {/* The Green Section .............................. */}

      <div
        id="green_section"
        className="container align-items-center justify-content-center"
      >
        <h2>The Green Section</h2>
        <div className="row mt-4">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
        </div>
        <div className="separator"></div>
        {/* New row */}
        <div className="row mt-4">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="separator"></div>
      {/* The Brown Section ............................. */}
      <div
        id="brown_section"
        className="container align-items-center justify-content-center"
      >
        <h2>The Brown Section</h2>
        <div className="row mt-4">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
        </div>
        <div className="separator"></div>
        {/* New row */}
        <div className="row mt-4">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
