import Accordion from 'react-bootstrap/Accordion';
import './AccordionMain.css';

export function AccordionMain(props) {



    return (
        <Accordion flush>
            {
                props.items.map((item, index) => ( 
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{item.q}</Accordion.Header>
                        <Accordion.Body>{item.a}</Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    );
}