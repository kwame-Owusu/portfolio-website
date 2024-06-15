function readingTime(text){
    const wordsPerMinute = 200;
    const noOfWords = text.split(/\s+/).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return `${readTime} minute read`;
}

export default readingTime;