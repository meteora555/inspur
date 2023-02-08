import React from 'react';
import { Tabs } from 'antd';

const servers = [
  'Стоечные серверы',
  'Многоузловые серверы',
  'Стоечные масштабируемые системы',
  'Хранилища данных',
  'Гибридное хранилище',
];

export const TabsBlock: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={servers.map((item, i) => {
      const id = String(i + 1);
      return {
        label: `${item}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
      };
    })}
  />
);

export default TabsBlock;
