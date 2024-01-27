/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-05 16:19:28
 * @LastEditors: lax
 * @LastEditTime: 2024-01-27 11:39:15
 */
const LOGOS = ["阴", "阳"];
class TaiChi {
	constructor(logos) {
		this.logos = ~~(logos + 1) === 0 ? LOGOS.indexOf(logos) : ~~logos % 2;
	}

	// setLogos(logos) {
	// 	this.logos = logos;
	// }

	getLogos(is = false) {
		return is ? LOGOS[this.logos] : this.logos;
	}
}
module.exports = TaiChi;
