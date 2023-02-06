import { FC } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon = '/assets/img/marker-icon.png';
const shadowIcon = '/assets/img/marker-shadow.png';

const myIcon = new Icon({
  iconUrl: markerIcon,
  shadowUrl: shadowIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Maps: FC = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-10 md:mb-16">
                <h2 className="font-primary font-semibold text-2xl lg:text-3xl text-primary mb-2">
                  Lokasi Kami
                </h2>

                <p className="max-w-screen-md text-gray-500 md:text-lg mx-auto">
                  Kunjungi Wikusama Hotel di Jl. Raden Panji Suroso No.7,
                  Purwodadi, Kec. Blimbing, Kota Malang, Jawa Timur 65126
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <MapContainer
                className="w-full h-96 lg:h-[500px] rounded-xl shadow-lg"
                center={[-7.94173, 112.64821]}
                zoom={16}
                scrollWheelZoom={true}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ZoomControl position="bottomleft" />

                <Marker position={[-7.94173, 112.64821]} icon={myIcon}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;
