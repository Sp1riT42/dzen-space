import { useEffect, useState } from 'react';
import { useGetPhotosQuery } from '@api/FlickrApi';

import './App.css';

import { Greeting } from './components/Greeting ';
import { Time } from './components/Time';
import { SApp } from './styles';

function App() {
	const { data: imgData } = useGetPhotosQuery();
	const [originalImgs, setOriginalImgs] = useState<{ url_o: string }[]>();
	useEffect(() => {
		if (imgData) {
			setOriginalImgs(
				imgData.photos.photo.filter((photo: any) => !!photo.url_o)
			);
		}
	}, [imgData]);
	if (originalImgs) {
		return (
			<SApp className="App" backgroundImg={`url(${originalImgs[0].url_o})`}>
				<div className={'overlay'} />
				<div className={'header'} />
				<div className={'center'}>
					<Time />
					<Greeting />
				</div>
				<div className={'footer'} />
			</SApp>
		);
	}
	return <div className="App" />;
}

export default App;
