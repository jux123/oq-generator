function Skill (name, characteristics, baseValue) {
    this.name = name;
    this.characteristics = characteristics;
    this.baseValue = baseValue;
    this.addedValue = 0;
}


Skill.prototype = {

    constructor: Skill,

    addValue: function(value) {
        this.addedValue += value;
    },

    getTotalValue: function() {
        return this.addedValue + this.baseValue;
    },

    getStats: function() {
        var result = "(" + this.characteristics[0];
        if (this.characteristics[1].charAt(0) != "x") {
            result += " + ";
        } else {
            result += " ";
        }
        result += this.characteristics[1] + ")";

        if (this.addedValue > 0) {
            result += " (+" + this.addedValue + ")";
        }

        return result;
    }

};