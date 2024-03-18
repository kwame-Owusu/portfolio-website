import "../styles/Socials.css"

const Socials = () => {
 return(
    <div className="social-links">
			<div className="social-container" >
				<a href="https://github.com/kwame-Owusu" target="_blank">
					<svg className="social-arrow"  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white">
						<polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
					</svg>
						GitHub
						
				</a>
				<span>/</span>
				<a href="https://www.linkedin.com/in/alfredow23/" target="_blank">
					<svg  className="social-arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white">
						<polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
					
					</svg>
						LinkedIn
						
				</a>
				<span>/</span>
				<a href="https://www.instagram.com/kwm.ows/" target="_blank">
					<svg className="social-arrow"  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white">
						<polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
					
					</svg>
						Instagram
						
				</a>
		</div>
		</div>


 );
}

export default Socials;
