var makeUnique = function (entity) {
        entity += ' ' + (Math.floor(Math.random() * 9000000) + 10000);
        return entity;
    },

    toUniqueTitles = function (entity) {
        entity.title = makeUnique(entity.title);
        return entity;
    },

    plan = {
        'title': makeUnique('Boom boom')
    };

console.log('Running unique-test-data');

module.exports = {
    plan: plan
};
