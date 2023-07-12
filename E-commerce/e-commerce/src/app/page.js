export default function Home({ pet }) {
  return (
    <main className="">
      <h2>pets</h2>
      {pet.length > 0 && (
        <ul>
          {pet.map((pet) => (
            <li key={pet._id}>{pet?.name}</li>
          ))}
        </ul>
      )}
      {!pet.length > 0 && <p>No pets to show</p>}
      {pet.length > 0 && (
        <div>
          <pre>{JSON.stringify(pets, null, 2)}</pre>
        </div>
      )}
      {!pet.length > 0 && (
        <div>
          <div>¯\_(ツ)_/¯</div>
          <p>
            Your data will show up here when you've configured everything
            correctly
          </p>
        </div>
      )}
      {/* {pets.length>0 ? pets.map((pet)=> ( pet.name)) : "String is empty" } */}
    </main>
  );
}
