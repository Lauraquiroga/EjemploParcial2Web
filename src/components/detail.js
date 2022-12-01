import { DevicesContext } from "./rooms";
import { FormattedMessage } from 'react-intl';
const { useContext } = require("react");


function Detail(props) {
    const devicesState = useContext(DevicesContext);

    if (devicesState.devices.length != 0) {
        return (
            <table className="table"><thead className="table-dark"><tr>
                <th scope="col">#</th>
                <th scope="col">
                    <FormattedMessage id="ID" />
                </th>
                <th scope="col">
                    <FormattedMessage id="Device" />
                </th>
                <th scope="col">
                    <FormattedMessage id="Value" />
                </th>
            </tr></thead>
                <tbody>
                    {devicesState.devices.map((device, i) => (
                        <DeviceRow key={i} i={i+1} device={device}></DeviceRow>
                    ))}
                </tbody></table>
        );
    }
}

function DeviceRow(props) {
    return (
        <tr>
            <th scope="row">{props.i}</th>

            <td>{props.device.id}</td>
            <td>{props.device.name}</td>
            <td>{props.device.desired.value}</td>
        </tr>
    )
}
export default Detail;