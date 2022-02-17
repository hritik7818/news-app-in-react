import React, { Component } from 'react';
import loading from '../utils/loading_spinner.gif';

export default function Spinner() {
    return (
        <div className="flex justify-center items-center h-96">
            <img src={loading} alt="loading" />
        </div>
    );
}
