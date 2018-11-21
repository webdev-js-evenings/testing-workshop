# Integration tests

- about webdev / testing
- outline
- unit tests recap

- integration tests motivation
  - unit tests for business logic
    - "testing integration of your own and third-party modules"
  - test components / modules / dependencies links
  - examples:
    - external library / dependency calls, function signatures
    - child DOM subtrees / components
    - API calls
    - file system calls
    - database calls
    - logging / tracking ?

- 90's books definitions
  - big bang approach
  - top-down (gradually un-mock more and more components)
  - bottom-up
  - sandwich (top-down + bottom-up)

- fowler's definitions and narrow vs broad integration tests

- best practices
  - separate unit / integration (and know the difference!)
  - integrate into ci

- snapshots demo
  - shallow vs mount
  - travis config

- cypress demo


- concl
  - how to connect to backend for e2e tests?
    - use fake api service like Apiary
    - dockerized fake backend
    - requests to real backend on testing/production
  - what approach to integration tests should we take (common sense again)

- teaser for next week
  - more complex Cypress tests
  - adding Cypress to CI
  - automated E2E testing fails / history / future
  - user testing sessions

- resources
  - https://martinfowler.com/bliki/IntegrationTest.html
  - https://www.youtube.com/playlist?list=PLZ66c9_z3umNSrKSb5cmpxdXZcIPNvKGw