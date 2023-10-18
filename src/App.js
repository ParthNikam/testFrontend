import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import useStyles from "./AppStyles";

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.titleContainer}> {/* Container for the title */}
        <a href="/" style={{"textDecoration":"none"}}><h1 className={classes.title}>TRYM</h1></a>
        {/* <h1 className={classes.title}>TRYM</h1> */}

        <p className={classes.subtitle}>Track Your Marks</p>
      </div>

      <Container className={classes.container}>
        <Routes>
          {/* Route for the search page */}
          <Route
            path="/"
            element={
              <Card className={`mx-auto ${classes.card}`}>
                <Card.Body>
                  <SearchBar />
                </Card.Body>
              </Card>
            }
          />
          <Route
            path="/"
            element={
              <Card className="mx-auto mt-4" style={{ maxWidth: "400px" }}>
                <Card.Body>
                  <UserList />
                </Card.Body>
              </Card>
            }
          />

          {/* Route for displaying user profiles */}
          <Route path="/profile/:userId" element={<UserProfile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
