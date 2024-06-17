export class EducationAndExpModal {
    public institutionOrWorkSpace: string;
    public duration: string;
    public imgURL: string;
    public title: string
    constructor(institutionOrWorkSpace: string, duration: string, imgURL: string, title: string) {
        this.institutionOrWorkSpace = institutionOrWorkSpace
        this.duration = duration
        this.imgURL = imgURL
        this.title = title
    }   
}