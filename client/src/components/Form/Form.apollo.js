import { compose } from 'react-apollo';

import { getUserTime, setUserTime } from '../../common/TimesAPI';
import Form from './Form';

export default compose(getUserTime, setUserTime)(Form);
