function Character (reRoll) {

    this.reRollOnes = reRoll ? true : false;

    this.characteristics = {
        str: 0,
        con: 0,
        dex: 0,
        siz: 0,
        int: 0,
        pow: 0,
        cha: 0
    };

    this.attributes = {
        damageModifier: "",
        movementRate: "15m",
        hitPoints: 0,
        majorWoundLevel: 0,
        magicPoints: 0,
        sanity: 0
    };

    this.resistanceSkills = [];
    this.combatSkills = [];
    this.knowledgeSkills = [];
    this.practicalSkills = [];
    this.magicSkills = [];

    this.battleMagicSpells = [];
    this.divineSpells = [];
    this.sorcerySpells = [];

    this.cult = null;
    this.sorcery = null;

    this.meleeWeapons = [];
    this.rangedWeapons = [];
    this.armor = [];
}

Character.prototype = {

    constructor: Character,

    generateCharacteristics: function() {

        this.characteristics.str = this.rollD6() + this.rollD6() + this.rollD6();
        this.characteristics.con = this.rollD6() + this.rollD6() + this.rollD6();
        this.characteristics.dex = this.rollD6() + this.rollD6() + this.rollD6();
        this.characteristics.siz = this.rollD6() + this.rollD6() + 6;
        this.characteristics.int = this.rollD6() + this.rollD6() + 6;
        this.characteristics.pow = this.rollD6() + this.rollD6() + this.rollD6();
        this.characteristics.cha = this.rollD6() + this.rollD6() + this.rollD6();
    },

    generateCult: function(battleMagicSpells, commonDivineSpells, advancedDivineSpells) {
        var characteristicsSum = this.characteristics.str + this.characteristics.dex + this.characteristics.pow;

        if (characteristicsSum <= 30) {
            this.cult = {
                battleMagicSpells: battleMagicSpells,
                commonDivineSpells: commonDivineSpells,
                advancedDivineSpells: advancedDivineSpells
            };
        }
    },

    generateSorcerySchool: function(battleMagicSpells, sorcerySpells) {
        if (this.isDivineMagicPresent()) {
            return;
        }

        var characteristicsSum = this.characteristics.str + this.characteristics.dex + this.characteristics.con;

        if (characteristicsSum <= 30 && this.characteristics.int >= 12) {
            this.sorcery = {
                battleMagicSpells: battleMagicSpells,
                sorcerySpells: sorcerySpells
            };
        }
    },

    pickGear: function(meleeWeapons, rangedWeapons, armor) {
        var primaryCombatSkill = this.getPrimaryCombatSkill();
        var rich = false;
        for (var i = this.practicalSkills.length - 1; i >= 0; i--) {
            if (this.practicalSkills[i].name == "Wealth") {
                rich = this.practicalSkills[i].getTotalValue() > 35;
                break;
            }
        }

        for (var j = 0; j < meleeWeapons.length; j++) {
            if (meleeWeapons[j].mandatory == true
                || (rich && meleeWeapons[j].highCost == true)
                || (!rich && primaryCombatSkill == "Close Combat" && meleeWeapons[j].highCost == false)) {
                this.meleeWeapons.push(meleeWeapons[j]);
            }
        }

        for (var k = 0; k < rangedWeapons.length; k++) {
            if ((rich && rangedWeapons[k].highCost == true)
                || (!rich && primaryCombatSkill == "Ranged Combat" && rangedWeapons[k].highCost == false)) {

                this.rangedWeapons.push(rangedWeapons[k]);
            }
        }

        if (rich) {
            this.armor.push(armor[0]);
        }
    },

    getPrimaryCombatSkill: function() {
        var primarySkillName = null;
        var maxValue = 0;
        for (var i in this.combatSkills) {
            var skill = this.combatSkills[i];
            if (skill.getTotalValue() > maxValue) {
                primarySkillName = skill.name;
                maxValue = skill.getTotalValue();
            }
        }
        return primarySkillName;
    },

    getCultSpells: function() {
        if (this.cult == null) {
            return null;
        }

        var result = [];

        for(var k in this.cult.battleMagicSpells) {
            result.push(this.cult.battleMagicSpells[k].name + "'");
        }

        for (var i in this.cult.commonDivineSpells) {
            result.push(this.cult.commonDivineSpells[i].name);
        }

        for (var j in this.cult.advancedDivineSpells) {
            result.push(this.cult.advancedDivineSpells[j].name);
        }

        result.sort();

        return result.join(", ");
    },

    getSorcerySpells: function() {
        if (this.sorcery == null) {
            return null;
        }

        var result = [];

        for (var i in this.sorcery.battleMagicSpells) {
            result.push(this.sorcery.battleMagicSpells[i].name + "'");
        }

        for (var j in this.sorcery.sorcerySpells) {
            result.push(this.sorcery.sorcerySpells[j].name);
        }

        result.sort();

        return result.join(", ");
    },

    calculateAttributes: function() {
        this.attributes.damageModifier = this.calculateDamageModifier();
        this.attributes.hitPoints = Math.ceil((this.characteristics.siz + this.characteristics.con) / 2);
        this.attributes.majorWoundLevel = Math.ceil(this.attributes.hitPoints / 2);
        this.attributes.magicPoints = this.characteristics.pow;
    },

    calculateSkills: function() {
        this.resistanceSkills[0] = new Skill("Dodge", ["DEX", "10"], this.characteristics.dex + 10);
        this.resistanceSkills[1] = new Skill("Persistence", ["POW", "10"], this.characteristics.pow + 10);
        this.resistanceSkills[2] = new Skill("Resilience", ["POW", "CON"], this.characteristics.pow + this.characteristics.con);

        this.combatSkills[0] = new Skill("Close Combat", ["DEX", "STR"], this.characteristics.dex + this.characteristics.str);
        this.combatSkills[1] = new Skill("Ranged Combat", ["DEX", "INT"], this.characteristics.dex + this.characteristics.int);
        this.combatSkills[2] = new Skill("Unarmed Combat", ["DEX", "STR"], this.characteristics.dex + this.characteristics.str);

        this.knowledgeSkills[0] = new Skill("Culture (Own)", ["INT", "10"], this.characteristics.int + 10);
        this.knowledgeSkills[1] = new Skill("Language (Own)", ["INT", "50"], this.characteristics.int + 50);
        this.knowledgeSkills[2] = new Skill("Natural Lore", ["INT", "10"], this.characteristics.int + 10);
        this.calculateAdditionalKnowledgeSkills();

        this.practicalSkills[0] = new Skill("Athletics", ["DEX", "STR"], this.characteristics.dex + this.characteristics.str);
        this.practicalSkills[1] = new Skill("Craft", ["INT", "10"], this.characteristics.int + 10);
        this.practicalSkills[2] = new Skill("Deception", ["DEX", "INT"], this.characteristics.dex + this.characteristics.int);
        this.practicalSkills[3] = new Skill("Driving", ["DEX", "INT"], this.characteristics.dex + this.characteristics.int);
        this.practicalSkills[4] = new Skill("Engineering", ["INT", "10"], this.characteristics.int + 10);
        this.practicalSkills[5] = new Skill("Healing", ["INT", "10"], this.characteristics.int + 10);
        this.practicalSkills[6] = new Skill("Influence", ["CHA", "10"], this.characteristics.cha + 10);
        this.practicalSkills[7] = new Skill("Mechanisms", ["DEX", "INT"], this.characteristics.dex + this.characteristics.int);
        this.practicalSkills[8] = new Skill("Perception", ["INT", "POW"], this.characteristics.int + this.characteristics.pow);
        this.practicalSkills[9] = new Skill("Performance", ["CHA", "10"], this.characteristics.cha + 10);
        this.practicalSkills[10] = new Skill("Raiding", ["DEX", "POW"], this.characteristics.dex + this.characteristics.pow);
        this.practicalSkills[11] = new Skill("Sailing", ["DEX", "INT"], this.characteristics.dex + this.characteristics.int);
        this.practicalSkills[12] = new Skill("Streetwise", ["CHA", "POW"], this.characteristics.cha + this.characteristics.pow);
        this.practicalSkills[13] = new Skill("Trade", ["INT", "10"], this.characteristics.int + 10);
        this.practicalSkills[14] = new Skill("Wealth", ["INT", "CHA"], this.characteristics.int + this.characteristics.cha);

        this.magicSkills[0] = new Skill("Battle Magic", ["POW", "x 3"], this.characteristics.pow * 3);

        if (this.isSorceryPresent()) {
            this.magicSkills.push(new Skill("Sorcery", ["INT", "40"], this.characteristics.int + 40));
        }
        if (this.isDivineMagicPresent()) {
            this.magicSkills.push(new Skill("Religion", ["INT", "40"], this.characteristics.int + 40));
        }
    },

    isBattleMagicPresent: function() {
        for (var i in this.magicSkills) {
            if (this.magicSkills[i].name == "Battle Magic") {
                return true;
            }
        }
        return false;
    },

    isDivineMagicPresent: function() {
        return this.cult != null;
    },

    isSorceryPresent: function() {
        return this.sorcery != null;
    },

    pickBattleMagicSpells: function(firstLevelSpells, secondLevelSpells) {
        // total 6 magnitude: 2 1st level and 2 2nd level

        for (var i = 0; i < 2; i++) {
            this.battleMagicSpells.push(this.getRandomBattleMagicSpell(firstLevelSpells));
        }

        for (var i = 0; i < 2; i++) {
            this.battleMagicSpells.push(this.getRandomBattleMagicSpell(secondLevelSpells))
        }
    },

    pickDivineSpells: function() {
        if (!this.isDivineMagicPresent()) {
            return;
        }

        // 4  magnitude of random battleMagicSpells
        var randomNumbers = [];
        var magnitudeLeft = 4;
        while (magnitudeLeft > 0) {
            var i = this.getRandomNumber(this.cult.battleMagicSpells.length - 1, randomNumbers);
            randomNumbers.push(i);
            var spell = this.cult.battleMagicSpells[i];
            if (spell === undefined) {
                break;
            }
            if (spell.magnitude <= magnitudeLeft) {
                this.divineSpells.push(spell);
                magnitudeLeft -= spell.magnitude;
            }
        }

        // 2 magnitude of random commonDivineSpells
        randomNumbers = [];
        magnitudeLeft = 2;

        while (magnitudeLeft > 0) {
            var i = this.getRandomNumber(this.cult.commonDivineSpells.length - 1, randomNumbers);
            randomNumbers.push(i);
            var spell = this.cult.commonDivineSpells[i];
            if (spell.magnitude <= magnitudeLeft) {
                this.divineSpells.push(spell);
                magnitudeLeft -= spell.magnitude;
            }
        }
    },

    pickSorcerySpells: function() {
        if (!this.isSorceryPresent()) {
            return;
        }

        var randomNumbers = [];

        // 3 battleMagicSpells
        for (var i = 0; i < 3; i++) {
            var index = this.getRandomNumber(this.sorcery.battleMagicSpells.length - 1, randomNumbers);
            randomNumbers.push(index);
            this.sorcerySpells.push(this.sorcery.battleMagicSpells[index]);
        }

        // 3 sorcery spells
        randomNumbers = [];
        for (var i = 0; i < 3; i++) {
            var index = this.getRandomNumber(this.sorcery.sorcerySpells.length - 1, randomNumbers);
            randomNumbers.push(index);
            this.sorcerySpells.push(this.sorcery.sorcerySpells[index]);
        }
    },

    getRandomBattleMagicSpell: function(battleMagicSpells) {
        if (battleMagicSpells.length == 0) {
            return null;
        }
        var randomIndex = Math.floor(Math.random() * battleMagicSpells.length);
        for (var i in this.battleMagicSpells) {
            if (this.battleMagicSpells[i].name == battleMagicSpells[randomIndex].name) {
                battleMagicSpells.splice(randomIndex, 1);
                this.getRandomBattleMagicSpell(battleMagicSpells);
            }
        }
        return battleMagicSpells[randomIndex];
    },

    trainSkills: function() {
        this.trainResistanceSkills();
        this.trainCombatSkills();
        this.trainKnowledgeSkills();
        this.trainPracticalSkills();
    },

    trainPracticalSkills: function() {
        var improvements = [25, 20, 15, 10];
        this.sortSkillsByBaseValue(this.practicalSkills);

        var randomIndexes = [];
        var maximumIndex = Math.floor(this.practicalSkills.length / 2);
        while (randomIndexes.length < improvements.length) {
            randomIndexes.push(this.getRandomNumber(maximumIndex, randomIndexes));
        }

        // 4 random skills of better half get improvements

        for (var i = 0; i < randomIndexes.length; i++) {
            var randomIndex = randomIndexes[i];
            this.practicalSkills[randomIndex].addValue(improvements[i]);
        }

        this.sortSkillsByName(this.practicalSkills);
    },

    getRandomNumber: function(maximumNumber, numbers) {
        if (maximumNumber == numbers.length) {
            return;
        }
        var randomNumber = Math.floor((Math.random() * maximumNumber));
        for (var i in numbers) {
            if (numbers[i] == randomNumber) {
                randomNumber = this.getRandomNumber(maximumNumber, numbers);
            }
        }
        return randomNumber;
    },

    trainKnowledgeSkills: function() {
        var improvements = [10, 10, 10, 10, 10];
        this.sortSkillsByBaseValue(this.knowledgeSkills);

        for (var i = 0; i < improvements.length; i++) {
            if (this.knowledgeSkills.length - 1 < i) {
                this.knowledgeSkills[Math.abs(this.knowledgeSkills.length - i)].addValue(improvements[i]);
            } else {
                this.knowledgeSkills[i].addValue(improvements[i]);
            }
        }

        this.sortSkillsByName(this.knowledgeSkills);
    },

    trainCombatSkills: function() {
        var improvements = [30, 20];
        this.sortSkillsByBaseValue(this.combatSkills);

        for (var i = 0; i < improvements.length; i++) {
            this.combatSkills[i].addValue(improvements[i]);
        }

        this.sortSkillsByName(this.combatSkills);
    },

    trainResistanceSkills: function() {
        var improvements = [25, 15, 10];
        this.sortSkillsByBaseValue(this.resistanceSkills);

        for (var i = 0; i < improvements.length; i++) {
            this.resistanceSkills[i].addValue(improvements[i]);
        }

        this.sortSkillsByName(this.resistanceSkills);
    },

    sortSkillsByBaseValue: function(skills) {
        skills.sort(function (a, b) {
            return b.baseValue - a.baseValue;
        });
    },

    sortSkillsByName: function(skills) {
        skills.sort(function (a, b) {
            return a.name.localeCompare(b.name)
        });
    },

    calculateAdditionalKnowledgeSkills: function() {

        if (this.characteristics.int <= 8) {
            return;
        }
        if (this.characteristics.int <= 12) {
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Lore (?)", ["INT", "10"], this.characteristics.int + 10);
            return;
        }
        if (this.characteristics.int <= 14) {
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Lore (?)", ["INT", "10"], this.characteristics.int + 10);
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Language (?)", ["INT", "10"], this.characteristics.int + 10);
            return;
        }
        if (this.characteristics.int <= 16) {
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Lore (?)", ["INT", "10"], this.characteristics.int + 10);
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Lore (?)", ["INT", "10"], this.characteristics.int + 10);
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Language (?)", ["INT", "10"], this.characteristics.int + 10);
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Culture (?)", ["INT", "10"], this.characteristics.int + 10);
            return;
        }
        if (this.characteristics.int > 16) {
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Lore (?)", ["INT", "10"], this.characteristics.int + 10);
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Lore (?)", ["INT", "10"], this.characteristics.int + 10);
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Lore (?)", ["INT", "10"], this.characteristics.int + 10);
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Language (?)", ["INT", "10"], this.characteristics.int + 10);
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Language (?)", ["INT", "10"], this.characteristics.int + 10);
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Culture (?)", ["INT", "10"], this.characteristics.int + 10);
            this.knowledgeSkills[this.knowledgeSkills.length] = new Skill("Culture (?)", ["INT", "10"], this.characteristics.int + 10);
            return;
        }
        
    },

    calculateDamageModifier: function () {
        var value = this.characteristics.str + this.characteristics.siz;

        if (value <= 10) {
            return "-1D6"
        }
        if (value <= 15) {
            return "-1D4"
        }
        if (value <= 25) {
            return "0"
        }
        if (value <= 30) {
            return "1D4"
        }
        if (value <= 40) {
            return "1D6"
        }
        if (value <= 60) {
            return "2D6"
        }
        if (value <= 75) {
            return "3D6"
        }
        if (value <= 90) {
            return "4D6"
        }
        return "";
    },

    rollD6: function() {
        var result = Math.floor((Math.random() * 6) + 1);
        if (this.reRollOnes && result == 1) {
            return this.rollD6();
        }
        return result;
    }
};