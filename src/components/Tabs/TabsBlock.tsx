import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Block1 } from './Block1';
import { Block2 } from './Block2';
import { Block3 } from './Block3';
import { Block4 } from './Block4';
import { Block5 } from './Block5';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Стоечные серверы</Tab>
      <Tab>Многоузловые серверы</Tab>
      <Tab>Стоечные масштабируемые системы</Tab>
      <Tab>Хранилища данных</Tab>
      <Tab>Гибридное хранилище</Tab>
    </TabList>

    <TabPanel>
      <Block1 />
    </TabPanel>
    <TabPanel>
      <Block2 />
    </TabPanel>
    <TabPanel>
      <Block3 />
    </TabPanel>
    <TabPanel>
      <Block4 />
    </TabPanel>
    <TabPanel>
      <Block5 />
    </TabPanel>
  </Tabs>
);
