import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'

const Map = ({searchResults}) => {

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

    const [selectedLocation, setSelectedLocation] = useState({})

    // console.log(coordinates)

    return (
        <div>
            <ReactMapGL
                mapStyle='mapbox://styles/hasaif/cktaccc1a6qqr17pmdb2ahduw'
                mapboxApiAccessToken={process.env.mapbox_key}
                {...viewport}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >


                {searchResults.map(result => (
                    <div key={result.long}>
                        <Marker
                            longitude={result.long}
                            latitude={result.lat}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                            <p 
                                onClick={() => setSelectedLocation(result)}
                                className='cursor-point text-2xl animate-bounce'
                            >
                                📌
                            </p> 

                            {/* popup will show when a user clicks on a marker */}
                            {selectedLocation.long === result.long ? (
                                <Popup
                                    onClose={() => setSelectedLocation({})}
                                    closeOnClick={true}
                                    latitude={result.lat}
                                    longitude={result.long}
                                >
                                    {result.title}
                                </Popup>
                            ): (
                                false
                            )}


                        </Marker>
                    </div>
                ))}
            </ReactMapGL>
        </div>
    )
}

export default Map
