async function getCandidates() {
    const res = await fetch ('https://localhost:4000/Candidates')

    return res.json()
}

export default async function CandidateList() {
    const candidates = await getCandidates()
    return (
        <>
            {candidates.map((candidate) => (
                <div key={candidate.id} className="card my-5">
                    <h3>{candidate.job_title}</h3>
                    <p>{candidate.body.slice()}</p>

                </div>
            ))}
        </>
        
    )
}