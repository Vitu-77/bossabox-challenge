import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from '../views/Index';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/'>
                <Index />
            </Route>
        </Switch>
    </BrowserRouter>
)