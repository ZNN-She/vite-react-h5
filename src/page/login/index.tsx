import { Button, Form, Input } from 'antd-mobile';
import login from '@/utils/login';
import './index.less';
import { useAtomValue } from 'jotai';
import layoutStore from '@/layouts/store';

export default function LoginPage() {
  const systemName = useAtomValue(layoutStore.systemName)

  const onFinish = (values: any) => {
    login.login(values);
  };

  return (
    <div className="body">
      <div className='center'>
        <p className='p-title'>欢迎使用{systemName}</p>
        <Form
          layout='horizontal'
          onFinish={onFinish}
          footer={
            <Button block type='submit' color='primary' size='large'>
              登录
            </Button>
          }
        >
          <Form.Item
            name='name'
            label=''
            rules={[{ required: true, message: '姓名不能为空' }]}
          >
            <Input onChange={console.log} placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item
            name='paswword'
            label=''
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input onChange={console.log} placeholder='请输入密码' />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};