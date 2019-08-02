import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home'
import ArtistList from '../components/artistList/ArtistList'; 
import Artist from '../components/artist/Artist'; 
import Album from '../components/album/Album'; 
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
