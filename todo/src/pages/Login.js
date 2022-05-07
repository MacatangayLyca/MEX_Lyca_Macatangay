import { Row, Col } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
        <Row className="d-flex my-auto align-middle align-items-center justify-content-center">
            <Col xs md="9">
                <LoginForm />
            </Col>
        </Row>
    );
}
