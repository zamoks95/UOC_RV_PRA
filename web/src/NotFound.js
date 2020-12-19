import "./App.css";
import Container from "@material-ui/core/Container";

import Navbar from "./Components/Navbar";
import Typography from "@material-ui/core/Typography";
function NotFound() {
  return (
    <div className="Home">
      <Navbar activePath="Home" />
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1">
          Not Found
        </Typography>
      </Container>
    </div>
  );
}

export default NotFound;
