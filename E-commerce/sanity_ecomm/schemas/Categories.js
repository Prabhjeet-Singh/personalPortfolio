export default{
    name:'categories',
    type:'document',
    title:'Categories',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title'
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug'
        },
        {
            name:'description',
            type:'string',
            title:'Description'
        },
        {
            name:'image',
            type:'image',
            title:'Image'
        }

    ]
}