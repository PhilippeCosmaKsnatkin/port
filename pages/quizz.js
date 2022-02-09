export default function Quizz({ quizz }) {
    return (
        <div>
            <p>{quizz[0].name}</p>
            <p>{quizz[1].name}</p>
            <p>{quizz[2].name}</p>
            <p>{quizz[3].name}</p>
        </div>
    )
}

export async function getStaticProps() {
    const request = await fetch('http://localhost:3000/api/quizz')
    const json = await request.json()

    return {props : {
        quizz: json.quizz
    }}
}