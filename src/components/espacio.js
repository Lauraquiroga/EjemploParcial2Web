import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Espacio(props) {
    let imagen = "";
    if (props.espacio.type == "house") {
        imagen = "https://i.pinimg.com/736x/ac/f5/40/acf540af037be8a383152eb1e8677779.jpg";
    }
    else if (props.espacio.type == "loft") {
        imagen = "https://i.pinimg.com/564x/0b/1b/fb/0b1bfbdf98eb6bc02c2776719eb9c1be.jpg";
    }
    return (
        <Link to={"/espacios/" + props.espacio.id} style={{textDecoration: "none"}}>
            <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
                <Card.Img
                    style={{ height: "14rem" }}
                    variant="top"
                    src={imagen}
                    alt={props.espacio.name}
                />
                <Card.Body style={{textAlign: "left", color: "black"}}>
                    <Card.Title style={{ }}>

                        {props.espacio.name}

                    </Card.Title>
                    <Card.Text >{props.espacio.address}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default Espacio;