export default interface Talk {
    description : string,
    length : string,
    slides : string,
    speaker : {
        name: string,
        website: string,
        avatar: string
    },
    topic : string
}