/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-06 13:01:41
 * @LastEditors: lax
 * @LastEditTime: 2023-05-06 14:39:18
 */
const TaiChi = require("@/TaiChi.js");
const PHASES = ["金", "水", "木", "火", "土"];
const RELATION = require("@/alias.js");
class Phases extends TaiChi {
	constructor(phases, logos) {
		super(logos);
		this.phases =
			~~(phases + 1) === 0 ? PHASES.indexOf(this.phases) : this.phases % 5;
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
		if (!(another instanceof Phases)) throw new Error("");
		const phases = another.phases;
		// 我
		if (this.phases === phases) return 0;
		// 我生者
		if (this.phases === this.promotion()) return 1;
		// 生我者
		if (this.phases === this.promoted()) return 2;
		// 克我者
		if (this.phases === this.restrained()) return 3;
		// 我克者
		if (this.phases === this.restraint()) return 4;
		throw new Error("arg can`t be use");
	}

	// 我生者/相生
	promotion() {
		return (this.phases + 1) % 5;
	}

	// 相生
	sheng() {
		return this.promotion();
	}

	// 生我者/相泄
	promoted() {
		return (this.phases - 1 + 5) % 5;
	}

	// 相泄
	xie() {
		return this.promoted();
	}

	// 我克者/相克
	restraint() {
		return (this.phases + 2) % 5;
	}

	// 相克
	ke() {
		return this.restraint();
	}

	// 克我者/相耗
	restrained() {
		return (this.phases - 2 + 5) % 5;
	}

	// 相耗
	hao() {
		return this.restrained();
	}

	// 相乘
	// TODO

	// 相侮
	// TODO

	// 同我者旺
	vigorous() {
		return this.phases;
	}

	// 旺
	wang() {
		return this.vigorous();
	}

	// 我生者相
	second() {
		return this.promotion();
	}

	// 相
	xiang() {
		return this.second();
	}

	// 生我者休
	rest() {
		return this.promoted();
	}

	// 休
	xiu() {
		return this.rest();
	}

	// 克我者囚
	imprison() {
		return this.restrained();
	}

	// 囚
	qiu() {
		return this.imprison();
	}

	// 我克者死
	death() {
		return this.restraint();
	}

	// 死
	si() {
		return this.death();
	}

	get(tag) {
		switch (tag) {
			case "旺":
				return this.wang();
			case "相":
				return this.xiang();
			case "休":
				return this.xiu();
			case "囚":
				return this.qiu();
			case "死":
				return this.si();
			case "生":
				return this.sheng();
			case "泄":
				return this.xie();
			case "耗":
				return this.hao();
			case "克":
				return this.ke();
			default:
				throw new Error("必须有一个标签");
		}
	}
}
Phases.RELATION = RELATION;
module.exports = Phases;
