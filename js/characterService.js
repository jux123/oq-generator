charGenApp.service('characterService', ['spellService', 'gearService', function(spellService, gearService) {

    this.generateCharacter = function(reRoll) {

        var character = new Character(reRoll);
        character.generateCharacteristics();
        character.generateCult(spellService.getRandomBattleMagicSpells(2, 6), spellService.getRandomCommonDivineSpells(8), spellService.getRandomAdvancedDivineSpells(4));
        character.generateSorcerySchool(spellService.getRandomBattleMagicSpells(2, 6), spellService.getRandomSorcerySpells(8));
        character.calculateAttributes();
        character.calculateSkills();
        character.trainSkills();
        if (character.isBattleMagicPresent()) {
            character.pickBattleMagicSpells(spellService.getBattleMagicSpells(1), spellService.getBattleMagicSpells(2));
        }
        if (character.isDivineMagicPresent()) {
            character.pickDivineSpells();
        }
        if (character.isSorceryPresent()) {
            character.pickSorcerySpells();
        }

        character.pickGear(gearService.getMeleeWeapons(), gearService.getRangedWeapons(), gearService.getArmor());

        return character;
    };
}]);