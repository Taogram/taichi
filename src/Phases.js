/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-06 13:01:41
 * @LastEditors: lax
 * @LastEditTime: 2023-05-06 15:56:17
 */
const TaiChi = require("@/TaiChi.js");
const PHASES = ["金", "水", "木", "火", "土"];
const RELATION = require("@/alias.js");
class Phases extends TaiChi {
	constructor(phases, logos) {
		if (typeof phases === "object" && phases instanceof PHASES) return phases;
		super(logos);
		this.phases = ~~(phases + 1) === 0 ? PHASES.indexOf(phases) : ~~phases % 5;
		if (this.phases === -1) throw new Error("this arg can`t be use");
	}

	setPhases(phases) {
		this.phases = phases;
	}

	getPhases(is = false) {
		return is ? PHASES[this.phases] : this.phases;
	}

	/**
	 * @description 与另一五行的生克关系
	 * @param {Phases} another
	 * @returns
	 */
	with(another) {
		const ano = new Phases(another);
		const phases = ano.phases;
		// 我
		if (this.phases === phases) return 0;
		// 我生者
		if (this.promotion() === phases) return 1;
		// 生我者
		if (this.promoted() === phases) return 2;
		// 克我者
		if (this.restrained() === phases) return 3;
		// 我克者
		if (this.restraint() === phases) return 4;
		throw new Error("arg can`t be use");
	}

	// 我生者/相生
	promotion(is = false) {
		const index = (this.phases + 1) % 5;
		return is ? PHASES[index] : index;
	}

	// 相生
	sheng(is) {
		return this.promotion(is);
	}

	// 生我者/相泄
	promoted(is = false) {
		const index = (this.phases - 1 + 5) % 5;
		return is ? PHASES[index] : index;
	}

	// 相泄
	xie(is) {
		return this.promoted(is);
	}

	// 我克者/相克
	restraint(is = false) {
		const index = (this.phases + 2) % 5;
		return is ? PHASES[index] : index;
	}

	// 相克
	ke(is) {
		return this.restraint(is);
	}

	// 克我者/相耗
	restrained(is = false) {
		const index = (this.phases - 2 + 5) % 5;
		return is ? PHASES[index] : index;
	}

	// 相耗
	hao(is) {
		return this.restrained(is);
	}

	// 相乘
	// TODO

	// 相侮
	// TODO

	// 同我者旺
	vigorous(is) {
		return this.getPhases(is);
	}

	// 旺
	wang(is) {
		return this.vigorous(is);
	}

	// 我生者相
	second(is) {
		return this.promotion(is);
	}

	// 相
	xiang(is) {
		return this.second(is);
	}

	// 生我者休
	rest(is) {
		return this.promoted(is);
	}

	// 休
	xiu(is) {
		return this.rest(is);
	}

	// 克我者囚
	imprison(is) {
		return this.restrained(is);
	}

	// 囚
	qiu(is) {
		return this.imprison(is);
	}

	// 我克者死
	death(is) {
		return this.restraint(is);
	}

	// 死
	si(is) {
		return this.death(is);
	}

	get(tag, is = false) {
		switch (tag) {
			case "旺":
				return this.wang(is);
			case "相":
				return this.xiang(is);
			case "休":
				return this.xiu(is);
			case "囚":
				return this.qiu(is);
			case "死":
				return this.si(is);
			case "生":
				return this.sheng(is);
			case "泄":
				return this.xie(is);
			case "耗":
				return this.hao(is);
			case "克":
				return this.ke(is);
			default:
				throw new Error("this tag must be in [旺相休囚死生泄耗克]");
		}
	}
}
Phases.RELATION = RELATION;
module.exports = Phases;
