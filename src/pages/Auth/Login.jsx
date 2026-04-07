import { Col, Row, Typography } from 'antd'

const { Title } = Typography

const Login = () => {
    return (
        <main className='py-5'>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Title level={1} className='text-center'>Login</Title>
                    </Col>
                </Row>
            </div>
        </main>
    )
}

export default Login