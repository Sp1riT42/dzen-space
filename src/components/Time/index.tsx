import { useEffect, useState } from 'react';
import moment from 'moment';

import { STime } from './styles';

export const Time = () => {
	const [time, setTime] = useState(moment().format('HH:mm'));

	useEffect(() => {
		const timeIntervalId = setInterval(
			() => setTime(moment().format('HH:mm')),
			60000
		);
		return () => clearInterval(timeIntervalId);
	}, []);
	return <STime>{time}</STime>;
};
