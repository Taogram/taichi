class TaiChi{
	constructor(){
		this.logos;
		this.LOGOS = ["阴","阳"];
	}
	setLogos(logos){
		this.logos = logos;
	}
	getLogos(is = false){
		return is?"":this.logos;
	}
}
