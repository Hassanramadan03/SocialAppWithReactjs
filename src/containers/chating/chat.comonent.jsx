import React from 'react'
import { Input, Button, Popup, SideBar } from 'react-chat-elements'


export default class HomeScreen extends React.Component {
    render() {
        return (
            <div>
                <SideBar
                    top={
                        <div>
                            <a href=''>popo</a>
                            <a href=''>momd</a>
                            <a href=''>sico</a>
                            <a href=''>shosho</a>
                            <a href=''>ali</a>
                            <a href=''>hassan</a>
                        </div>
                    }
                    center={
                        <div>
                            <a href=''>ahmed</a>
                            <a href=''>mohamed</a>
                            <a href=''>divid</a>
                            <a href=''>mostafa</a>
                            <a href=''>hassan</a>
                        </div>
                    }
                    bottom={
                        <div>
                            <a href=''>khalled</a>
                            <a href=''>khalled</a>
                            <a href=''>khalled</a>
                            <a href=''>khalled</a>
                            <a href=''>khalled</a>
                            <a href=''>khalled</a>
                        </div>
                    } />

            </div>
        );
    }




}

