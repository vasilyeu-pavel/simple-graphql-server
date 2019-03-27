import { compose } from 'react-apollo';

import { getUserTime } from '../../common/TimesAPI';
import User from './User';

export default compose(getUserTime)(User);
