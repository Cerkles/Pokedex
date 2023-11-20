export default function handleDirectionalPad(direction, counter, setCounter, versionIndex, setVersionIndex) {

    switch (direction) {
        case "up":
            counter === 151 ? (setCounter(1)) : (setCounter(counter + 1))
            setVersionIndex(null)
            break
        case "down":
            counter === 1 ? (setCounter(151)) : (setCounter(counter - 1))
            setVersionIndex(null)
            break
        case "left":
            versionIndex === null ? setVersionIndex(12) :
                versionIndex === 0 ? setVersionIndex(12) : setVersionIndex(versionIndex - 1)
            break
        case "right":
            versionIndex === null ? setVersionIndex(0) :
                versionIndex === 12 ? setVersionIndex(0) : setVersionIndex(versionIndex + 1)
            break
    }
}