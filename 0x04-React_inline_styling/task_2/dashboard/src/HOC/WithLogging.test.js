import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WithLogging from "./WithLogging.js";
import Footer from '../Footer/Footer.js'
configure({adapter: new Adapter()});

it("console.log was called on mount", () => {
    const WrapperFooter = WithLogging(Footer); 
    const wrapper = shallow(<WrapperFooter />)
    const consoleSpy = jest.spyOn(console, 'log');
    console.log(wrapper.text());
    expect(consoleSpy).toHaveBeenCalledWith('<Footer />')
})