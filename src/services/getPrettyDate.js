import moment from 'moment';


const getDate = (date = undefined) => moment(date).format('D MMM YYYY');
export default getDate;
