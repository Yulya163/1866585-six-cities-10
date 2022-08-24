import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map';
import {Offers, Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../consts';
import {getCityData} from '../../utils';
import {getSelectedCity} from '../../store/offer-process/selectors';
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

  const selectedCity = useAppSelector(getSelectedCity);

  const city = getCityData(offers, selectedCity);

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {

    if (mapRef.current) {
      const markerIcons = mapRef.current.querySelectorAll('.leaflet-marker-icon');
      markerIcons.forEach((icon) => {
        icon.remove();
      });
    }

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
      data-testid="map"
    >
    </div>
  );
}

export default Map;
