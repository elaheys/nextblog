const shortenSentence = (sentence) => {

    const splitedTitle = sentence.split(" ");
    const newTitle = splitedTitle.slice(0,4)
    const joinTitle = newTitle.join(" ") +  "...."
    return joinTitle;
}

export {shortenSentence}