// scripts/genAntdCss.tsx
import fs from 'fs';
import { extractStyle } from '@ant-design/static-style-extract';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

const outputPath = './app/styles/antd.min.css';

const css = extractStyle((node) => (
  <ConfigProvider locale={zhCN}>
    {node}
  </ConfigProvider>
));

fs.writeFileSync(outputPath, css);