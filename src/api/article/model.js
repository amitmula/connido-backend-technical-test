  import mongoose, { Schema } from 'mongoose'

const articleSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  author: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

articleSchema.plugin(require('mongoose-keywords'), {paths: ['title', 'author']});

articleSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      content: this.content,
      author: this.author,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Article', articleSchema)

export const schema = model.schema
export default model
