// schemas/pet.js
export default {
  name: 'electronics',
  type: 'document',
  title: 'Electronics',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name:'Amount',
      type:'number',
      title:'Amount'
    }
  ],
}
