import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const CreateTicket = () => {
	const createNewTicket = () => console.log('new ticket');

	return (
		<>
			<Row>
				<Col span={14} offset={6} align='center'>
					<Title level={3}>Press Button to create a new Ticket</Title>

					<Button
						type='primary'
						shape='round'
						icon={<DownloadOutlined />}
						size='large'
						onClick={createNewTicket}
					></Button>
				</Col>
			</Row>
			<Row style={{ marginTop: 100 }}>
				<Col span={14} offset={6} align='center'>
					<Text level={2}>Your number</Text>
					<br />
					<Text type='success' style={{ fontSize: 55 }}>
						55
					</Text>
				</Col>
			</Row>
		</>
	);
};
