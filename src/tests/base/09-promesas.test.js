import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('testing promises', () => {
    test('should return an hero async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toBe(heroes[0]);
            done()
        }
        )
    })

    test('should return error', () => {
        const id = 12;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done()
        })
    })


})
