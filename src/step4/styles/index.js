import { injectGlobal } from 'styled-components';

import reset from './reset';

const base = () => injectGlobal`
  ${reset}
`;

export { base };
