export default function handler(req, res) {
    res.status(200).json({ quizz: [
        {name: "quizz1", questions: []},
        {name: "quizz2", questions: []},
        {name: "quizz3", questions: []},
        {name: "quizz4", questions: []}
    ] })
}