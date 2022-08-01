import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import {Offers, Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../consts';
import {getCityData} from '../../utils';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offers | undefined;
  selectedOffer?: Offer | undefined;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [26, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [26, 39],
  iconAnchor: [13, 39],
});

function Map(props: MapProps): JSX.Element {

  const {selectedOffer, offers} = props;

  const selectedCity = useAppSelector((state) => state.selectedCity);

  const city = getCityData(offers, selectedCity);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {

    if (map && offers) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (selectedOffer !== undefined && offer.id === selectedOffer.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <div
      style={{height: '100%', zIndex: '100'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
