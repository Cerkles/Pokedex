export default function handleDirectionalPad (direction, counter, setCounter, versionIndex, setVersionIndex, spriteVersions, setPokeSprite) {
    
    const versionArray = [
        spriteVersions["generation-i"]["red-blue"].front_transparent,
        spriteVersions["generation-i"]["yellow"].front_transparent,
        spriteVersions["generation-ii"]["gold"].front_transparent,
        spriteVersions["generation-ii"]["silver"].front_transparent,
        spriteVersions["generation-ii"]["crystal"].front_transparent,
        spriteVersions["generation-iii"]["emerald"].front_default,
        spriteVersions["generation-iii"]["firered-leafgreen"].front_default,
        spriteVersions["generation-iii"]["ruby-sapphire"].front_default,
        spriteVersions["generation-iv"]["diamond-pearl"].front_default,
        spriteVersions["generation-iv"]["heartgold-soulsilver"].front_default,
        spriteVersions["generation-iv"]["platinum"].front_default,
        spriteVersions["generation-v"]["black-white"].front_default,
        spriteVersions["generation-vi"]["omegaruby-alphasapphire"].front_default,
    ]

    switch(direction){
        case "up":
            counter === 151 ? (setCounter(1)) : (setCounter(counter + 1))
            setVersionIndex(0)
            break
        case "down":
            counter === 1 ? (setCounter(151)) : (setCounter(counter - 1))
            setVersionIndex(0)
            break
        case "left":
            versionIndex === 0 ? setVersionIndex(12) : setVersionIndex(versionIndex - 1)
            setPokeSprite(versionArray[versionIndex])
            break
        case "right":
            versionIndex === 12 ? setVersionIndex(0) : setVersionIndex(versionIndex + 1)
            setPokeSprite(versionArray[versionIndex])
            break
    }
}