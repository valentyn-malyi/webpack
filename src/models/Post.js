export default class Post {
    constructor(title, img) {
        this.title = title
        this.date = new Date()
        this.img = img
    }

    toSring() {
        return JSON.stringify({
            title: this.title,
            date: this.date,
            img: this.img
        }, null, 2)
    }

    get upercaseTitle() {
        return this.title.toUpperCase()
    }
}