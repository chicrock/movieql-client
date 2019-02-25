# MovieQL Client

Client for the MovieQL API built with Apollo

## Install

### apollo and router dom

- [React-apollo](https://github.com/apollographql/react-apollo)

```bash
]$ yarn add apollo-boost react-apollo graphql-tag graphql
```

### react-helmet

```bash
]$ yarn add react-helmet styled-components styled-reset prop-types
```

### gh-pages

```bash
]$ yarn add gh-pages --dev
```

### apollo devtool

- [Apollo devtools](https://github.com/apollographql/react-apollo)

## GraphQL

### Make query with graphql-tag

## Use Hooks

### Install apollo hooks

```bash
]$ yarn add react-apollo-hooks
```

### Use apollo hooks

- Need React@^16.7+
- Doesn't run the query until is loaded when using suspend options.

```javascript
/// Doesn't use loading variable. Because suspend option make query to suspend until data is loaded
const { data, error } = useQuery(GET_DOGS, { suspend: true });
```

```javascript
/// Setup like this ApolloProvider already exists
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

<ApolloProvider client={client}>
  <ApolloHooksProvider client={client}>
    <MyRootComponent />
  </ApolloHooksProvider>
</ApolloProvider>;
```
