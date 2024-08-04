# uses.page 

Popularised by [@wesbos](https://wesbos.com) via his project [uses.tech](https://uses.tech), 
`uses` page us usally a page people keep on `yourwebsite.com/uses` that showcases all the
**hardware gear, software tools, configs etc** they use. 

This project is an attempt to create an easy to use _**uses page_** _generator__ 

## Project Philosophy 

### Hostable as well as Static Generation

The idea is that one can either; 
- use our website to host their page if they want to, for example on `johndoe.uses.page` or `uses.page/johndoe`; or 
- click a [Generate] button and download a static hostable `/uses` folder with html/css/js/images that they can use on their static personal website 

### Good categorization of 'Usables' 

When browsing someone's `uses.page` it should not a large dump of text. 

Such pages are minimal and lot of people do make it like that (and I love them as well 🫶), like these - 
- https://gkanev.com/uses/ 
- https://amorpheuz.dev/uses/ 
- https://thomashunter.name/uses 

What this project will aim to do is make a little more searchable/sortable uses pages. Something like the [uses.tech](https://uses.tech) page itself where we can filter for uses pages by technology of the creator etc. 

### Themeable 

Not sure if the hosted version `johndoe.uses.page` or `uses.page/johndoe` can be done this way (I mean it can be, but it won't be easy), but the generated static pages must be open to themeability. 

Basically, not everyone who generates pages using this should have to stick to the same boring design. Humans are creative and unique, and their personal websites are an expression of their self! Their uses page should be 100% themeable. This project's aim is to make the information structured, but not enforce any look and feel on the output. 

## Tech Stack 
Potentially the tech stack we want to use here - 

- #### Backend 
  - NodeJS 
  - TypeScript 
  - Some relational DB (Postgres?)
  - TypeORM 
- #### APIs 
  - REST + JSON
- #### Frontend (hosted sites)
  - Vue / React 
  - TypeScript (to remain same language across the stack)
- #### Frontend
  - No framework  

    We are making a static site for someone to use on their website, and best for it to remain vanillaJS (maybe Jquery?) as it should be portable, and possibly a single HTML file (with CSS and JS embedded in it) that they can drop into their Github Pages or something.