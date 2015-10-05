charGenApp.service('spellService', [function () {

    var battleMagicSpells = [];
    var commonDivineSpells = [];
    var advancedDivineSpells = [];
    var sorcerySpells = [];

    this.initSpells = function () {
        battleMagicSpells.push({name: "Animal Whisperer", magnitude: 2});
        battleMagicSpells.push({name: "Avoidance", magnitude: 0});
        battleMagicSpells.push({name: "Babel", magnitude: 2});
        battleMagicSpells.push({name: "Bearing Witness", magnitude: 2});
        battleMagicSpells.push({name: "Beast Call", magnitude: 2});
        battleMagicSpells.push({name: "Befuddle", magnitude: 2});
        battleMagicSpells.push({name: "Block Sense", magnitude: 3});
        battleMagicSpells.push({name: "Call Spirit", magnitude: 3});
        battleMagicSpells.push({name: "Care", magnitude: 2});
        battleMagicSpells.push({name: "Clear Path", magnitude: 0});
        battleMagicSpells.push({name: "Coordination", magnitude: 0});
        battleMagicSpells.push({name: "Counter-Attack", magnitude: 2});
        battleMagicSpells.push({name: "Counter-Defence", magnitude: 2});
        battleMagicSpells.push({name: "Countermagic", magnitude: 0});
        battleMagicSpells.push({name: "Cover Blind Side", magnitude: 1});
        battleMagicSpells.push({name: "Create Charms", magnitude: 0});
        battleMagicSpells.push({name: "Create Magic Point Store", magnitude: 0});
        battleMagicSpells.push({name: "Create Potion", magnitude: 0});
        battleMagicSpells.push({name: "Cushion Fall", magnitude: 0});
        battleMagicSpells.push({name: "Darkwall", magnitude: 2});
        battleMagicSpells.push({name: "Demoralise", magnitude: 2});
        battleMagicSpells.push({name: "Detect X", magnitude: 0});
        battleMagicSpells.push({name: "Dispel Magic", magnitude: 0});
        battleMagicSpells.push({name: "Disruption", magnitude: 0});
        battleMagicSpells.push({name: "Dragon's Breath", magnitude: 2});
        battleMagicSpells.push({name: "Drive out Spirit", magnitude: 0});
        battleMagicSpells.push({name: "Dull Weapon", magnitude: 0});
        battleMagicSpells.push({name: "Enhance Skill X", magnitude: 0});
        battleMagicSpells.push({name: "Extinguish", magnitude: 0});
        battleMagicSpells.push({name: "Extra Defence", magnitude: 0});
        battleMagicSpells.push({name: "Eyes in the Back of your Head", magnitude: 2});
        battleMagicSpells.push({name: "Fanaticism", magnitude: 2});
        battleMagicSpells.push({name: "Firearrow", magnitude: 2});
        battleMagicSpells.push({name: "Fireblade", magnitude: 4});
        battleMagicSpells.push({name: "Fist of Gold", magnitude: 0});
        battleMagicSpells.push({name: "Fist of the Wind", magnitude: 0});
        battleMagicSpells.push({name: "Flying Kick", magnitude: 2});
        battleMagicSpells.push({name: "Frostbite", magnitude: 2});
        battleMagicSpells.push({name: "Glue", magnitude: 0});
        battleMagicSpells.push({name: "Hand of Death", magnitude: 4});
        battleMagicSpells.push({name: "Harden", magnitude: 1});
        battleMagicSpells.push({name: "Heal", magnitude: 0});
        battleMagicSpells.push({name: "Hinder", magnitude: 0});
        battleMagicSpells.push({name: "Ignite", magnitude: 1});
        battleMagicSpells.push({name: "Invoke Ancestor Spirit", magnitude: 3});
        battleMagicSpells.push({name: "Invisibility", magnitude: 4});
        battleMagicSpells.push({name: "Ironmind", magnitude: 0});
        battleMagicSpells.push({name: "Knockback", magnitude: 0});
        battleMagicSpells.push({name: "Knockdown", magnitude: 0});
        battleMagicSpells.push({name: "Leap", magnitude: 0});
        battleMagicSpells.push({name: "Levitating Disc", magnitude: 0});
        battleMagicSpells.push({name: "Light", magnitude: 0});
        battleMagicSpells.push({name: "Lock", magnitude: 0});
        battleMagicSpells.push({name: "Mindspeech", magnitude: 0});
        battleMagicSpells.push({name: "Mischief", magnitude: 2});
        battleMagicSpells.push({name: "Mobility", magnitude: 0});
        battleMagicSpells.push({name: "Multi-Attack", magnitude: 0});
        battleMagicSpells.push({name: "Multimisslie", magnitude: 0});
        battleMagicSpells.push({name: "Noxious Vapours", magnitude: 0});
        battleMagicSpells.push({name: "Personal Insight", magnitude: 2});
        battleMagicSpells.push({name: "Pierce", magnitude: 0});
        battleMagicSpells.push({name: "Protection", magnitude: 0});
        battleMagicSpells.push({name: "Push/Pull", magnitude: 0});
        battleMagicSpells.push({name: "Read Emotion", magnitude: 0});
        battleMagicSpells.push({name: "Resit (Element)", magnitude: 0});
        battleMagicSpells.push({name: "Restore Energy", magnitude: 0});
        battleMagicSpells.push({name: "Sap Energy", magnitude: 0});
        battleMagicSpells.push({name: "Scare", magnitude: 0});
        battleMagicSpells.push({name: "Second Sight", magnitude: 3});
        battleMagicSpells.push({name: "Skybolt", magnitude: 3});
        battleMagicSpells.push({name: "Slip", magnitude: 1});
        battleMagicSpells.push({name: "Slow", magnitude: 0});
        battleMagicSpells.push({name: "Speedart", magnitude: 0});
        battleMagicSpells.push({name: "Spirit Alarm", magnitude: 0});
        battleMagicSpells.push({name: "Spirit Bane", magnitude: 0});
        battleMagicSpells.push({name: "Spirit Binding Ritual", magnitude: 0});
        battleMagicSpells.push({name: "Spirit Shield", magnitude: 0});
        battleMagicSpells.push({name: "Stink Bomb", magnitude: 1});
        battleMagicSpells.push({name: "Strength", magnitude: 0});
        battleMagicSpells.push({name: "Talk to Animal", magnitude: 3});
        battleMagicSpells.push({name: "Thunder's Voice", magnitude: 0});
        battleMagicSpells.push({name: "Tongues", magnitude: 2});
        battleMagicSpells.push({name: "Unlock", magnitude: 0});
        battleMagicSpells.push({name: "Vigor", magnitude: 0});
        battleMagicSpells.push({name: "Vomit", magnitude: 0});
        battleMagicSpells.push({name: "Walk on (Element)", magnitude: 3});
        battleMagicSpells.push({name: "Water Breath", magnitude: 0});
        battleMagicSpells.push({name: "Weapon Enhance", magnitude: 0});

        commonDivineSpells.push({name: "Consecrate", magnitude: 1});
        commonDivineSpells.push({name: "Create Blessed items", magnitude: 1});
        commonDivineSpells.push({name: "Create Idol", magnitude: 4});
        commonDivineSpells.push({name: "Dismiss Magic", magnitude: 1});
        commonDivineSpells.push({name: "Divination", magnitude: 1});
        commonDivineSpells.push({name: "Excommunicate", magnitude: 5});
        commonDivineSpells.push({name: "Exorcism", magnitude: 1});
        commonDivineSpells.push({name: "Extension", magnitude: 1});
        commonDivineSpells.push({name: "Find X", magnitude: 1});
        commonDivineSpells.push({name: "Mindlink", magnitude: 1});
        commonDivineSpells.push({name: "Other World Journey", magnitude: 1});
        commonDivineSpells.push({name: "Soul Sight", magnitude: 1});
        commonDivineSpells.push({name: "Spirit Block", magnitude: 1});

        advancedDivineSpells.push({name: "Absorption", magnitude: 1});
        advancedDivineSpells.push({name: "Berserk", magnitude: 2});
        advancedDivineSpells.push({name: "Block Fertility", magnitude: 3});
        advancedDivineSpells.push({name: "Breathe Water", magnitude: 2});
        advancedDivineSpells.push({name: "Call (Elemental)", magnitude: 1});
        advancedDivineSpells.push({name: "Call (Undead)", magnitude: 1});
        advancedDivineSpells.push({name: "Create the Crystal Ship", magnitude: 4});
        advancedDivineSpells.push({name: "Death March", magnitude: 4});
        advancedDivineSpells.push({name: "Divine Heal", magnitude: 1});
        advancedDivineSpells.push({name: "Enhance Fertility", magnitude: 3});
        advancedDivineSpells.push({name: "Enhance Unit", magnitude: 3});
        advancedDivineSpells.push({name: "Fear", magnitude: 1});
        advancedDivineSpells.push({name: "Illusion", magnitude: 1});
        advancedDivineSpells.push({name: "Jigsaw", magnitude: 1});
        advancedDivineSpells.push({name: "Lightning Strike", magnitude: 1});
        advancedDivineSpells.push({name: "Madness", magnitude: 1});
        advancedDivineSpells.push({name: "Mindblast", magnitude: 1});
        advancedDivineSpells.push({name: "Miraculous Item", magnitude: 0});
        advancedDivineSpells.push({name: "Puppet", magnitude: 3});
        advancedDivineSpells.push({name: "Purity (Religion/Creed)", magnitude: 2});
        advancedDivineSpells.push({name: "Quicksand", magnitude: 2});
        advancedDivineSpells.push({name: "Radiant Appearance", magnitude: 2});
        advancedDivineSpells.push({name: "Reflection", magnitude: 1});
        advancedDivineSpells.push({name: "Repair and Replace", magnitude: 0});
        advancedDivineSpells.push({name: "Resurrect", magnitude: 5});
        advancedDivineSpells.push({name: "Rout", magnitude: 3});
        advancedDivineSpells.push({name: "See Past", magnitude: 2});
        advancedDivineSpells.push({name: "Shield", magnitude: 1});
        advancedDivineSpells.push({name: "Summon Holy Steed", magnitude: 3});
        advancedDivineSpells.push({name: "Summon Holy Warrior", magnitude: 3});
        advancedDivineSpells.push({name: "Sunspear", magnitude: 4});
        advancedDivineSpells.push({name: "Sun Disc", magnitude: 1});
        advancedDivineSpells.push({name: "Sureshot", magnitude: 1});
        advancedDivineSpells.push({name: "Touch of Death", magnitude: 4});
        advancedDivineSpells.push({name: "Treasury", magnitude: 4});
        advancedDivineSpells.push({name: "True (Weapon)", magnitude: 3});
        advancedDivineSpells.push({name: "Ward Camp", magnitude: 2});
        advancedDivineSpells.push({name: "Wax Effigy", magnitude:4});
        advancedDivineSpells.push({name: "Whirlwind", magnitude: 0});

        sorcerySpells.push({name: "Animate (Substance)"});
        sorcerySpells.push({name: "Cast Back"});
        sorcerySpells.push({name: "Create Familiar"});
        sorcerySpells.push({name: "Create Godform (Deity)"});
        sorcerySpells.push({name: "Create Spell Matrix"});
        sorcerySpells.push({name: "Create Scroll"});
        sorcerySpells.push({name: "Damage Boosting"});
        sorcerySpells.push({name: "Damage Resistance"});
        sorcerySpells.push({name: "Diminish (Characteristic)"});
        sorcerySpells.push({name: "Dominate (Species)"});
        sorcerySpells.push({name: "Energy Projection (Type)"});
        sorcerySpells.push({name: "Enhance (Characteristic)"});
        sorcerySpells.push({name: "Fly"});
        sorcerySpells.push({name: "Form/Set (Substance)"});
        sorcerySpells.push({name: "Glow"});
        sorcerySpells.push({name: "Haste"});
        sorcerySpells.push({name: "Hinder"});
        sorcerySpells.push({name: "Holdfast"});
        sorcerySpells.push({name: "Mirage"});
        sorcerySpells.push({name: "Mystic Vision"});
        sorcerySpells.push({name: "Neutralise Magic"});
        sorcerySpells.push({name: "Other World Portal (Other World)"});
        sorcerySpells.push({name: "Palsy"});
        sorcerySpells.push({name: "Protective Sphere"});
        sorcerySpells.push({name: "Regenerate"});
        sorcerySpells.push({name: "(Sense) Projection"});
        sorcerySpells.push({name: "Sense(Substance)"});
        sorcerySpells.push({name: "Shapechange (Species) to (Species)"});
        sorcerySpells.push({name: "Skin of Life"});
        sorcerySpells.push({name: "Smother"});
        sorcerySpells.push({name: "Spell Resistance"});
        sorcerySpells.push({name: "Spiritual Projection"});
        sorcerySpells.push({name: "Spirit Resistance"});
        sorcerySpells.push({name: "Summon (Other World Creature)"});
        sorcerySpells.push({name: "Tap (Characteristic)"});
        sorcerySpells.push({name: "Teleport"});
        sorcerySpells.push({name: "Time Travel (Time Period)"});
        sorcerySpells.push({name: "Treat Wounds"});
        sorcerySpells.push({name: "Venom"});
    };

    this.initSpells();

    this.getRandomNumber = function(maximumNumber, numbers) {
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
    }

    this.getRandomCommonDivineSpells = function(amount) {
        var spells = [];
        var randomNumbers = [];
        var maxNumber = commonDivineSpells.length - 1;

        while (randomNumbers.length < amount) {
            randomNumbers.push(this.getRandomNumber(maxNumber, randomNumbers));
        }

        for (var i in randomNumbers) {
            spells.push(commonDivineSpells[randomNumbers[i]]);
        }

        return spells;
    }

    this.getRandomAdvancedDivineSpells = function(amount) {
        var spells = [];
        var randomNumbers = [];
        var maxNumber = advancedDivineSpells.length - 1;

        while (randomNumbers.length < amount) {
            randomNumbers.push(this.getRandomNumber(maxNumber, randomNumbers));
        }

        for (var i in randomNumbers) {
            spells.push(advancedDivineSpells[randomNumbers[i]]);
        }

        return spells;
    }

    this.getRandomSorcerySpells = function(amount) {
        var spells = [];
        var randomNumbers = [];
        var maxNumber = advancedDivineSpells.length - 1;

        while (randomNumbers.length < amount) {
            randomNumbers.push(this.getRandomNumber(maxNumber, randomNumbers));
        }

        for (var i in randomNumbers) {
            spells.push(sorcerySpells[randomNumbers[i]]);
        }

        return spells;
    }


    this.getRandomBattleMagicSpells = function(maximumMagnitude, amount) {
        var spells = [];
        var randomNumbers = [];
        var maxNumber = battleMagicSpells.length - 1;

        while (randomNumbers.length < amount) {
            var index = this.getRandomNumber(maxNumber, randomNumbers);
            if (battleMagicSpells[index].magnitude <= maximumMagnitude) {
                randomNumbers.push(index);
            }
        }

        for (var i in randomNumbers) {
            var spellCopy = JSON.parse(JSON.stringify(battleMagicSpells[randomNumbers[i]]));
            if (spellCopy.magnitude == 0) {
                spellCopy.magnitude = maximumMagnitude;
            }
            spells.push(spellCopy);
        }

        return spells;
    }

    this.getBattleMagicSpells = function(magnitude) {
        var result = [];

        for (var i in battleMagicSpells) {
            var spell = battleMagicSpells[i];
            if (spell.magnitude == 0  || spell.magnitude == magnitude) {
                var spellCopy = JSON.parse(JSON.stringify(spell));
                if (spellCopy.magnitude == 0) {
                    spellCopy.magnitude = magnitude + "+";
                }
                result.push(spellCopy);
            }
        }

        return result;
    }

}]);
