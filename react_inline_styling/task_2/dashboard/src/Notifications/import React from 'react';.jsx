import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
    let wrapper;
    const listNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } }
    ];

    it('should return true when props.displayDrawer changes', () => {
        wrapper = shallow(<Notifications displayDrawer={false} notifications={listNotifications} />);
        const instance = wrapper.instance();
        const nextProps = { displayDrawer: true, notifications: listNotifications };
        
        expect(instance.shouldComponentUpdate(nextProps)).toBe(true);
    });

    it('should return false when props.displayDrawer doesnt change', () => {
        wrapper = shallow(<Notifications displayDrawer={false} notifications={listNotifications} />);
        const instance = wrapper.instance();
        const nextProps = { displayDrawer: false, notifications: listNotifications };
        
        expect(instance.shouldComponentUpdate(nextProps)).toBe(false);
    });
    
    it('should return true when adding a notification', () => {
        wrapper = shallow(<Notifications displayDrawer={false} notifications={listNotifications} />);
        const instance = wrapper.instance();
        const newNotifications = [
            ...listNotifications,
            { id: 4, type: 'default', value: 'New notification added' }
        ];
        const nextProps = { displayDrawer: false, notifications: newNotifications };
        
        expect(instance.shouldComponentUpdate(nextProps)).toBe(true);
    });
    
    it('should return true when modifying a notification', () => {
        wrapper = shallow(<Notifications displayDrawer={false} notifications={listNotifications} />);
        const instance = wrapper.instance();
        const modifiedNotifications = [
            { id: 1, type: 'default', value: 'New course available - updated' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } }
        ];
        const nextProps = { displayDrawer: false, notifications: modifiedNotifications };
        
        expect(instance.shouldComponentUpdate(nextProps)).toBe(true);
    });
});