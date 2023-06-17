let heroes = [
    {
        hero: 'Hero 1',
        level: 33,
    },
    {
        hero: 'Hero 2',
        level: 5,
    },
    {
        hero: 'Hero 3',
        level: 1,
    }
];

let sortedHeroes = heroes.sort((heroA, heroB) => {
    return heroA.level - heroB.level
});

sortedHeroes.forEach((h) => console.log(h));