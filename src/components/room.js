import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DevicesContext } from "./rooms";
//import defaultImage from '../assets/room.png';

const { useContext } = require("react");

function Room(props) {
    const devicesState = useContext(DevicesContext);

    let imagen = "";
    if (props.room.name == "Kitchen") {
        imagen = "https://i.pinimg.com/originals/0d/f4/ed/0df4ed0444ca4971e53dd4d00be9c257.jpg";
    }
    else {
        imagen = "https://img.freepik.com/premium-vector/sketch-living-room-doodle-house-interior-with-couch-lamp-picture-frames-freehand-drawing-home-black-white-vector-interior_53562-9107.jpg";
    }
    function update() {
        devicesState.setDevices(props.room.devices);
    }
    return (
        <Link onClick={update} style={{textDecoration: "none"}}>
            <Card style={{ width: "18rem", height: "20rem" }} className="mb-3">
                <Card.Title style={{ textAlign: "left", padding: "20px", color:"black" }}>
                    {props.room.name}
                </Card.Title>
                <Card.Img
                    style={{ height: "14rem" }}
                    variant="top"
                    src={imagen}
                    alt={props.room.name}
                />
            </Card>
        </Link>
    );
}

export default Room;