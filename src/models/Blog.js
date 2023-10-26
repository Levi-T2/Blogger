
export class Blog {
    constructor(data) {
        this.body = data.body
        this.id = data.id
        this.title = data.title
        this.published = data.published
        this.imgUrl = data.imgUrl
        this.createdAt = new Date(data.createdAt).toLocaleDateString()
        this.updatedAt = data.updatedAt
        this.creatorId = data.creatorId
        this.creator = data.creator
    }
}