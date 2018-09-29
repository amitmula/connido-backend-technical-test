import { Article } from '.'

let article

beforeEach(async () => {
  article = await Article.create({ title: 'test', content: 'test', author: 'test', date_created: 'test', date_updated: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = article.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(article.id)
    expect(view.title).toBe(article.title)
    expect(view.content).toBe(article.content)
    expect(view.author).toBe(article.author)
    expect(view.date_created).toBe(article.date_created)
    expect(view.date_updated).toBe(article.date_updated)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = article.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(article.id)
    expect(view.title).toBe(article.title)
    expect(view.content).toBe(article.content)
    expect(view.author).toBe(article.author)
    expect(view.date_created).toBe(article.date_created)
    expect(view.date_updated).toBe(article.date_updated)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
