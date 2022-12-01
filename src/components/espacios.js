import Espacio from "./espacio";
import { Col, Row } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';

const { useEffect, useState } = require("react");

function Espacios() {
    const [espacios, setEspacios] = useState([]);
    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("espacios") === null) {
                setEspacios([])
            } else {
                setEspacios(JSON.parse(localStorage.getItem("espacios")));
            }
        } else {
            const URL =
                "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
            fetch(URL)
                .then((data) => data.json())
                .then((data) => {
                    setEspacios(data);
                    localStorage.setItem("espacios", JSON.stringify(data));
                });
        }
    }, []);

    return (
        <div className="container">
            <h2 className="mt-2" style={{ textAlign: "left", padding: "30px" }}><FormattedMessage id="MySpaces" /></h2>

            <Row>
                {espacios.map((espacio) => (
                    <Col key={espacio.id}>
                        <Espacio espacio={espacio} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Espacios;