import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home'
import ArtistList from '../components/artistList'; 
import Artist from '../components/artist'; 
import Album from '../components/album'; 
const getRoutes = () => {
	return (
			<div>
				<Switch>
					<Route Home="/" component={Home} />
					<Route path="/ArtistList/:itemId" component={ArtistList} />
					<Route path="/Artist/" component={Artist} />
					<Route path="/Album" component={Album} />
				</Switch>
			</div>
		
	)
};

export default getRoutes;
