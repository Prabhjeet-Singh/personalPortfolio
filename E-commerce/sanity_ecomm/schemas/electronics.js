// schemas/pet.js
export default {
  name: 'electronics',
  type: 'document',
  title: 'Electronics',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'Image',
      type: 'image',
      title: 'Image',
    },
  ],
}
