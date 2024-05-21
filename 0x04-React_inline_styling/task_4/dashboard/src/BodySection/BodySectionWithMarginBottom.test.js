import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

configure({adapter: new Adapter()});


it("should render correctly a BodySection", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="Log in to continue" />)
    expect(wrapper.html()).toContain('<div class="bodySectionWithMargin"><div class="bodySection"><h2>Log in to continue</h2></div></div>')
})