import { z } from "zod";

export const noteSchema = z.object({


  //TODO: create the title and content schema, 
  // Make sure the title is required and the content is required
  // Make sure the title is max 50 characters and the content is max 500 characters


   title: z
    .string()
    .min(2, "title must be at least 50 characters")
    .max(100, "tile must be less than 100 characters"),


     content: z
    .string()
    .min(2, "content must be at least 500 characters")
    .max(100, "content must be less than 100 characters"),



  });