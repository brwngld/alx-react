import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BodySection from "./BodySection.js";
configure({adapter: new Adapter()});


it("ender correctly the children and one h2 element", () => {
    const wrapper = shallow(<BodySection title='News from the School'>
    <p>Log in the School addEventListener </p>
  </BodySection> )

  expect(wrapper.html()).toContain('<div class="bodySection"><h2>News from the School</h2><p>Log in the School addEventListener </p></div>')
})