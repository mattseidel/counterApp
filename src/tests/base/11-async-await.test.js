import { getImagen } from "../../base/11-async-await"

describe('async-await and fetch test', () => {
    test('should return image url', async () => {
        const url = await getImagen();

        expect(url.includes('https://')).toBe(true)
    })

})
