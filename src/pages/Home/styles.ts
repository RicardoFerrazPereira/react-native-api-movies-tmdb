import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	background-color: #252323;
	margin-top: 100px;
	box-sizing: border-box;
`;

export const TextInputBox = styled.TextInput`
	height: 40px;
	margin: 12px;
	border-width: 1px;
	padding: 10px;
	border-color: #fff;
	color: #fff;
`;

export const LogoMovie = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SearchBox = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const ListBox = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px;
`;

export const Cards = styled.TouchableOpacity`
	margin: 1rem;
	width: 20rem;
	height: 60px;
	border-radius: 5px;
	box-shadow: 0px 1px 3px rgba(220, 220, 220, 0.25);
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: clip ellipsis;
`;

export const TextTitle = styled.Text`
	margin-left: 10px;
	margin-bottom: 5px;
	font-weight: bold;
	font-size: 10pt;
	color: #fff;
`;
export const TextName = styled.Text`
	margin-left: 10px;
	font-size: 9pt;
	color: #bdbdbd;
`;

export const ViewApi = styled.View`
	flex-direction: column;
`;

export const Img = styled.Image`
	height: 60px;
	width: 60px;
	border-radius: 5px;
`;
export const CenteredView = styled.View`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	margin-top: 22px;
	height: 100%;
`;

export const ModalView = styled.View`
	gap: 0.4rem;
	height: 100%;
	margin: 20px;
	width: 100%;
	background-color: #252323;
	border-radius: 20px;
	padding: 35px;
	align-items: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

// export const ModalText = styled.Text`
// 	margin-bottom: 25px;
// 	text-align: center;
// 	color: red;
// `;

export const ButtonClose = styled.Pressable`
	background-color: #ccdfef;
	border-radius: 10px;
	padding: 10px;
`;

// export const Button = styled.Pressable`
// 	border-radius: 20px;
// 	padding: 10px;
// `;

export const TextTitleModal = styled.Text`
	margin-left: 10px;
	margin-bottom: 5px;
	font-weight: bold;
	font-size: 20pt;
	color: #fff;
	text-align: center;
`;
export const TextNameModal = styled.Text`
	margin-left: 10px;
	font-size: 13pt;
	margin-bottom: 5px;
	color: #fff;
`;

export const TextNameVote = styled.Text`
	font-size: 12pt;

	margin-left: 5px;
	color: #bdbdbd;
`;

export const ViewVote = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const TextNameModalOver = styled.Text`
	margin-left: 10px;
	font-size: 10pt;
	margin-bottom: 30px;
	color: #bdbdbd;
`;

export const ViewYear = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TextYear = styled.View`
	font-size: 12pt;
	margin-bottom: 5px;
	color: #bdbdbd;
`;

export const ViewOver = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	max-height: 200px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Poster = styled.Image`
	width: 200px;
	height: 200px;
	border-radius: 3px;
`;

export const ViewClub = styled.View`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

export const TextClub = styled.View`
	color: #fff;
	font-size: 20px;
	font-weight: bold;
	font-family: "Arial, Helvetica, sans-serif";
`;
