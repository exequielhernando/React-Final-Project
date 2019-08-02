import React from 'react';


function ArtistListView(props) {
    const {
        artist,
        goTo,
    } = props;
    const isEmpy = artist.lenght === 0;
    return(
        <div>
            {isEmpy 
                ?<p>No result</p>
                :artist.map (item => 
                    <div key={item.id} className="card-container" >
                        <div className="card" onClick={() => goTo(`/ArtistList/${item.id}`)}>
                            <div>
                                <div
                                    className="card-media"
                                    image={item.image}
                                    title={item.title}
                                />
                                <div>
                                    <div variant="h5" component="h2">
                                        {item.title}
                                    </div>
                                    <div component="p">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>            
    );
}
export default ArtistListView;