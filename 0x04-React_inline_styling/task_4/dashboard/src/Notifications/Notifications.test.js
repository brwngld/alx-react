import React from 'react';
import Notifications from "./Notifications.js"
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});




it("Notification", () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper) === true;
});
