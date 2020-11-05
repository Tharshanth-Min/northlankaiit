import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes';
import AdminRoute from './Admin';
import PublicRoute from './Public';

const Routes = () => (
        <Switch>
            {routes.map((route) => {
                if (route.auth) {
                    return <AdminRoute key={route.path} {...route}/>
                }
                return <PublicRoute key={route.path} {...route} />;
            })}
        </Switch>
);

export default Routes;
