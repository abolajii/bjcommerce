import React, { useState } from 'react';
import { images } from './data';

import {
	ArrowContainer,
	ArrowLeft,
	ArrowRight,
	Button,
	Container,
	Desc,
	Image,
	ImageContainer,
	InfoContainer,
	Inner,
	Slide,
	SlideContainer,
	Title,
} from './styles';

const Slider = () => {
	const [view, setView] = useState(0);

	const handleClick = (direction) => {
		if (direction === 'left') {
			setView(view > 0 ? view - 1 : 3);
		} else {
			setView(view < 3 ? view + 1 : 0);
		}
	};

	return (
		<Container>
			<Inner>
				<ArrowContainer onClick={() => handleClick('left')} direction='left'>
					<ArrowLeft />
				</ArrowContainer>
				<SlideContainer>
					{images.map((each) => {
						return (
							<Slide view={view} key={each.id} background={each.background}>
								<ImageContainer>
									<Image src={each.img} />
								</ImageContainer>
								<InfoContainer>
									<Title>{each.title}</Title>
									<Desc>{each.desc}</Desc>
									<Button>SHOW MORE</Button>
								</InfoContainer>
							</Slide>
						);
					})}
				</SlideContainer>
				<ArrowContainer onClick={() => handleClick('right')} direction='right'>
					<ArrowRight />
				</ArrowContainer>
			</Inner>
		</Container>
	);
};

export default Slider;
