export default{
    name:'hardware',
    type:'document',
    title:'Hardware',
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
        },
        {
            name:'Amount',
            type:'number',
            title:'Amount'
        }

    ]
}