import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import antdCSS from '~/styles/antd.min.css';
import { ConfigProvider } from "antd";
import zhCN from 'antd/locale/zh_CN.js';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: antdCSS },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>four</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ConfigProvider locale={zhCN}>
          <Outlet />
        </ConfigProvider>
        <ScrollRestoration />
        {/* <Scripts /> */}
        <LiveReload />
      </body>
    </html>
  );
}
