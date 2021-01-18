import React from 'react'
import PrimeraApp from "../PrimeraApp"
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
describe('test on PrimeraApp', () => {
    // test('should show \'hola soy goku\'', () => {
    //     const saludo = 'hola soy Goku'
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />)
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('should component correctly', () => {
        const saludo = 'hola'
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show subtitle sended to props', () => {
        const saludo = 'hola'
        const subtitulo = "soy un subtitulo"
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />)
        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe(subtitulo)

    })


})
