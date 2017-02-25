import {Profile} from './profile'
import {Post} from './post'

type Query {
 author(firstName: String, lastName: String): Profile
 getFortuneCookie: String # we'll use this later
}

schema {
  query: Query
}

export default [Profile, Post, Query, schema];
