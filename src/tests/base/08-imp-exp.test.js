import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas en funciones de héroes', () => {
    test('should return and hero by id', () => {
        const id = 2;
        const heroe = getHeroeById(id)

        const heroData = heroes.find(hero => hero.id === id);
        expect(heroe).toEqual(heroData)
    })

    test('should return undefined if hero does not exist', () => {
        const id = 10;
        const heroe = getHeroeById(id)

        expect(heroe).toBe(undefined)
    })

    test('should return all heros from DC', () => {
        const owner = 'DC'
        const heroe = getHeroesByOwner(owner)

        const heroData = heroes.filter(hero => hero.owner === owner);
        expect(heroe).toEqual(heroData)
    })

    test('should return all heros from Marvel', () => {
        const owner = 'Marvel'
        const heroe = getHeroesByOwner(owner)

        expect(heroe.length).toBe(2)
    })




})
