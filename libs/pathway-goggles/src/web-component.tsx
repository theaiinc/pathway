import r2wc from '@r2wc/react-to-web-component';
import { PathwayGoggles } from './index';
import './index.css';

const PathwayGogglesWebComponent = r2wc(PathwayGoggles, {
  props: {
    apiUrl: 'string',
  },
});

customElements.define('pathway-goggles', PathwayGogglesWebComponent);
