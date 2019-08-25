import { subMonths, addMonths } from 'date-fns';

function date(state = new Date(), action) {
  switch (action.type) {
    case 'GO_PREV_MONTH':
      return subMonths(state, 1);
    case 'GO_NEXT_MONTH':
      return addMonths(state, 1);
    default:
      return state
  }
}

export default date;