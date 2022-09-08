interface Category {
  _id: string
  _createdAt: string
  _updatedAt: string
  rev: string
  _type: 'category'
  slug: {
    _type: 'slug'
    current: string
  }
  title: string
}
