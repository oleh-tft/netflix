import { Button } from "react-bootstrap";
import './ButtonMain.css';

export function ButtonMain(props) {

    return (
        <Button className={props.color} style={{minWidth: props.minWidth}}>{props.text}</Button>
    );

}