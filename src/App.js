import Header from "./components/Header";
import React from "react";
import SideMenu from "./components/SideMenu";
import Video from "./components/Video";
import "./styles.css";
import videodata from "./videos-data";

export default function App() {

	const videos = videodata.data.videos.map(video => {
		return (
			<a href="https://www.google.com" className="anchors">
				<Video
				key={video.id}
				thumbnail={video.thumbnail}
				accPhoto={video.accPhoto}
				songName={video.songName}
				accName={video.accName}
				views={video.views}
				timePublished={video.timePublished}
			/>
			</a>
			
		);
	});

  return (
  
    <div className="app-container" >
      <Header />
	  <div className="main-body">
		  <SideMenu />
		  <div className="videos-container">
			{videos}
		  </div>
	  </div>
    </div>
	
  );
};

//<SideMenu />

//Style="background-color: #2E2E2E"

/*const [isNight, setIsNight] = React.useState(false);
	function toggleThemeColor(){

		setIsNight(prevState => !prevState);
	}

	let backgroundcolor = isNight ? "black": "white";
	const header = document.getElementsByClassName('app-container');
	header.backgroundColor = backgroundcolor;
	console.log(header);
	console.log(isNight);
	*/