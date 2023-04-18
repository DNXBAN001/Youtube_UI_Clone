import { Favorite, Home,History, LibraryAdd, Subscriptions, VideoSettings, WatchLater }
from "@mui/icons-material";

export default function SideMenu(){
	
	return(
	
		<div className="side-menu-container">
			<div className="categories-container">
				<div className="menu-item-container">
					<div className="menu-item-icon">
						<Home />
					</div>
					<div className="menu-label">
						<p>Home</p>
					</div>
				</div>
				<div className="menu-item-container">
					<div className="menu-item-icon">
						<Home />
					</div>
					<div className="menu-label">
						<p>Shorts</p>
					</div>
				</div>
				<div className="menu-item-container">
					<div className="menu-item-icon">
						<Subscriptions />
					</div>
					<div className="menu-label">
						<p>Subscriptions</p>
					</div>
				</div>
			</div>
			<div className="categories-container">
				<div className="menu-item-container">
					<div className="menu-item-icon">
						<LibraryAdd />
					</div>
					<div className="menu-label">
						<p>Library</p>
					</div>
				</div>
				<div className="menu-item-container">
					<div className="menu-item-icon">
						<History />
					</div>
					<div className="menu-label">
						<p>History</p>
					</div>
				</div>
				<div className="menu-item-container">
					<div className="menu-item-icon">
						<VideoSettings />
					</div>
					<div className="menu-label">
						<p>Your Videos</p>
					</div>
				</div>
				<div className="menu-item-container">
					<div className="menu-item-icon">
						<WatchLater />	
					</div>
					<div className="menu-label">
						<p>Watch Later</p>
					</div>
				</div>
				<div className="menu-item-container">
					<div className="menu-item-icon">
						<Favorite />
					</div>
					<div className="menu-label">
						<p>Liked Videos</p>
					</div>
				</div>
				<div className="menu-item-container">
					<div className="menu-item-icon">
						<img src="./images/arrow-down.png" alt="" className="show-more-arrow"/>
					</div>
					<div className="menu-label">
						<p>show more</p>
					</div>
				</div>
			</div>
		</div>
	
	);
}