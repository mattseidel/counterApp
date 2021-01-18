import React from 'react'

import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import CounterApp from '../CounterApp'
describe('test on PrimeraApp', () => {

    let wrapper = shallow(<CounterApp />)
    beforeEach(() => {
        wrapper = shallow(<CounterApp />)
    })

    test('should component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should show value correctly', () => {

        const value = "100"
        const wrapper = shallow(
            <CounterApp
                value={value}
            />)
        const textoParrafo = wrapper.find('h2').text()
        expect(textoParrafo).toBe(value)

    })

    test('should increment with +1 button', () => {
        wrapper.find("button").at(0).simulate('click', { preventDefault: () => { } });
        const textoParrafo = wrapper.find('h2').text()
        console.log(textoParrafo);
        expect(textoParrafo).toBe("11")

    })

    test('should increment with -1 button', () => {
        wrapper.find("button").at(2).simulate('click', { preventDefault: () => { } });
        const textoParrafo = wrapper.find('h2').text()
        console.log(textoParrafo);
        expect(textoParrafo).toBe("9")

    })

    test('should reset default value', () => {
        const wrapper = shallow(
            <CounterApp
                value={105}
            />)
        wrapper.find("button").at(0).simulate('click', { preventDefault: () => { } });
        wrapper.find("button").at(0).simulate('click', { preventDefault: () => { } });
        wrapper.find("button").at(1).simulate('click', { preventDefault: () => { } });
        const textoParrafo = wrapper.find('h2').text()

        expect(textoParrafo).toBe('105')

    })


})