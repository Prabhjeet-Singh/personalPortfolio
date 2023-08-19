export default{
    name:'clothes',
    type:'document',
    title:'Clothes',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title'
        },
        {
            name:'slug',
            type:'slug',
            title:"Slug"
        },
        {
            name:'description',
            type:'string',
            title:'Description'
        },
        {
            name:'img',
            type:'image',
            title:'Img'
        },
        
    ]
}