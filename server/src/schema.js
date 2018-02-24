'use strict';

const schema = `
  type User {
    id: ID!
    email: String!
    name: String!
    imageUrl: String!
    createdAt: String!
  }

  type UserAuth {
    user: User!
    token: String!
  }

  type Event {
    id: ID!
    host: User!
    title: String!
    image: String
    tags: [String]!
    description: String
    location: GeoPoint!
    address: Address!
    locationDetails: String
    eventTimestampStart: String!
    eventTimestampEnd: String!
    createdAt: String!
  }

  type GeoPoint {
    lat: Int!
    lon: Int!
  }

  type Address {
    houseNumber: Int!
    streetName: String!
    townName: String!
    state: StateType!
    zipCode: Int!
  }

  enum StateType {
    AL
    AK
    AZ
    AR
    CA
    CO
    CT
  	DE
    FL
  	GA
  	HI
    ID
  	IL
  	IN
  	IA
  	KS
    KY
    LA
    ME
  	MD
  	MA
  	MI
    MN
  	MS
  	MO
    MT
  	NE
    NV
  	NH
  	NJ
    NM
    NY
  	NC
  	ND
    OH
  	OK
  	OR
  	PA
    RI
    SC
    SD
  	TN
  	TX
    UT
    VT
    VA
    WA
    WV
  	WI
  	WY
  }

  input EventInput {
    title: String!
    maxAttendees: Int
    private: Boolean!
    recurring: Boolean!
    image: String!
    tags: [String!]!
    description: String
    location: GeoPointInput!
    address: AddressInput!
    locationDetails: String
    eventTimestampStart: String!
    eventTimestampEnd: String!
  }

  input AddressInput {
    houseNumber: Int!
    streetName: String!
    townName: String!
    state: StateType!
    zipCode: Int!
  }

  input GeoPointInput {
    lat: Int!
    lon: Int!
  }

  type Query {
    searchEvents(query: String!, offset: Int, limit: Int): [Event]!
  }

  type Mutation {
    userAuth(token: String!): UserAuth!
    createEvent(event: EventInput!): Event!
  }
`;

module.exports = schema;