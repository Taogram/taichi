const Phases = require("@/Phases.js");
describe("五行生克", () => {
	it("金", () => {
		const element = new Phases(0);
		// init
		expect(element.getPhases()).toBe(0);
		expect(element.getPhases(true)).toBe("金");
		// 生被生被克克/生泄耗克
		expect(element.promotion(true)).toBe("水");
		expect(element.sheng(true)).toBe("水");
		expect(element.get("生", true)).toBe("水");
		expect(element.promoted(true)).toBe("土");
		expect(element.xie(true)).toBe("土");
		expect(element.get("泄", true)).toBe("土");
		expect(element.restrained(true)).toBe("火");
		expect(element.hao(true)).toBe("火");
		expect(element.get("耗", true)).toBe("火");
		expect(element.restraint(true)).toBe("木");
		expect(element.ke(true)).toBe("木");
		expect(element.get("克", true)).toBe("木");
		// 旺相休囚死
		expect(element.vigorous(true)).toBe("金");
		expect(element.second(true)).toBe("水");
		expect(element.rest(true)).toBe("土");
		expect(element.imprison(true)).toBe("火");
		expect(element.death(true)).toBe("木");
		expect(element.wang(true)).toBe("金");
		expect(element.xiang(true)).toBe("水");
		expect(element.xiu(true)).toBe("土");
		expect(element.qiu(true)).toBe("火");
		expect(element.si(true)).toBe("木");
		expect(element.get("旺", true)).toBe("金");
		expect(element.get("相", true)).toBe("水");
		expect(element.get("休", true)).toBe("土");
		expect(element.get("囚", true)).toBe("火");
		expect(element.get("死", true)).toBe("木");

		expect(element.with("金")).toBe(Phases.RELATION.VIGOROUS);
		expect(element.with("水")).toBe(Phases.RELATION.SECOND);
		expect(element.with("土")).toBe(Phases.RELATION.REST);
		expect(element.with("火")).toBe(Phases.RELATION.IMPRISON);
		expect(element.with("木")).toBe(Phases.RELATION.DEATH);
	});

	it("水", () => {
		const element = new Phases(1);
		// init
		expect(element.getPhases()).toBe(1);
		expect(element.getPhases(true)).toBe("水");
		// 生被生被克克/生泄耗克
		expect(element.promotion(true)).toBe("木");
		expect(element.sheng(true)).toBe("木");
		expect(element.get("生", true)).toBe("木");
		expect(element.promoted(true)).toBe("金");
		expect(element.xie(true)).toBe("金");
		expect(element.get("泄", true)).toBe("金");
		expect(element.restrained(true)).toBe("土");
		expect(element.hao(true)).toBe("土");
		expect(element.get("耗", true)).toBe("土");
		expect(element.restraint(true)).toBe("火");
		expect(element.ke(true)).toBe("火");
		expect(element.get("克", true)).toBe("火");
		// 旺相休囚死
		expect(element.vigorous(true)).toBe("水");
		expect(element.second(true)).toBe("木");
		expect(element.rest(true)).toBe("金");
		expect(element.imprison(true)).toBe("土");
		expect(element.death(true)).toBe("火");
		expect(element.wang(true)).toBe("水");
		expect(element.xiang(true)).toBe("木");
		expect(element.xiu(true)).toBe("金");
		expect(element.qiu(true)).toBe("土");
		expect(element.si(true)).toBe("火");
		expect(element.get("旺", true)).toBe("水");
		expect(element.get("相", true)).toBe("木");
		expect(element.get("休", true)).toBe("金");
		expect(element.get("囚", true)).toBe("土");
		expect(element.get("死", true)).toBe("火");

		expect(element.with("水")).toBe(Phases.RELATION.VIGOROUS);
		expect(element.with("木")).toBe(Phases.RELATION.SECOND);
		expect(element.with("金")).toBe(Phases.RELATION.REST);
		expect(element.with("土")).toBe(Phases.RELATION.IMPRISON);
		expect(element.with("火")).toBe(Phases.RELATION.DEATH);
	});

	it("木", () => {
		const element = new Phases(2);
		// init
		expect(element.getPhases()).toBe(2);
		expect(element.getPhases(true)).toBe("木");
		// 生被生被克克/生泄耗克
		expect(element.promotion(true)).toBe("火");
		expect(element.sheng(true)).toBe("火");
		expect(element.get("生", true)).toBe("火");
		expect(element.promoted(true)).toBe("水");
		expect(element.xie(true)).toBe("水");
		expect(element.get("泄", true)).toBe("水");
		expect(element.restrained(true)).toBe("金");
		expect(element.hao(true)).toBe("金");
		expect(element.get("耗", true)).toBe("金");
		expect(element.restraint(true)).toBe("土");
		expect(element.ke(true)).toBe("土");
		expect(element.get("克", true)).toBe("土");
		// 旺相休囚死
		expect(element.vigorous(true)).toBe("木");
		expect(element.second(true)).toBe("火");
		expect(element.rest(true)).toBe("水");
		expect(element.imprison(true)).toBe("金");
		expect(element.death(true)).toBe("土");
		expect(element.wang(true)).toBe("木");
		expect(element.xiang(true)).toBe("火");
		expect(element.xiu(true)).toBe("水");
		expect(element.qiu(true)).toBe("金");
		expect(element.si(true)).toBe("土");
		expect(element.get("旺", true)).toBe("木");
		expect(element.get("相", true)).toBe("火");
		expect(element.get("休", true)).toBe("水");
		expect(element.get("囚", true)).toBe("金");
		expect(element.get("死", true)).toBe("土");

		expect(element.with("木")).toBe(Phases.RELATION.VIGOROUS);
		expect(element.with("火")).toBe(Phases.RELATION.SECOND);
		expect(element.with("水")).toBe(Phases.RELATION.REST);
		expect(element.with("金")).toBe(Phases.RELATION.IMPRISON);
		expect(element.with("土")).toBe(Phases.RELATION.DEATH);
	});

	it("火", () => {
		const element = new Phases(3);
		// init
		expect(element.getPhases()).toBe(3);
		expect(element.getPhases(true)).toBe("火");
		// 生被生被克克/生泄耗克
		expect(element.promotion(true)).toBe("土");
		expect(element.sheng(true)).toBe("土");
		expect(element.get("生", true)).toBe("土");
		expect(element.promoted(true)).toBe("木");
		expect(element.xie(true)).toBe("木");
		expect(element.get("泄", true)).toBe("木");
		expect(element.restrained(true)).toBe("水");
		expect(element.hao(true)).toBe("水");
		expect(element.get("耗", true)).toBe("水");
		expect(element.restraint(true)).toBe("金");
		expect(element.ke(true)).toBe("金");
		expect(element.get("克", true)).toBe("金");
		// 旺相休囚死
		expect(element.vigorous(true)).toBe("火");
		expect(element.second(true)).toBe("土");
		expect(element.rest(true)).toBe("木");
		expect(element.imprison(true)).toBe("水");
		expect(element.death(true)).toBe("金");
		expect(element.wang(true)).toBe("火");
		expect(element.xiang(true)).toBe("土");
		expect(element.xiu(true)).toBe("木");
		expect(element.qiu(true)).toBe("水");
		expect(element.si(true)).toBe("金");
		expect(element.get("旺", true)).toBe("火");
		expect(element.get("相", true)).toBe("土");
		expect(element.get("休", true)).toBe("木");
		expect(element.get("囚", true)).toBe("水");
		expect(element.get("死", true)).toBe("金");

		expect(element.with("火")).toBe(Phases.RELATION.VIGOROUS);
		expect(element.with("土")).toBe(Phases.RELATION.SECOND);
		expect(element.with("木")).toBe(Phases.RELATION.REST);
		expect(element.with("水")).toBe(Phases.RELATION.IMPRISON);
		expect(element.with("金")).toBe(Phases.RELATION.DEATH);
	});

	it("土", () => {
		const element = new Phases(4);
		// init
		expect(element.getPhases()).toBe(4);
		expect(element.getPhases(true)).toBe("土");
		// 生被生被克克/生泄耗克
		expect(element.promotion(true)).toBe("金");
		expect(element.sheng(true)).toBe("金");
		expect(element.get("生", true)).toBe("金");
		expect(element.promoted(true)).toBe("火");
		expect(element.xie(true)).toBe("火");
		expect(element.get("泄", true)).toBe("火");
		expect(element.restrained(true)).toBe("木");
		expect(element.hao(true)).toBe("木");
		expect(element.get("耗", true)).toBe("木");
		expect(element.restraint(true)).toBe("水");
		expect(element.ke(true)).toBe("水");
		expect(element.get("克", true)).toBe("水");
		// 旺相休囚死
		expect(element.vigorous(true)).toBe("土");
		expect(element.second(true)).toBe("金");
		expect(element.rest(true)).toBe("火");
		expect(element.imprison(true)).toBe("木");
		expect(element.death(true)).toBe("水");
		expect(element.wang(true)).toBe("土");
		expect(element.xiang(true)).toBe("金");
		expect(element.xiu(true)).toBe("火");
		expect(element.qiu(true)).toBe("木");
		expect(element.si(true)).toBe("水");
		expect(element.get("旺", true)).toBe("土");
		expect(element.get("相", true)).toBe("金");
		expect(element.get("休", true)).toBe("火");
		expect(element.get("囚", true)).toBe("木");
		expect(element.get("死", true)).toBe("水");

		expect(element.with("土")).toBe(Phases.RELATION.VIGOROUS);
		expect(element.with("金")).toBe(Phases.RELATION.SECOND);
		expect(element.with("火")).toBe(Phases.RELATION.REST);
		expect(element.with("木")).toBe(Phases.RELATION.IMPRISON);
		expect(element.with("水")).toBe(Phases.RELATION.DEATH);
	});
});
