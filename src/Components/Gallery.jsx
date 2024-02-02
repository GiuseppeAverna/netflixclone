
import {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup, ListGroup.Item } from "react-bootstrap";

class Gallery extends Component {
  state = {
    films: [],
  };

  fetchfilms = () => {
    fetch("http://www.omdbapi.com/?apikey=642290fe&s=Guardians of the Galaxy")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore ricezione");
        }
      })
      .then((arrayofFilms) => {
        console.log(arrayofFilms)
        this.setState({
            films: arrayofFilms
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchfilms();
  }
  render() {
    return (
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <ListGroup>
              {this.state.films.map((film) => {
                return( 
                     <ListGroup.Item key={Search.imdbID}>
                    {Search.Title} per {Search.Type} il {Search.Year}
                </ListGroup.Item>;
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export  { Gallery };
