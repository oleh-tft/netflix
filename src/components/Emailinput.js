import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import './Emailinput.css';

export function Emailinput() {

  const { t } = useTranslation();

  return (
    <div style={{ width: "70%" }}>
      <FloatingLabel controlId="floatingInput" label={t('landing.input.1')} className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
    </div>
  );
}

export default Emailinput;