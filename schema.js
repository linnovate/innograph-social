import {Profile} from './schemas/profile'
import {Post} from './schemas/post'

type Query {
 author(firstName: String, lastName: String): Profile
 getFortuneCookie: String # we'll use this later
}

schema {
  query: Query
}

export default [Profile, Post, Query, schema];
