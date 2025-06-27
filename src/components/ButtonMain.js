import { Button } from "react-bootstrap";
import './ButtonMain.css';

export function ButtonMain(props) {

    return (
        <Button type={props.type} className={props.color} style={{minWidth: props.minWidth}} onClick={props.onClick}>{props.text}</Button>
    );

}