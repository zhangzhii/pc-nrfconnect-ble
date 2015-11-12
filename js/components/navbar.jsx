/* Copyright (c) 2015 Nordic Semiconductor. All Rights Reserved.
 *
 * The information contained herein is property of Nordic Semiconductor ASA.
 * Terms and conditions of usage are described in detail in NORDIC
 * SEMICONDUCTOR STANDARD SOFTWARE LICENSE AGREEMENT.
 *
 * Licensees are granted free, non-transferable use of the information. NO
 * WARRANTY of ANY KIND is provided. This heading must NOT be removed from
 * the file.
 *
 */

'use strict';

import Reflux from 'reflux';
import React, { Component } from 'react';

import AdapterSelector from './AdapterSelector';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStyle: { boxShadow: 'inset 0 5px 10px #133e40' },
            passiveStyle: {},
            adapterState: { connected: false }
        };
    }

    _onViewChange(newView) {
        this.props.onChangeMainView(newView);
        this.props.view = newView;
    }

    _getClassForTabButton(itemName) {
        return 'btn btn-primary btn-nordic padded-row' + (this.props.view === itemName ? ' active' : '');
    }

    focusOnComPorts() {
        this.refs.adapterSelector.focusOnComPorts();
    }

    render() {
        return (
            <div className="nav-bar">
                <div>
                    <img className="nordic-logo" src="resources/NordicS_neg_ol.png" />
                </div>
                <div className="nav-section">
                    <div className="padded-row">
                        <AdapterSelector ref="adapterSelector"/>
                    </div>
                </div>
                <div className="nav-section bl padded-row">
                    <button title="Connection map (Alt+1)" onClick={this._onViewChange.bind(this, 'ConnectionMap')} className={this._getClassForTabButton('ConnectionMap')}>
                        <span className="icon-sitemap icon-rotate-270" />
                        <span>Connection map</span>
                    </button>
                    <button title="Device details (Alt+2)" onClick={this._onViewChange.bind(this, 'DeviceDetails')}  className={this._getClassForTabButton('DeviceDetails')}>
                        <span className="icon-columns" />
                        <span>Device details</span>
                    </button>
                    <button onClick={this._onViewChange.bind(this, 'ServerSetup')}  className={this._getClassForTabButton('ServerSetup')}>
                        <span className="icon-indent-right" />
                        <span>Server setup</span>
                    </button>
                </div>
            </div>
        );
    }
};
