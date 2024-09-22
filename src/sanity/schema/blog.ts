import { defineField , defineType } from "sanity";

export const blogType=defineType({
    name:"blog",
    title:"Blogs",
    type:"document",
    fields:[
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "description",
            type: "string",
        }),
        defineField({
            name: "image",
            type: "image",
        })
    ],
});