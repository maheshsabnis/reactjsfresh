import React from 'react';
// First, we’re importing the three render types 
//in the beginning of the file from the enzyme.js file we created before. 
//Here, we’re contemplating four test scenarios for each type of rendering.
import { shallow, mount, render } from './../enzyme';

import OrderedList from './../componentsfortest/OrderList';

describe('Our test suite', () => {

// The first one is for the render type; 
// we’re basically asking Enzyme to render 
// an OrderedList with the given array of 
//animals param and asserting the test 
// conditions through the expect() function.

 //The wrapper object represents the render() 
 //result, and within it, we can call to find the CSS 
 //classes options (of our items’ children) and value,
 // regarding each of the inner list elements’ classes. 
 //We’re also testing the number of child elements.

    // it('renders all the mocked animal options', () => {
    //     const animals = ['duck', 'bear', 'whale'];
    //     // test the DOM for Parent <OrderedList> and its child <OrderedListOption>
    //     const wrapper = render(<OrderedList options={animals} />);

    //     expect(wrapper.find('.options')).toBeDefined();
    //     expect(wrapper.find('.value')).toHaveLength(animals.length);
    // });
// The second test focuses on a list that receives no elements.
// Here, we’re using the shallow render type, which makes methods
// like exists() available to us.
    it('renders no animal options', () => {
        const animals = [];
        const wrapper = shallow(<OrderedList options={animals} />);

        expect(wrapper.find('.empty').exists()).toBe(true);
    });
// The last two tests make use of the mount() function, 
//which will return the full DOM to the wrapper object. 
//The method contains() is another example of a React lifecycle method.
    // it('renders a single animal option', () => {
    //     const animals = ['duck'];
    //     const wrapper = mount(<OrderedList options={animals} />);

    //     expect(wrapper.contains(<li key='duck' className="value">duck</li >)).toBeTruthy();
    // });

    // it('renders correct text in animal option', () => {
    //     const animals = ['duck', 'bear', 'whale'];
    //     const wrapper = mount(<OrderedList options={animals} />);

    //     expect(wrapper.find('.value').get(0).props.children).toEqual('duck');
    // });
});