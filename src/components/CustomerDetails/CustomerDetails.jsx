import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const CustomerDetails = () => {
  
  const [customerData, setCustomerData] = useState({});

  useEffect(() => {
   
    axios.get('/data.json')
      .then(response => {
        setCustomerData(response.data[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} lg={6}>
          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title>Total Expenses VS Remaining Balance</Card.Title>
              <PieChart width={400} height={400}>
                <Pie
                  data={[
                    { name: 'Remaining Balance', value: customerData.current_balance },
                    { name: 'Total Expenses', value: customerData.total_expenses }
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label>
                  <Cell key={0} fill="#82ca9d" />
                  <Cell key={1} fill="#ffc658" />

                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={6}>
          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>{customerData.name}</Card.Text>
            </Card.Body>
            <hr />
            <Card.Body>
              <Card.Title>Active Status</Card.Title>
              <Card.Text>
                {customerData?.active_status?.map((status, index) => (
                  <div key={index}>{status}</div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} lg={6} className="mb-3">
          <Row>
            <Col xs={12} sm={6}>          
              <Card className="h-100 shadow">
                <Card.Body>
                  <Card.Title>Total Expenses</Card.Title>
                  <Card.Text>${customerData.total_expenses}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="h-100 shadow">
                <Card.Body>
                  <Card.Title>Current Balance</Card.Title>
                  <Card.Text>${customerData.current_balance}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={6} className="mb-3">
          <Row>
            <Col xs={12} sm={6}>
              <Card className="h-100 shadow">
                <Card.Body>
                  <Card.Title>Total Meals Ordered</Card.Title>
                  <Card.Text>{customerData.total_meals_ordered}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="h-100 shadow">
                <Card.Body>
                  <Card.Title>Current Package</Card.Title>
                  <Card.Text>{customerData.current_package}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerDetails;
