import { useEffect, useState } from 'react';
import moment from 'moment';

import { SGreeting } from './styles';

const checkTimesOfDay = () => {
	const getHours = Number(moment().format('HH'));
	if (getHours >= 4 && getHours < 12) {
		return 'Доброе утро';
	}
	if (getHours >= 12 && getHours < 17) {
		return 'Добрый день';
	}
	if (getHours >= 17 && getHours < 24) {
		return 'Добрый вечер';
	}
	if (getHours >= 0 && getHours < 4) {
		return 'Доброй ночи';
	}
	return 'Добрый день';
};

export const Greeting = () => {
	const [greetingText, setGreetingText] = useState<string>(checkTimesOfDay());

	useEffect(() => {
		setGreetingText(checkTimesOfDay());
		const intervalId = setInterval(
			() => setGreetingText(checkTimesOfDay()),
			60000
		);
		return () => clearInterval(intervalId);
	}, []);

	return <SGreeting>{`${greetingText}, UserName`}</SGreeting>;
};
