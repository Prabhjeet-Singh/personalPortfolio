import {  createClient } from "@sanity/client";

export const client=createClient({
    projectId: "4j6sfp1a",
    dataset: "production",
    apiVersion:'2022-09-10',
    useCdn:true


})
