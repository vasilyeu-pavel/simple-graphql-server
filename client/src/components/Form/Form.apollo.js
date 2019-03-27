import { compose } from 'react-apollo';

import { setUserTime } from '../../common/TimesAPI';
import Form from './Form';

export default compose(setUserTime)(Form);
