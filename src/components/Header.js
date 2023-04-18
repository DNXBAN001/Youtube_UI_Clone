import React from "react";
import { AccountCircle, Menu, Notifications, RecordVoiceOverSharp, Search, VideoCameraBack } from '@mui/icons-material';

export default function Header(){
	
	return (
	
		<div className="header-container">
			<div class ="logo">
				<Menu />
				<img src="./images/youtube-logo.png" alt="logo" />
			</div>
			<div class="search-bar">
				<form action="">
					<input type="text" placeholder="Search..." />
					<button className="search-button"><Search className="search-icon"/></button>
					<button className="voice-search"><RecordVoiceOverSharp /></button>
				</form>
			</div>
			<div class="icons">
				<VideoCameraBack className="icon"/>
				<Notifications className="icon"/>
				<AccountCircle className="icon"/>
			</div>
		</div>
	
	);
}

/*
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
*<button className="voice-search"><RecordVoiceOverSharp /></button>
*/