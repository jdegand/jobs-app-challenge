function Card({job}){
 
    return (
        <article>
            <h1>{job.title}</h1>
            <h2>{job.commitment.title}</h2>
            <a href={job.company.websiteUrl}>{job.company.name}</a>
            <div>{job.postedAt}</div>
        </article>
    )
}

export default Card;

/*
   return (
        <pre>
        {JSON.stringify(job, null, 2)}
        </pre>
    )
*/