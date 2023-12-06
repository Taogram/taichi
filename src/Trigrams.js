/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-06 13:01:41
 * @LastEditors: lax
 * @LastEditTime: 2023-10-11 21:33:36
 */
const Phases = require("tao_taichi.js");
/**
 * 乾兑离震巽坎艮坤
 * 坎坤震巽中乾兑艮离
 */
const ACQUIRED = ["坎", "坤", "震", "巽", "中", "乾", "兑", "艮", "离"];
const PRIORI = ["乾", "兑", "离", "震", "巽", "坎", "艮", "坤"];
const PRIORI_PHASES = ["金", "金", "火", "木", "木", "水", "土", "土"];
class Trigram extends Phases {
	constructor(trigram, phases) {
		if (typeof trigram === "object" && trigram instanceof Trigram)
			return trigram;
		let priori;
		let acquired;

		/**
		 * 先天卦序
		 */
		priori = ~~(trigram + 1) === 0 ? PRIORI.indexOf(trigram) : ~~trigram % 8;
		if (this.phases === -1)
			throw new Error(`该参数不可用/this arg can\`t be use =>${phases}`);

		/**
		 * 后天卦序
		 */
		acquired = ACQUIRED.indexOf(PRIORI[this.priori]);
		super(PRIORI_PHASES[priori]);

		this.priori = priori;
		this.acquired = acquired;
	}
}

module.exports = Trigram;
