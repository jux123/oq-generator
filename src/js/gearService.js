charGenApp.service('gearService', [function () {

    var meleeWeapons = [];
    var rangedWeapons = [];
    var armor = [];

    this.initGear = function () {
        meleeWeapons.push({name: "Shortsword", damage: "1D6", enc: 1, str: 5, dex: 5, size: "Medium", highCost: true});
        meleeWeapons.push({
            name: "Shortspear (Range)",
            damage: "1D6",
            enc: 2,
            str: 5,
            dex: 5,
            size: "Medium",
            highCost: false
        });
        meleeWeapons.push({
            name: "Small Shield",
            damage: "1D4",
            enc: 1,
            str: 0,
            dex: 0,
            size: "Medium",
            highCost: true
        });
        meleeWeapons.push({
            name: "Dagger",
            damage: "1D4+1",
            enc: 1,
            str: 0,
            dex: 0,
            size: "Light",
            highCost: false,
            mandatory: true
        });

        rangedWeapons.push({
            name: "Short bow",
            damage: "1D8",
            range: "75m",
            rate: "1 CR",
            enc: 1,
            str: 9,
            dex: 9,
            highCost: false
        });
        rangedWeapons.push({
            name: "Light Crossbow",
            damage: "1D8",
            range: "125m",
            rate: "1 CR",
            enc: 1,
            str: 5,
            dex: 9,
            highCost: true
        });

        armor.push({name: "Leather", ap: "2", enc: 3, highCost: true});
    };

    this.initGear();

    this.getMeleeWeapons = function() {
        return meleeWeapons;
    }

    this.getRangedWeapons = function() {
        return rangedWeapons;
    }

    this.getArmor = function () {
        return armor;
    }
}]);