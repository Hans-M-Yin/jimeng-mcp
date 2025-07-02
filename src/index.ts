import { startServer } from './server.js';

// 处理未捕获的异常
process.on('uncaughtException', (error) => {
  console.error('未捕获的异常:', error);
});

// 处理未处理的Promise拒绝
process.on('unhandledRejection', (reason, promise) => {
  console.error('未处理的Promise拒绝:', reason);
});

// 启动服务器
const main = async () => {
  try {
    // required: JIMENG_API_TOKEN
    if (!process.env.JIMENG_API_TOKEN) {
      throw new Error('JIMENG_API_TOKEN is required!')
    }

    await startServer();
  } catch (error) {
    console.error('启动服务器时出错:', error);
    process.exit(1);
  }
};

main(); 