export const getRandomDigit = (): number =>
    Math.floor(Math.random() * 9) + 1;

export const getNewAnswer = (): number[] =>
    [0, 0, 0, 0].map(item => getRandomDigit())

export const questionEqualsAnswer =
    (question: number[], answer: number[]): boolean =>
        question.every((value: number, index: number) => value === answer[index])
