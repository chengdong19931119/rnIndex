'use strict';
import React, { Component } from 'react';
import {
    View,
    Modal,
    ActivityIndicator
} from 'react-native';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false};
    }

    render() {
        return (
            <Modal
                transparent = {true}
                visible = {this.state.visible}
                onRequestClose = {() => this.setState({visible:false})}
            >
                <View
                    style={{
                        flex:1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <ActivityIndicator styleAttr="Inverse" size="large"/>
                </View>
            </Modal>
        );
    }
}