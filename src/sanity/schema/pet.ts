import { defineField , defineType } from "sanity";

export const petType=defineType({
    name:"pet",
    title:"pets",
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