window.onload = function() {
	start();
}

function start(){
	
	console.log('started');
	
	var galleryImagesNodeList = document.getElementsByClassName("galleryImage");
	var numberOfImages = galleryImagesNodeList.length;
	console.log(numberOfImages);
	var i = 0;
	while (i < numberOfImages)
	{
		galleryImagesNodeList[i].addEventListener("click", makeImageFullscreen);
		i++;
	}
	
	var thomImage = document.getElementById("thomImage");
	var jonnyImage = document.getElementById("jonnyImage");
	var edImage = document.getElementById("edImage");
	var philipImage = document.getElementById("philipImage");
	var colinImage = document.getElementById("colinImage");
	
	var aboutInformation = document.getElementById('aboutText');
	var enlargedImageHolder = document.getElementById('enlargedImage');

	thomImage.addEventListener("click", displayThomInfo);
	jonnyImage.addEventListener("click", displayJonnyInfo);
	edImage.addEventListener("click", displayEdInfo);
	philipImage.addEventListener("click", displayPhilipInfo);
	colinImage.addEventListener("click", displayColinInfo);
}

function makeImageFullscreen(){
	if(window.innerWidth < 1000)
	{
		var closeImageButton = document.getElementById('reduceImage');
		var galleryImageInfo = document.getElementById('pictureInformation');
		console.log('image made fullscreen');
		this.style.position = "absolute";
		this.style.width = "100%";
		this.style.height = "40%";
		this.style.top = "0";
		this.style.left = "0";
		this.style.zIndex = "2";
		closeImageButton.style.visibility = "visible";
		closeImageButton.addEventListener("click", reduceImage);
		document.getElementById('mobileBlackout').style.display = "inline";
	}
	else
	{
		var closeImageButton = document.getElementById('reduceImage');
		var galleryImageInfo = document.getElementById('pictureInformation');
		console.log('image made fullscreen');
		this.style.position = "absolute";
		this.style.width = "100%";
		this.style.height = "100%";
		this.style.top = "0";
		this.style.left = "0";
		this.style.zIndex = "2";
		closeImageButton.style.visibility = "visible";
		closeImageButton.addEventListener("click", reduceImage);
	}
	
	
	
}

function reduceImage(){
	location.reload();
	console.log('image reduced');
}

function displayThomInfo(){
	console.log('thom image clicked');
	aboutInformation.innerHTML = "Thomas Edward Yorke (born 7 October 1968) is an English musician best known as the lead singer and main songwriter of the alternative rock band Radiohead. A multi-instrumentalist, he mainly plays the guitar and piano. He is known for his falsetto vocals; in 2008, Rolling Stone ranked him the 66th greatest singer of all time.Yorke was born in Northamptonshire. His family lived in Scotland before settling in Oxfordshire, England, where he formed Radiohead with his schoolmates. After he graduated from the University of Exeter, Radiohead signed to Parlophone; their early hit Creep made Yorke a celebrity, and Radiohead have gone on to achieve critical acclaim and sales of over 30 million albums. Their fourth album, Kid A (2000), saw Yorke and the band move into electronic music, often manipulating his vocals. In 2006, Yorke released his debut solo album, The Eraser, comprising mainly electronic music. In 2009, to perform The Eraser live, he formed a new band, Atoms for Peace, with musicians including Red Hot Chili Peppers bassist Flea and Radiohead producer Nigel Godrich; they released an album, Amok, in 2013. In 2014, Yorke released his second solo album, Tomorrow's Modern Boxes. He has collaborated with artists including PJ Harvey, Flying Lotus, and Modeselektor, and has composed for film and theatre; his first feature film soundtrack, Suspiria, was released in October 2018. With artist Stanley Donwood, Yorke creates artwork for Radiohead albums. Yorke has been critical of the music industry, particularly of major labels and streaming services such as Spotify. With Radiohead and his solo work he has pioneered alternative music release platforms such as pay-what-you-want and BitTorrent. He is an activist on behalf of human rights, environmental, and anti-war causes, and his lyrics often incorporate political themes.";               
}

function displayJonnyInfo(){
	console.log('jonny image clicked');
	aboutInformation.innerHTML = "Jonathan Richard Guy Greenwood (born 5 November 1971) is an English musician and composer. He is the lead guitarist and keyboardist of the alternative rock band Radiohead, and has written a number of film scores. Along with his elder brother, Radiohead bassist Colin, Greenwood attended Abingdon School in Oxford, England, where he met the future band members. The youngest of the group, Greenwood was the last to join, first playing keyboards and harmonica but soon becoming lead guitarist. He abandoned a degree in music when the band signed to Parlophone; their debut single Creep was distinguished by Greenwood's aggressive guitar work. Radiohead have since achieved critical acclaim and sold over 30 million albums. A multi-instrumentalist, Greenwood plays bass guitar, piano, viola, and drums, among other instruments, and is a prominent player of the ondes Martenot, an early electronic instrument. He incorporates electronic techniques such as programming, sampling and looping in his work, and writes music software used by Radiohead. He described his role in the band as an arranger, helping to transform Thom Yorke's demos into full songs. Greenwood has been named one of the greatest guitarists of all time by several publications. Radiohead albums feature Greenwood's string and brass arrangements, and he has composed for orchestras including the London Contemporary Orchestra and the BBC Concert Orchestra. His first solo work, the soundtrack for the film Bodysong, was released in 2003. In 2007, he scored There Will Be Blood, directed by Paul Thomas Anderson, and has composed the soundtrack for every Anderson film since; in 2018, he was nominated for an Academy Award for his score for Anderson's Phantom Thread. Greenwood's other scores include two collaborations with director Lynne Ramsay. He has collaborated several times with the Israeli composer Shye Ben Tzur, including on the 2015 album Junun.";
}

function displayEdInfo(){
	console.log('ed image clicked');
	aboutInformation.innerHTML = "Edward John O'Brien (born 15 April 1968) is an English guitarist and member of the alternative rock band Radiohead. He makes extensive use of effects units to create atmospheric sounds and textures, and provides backing vocals. In 2010, Rolling Stone named O'Brien the 59th greatest guitarist of all time. O'Brien grew up listening to post-punk acts such as Siouxsie and the Banshees, Adam and the Ants, Depeche Mode, the Police and David Bowie. He said: It was a very foetal [time] for music because people who went to art college or artists, or musicians, suddenly thought, 'Oh, I can be that'. The members of Radiohead met while attending Abingdon School, an independent school for boys in Abingdon, Oxfordshire. O'Brien said of the first time he played with singer Thom Yorke, who asked to join him for a jam: Before that, [life] was a bit confusing, a bit crap. And then suddenly ... I felt something very strong, almost like some kind of epiphany, almost like: 'This is it.' O'Brien, along with drummer Philip Selway, was in the year above Yorke and bassist Colin Greenwood, and three years above Colin's brother, multi-instrumentalist Jonny Greenwood. In 1985, they formed On a Friday, the name referring to the band's usual rehearsal day in the school's music room. O'Brien studied economics at the University of Manchester";
}

function displayPhilipInfo(){
	console.log('philip image clicked');
	aboutInformation.innerHTML = "Philip James Selway (born 23 May 1967) is an English musician, singer, and songwriter best known as the drummer of English rock group Radiohead. In addition to drums, he provides backing vocals, synthesizers, along with occasional guitar and lead vocals, for 7 Worlds Collide. Selway is well known for his precision and proficiency in various styles and unusual time signatures, being named the 26th greatest drummer of all time by Gigwise in 2008. He has worked with Samaritans since 1991.  Selway has released two solo albums: Familial (2010) and Weatherhouse (2014).";
}

function displayColinInfo(){
	console.log('colin image clicked');
	aboutInformation.innerHTML = "Colin Charles Greenwood (born 26 June 1969) is an English musician and the bassist for the alternative rock band Radiohead. Along with his younger brother, Radiohead guitarist Jonny Greenwood, Greenwood attended Abingdon School in Oxford, England, where he met the future band members. Radiohead have since achieved critical acclaim and have sold over 30 million albums. Along with bass guitar, Greenwood plays upright bass and electronic instruments.";
}









