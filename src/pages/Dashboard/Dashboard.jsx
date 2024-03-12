import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import profilePicture from '../../assets/avatar.jpg'
import { LuHome, LuSearch } from "react-icons/lu";
import { GiNetworkBars } from "react-icons/gi";
import { PiSignOutBold } from "react-icons/pi";
import Nav from 'react-bootstrap/Nav';
import './Dashboard.css'



const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Navbar expand="lg" className="px-0 fixed-top" style={{ backgroundColor: "#212529" }}>
                <Container fluid className="justify-content-end">
                    <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleSidebar} style={{ borderColor: 'white', backgroundColor: 'white' }} />

                    <Navbar.Collapse id="navbar-nav" className="justify-content-between">
                        <Navbar.Brand className="d-none d-lg-block mr-3 fw-bold" style={{ color: "#fffff7", fontSize: "30px" }}> <span className='pe-1'> Cooking Station
                        </span>
                        </Navbar.Brand>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="position-relative">
                                <LuSearch style={{ position: "absolute", right: "65px", top: "50%", transform: "translateY(-50%)", color: "#C5C7CD", cursor: "pointer" }} />
                                <form action="" className='mx-5'>
                                    <input type="text" className='rounded-pill form-control pl-4' style={{ paddingLeft: "30px" }} />
                                </form>
                            </div>
                            <img src={profilePicture} height={40} className='d-none d-lg-block rounded-circle' alt="" />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid>
                <Row>

                    <Col lg={2} style={{ minHeight: 'calc(100vh - 56px)', display: isSidebarOpen ? 'block' : 'none', marginTop: '56px', backgroundColor: "#1e2536" }} className="position-fixed">
                        <div className='mt-5'>
                            <Nav className="flex-column">

                                <Nav.Link to="/" className="sidebar-nav-link">
                                    <div className='d-flex align-items-center'>
                                        <LuHome />
                                        <span className='ps-2'>Home</span>
                                    </div>
                                </Nav.Link>
                                <Nav.Link to="/dashboard" className="sidebar-nav-link">
                                    <div className='d-flex align-items-center'>
                                        <GiNetworkBars />
                                        <span className='ps-2'>Dashboard</span>
                                    </div>
                                </Nav.Link>
                                <Nav.Link to="/dashboard" className="sidebar-nav-link">
                                    <div className='d-flex align-items-center'>
                                        <PiSignOutBold />
                                        <span className='ps-2'>Signout</span>
                                    </div>
                                </Nav.Link>

                            </Nav>
                        </div>
                    </Col>

                    <Col xs={12} style={{ minHeight: 'calc(100vh - 56px)', paddingLeft: isSidebarOpen ? '200px' : '0', marginTop: '90px' }}>
                        <div className='ms-2 ms-xl-2 ps-xl-5'>
                            {/* main content */}
                            <div className='ps-xxl-2'>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;
