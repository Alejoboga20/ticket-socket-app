import React from 'react';
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

const { Title, Text } = Typography;

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 14 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 14 },
};

export const Checkin = () => {
	const history = useHistory();

	const onFinish = (values) => {
		console.log('Success:', values);
		history.push('/desk');
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<Title level={2}>Checkin</Title>
			<Text>Type your name and desk number</Text>
			<Divider></Divider>
			<Form
				{...layout}
				name='basic'
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Agent Name'
					name='agent'
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Desk'
					name='desk'
					rules={[
						{
							required: true,
							message: 'Please input your desk number',
						},
					]}
				>
					<InputNumber min={1} max={99} />
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type='primary' htmlType='submit' shape='round'>
						<SaveOutlined />
						Checkin
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};
