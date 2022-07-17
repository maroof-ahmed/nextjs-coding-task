import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Button from '../components/Button';

// @css
const SectionWrapper = styled.section`
	@font-face {
		font-family: '-OC Rey';
		src: url('/fonts/ocrey.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Wigrum';
		src: url('/fonts/Wigrum-Light.otf') format('opentype');
	}

	background-color: #111;
	color: #fff;
	height: 800px;
	width: 100%;

	@media only screen and (max-width: 480px) {
		height: auto;
	}
`;

const ArticleWrapper = styled.article`
	display: flex;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	@media only screen and (max-width: 480px) {
		flex-direction: column-reverse;
		padding-bottom: 50px;
	}
`;

const Img = styled.img`
	width: auto;
	height: 800px;

	@media only screen and (max-width: 480px) {
		width: 100%;
		height: auto;
	}
`;

const HeadingsWrapper = styled.div`
	padding: 0 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;;
	height: 100%;
	max-width: 553px;

	@media only screen and (max-width: 480px) {
		padding: 0 25px;
	}
`;

const Heading = styled.h1`
	font-family: '-OC Rey';
	font-size: 72px;
	margin: 0 0 35px 0;
	font-style: normal;
	font-weight: 400;
	line-height: 130%;

	@media only screen and (max-width: 480px) {
		font-size: 40px;
		line-height: 120%;
		margin: 10px 0 25px 0;
	}
`;

const SubHeading = styled.h2`
	font-family: 'Wigrum';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 130%;
	margin: 0 0 50px 0;
	max-width: 465px;

	@media only screen and (max-width: 480px) {
		font-size: 14px;
		line-height: 140%;
		margin: 0 0 40px 0;
	}
`;

const ImgWrapper = styled.div`
	padding: 0 30px;

	@media only screen and (max-width: 480px) {
		padding: 0;
	}
`;

const ButtonWrapper = styled.div`
	@media only screen and (max-width: 480px) {
		width: 100%;
		button {
			width: 100%;
		}
	}
`;


export default function Section({ children, ...props }) {

  return (
		<SectionWrapper>
			<section className="" {...props}>
				<ArticleWrapper>
					<HeadingsWrapper>
						<Heading>{children}</Heading>
            <SubHeading>{props.subheading}</SubHeading>
						<ButtonWrapper> 
							<Button custom size="large">
								Learn more about WiFi 6E
							</Button>
						</ButtonWrapper>
					</HeadingsWrapper>
					<ImgWrapper>
						<Img src={props.imageUrl} alt="An Image" />
					</ImgWrapper>
				</ArticleWrapper>
			</section>
		</SectionWrapper>
	);
}

Section.propTypes = {
	subheading: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
};

Section.defaultProps = {

};
