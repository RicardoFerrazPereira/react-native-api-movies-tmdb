import React, { useState, useEffect } from "react";
import {
	FlatList,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	Modal,
	StyleSheet,
	Keyboard,
	SafeAreaView,
} from "react-native";
import {
	ButtonClose,
	Cards,
	CenteredView,
	Container,
	Img,
	ListBox,
	LogoMovie,
	ModalView,
	Poster,
	SearchBox,
	TextClub,
	TextInputBox,
	TextName,
	TextNameModal,
	TextNameModalOver,
	TextNameVote,
	TextTitle,
	TextTitleModal,
	TextYear,
	ViewApi,
	ViewClub,
	ViewOver,
	ViewVote,
	ViewYear,
} from "./styles";

import axios from "axios";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
	type Movie = {
		adult: boolean;
		overview: string;
		release_date: string;
		id: number;
		title: string;
		original_language: string;
		backdrop_path: string;
		vote_average: number;
	};

	const [modalVisible, setModalVisible] = useState(false);
	const [search, setSearch] = useState("");
	const [movies, setMovies] = useState<Movie[]>([]);
	const [selectedMovie, setSelectedMovie] = useState<Movie>();

	const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=87e5ec7837951afdec6a5a495b8670b2&language=pt-BR&query=${search}&page=1&include_adult=false`;
	const imageURL = "https://image.tmdb.org/t/p/w500/";

	const getMovie = async () => {
		Keyboard.dismiss();
		try {
			const resultados = await axios.get(searchURL);
			console.log("results" + JSON.stringify(resultados.data.results));
			if (resultados.data.results.length < 1) {
				alert("Filme não encontrado");
				console.log("vazio");
			} else {
				setMovies(resultados.data.results);
			}
		} catch (err) {
			console.log(err);
		}
	};

	// useEffect(() => {
	// 	const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
	// 	getSearchMovies(searchWithQueryURL);
	// }, []);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(search);
		getMovie();
		setSearch("");
	};

	const Item = ({
		title,
		id,
		release_date,
		original_language,
		backdrop_path,
		onPress,
	}) => (
		<Cards onPress={onPress}>
			<ViewApi>
				<Img source={{ uri: imageURL + backdrop_path }} />
			</ViewApi>
			<View>
				<TextTitle>{title}</TextTitle>
				<TextName>Lançamento: {release_date}</TextName>
				<TextName>Origem: {original_language}</TextName>
			</View>
		</Cards>
	);

	// const d = new Date();
	// let year = d.getFullYear();

	const RenderedItem = ({ item }) => (
		<Item
			title={item.title}
			release_date={item.release_date}
			original_language={item.original_language}
			backdrop_path={item.backdrop_path}
			onPress={() => getItem(item.id)}
		/>
	);

	const getItem = (idMovie) => {
		movies.map((movie) => movie.id === idMovie && setSelectedMovie(movie));
		setModalVisible(true);
	};

	return (
		<Container>
			<LogoMovie>
				<View>
					<Ionicons name="ios-videocam" size={44} color="#fff" />
				</View>
			</LogoMovie>
			<ViewClub>
				<TextClub>Movie Club</TextClub>
			</ViewClub>
			<SearchBox>
				<TextInputBox
					placeholder="Busque o filme"
					onChangeText={setSearch}
					value={search}
					onSubmitEditing={() => {
						getMovie();
						setSearch("");
					}}
				/>
				<TouchableOpacity>
					<Text>
						<Ionicons
							name="md-search"
							size={24}
							color="#fff"
							onPress={handleSubmit}
						/>
					</Text>
				</TouchableOpacity>
			</SearchBox>
			<ListBox>
				<View>
					<FlatList
						data={movies}
						//keyExtractor={({ id }, index) => id}
						keyExtractor={(item) => item.id}
						renderItem={RenderedItem}
					/>
				</View>
			</ListBox>
			<CenteredView>
				<Modal
					animationType="fade"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						alert("Modal has been closed.");
						setModalVisible(!modalVisible);
					}}
				>
					<CenteredView>
						<ModalView>
							<Poster source={{ uri: imageURL + selectedMovie?.backdrop_path }} />
							<TextTitleModal>{selectedMovie?.title}</TextTitleModal>
							<ViewYear>
								<TextYear>Data de lançamento</TextYear>
								<TextNameModal>{selectedMovie?.release_date}</TextNameModal>
							</ViewYear>

							<ViewVote>
								<View>
									<AntDesign name="star" size={18} color="yellow" />
								</View>
								<TextNameVote>{selectedMovie?.vote_average}</TextNameVote>
							</ViewVote>
							<ViewOver>
								<TextNameModalOver>{selectedMovie?.overview}</TextNameModalOver>
							</ViewOver>

							<ButtonClose onPress={() => setModalVisible(!modalVisible)}>
								<Text>Fechar</Text>
							</ButtonClose>
						</ModalView>
					</CenteredView>
				</Modal>
			</CenteredView>
		</Container>
	);
};

// const styles = StyleSheet.create({
// 	button: {
// 		borderRadius: 5,
// 		padding: 10,
// 		elevation: 2,
// 		backgroundColor: "#ccdfef",
// 	},
// });

export default Home;
