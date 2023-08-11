import { createClient } from "next-sanity";
export default async function   IndexPage({pets}) {
const data= await getData()
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        {data.map((data)=>data._type)}
        
        {/* <h2>pets</h2>
        {pets.length > 0 && (
          <ul>
            {pets.map((pet) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}
        {!pets.length > 0 && <p>No pets to show</p>}
        {pets.length > 0 && (
          <div>
            <pre>{JSON.stringify(pets, null, 2)}</pre>
          </div>
        )}
        {!pets.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )} */}
      </main>
    </>
  );
}

const client = createClient({
  projectId: "6xf49nol",
  dataset: "production",
  apiVersion: `2023-07-16`,
  useCdn: false
});

export async function getData() {
  const pets = await client.fetch(`*[_type == "pet"]`);
  
}
