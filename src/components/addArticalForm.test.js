import React from 'react'
import { mount, configure } from 'enzyme'
import AddArticalForm from './addArticalForm'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('<AddArticalForm />', () => {
    it('initialize state', () => {
        const wrapper = mount(<AddArticalForm />);
        //console.log(wrapper.state())

        expect(wrapper.state().title).toEqual('')
        expect(wrapper.state().description).toEqual('')
    })

    it('handleTitleInputChange change state.title', () => {
        const wrapper = mount(<AddArticalForm />);
        let title = 'cracking the coding interview'
        const event = {target: {value: title} }

        wrapper.find('input#title').simulate('change', event)
        
        expect(wrapper.state().title).toEqual(title)
    })

    it('handleDescriptionTextAreaChange change state.title', () => {
        const wrapper = mount(<AddArticalForm />);
        let description = 'Now in the 5th edition, the book gives you the interview preparation you need to get the top software developer jobs'
        const event = {target: {value: description} }
        wrapper.find('textarea#description').simulate('change', event)

        expect(wrapper.state().description).toEqual(description)
    })

    it('handleSubmit call addArtical with valid data', () => {
        const mockAddArtical = jest.fn();
        const wrapper = mount(<AddArticalForm addArtical = {mockAddArtical} />);
        //console.log(wrapper.props())
        let artical = { title: 'title', description: 'description' };
        wrapper.setState(artical);
        const event = { preventDefault () {} }

        wrapper.find('form').simulate('submit', event)   
        //console.log(mockAddArtical.mock.calls)
        
        expect(mockAddArtical.mock.calls.length).toBe(1);
        expect(mockAddArtical.mock.calls[0][0]).toEqual(artical)
    })
})