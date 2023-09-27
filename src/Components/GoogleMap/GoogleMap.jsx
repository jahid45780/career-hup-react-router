import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
    const defaultProps = {
        center: {
          lat: 23.6850,
          lng:90.3563
        },
        zoom: 20
      };
    return (
        <div>
            <h2>Google Map</h2>
            <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
    </div>
        </div>
    );
};

export default GoogleMap;