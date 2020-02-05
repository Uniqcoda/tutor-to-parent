import gql from 'graphql-tag';

export const FETCH_REQUEST_QUERY = gql`
{
  getTutorRequests {
    id
    userId
    childFullName
    childAge
    childGender
    childClass
    subjects
    tutorGender
    location
    createdAt
  }
}
`;
