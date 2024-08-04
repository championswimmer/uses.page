# Draft API 
> (not fully specced but a reference to go by)

## Frontend

### `/` 
- landing page 

### `/@username` 
- an user's uses page 

### `/discover` 
- discover pages of all users

## Backend [API]
Base URL for the following paths are `/api/v1`

## Users 

### `GET /users/{username}` 
- get details of user 
- can be used to find out if username exists during signup 

### `POST /users` 
- signup a user 
- might get deprecated in future in favour of Github SSO 

### `GET /users` 
- discover all uses pages 
- can have query filters for people who have hardware, or have software etc (we'll figure it out)


## Usables 

### `GET /usables` 
- get all usables (even by people not me)
- can be used to search existing usables to link to myself

### `POST /usables` 
- create a new 'usable' 
- a usable is a software/hardware/gear/config 
- we'll work out what all metadata will go into an usable 

### `GET /users/me/usables` 
- get my usables 

### `POST /users/me/usables`
- add an usable to my usables list 
- should do `POST /usables` first to add an usable if it didn't exist in the central repository 
- if it already exists, this just maps `userId + usableId` 

### `PATCH /users/me/usables/{userUsableId}` 
- update info like affiliate link to purchase it 
- set `active` (currently using or not)
- set `visible` (show in my recommended products or not)
