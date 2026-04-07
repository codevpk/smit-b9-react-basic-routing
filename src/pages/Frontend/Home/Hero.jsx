import { Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title, Paragraph, Text } = Typography

const Hero = () => {
    return (
        <div>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Title level={1}>Home</Title>
                        <Paragraph>Hero Section</Paragraph>
                        <Text>Hero Section</Text>
                        <br />
                        <Link to="/about" className='btn btn-info'>About</Link>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Hero