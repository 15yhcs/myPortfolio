export class myCard {
    public contactType: string;
    public imgURL: string;
    public contactContent: string
    constructor(contactType: string, imgURL: string, contactContent: string) {
        this.contactType = contactType
        this.imgURL = imgURL
        this.contactContent = contactContent
    }
}