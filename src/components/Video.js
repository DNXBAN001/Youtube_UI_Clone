
export default function Video(props){
	

	return(
	
		<div className="video-container">
			<div className="thumbnail">
				<img src={props.thumbnail} alt="thumbnail" />
			</div>
			<div className="video-info">
				<div className="acc-photo">
					<img src={props.accPhoto} alt="acc-pic"/>
				</div>
				<div class="title">
					<h3>{props.songName}</h3>
					<div><a href="/">{props.accName}</a></div>
					<span>{props.views} . {props.timePublished}</span>
				</div>
			</div>
		</div>
	
	);
}
