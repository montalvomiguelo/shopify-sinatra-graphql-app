import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mountComponents } from 'react-sinatra-ujs';

mountComponents({ App: App });
