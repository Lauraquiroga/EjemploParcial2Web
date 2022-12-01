import Room from "./room";
import Detail from "./detail";
import { Col, Row } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';
import { useParams } from "react-router-dom";

const { useEffect, useState, createContext } = require("react");

export const DevicesContext = createContext({
    devices: [],
    setDevices: () => { }
});

function Rooms() {
    //para mostrar el detalle de los devices de una habitacion
    const setDevices = (devices) => {
        setState({ ...state, devices: devices })
    }
    const initState = {
        devices: [],
        setDevices: setDevices
    }
    const [state, setState] = useState(initState);


    //para usar los parámetros de la url
    const params = useParams();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        if (!navigator.onLine) {
            /*
            como la key contiene el id del espacio, 
            solo se pueden ver las habitaciones de los espacios que ya se 
            habian visitado antes de la desconexión 
            (es decir que no se guardan todas todas las habitaciones sino solo por lugar ->las ya filtradas)
            */
            if (localStorage.getItem("rooms"+params.espacioId) === null) {
                setRooms([])
            } else {
                setRooms(JSON.parse(localStorage.getItem("rooms"+params.espacioId)));
            }
        } else {
            const URL =
                "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
            fetch(URL)
                .then((data) => data.json())
                .then((data) => {
                    let filteredRoos = data.filter(room => room.homeId == params.espacioId);
                    setRooms(filteredRoos);
                    localStorage.setItem("rooms"+params.espacioId, JSON.stringify(filteredRoos));
                });
        }
    }, [params.espacioId]);

    return (
        <div className="container">
            <h2 className="mt-2" style={{ textAlign: "left", padding: "30px" }}><FormattedMessage id="MyRooms" /></h2>
            <DevicesContext.Provider value={state}>
                <Row>
                    {rooms.map((room) => (
                        <Col key={room.id}>
                            <Room room={room} />
                        </Col>
                    ))}
                </Row>
                <div style={{ padding: "30px", maxWidth: "50%" }}>
                    <Detail />
                </div>
            </DevicesContext.Provider>
        </div>
    );
}

export default Rooms;