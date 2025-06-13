import { Button } from "react-bootstrap";
import './ButtonMain.css';

export function ButtonMain(props) {

    return (
        <Button className={props.color}>{props.text}</Button>
    );

}