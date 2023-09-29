import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="Dark" onClick={handleShow}>
                <i class="bi bi-list"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Books</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-grid gap-2">
                    <Button variant="btn btn-outline-dark" href='/fiction'>
                            Fiction
                        </Button>
                        <Button variant="outline-dark" href="/bestseller">
                            Non-Fiction
                        </Button>
                        <Button variant="outline-dark" href="/nonfiction">
                            Poetry
                        </Button>
                        <Button variant="outline-dark" href="/nonfiction">
                            Drama/Play
                        </Button>
                        <Button variant="outline-dark" href="/nonfiction">
                            Children and Young Adults
                        </Button>
                        <Button variant="outline-dark" href="/fiction">
                            Other
                        </Button>
                        
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Example;