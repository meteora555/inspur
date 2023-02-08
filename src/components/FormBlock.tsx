import React from 'react';
import { Button, Form, Input, Checkbox } from 'antd';

function formBlock() {
  return (
    <div className="content">
      <div className="content__container" id="call">
        <div className="title">
          <div className="title__news">Свяжитесь с нами</div>
        </div>
        <Form name="ask" layout={'vertical'} autoComplete="on" style={{ maxWidth: 1000 }}>
          <Form.Item
            className="form__item-title"
            label="Имя"
            name="name"
            rules={[{ required: true, message: 'Пожалуйста введите ваше имя' }]}>
            <Input className="form__item-input" placeholder="Ваше имя" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="Email"
            rules={[{ required: false, message: 'Пожалуйста введите ваш Email' }]}>
            <Input className="form__item-input" placeholder="Ваш Email" />
          </Form.Item>

          <Form.Item
            label="Сообщение"
            name="message"
            rules={[
              {
                required: true,
                message: 'Пожалуйста введите сообщение',
              },
            ]}>
            <Input className="form__item-input" placeholder="Введите сообщение" />
          </Form.Item>
          <Form.Item name="accsept" valuePropName="checked" rules={[{ required: true }]}>
            <Checkbox>
              Согласие на обработку персональных данных и политикой конфиденциальности
            </Checkbox>
          </Form.Item>
          <Form.Item name="send" valuePropName="checked" rules={[{ required: true }]}>
            <Checkbox>
              Согласие на получение информационной рассылки о планируемых мероприятиях
            </Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 32 }}>
            <Button id="call-btn" htmlType="submit">
              Отправить заявку
            </Button>
          </Form.Item>
        </Form>
        {/* <form className="form" id="form">
          <div className="form__item">
            <div className="form__item-title">Имя</div>
            <input type="text" placeholder="Введите имя" id="name" className="form__item-input" />
          </div>
          <div className="form__item">
            <div className="form__item-title">E-mail</div>
            <input
              type="text"
              placeholder="Введите E-mail"
              id="email"
              className="form__item-input"
            />
          </div>

          <div className="form__item">
            <div className="form__item-title">Сообщение</div>
            <input
              type="text"
              placeholder="Введите сообщение"
              id="text"
              className="form__item-input"
            />
          </div>

          <div className="form__accept">
            <div className="form__checkbox">
              <input name="accept" id="2" type="checkbox" value="accept" className="form__check" />
              <div className="form__div"></div>
              <label className="form__label">
                Согласие на обработку персональных данных и{' '}
                <a href="#">политикой конфиденциальности</a>
              </label>
            </div>
            <div className="form__checkbox">
              <input
                name="accept"
                id="1"
                type="checkbox"
                value="accept"
                className="form__check"
                checked
              />
              <div className="form__div"></div>
              <label className="form__label">
                Согласие на получение информационной рассылки о планируемых мероприятиях
              </label>
            </div>
          </div>
          <button className="form__button" type="submit">
            Отправить заявку
          </button>
        </form> */}
      </div>
    </div>
  );
}
export default formBlock;
