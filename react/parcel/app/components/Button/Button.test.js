import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import Button from './Button';

test('Render Button', () => {
  const button = renderer.create(
    <Button />
  );
  expect(button.toJSON()).toMatchSnapshot();
});

test('Render Button with text', () => {
  const button = renderer.create(
    <Button text={'foo'} />
  );
  expect(button.toJSON()).toMatchSnapshot();
});

test('Render Button with type', () => {
  const button = renderer.create(
    <Button type={'bar'} />
  );
  expect(button.toJSON()).toMatchSnapshot();
});

test('Render Button with asdf', () => {
  const button = renderer.create(
    <Button asdf={'bar'} />
  );
  expect(button.toJSON()).toMatchSnapshot();
});

test('Render Button with foo', () => {
  const button = renderer.create(
    <Button foo={'bar'} />
  );
  expect(button.toJSON()).toMatchSnapshot();
});

test('Render shallow Button with text', () => {
  const button = shallow(
    <Button text={'foo'} />
  );
  expect(button.text()).toBe('foo');
});

test('Render shallow Button with foo', () => {
  const wrapper = mount(
    <Button asdf={'foo'} type={'submit'} />
  );
  expect(wrapper.prop('asdf')).toBe('foo');
});

test('Render shallow Button with bar', () => {
  const wrapper = mount(
    <Button bar={'foo'} />
  );
  expect(wrapper.prop('bar')).toBe('foo');
});
