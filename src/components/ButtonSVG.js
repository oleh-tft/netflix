import { Button } from "react-bootstrap";
import './ButtonSVG.css';

function SVG(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" dataIcon="ChevronRightStandard" ariaHidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d={props.d} fill="currentColor"></path>
        </svg>
    );
}

export function ButtonSVG(props) {

    return (
        <Button className={props.color} style={{minWidth: props.minWidth}} onClick={props.onClick}>
            <span>{props.text}</span>
            <div className="btnsvg-margin"><SVG d={props.d}/></div>
        </Button>
    );

}