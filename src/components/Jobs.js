import {useQuery, gql} from '@apollo/client';
import Card from './Card';

const JOBS = gql`
query {
  jobs {
    id 
    applyUrl
    tags {
      name
    }
    title
    postedAt
    description
    remotes {
      type
    }
    commitment {
      title
    }
    company {
      name
      logoUrl
      websiteUrl
    }
    cities {
      country {
        name
      }
    }
  }
}
`

function Jobs(){

    const { loading, error, data } = useQuery(JOBS);

    //console.log(data)

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <>
        {data.jobs.map((job, index) => (
          <Card job={job} key={index} />
        ))}
      </>
    );

}

export default Jobs;