export class APOD {
    constructor(data) {
        this.date = data.date
        this.title = data.title
        this.explanation = data.explanation
        this.hdurl = data.hdurl
    }
}